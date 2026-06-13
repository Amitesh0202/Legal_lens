import io
from typing import Any


def extract_text(contents: bytes, filename: str) -> str:
    """Extract plain text from PDF, DOCX, or TXT file bytes."""
    ext = filename.rsplit(".", 1)[-1].lower() if "." in filename else ""

    if ext == "pdf":
        return _extract_pdf(contents)
    elif ext in ("docx", "doc"):
        return _extract_docx(contents)
    else:
        # Plain text — try UTF-8 then latin-1
        try:
            return contents.decode("utf-8")
        except UnicodeDecodeError:
            return contents.decode("latin-1", errors="replace")


def _extract_pdf(contents: bytes) -> str:
    try:
        import fitz  # PyMuPDF

        doc = fitz.open(stream=contents, filetype="pdf")
        pages = []
        for page in doc:
            text = page.get_text()
            if text.strip():
                pages.append(text)
            else:
                # Scanned page — try OCR
                ocr_text = _ocr_page(page)
                if ocr_text.strip():
                    pages.append(ocr_text)
        doc.close()
        return "\n\n".join(pages)
    except Exception as e:
        raise RuntimeError(f"PDF extraction failed: {e}") from e


def _ocr_page(page: Any) -> str:
    try:
        import fitz

        from services.ocr import ocr_image

        mat = fitz.Matrix(2, 2)  # 2× zoom for better OCR accuracy
        pix = page.get_pixmap(matrix=mat)
        img_bytes = pix.tobytes("png")
        return ocr_image(img_bytes)
    except Exception:
        return ""


def _extract_docx(contents: bytes) -> str:
    try:
        from docx import Document

        doc = Document(io.BytesIO(contents))
        paragraphs = [p.text for p in doc.paragraphs if p.text.strip()]
        return "\n\n".join(paragraphs)
    except Exception as e:
        raise RuntimeError(f"DOCX extraction failed: {e}") from e

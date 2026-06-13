import io


def ocr_image(img_bytes: bytes) -> str:
    """Run Tesseract OCR on raw image bytes and return extracted text."""
    try:
        import pytesseract
        from PIL import Image

        image = Image.open(io.BytesIO(img_bytes))
        text = pytesseract.image_to_string(image, lang="eng")
        return str(text)
    except Exception:
        return ""

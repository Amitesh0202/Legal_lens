const translations = {
  en: {
    // Navbar
    nav: {
      analyze: "Analyze",
      laws: "Laws",
      tag: "India",
    },

    // Home
    home: {
      badge: "🇮🇳 Built for India · 73 Indian Laws",
      heroTitle: "Understand any legal document",
      heroHighlight: "before you sign it",
      heroSubtitle:
        "Upload a contract, agreement, or terms of service. LegalLens uses AI to find hidden clauses, check against Indian law, and tell you exactly what you're agreeing to — in plain English.",
      dropzoneText: "Drop your document here or",
      dropzoneClick: "click to browse",
      dropzoneHint: "PDF, DOCX, or TXT · Max 10MB",
      analyzeBtn: "Analyze Document →",
      analyzingBtn: "Analyzing document…",
      loadingHint:
        "Reading clauses, checking 73 Indian laws, identifying risks…",
      featuresTitle: "What LegalLens checks",
      docTypesTitle: "Documents we analyze",
      footer:
        "LegalLens · AI-powered legal analysis for India · Not a substitute for professional legal advice",
      features: [
        {
          icon: "🔍",
          title: "Hidden Clause Detection",
          desc: "AI finds buried terms that could hurt you",
        },
        {
          icon: "⚖️",
          title: "Indian Law Cross-Check",
          desc: "73 laws across 11 categories checked",
        },
        {
          icon: "📊",
          title: "Risk Scoring",
          desc: "Every clause rated Low to Critical",
        },
        {
          icon: "🔮",
          title: "Future Implications",
          desc: "What signing this means for you in 1-5 years",
        },
        {
          icon: "💬",
          title: "Plain English",
          desc: "No legal jargon — explained like a friend",
        },
        {
          icon: "🤝",
          title: "Negotiation Tips",
          desc: "How to push back on unfair terms",
        },
      ],
      docTypes: [
        "Employment Contracts",
        "Rental Agreements",
        "Loan Agreements",
        "Terms of Service",
        "Privacy Policies",
        "Freelance Contracts",
        "Builder-Buyer Agreements",
        "Partnership Deeds",
        "NDA / Non-Compete",
        "Insurance Policies",
        "Franchise Agreements",
        "Investment Agreements",
      ],
      errors: {
        tooLarge: "File too large. Maximum size is 10MB.",
        analysisFailed: "Analysis failed",
      },
    },

    // Results
    results: {
      backBtn: "← Analyze another document",
      riskLow: "Low Risk",
      riskMedium: "Medium Risk",
      riskHigh: "High Risk",
      riskCritical: "Critical Risk",
      verdictTitle: "Overall Verdict",
      hiddenClauses: "Hidden & Risky Clauses",
      lawCrossRef: "Law Cross-Reference",
      futureImplications: "Future Implications",
      negotiationTips: "Negotiation Tips",
      keyDates: "Key Dates",
      disclaimer:
        "LegalLens provides AI-powered analysis for informational purposes only. This is not legal advice. For important documents, always consult a qualified advocate.",
      severityLabels: {
        Low: "Low",
        Medium: "Medium",
        High: "High",
        Critical: "Critical",
      },
    },

    // Laws
    laws: {
      title: "Indian Laws Reference",
      subtitle:
        "laws across {n} categories — click any law to see key sections, contract watch-outs, and penalties. All laws sourced from",
      searchPlaceholder: "Search by law name, document type, or section...",
      allBtn: "All",
      keySections: "📌 Key Sections",
      watchFor: "🔍 What to watch for in contracts",
      penalties: "⚠️ Penalties for violation",
      officialLink: "📖 Read full text on India Code →",
      lawCount: "laws",
      categories: {
        "Financial & Banking": "Financial & Banking",
        "Contract & Civil": "Contract & Civil",
        "Property & Real Estate": "Property & Real Estate",
        "Employment & Labour": "Employment & Labour",
        "Consumer Protection": "Consumer Protection",
        "Digital & Data Privacy": "Digital & Data Privacy",
        "Criminal Law": "Criminal Law",
        "Business & Intellectual Property": "Business & Intellectual Property",
        Environment: "Environment",
      },
    },

    // ChatBot
    chat: {
      fabLabel: "Ask a lawyer",
      headerTitle: "LegalLens Assistant",
      headerSub: "Indian law · Not legal advice",
      clearTitle: "Clear chat",
      inputPlaceholder: "Describe your legal situation...",
      disclaimer:
        "Not legal advice. Consult a qualified advocate for serious matters.",
      welcome:
        "Hi! I'm LegalLens Assistant 👋\n\nDescribe your legal situation and I'll explain your rights under Indian law in plain English. You can also try one of the examples below.",
      suggestions: [
        "My employer hasn't paid salary for 2 months. What can I do?",
        "The builder is delaying possession by 2 years. What are my rights?",
        "My landlord wants to evict me without notice. Is this legal?",
        "I signed a contract with a non-compete clause. Is it enforceable?",
        "An app collected my data without proper consent. What can I do?",
        "My cheque bounced — what legal action can the other party take?",
      ],
    },
  },

  hi: {
    nav: {
      analyze: "विश्लेषण",
      laws: "कानून",
      tag: "भारत",
    },

    home: {
      badge: "🇮🇳 भारत के लिए बनाया गया · 73 भारतीय कानून",
      heroTitle: "हस्ताक्षर करने से पहले कोई भी",
      heroHighlight: "कानूनी दस्तावेज़ समझें",
      heroSubtitle:
        "कोई भी अनुबंध, समझौता या सेवा की शर्तें अपलोड करें। LegalLens AI की मदद से छुपी हुई शर्तें खोजता है, भारतीय कानून के अनुसार जाँचता है, और सरल भाषा में बताता है कि आप क्या मान रहे हैं।",
      dropzoneText: "यहाँ अपना दस्तावेज़ छोड़ें या",
      dropzoneClick: "ब्राउज़ करने के लिए क्लिक करें",
      dropzoneHint: "PDF, DOCX, या TXT · अधिकतम 10MB",
      analyzeBtn: "दस्तावेज़ विश्लेषण करें →",
      analyzingBtn: "विश्लेषण हो रहा है…",
      loadingHint:
        "शर्तें पढ़ी जा रही हैं, 73 भारतीय कानूनों की जाँच हो रही है…",
      featuresTitle: "LegalLens क्या जाँचता है",
      docTypesTitle: "हम किन दस्तावेज़ों का विश्लेषण करते हैं",
      footer:
        "LegalLens · भारत के लिए AI-आधारित कानूनी विश्लेषण · पेशेवर कानूनी सलाह का विकल्प नहीं",
      features: [
        {
          icon: "🔍",
          title: "छुपी शर्त खोज",
          desc: "AI उन शर्तों को खोजता है जो आपको नुकसान पहुँचा सकती हैं",
        },
        {
          icon: "⚖️",
          title: "भारतीय कानून जाँच",
          desc: "11 श्रेणियों में 73 कानूनों की जाँच",
        },
        {
          icon: "📊",
          title: "जोखिम स्कोरिंग",
          desc: "हर शर्त को Low से Critical तक रेटिंग",
        },
        {
          icon: "🔮",
          title: "भविष्य के प्रभाव",
          desc: "हस्ताक्षर के बाद 1-5 साल में क्या हो सकता है",
        },
        {
          icon: "💬",
          title: "सरल भाषा",
          desc: "कानूनी शब्दजाल नहीं — दोस्त की तरह समझाया गया",
        },
        {
          icon: "🤝",
          title: "बातचीत के सुझाव",
          desc: "अनुचित शर्तों पर आपत्ति कैसे करें",
        },
      ],
      docTypes: [
        "रोजगार अनुबंध",
        "किराया समझौता",
        "ऋण समझौता",
        "सेवा की शर्तें",
        "गोपनीयता नीति",
        "फ्रीलांस अनुबंध",
        "बिल्डर-खरीदार समझौता",
        "साझेदारी विलेख",
        "NDA / गैर-प्रतिस्पर्धा",
        "बीमा पॉलिसी",
        "फ्रेंचाइज़ समझौता",
        "निवेश समझौता",
      ],
      errors: {
        tooLarge: "फ़ाइल बहुत बड़ी है। अधिकतम आकार 10MB है।",
        analysisFailed: "विश्लेषण विफल",
      },
    },

    results: {
      backBtn: "← दूसरा दस्तावेज़ विश्लेषण करें",
      riskLow: "कम जोखिम",
      riskMedium: "मध्यम जोखिम",
      riskHigh: "उच्च जोखिम",
      riskCritical: "गंभीर जोखिम",
      verdictTitle: "कुल फैसला",
      hiddenClauses: "छुपी और जोखिम भरी शर्तें",
      lawCrossRef: "कानून संदर्भ",
      futureImplications: "भविष्य के प्रभाव",
      negotiationTips: "बातचीत के सुझाव",
      keyDates: "महत्वपूर्ण तिथियाँ",
      disclaimer:
        "LegalLens केवल जानकारी के उद्देश्य से AI-आधारित विश्लेषण प्रदान करता है। यह कानूनी सलाह नहीं है। महत्वपूर्ण दस्तावेज़ों के लिए हमेशा एक योग्य वकील से परामर्श करें।",
      severityLabels: {
        Low: "कम",
        Medium: "मध्यम",
        High: "उच्च",
        Critical: "गंभीर",
      },
    },

    laws: {
      title: "भारतीय कानून संदर्भ",
      subtitle:
        "श्रेणियों में कानून — किसी भी कानून पर क्लिक करें। सभी कानून India Code से",
      searchPlaceholder: "कानून का नाम, दस्तावेज़ प्रकार, या धारा खोजें...",
      allBtn: "सभी",
      keySections: "📌 मुख्य धाराएँ",
      watchFor: "🔍 अनुबंध में क्या देखें",
      penalties: "⚠️ उल्लंघन पर दंड",
      officialLink: "📖 India Code पर पूरा पाठ पढ़ें →",
      lawCount: "कानून",
      categories: {
        "Financial & Banking": "वित्त एवं बैंकिंग",
        "Contract & Civil": "अनुबंध एवं नागरिक",
        "Property & Real Estate": "संपत्ति एवं रियल एस्टेट",
        "Employment & Labour": "रोजगार एवं श्रम",
        "Consumer Protection": "उपभोक्ता संरक्षण",
        "Digital & Data Privacy": "डिजिटल एवं डेटा गोपनीयता",
        "Criminal Law": "आपराधिक कानून",
        "Business & Intellectual Property": "व्यापार एवं बौद्धिक संपदा",
        Environment: "पर्यावरण",
      },
    },

    chat: {
      fabLabel: "वकील से पूछें",
      headerTitle: "LegalLens सहायक",
      headerSub: "भारतीय कानून · कानूनी सलाह नहीं",
      clearTitle: "चैट साफ करें",
      inputPlaceholder: "अपनी कानूनी स्थिति बताएं...",
      disclaimer:
        "कानूनी सलाह नहीं। गंभीर मामलों के लिए योग्य वकील से परामर्श करें।",
      welcome:
        "नमस्ते! मैं LegalLens सहायक हूँ 👋\n\nअपनी कानूनी स्थिति बताएं और मैं सरल भाषा में आपके अधिकार समझाऊँगा।",
      suggestions: [
        "मेरे नियोक्ता ने 2 महीने से वेतन नहीं दिया। मैं क्या कर सकता हूँ?",
        "बिल्डर 2 साल से कब्जा देरी कर रहा है। मेरे क्या अधिकार हैं?",
        "मेरा मकान मालिक बिना नोटिस के मुझे निकालना चाहता है। क्या यह कानूनी है?",
        "मैंने नॉन-कॉम्पीट क्लॉज वाला अनुबंध साइन किया। क्या यह लागू होगा?",
        "एक ऐप ने बिना सहमति के मेरा डेटा लिया। मैं क्या कर सकता हूँ?",
        "मेरा चेक बाउंस हो गया — दूसरा पक्ष क्या कानूनी कार्रवाई कर सकता है?",
      ],
    },
  },

  te: {
    nav: {
      analyze: "విశ్లేషణ",
      laws: "చట్టాలు",
      tag: "భారతదేశం",
    },

    home: {
      badge: "🇮🇳 భారతదేశం కోసం నిర్మించబడింది · 73 భారతీయ చట్టాలు",
      heroTitle: "సంతకం చేయడానికి ముందు ఏదైనా",
      heroHighlight: "చట్టపరమైన పత్రాన్ని అర్థం చేసుకోండి",
      heroSubtitle:
        "ఏదైనా కాంట్రాక్ట్, ఒప్పందం లేదా సేవా నిబంధనలను అప్‌లోడ్ చేయండి. LegalLens AI సహాయంతో దాచిన నిబంధనలను కనుగొంటుంది, భారతీయ చట్టానికి వ్యతిరేకంగా తనిఖీ చేస్తుంది.",
      dropzoneText: "మీ పత్రాన్ని ఇక్కడ వదలండి లేదా",
      dropzoneClick: "బ్రౌజ్ చేయడానికి క్లిక్ చేయండి",
      dropzoneHint: "PDF, DOCX, లేదా TXT · గరిష్టం 10MB",
      analyzeBtn: "పత్రాన్ని విశ్లేషించండి →",
      analyzingBtn: "విశ్లేషిస్తోంది…",
      loadingHint: "నిబంధనలు చదువుతోంది, 73 భారతీయ చట్టాలు తనిఖీ చేస్తోంది…",
      featuresTitle: "LegalLens ఏమి తనిఖీ చేస్తుంది",
      docTypesTitle: "మేము విశ్లేషించే పత్రాలు",
      footer:
        "LegalLens · భారతదేశం కోసం AI-ఆధారిత చట్టపరమైన విశ్లేషణ · వృత్తిపరమైన చట్టపరమైన సలహాకు ప్రత్యామ్నాయం కాదు",
      features: [
        {
          icon: "🔍",
          title: "దాచిన నిబంధన గుర్తింపు",
          desc: "మీకు హాని చేసే నిబంధనలను AI కనుగొంటుంది",
        },
        {
          icon: "⚖️",
          title: "భారతీయ చట్టం తనిఖీ",
          desc: "11 వర్గాలలో 73 చట్టాలు తనిఖీ చేయబడ్డాయి",
        },
        {
          icon: "📊",
          title: "రిస్క్ స్కోరింగ్",
          desc: "ప్రతి నిబంధన Low నుండి Critical వరకు రేట్ చేయబడింది",
        },
        {
          icon: "🔮",
          title: "భవిష్యత్ పరిణామాలు",
          desc: "సంతకం చేసిన తర్వాత 1-5 సంవత్సరాలలో ఏమి జరుగుతుందో",
        },
        {
          icon: "💬",
          title: "సాధారణ భాష",
          desc: "చట్టపరమైన పదజాలం లేదు — స్నేహితుడిలా వివరించబడింది",
        },
        {
          icon: "🤝",
          title: "చర్చా చిట్కాలు",
          desc: "అన్యాయమైన నిబంధనలను ఎలా తిరస్కరించాలి",
        },
      ],
      docTypes: [
        "ఉద్యోగ కాంట్రాక్టులు",
        "అద్దె ఒప్పందాలు",
        "రుణ ఒప్పందాలు",
        "సేవా నిబంధనలు",
        "గోప్యతా విధానాలు",
        "ఫ్రీలాన్స్ కాంట్రాక్టులు",
        "బిల్డర్-కొనుగోలుదారు ఒప్పందాలు",
        "భాగస్వామ్య పత్రాలు",
        "NDA / నాన్-కాంపీట్",
        "బీమా పాలసీలు",
        "ఫ్రాంచైజ్ ఒప్పందాలు",
        "పెట్టుబడి ఒప్పందాలు",
      ],
      errors: {
        tooLarge: "ఫైల్ చాలా పెద్దది. గరిష్ట పరిమాణం 10MB.",
        analysisFailed: "విశ్లేషణ విఫలమైంది",
      },
    },

    results: {
      backBtn: "← మరొక పత్రాన్ని విశ్లేషించండి",
      riskLow: "తక్కువ ప్రమాదం",
      riskMedium: "మధ్యస్థ ప్రమాదం",
      riskHigh: "అధిక ప్రమాదం",
      riskCritical: "తీవ్రమైన ప్రమాదం",
      verdictTitle: "మొత్తం నిర్ణయం",
      hiddenClauses: "దాచిన & ప్రమాదకర నిబంధనలు",
      lawCrossRef: "చట్టం సూచన",
      futureImplications: "భవిష్యత్ పరిణామాలు",
      negotiationTips: "చర్చా చిట్కాలు",
      keyDates: "ముఖ్యమైన తేదీలు",
      disclaimer:
        "LegalLens సమాచార ప్రయోజనాల కోసం మాత్రమే AI-ఆధారిత విశ్లేషణ అందిస్తుంది. ఇది చట్టపరమైన సలహా కాదు.",
      severityLabels: {
        Low: "తక్కువ",
        Medium: "మధ్యస్థ",
        High: "అధిక",
        Critical: "తీవ్రమైన",
      },
    },

    laws: {
      title: "భారతీయ చట్టాల సూచన",
      subtitle:
        "వర్గాలలో చట్టాలు — ఏదైనా చట్టంపై క్లిక్ చేయండి. అన్ని చట్టాలు India Code నుండి",
      searchPlaceholder: "చట్టం పేరు, పత్రం రకం లేదా విభాగం వెతకండి...",
      allBtn: "అన్నీ",
      keySections: "📌 ముఖ్య విభాగాలు",
      watchFor: "🔍 కాంట్రాక్టులో ఏమి చూడాలి",
      penalties: "⚠️ ఉల్లంఘనకు శిక్షలు",
      officialLink: "📖 India Code లో పూర్తి పాఠం చదవండి →",
      lawCount: "చట్టాలు",
      categories: {
        "Financial & Banking": "ఆర్థిక & బ్యాంకింగ్",
        "Contract & Civil": "కాంట్రాక్ట్ & సివిల్",
        "Property & Real Estate": "ఆస్తి & రియల్ ఎస్టేట్",
        "Employment & Labour": "ఉద్యోగం & కార్మిక",
        "Consumer Protection": "వినియోగదారు రక్షణ",
        "Digital & Data Privacy": "డిజిటల్ & డేటా గోప్యత",
        "Criminal Law": "నేర చట్టం",
        "Business & Intellectual Property": "వ్యాపారం & మేధో సంపత్తి",
        Environment: "పర్యావరణం",
      },
    },

    chat: {
      fabLabel: "న్యాయవాదిని అడగండి",
      headerTitle: "LegalLens సహాయకుడు",
      headerSub: "భారతీయ చట్టం · చట్టపరమైన సలహా కాదు",
      clearTitle: "చాట్ క్లియర్ చేయండి",
      inputPlaceholder: "మీ చట్టపరమైన పరిస్థితిని వివరించండి...",
      disclaimer:
        "చట్టపరమైన సలహా కాదు. తీవ్రమైన విషయాల కోసం న్యాయవాదిని సంప్రదించండి.",
      welcome:
        "నమస్కారం! నేను LegalLens సహాయకుడిని 👋\n\nమీ చట్టపరమైన పరిస్థితిని వివరించండి, నేను సాధారణ భాషలో మీ హక్కులను వివరిస్తాను.",
      suggestions: [
        "నా యజమాని 2 నెలలుగా జీతం చెల్లించలేదు. నేను ఏమి చేయగలను?",
        "బిల్డర్ 2 సంవత్సరాలు ఆలస్యం చేస్తున్నాడు. నా హక్కులేమిటి?",
        "నా యజమాని నోటీసు లేకుండా వెళ్ళిపొమ్మని చెప్తున్నాడు. ఇది చట్టపరమైనదా?",
        "నేను నాన్-కాంపీట్ నిబంధనతో కాంట్రాక్ట్ సంతకం చేశాను. అది అమలు చేయబడుతుందా?",
        "యాప్ సరైన అనుమతి లేకుండా నా డేటా సేకరించింది. నేను ఏమి చేయగలను?",
        "నా చెక్ బౌన్స్ అయింది — మరొక వైపు ఏ చట్టపరమైన చర్య తీసుకోగలరు?",
      ],
    },
  },
};

export default translations;

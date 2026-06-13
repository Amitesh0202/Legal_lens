// Law names are kept in English (standard Indian legal practice).
// Descriptions, governs, watchFor, penalty are translated.

const LAWS = [
  {
    category: "Financial & Banking",
    color: "#1B5E20",
    icon: "🏦",
    laws: [
      {
        name: "Reserve Bank of India Act, 1934",
        year: 1934,
        short: {
          en: "Governs India's central bank and regulates interest rates, money supply, and banking operations.",
          hi: "भारत के केंद्रीय बैंक को नियंत्रित करता है और ब्याज दरों, धन आपूर्ति और बैंकिंग परिचालन को नियंत्रित करता है।",
          te: "భారతదేశం యొక్క కేంద్ర బ్యాంకును నియంత్రిస్తుంది మరియు వడ్డీ రేట్లు, ద్రవ్య సరఫరా మరియు బ్యాంకింగ్ కార్యకలాపాలను నియంత్రిస్తుంది.",
        },
        governs: {
          en: ["Loan agreements", "Banking contracts", "Credit agreements"],
          hi: ["ऋण समझौते", "बैंकिंग अनुबंध", "क्रेडिट समझौते"],
          te: [
            "రుణ ఒప్పందాలు",
            "బ్యాంకింగ్ కాంట్రాక్టులు",
            "క్రెడిట్ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.17",
            title: "Business RBI may transact",
            detail:
              "Defines what financial operations the RBI can conduct — sets the foundation for all bank regulation.",
          },
          {
            section: "S.21",
            title: "RBI as banker to Government",
            detail:
              "RBI manages government accounts — relevant in contracts involving government-backed financial schemes.",
          },
          {
            section: "S.42",
            title: "Cash Reserve Ratio",
            detail:
              "Banks must maintain a minimum cash reserve. Contracts that promise interest rates conflicting with CRR-linked rates may be unenforceable.",
          },
        ],
        watchFor: {
          en: "Any lender charging interest rates beyond RBI-permitted limits violates this act. Watch for clauses that allow 'variable rates at lender's discretion' — these can be challenged.",
          hi: "RBI द्वारा अनुमत सीमा से अधिक ब्याज दर वसूलने वाला कोई भी ऋणदाता इस अधिनियम का उल्लंघन करता है। ऐसी शर्तों पर ध्यान दें जो 'ऋणदाता के विवेक पर परिवर्तनीय दरें' की अनुमति देती हैं।",
          te: "RBI అనుమతించిన పరిమితులకు మించి వడ్డీ రేట్లు వసూలు చేసే రుణదాత ఈ చట్టాన్ని ఉల్లంఘిస్తాడు. 'రుణదాత విచక్షణ మేరకు వేరియబుల్ రేట్లు' అనే నిబంధనలపై జాగ్రత్తగా ఉండండి.",
        },
        penalty: {
          en: "Violations attract fines and cancellation of banking licence by RBI.",
          hi: "उल्लंघन पर RBI द्वारा जुर्माना और बैंकिंग लाइसेंस रद्द किया जा सकता है।",
          te: "ఉల్లంఘనలకు జరిమానాలు మరియు RBI చేత బ్యాంకింగ్ లైసెన్స్ రద్దు వర్తిస్తాయి.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1340",
      },
      {
        name: "Banking Regulation Act, 1949",
        year: 1949,
        short: {
          en: "Regulates how commercial banks conduct business, protecting depositors and borrowers.",
          hi: "वाणिज्यिक बैंकों के व्यापार संचालन को नियंत्रित करता है, जमाकर्ताओं और उधारकर्ताओं की रक्षा करता है।",
          te: "వాణిజ్య బ్యాంకులు వ్యాపారం నిర్వహించే విధానాన్ని నియంత్రిస్తుంది, డిపాజిటర్లు మరియు రుణగ్రహీతలను రక్షిస్తుంది.",
        },
        governs: {
          en: [
            "Bank account agreements",
            "Fixed deposit contracts",
            "Loan agreements",
          ],
          hi: ["बैंक खाता समझौते", "सावधि जमा अनुबंध", "ऋण समझौते"],
          te: [
            "బ్యాంక్ ఖాతా ఒప్పందాలు",
            "స్థిర డిపాజిట్ కాంట్రాక్టులు",
            "రుణ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.6",
            title: "Forms of business banks may carry on",
            detail:
              "Banks cannot engage in businesses outside the permitted scope.",
          },
          {
            section: "S.22",
            title: "Licensing of banks",
            detail:
              "Only licensed banks can accept deposits — protects you from unlicensed entities.",
          },
          {
            section: "S.35A",
            title: "Power of RBI to give directions",
            detail:
              "RBI can override any bank policy — bank contracts cannot override RBI directives.",
          },
        ],
        watchFor: {
          en: "Banks cannot waive regulatory obligations through contract clauses. Any term that says 'bank may change terms without notice' is subject to RBI override.",
          hi: "बैंक अनुबंध शर्तों के माध्यम से नियामक दायित्वों को माफ नहीं कर सकते। 'बैंक बिना सूचना के शर्तें बदल सकता है' जैसी कोई भी शर्त RBI के अधिकार के अधीन है।",
          te: "బ్యాంకులు కాంట్రాక్ట్ నిబంధనల ద్వారా నియంత్రణ బాధ్యతలను మినహాయించలేవు. 'నోటీసు లేకుండా బ్యాంకు నిబంధనలు మార్చవచ్చు' అనే నిబంధన RBI అధికారానికి లోబడి ఉంటుంది.",
        },
        penalty: {
          en: "Banks can face licence cancellation and fines up to ₹5 lakh per violation.",
          hi: "बैंकों को लाइसेंस रद्द और प्रति उल्लंघन ₹5 लाख तक जुर्माने का सामना करना पड़ सकता है।",
          te: "బ్యాంకులకు లైసెన్స్ రద్దు మరియు ప్రతి ఉల్లంఘనకు ₹5 లక్షల వరకు జరిమానాలు వర్తిస్తాయి.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1353",
      },
      {
        name: "FEMA (Foreign Exchange Management Act), 1999",
        year: 1999,
        short: {
          en: "Controls all foreign currency transactions and cross-border money transfers.",
          hi: "सभी विदेशी मुद्रा लेनदेन और सीमा पार धन हस्तांतरण को नियंत्रित करता है।",
          te: "అన్ని విదేశీ కరెన్సీ లావాదేవీలు మరియు సరిహద్దు దాటిన డబ్బు బదిలీలను నియంత్రిస్తుంది.",
        },
        governs: {
          en: [
            "International contracts",
            "Foreign investment agreements",
            "Export/import contracts",
          ],
          hi: [
            "अंतर्राष्ट्रीय अनुबंध",
            "विदेशी निवेश समझौते",
            "निर्यात/आयात अनुबंध",
          ],
          te: [
            "అంతర్జాతీయ కాంట్రాక్టులు",
            "విదేశీ పెట్టుబడి ఒప్పందాలు",
            "ఎగుమతి/దిగుమతి కాంట్రాక్టులు",
          ],
        },
        keySections: [
          {
            section: "S.3",
            title: "Dealing in foreign exchange",
            detail:
              "No person shall deal in foreign exchange without RBI authorisation.",
          },
          {
            section: "S.6",
            title: "Capital account transactions",
            detail: "Regulates investments and transfers abroad.",
          },
          {
            section: "S.13",
            title: "Penalties",
            detail:
              "Up to 3 times the amount involved or ₹2 lakh, whichever is higher.",
          },
        ],
        watchFor: {
          en: "Clauses requiring payment in foreign currency without RBI permission, or contracts routing Indian income abroad as 'royalties' without proper approvals.",
          hi: "RBI अनुमति के बिना विदेशी मुद्रा में भुगतान की आवश्यकता वाली शर्तें, या 'रॉयल्टी' के रूप में भारतीय आय को विदेश भेजने वाले अनुबंध।",
          te: "RBI అనుమతి లేకుండా విదేశీ కరెన్సీలో చెల్లింపు అవసరమయ్యే నిబంధనలు, లేదా 'రాయల్టీ'గా భారతీయ ఆదాయాన్ని విదేశాలకు పంపే కాంట్రాక్టులు.",
        },
        penalty: {
          en: "Up to 3x the amount involved or ₹2 lakh (whichever is higher) + confiscation of funds.",
          hi: "संबंधित राशि का 3 गुना या ₹2 लाख (जो भी अधिक हो) + धन की जब्ती।",
          te: "సంబంధిత మొత్తంలో 3 రెట్లు లేదా ₹2 లక్షలు (ఏది అధికమైతే అది) + నిధుల జప్తు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1357",
      },
      {
        name: "SEBI Act, 1992",
        year: 1992,
        short: {
          en: "Protects investors and regulates India's securities markets, stock exchanges, and mutual funds.",
          hi: "निवेशकों की रक्षा करता है और भारत के प्रतिभूति बाजारों, शेयर बाजारों और म्यूचुअल फंड को नियंत्रित करता है।",
          te: "పెట్టుబడిదారులను రక్షిస్తుంది మరియు భారతదేశం యొక్క సెక్యూరిటీల మార్కెట్లు, స్టాక్ ఎక్స్ఛేంజులు మరియు మ్యూచువల్ ఫండ్లను నియంత్రిస్తుంది.",
        },
        governs: {
          en: [
            "Investment agreements",
            "Broker contracts",
            "Mutual fund terms",
          ],
          hi: ["निवेश समझौते", "ब्रोकर अनुबंध", "म्यूचुअल फंड शर्तें"],
          te: [
            "పెట్టుబడి ఒప్పందాలు",
            "బ్రోకర్ కాంట్రాక్టులు",
            "మ్యూచువల్ ఫండ్ నిబంధనలు",
          ],
        },
        keySections: [
          {
            section: "S.11",
            title: "Functions of SEBI",
            detail:
              "SEBI can regulate stock exchanges and protect investor interests.",
          },
          {
            section: "S.12A",
            title: "Prohibition of manipulative practices",
            detail:
              "Clauses promising guaranteed returns on securities are illegal.",
          },
          {
            section: "S.15G",
            title: "Penalty for insider trading",
            detail: "₹25 crore or 3x profits, whichever is higher.",
          },
        ],
        watchFor: {
          en: "Clauses promising 'guaranteed returns' on securities are illegal under SEBI. Watch for unregistered portfolio managers requiring you to sign contracts.",
          hi: "SEBI के तहत प्रतिभूतियों पर 'गारंटीड रिटर्न' का वादा करने वाली शर्तें अवैध हैं। अपंजीकृत पोर्टफोलियो प्रबंधकों से सावधान रहें।",
          te: "సెక్యూరిటీలపై 'హామీ రాబడి' వాగ్దానం చేసే నిబంధనలు SEBI కింద చట్టవిరుద్ధం. నమోదు కాని పోర్ట్‌ఫోలియో మేనేజర్ల పట్ల జాగ్రత్తగా ఉండండి.",
        },
        penalty: {
          en: "Up to ₹25 crore or 3x profits for serious violations. Criminal imprisonment in fraud cases.",
          hi: "गंभीर उल्लंघन के लिए ₹25 करोड़ या 3 गुना लाभ तक। धोखाधड़ी के मामलों में आपराधिक कारावास।",
          te: "తీవ్రమైన ఉల్లంఘనలకు ₹25 కోట్లు లేదా 3 రెట్ల లాభాలు. మోసం కేసులలో నేర జైలు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1666",
      },
      {
        name: "Insolvency and Bankruptcy Code (IBC), 2016",
        year: 2016,
        short: {
          en: "Governs debt recovery and insolvency proceedings for both individuals and companies.",
          hi: "व्यक्तियों और कंपनियों दोनों के लिए ऋण वसूली और दिवालियापन कार्यवाही को नियंत्रित करता है।",
          te: "వ్యక్తులు మరియు కంపెనీలు రెండింటికీ అప్పు వసూలు మరియు దివాలా చర్యలను నియంత్రిస్తుంది.",
        },
        governs: {
          en: [
            "Loan agreements",
            "Business contracts",
            "Debt restructuring documents",
          ],
          hi: ["ऋण समझौते", "व्यापार अनुबंध", "ऋण पुनर्गठन दस्तावेज"],
          te: [
            "రుణ ఒప్పందాలు",
            "వ్యాపార కాంట్రాక్టులు",
            "అప్పు పునర్వ్యవస్థీకరణ పత్రాలు",
          ],
        },
        keySections: [
          {
            section: "S.7",
            title: "Initiation by financial creditor",
            detail:
              "A creditor can drag a debtor to NCLT if they default on ₹1 crore or more.",
          },
          {
            section: "S.14",
            title: "Moratorium",
            detail:
              "Once insolvency begins, all proceedings against the debtor are frozen.",
          },
          {
            section: "S.96",
            title: "Interim moratorium for individuals",
            detail:
              "Individuals can also get protection under IBC from creditor harassment.",
          },
        ],
        watchFor: {
          en: "Loan contracts allowing lenders to bypass IBC and seize assets directly may be challenged. Watch for personal guarantee clauses.",
          hi: "ऋण अनुबंध जो ऋणदाताओं को IBC को दरकिनार करने और सीधे संपत्ति जब्त करने की अनुमति देते हैं, चुनौती दी जा सकती है।",
          te: "రుణదాతలను IBC దాటి నేరుగా ఆస్తులను స్వాధీనపరచుకోవడానికి అనుమతించే రుణ కాంట్రాక్టులు సవాలు చేయవచ్చు.",
        },
        penalty: {
          en: "Non-compliance with IBC orders: up to ₹1 lakh/day. Criminal liability for fraudulent transactions.",
          hi: "IBC आदेशों का पालन न करना: ₹1 लाख/दिन तक। धोखाधड़ी के लेनदेन के लिए आपराधिक दायित्व।",
          te: "IBC ఆదేశాలకు సమ్మతి లేకపోవడం: రోజుకు ₹1 లక్ష వరకు. మోసపూరిత లావాదేవీలకు నేర బాధ్యత.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1546",
      },
      {
        name: "SARFAESI Act, 2002",
        year: 2002,
        short: {
          en: "Allows banks to recover bad loans by seizing and selling collateral WITHOUT going to court.",
          hi: "बैंकों को बिना अदालत जाए गिरवी रखी संपत्ति जब्त करके और बेचकर खराब ऋण वसूलने की अनुमति देता है।",
          te: "బ్యాంకులు న్యాయస్థానానికి వెళ్ళకుండా తాకట్టు ఆస్తిని స్వాధీనపరచుకుని అమ్మడం ద్వారా చెడు రుణాలు వసూలు చేసుకోవడానికి అనుమతిస్తుంది.",
        },
        governs: {
          en: [
            "Home loan agreements",
            "Business loan agreements",
            "Mortgage deeds",
          ],
          hi: ["गृह ऋण समझौते", "व्यापार ऋण समझौते", "बंधक विलेख"],
          te: [
            "గృహ రుణ ఒప్పందాలు",
            "వ్యాపార రుణ ఒప్పందాలు",
            "తనఖా దస్తావేజులు",
          ],
        },
        keySections: [
          {
            section: "S.13(2)",
            title: "60-day notice",
            detail:
              "Bank must give 60 days notice before taking action — after that, they can act without court order.",
          },
          {
            section: "S.13(4)",
            title: "Measures after notice period",
            detail:
              "Bank can take possession, manage, and sell secured assets without court intervention.",
          },
          {
            section: "S.17",
            title: "Right to appeal",
            detail:
              "Borrower can appeal to the Debt Recovery Tribunal within 30 days.",
          },
        ],
        watchFor: {
          en: "A single default can lead to asset seizure in 60 days. Clauses waiving your right to the 60-day notice or DRT appeal are void.",
          hi: "एक चूक से 60 दिनों में संपत्ति जब्त हो सकती है। 60 दिन की नोटिस या DRT अपील के अधिकार को माफ करने वाली शर्तें शून्य हैं।",
          te: "ఒక్క ఎగవేత 60 రోజులలో ఆస్తి జప్తుకు దారి తీయవచ్చు. 60-రోజుల నోటీసు లేదా DRT అప్పీల్ హక్కును మినహాయించే నిబంధనలు చెల్లవు.",
        },
        penalty: {
          en: "For borrower obstruction: imprisonment up to 1 year + fine.",
          hi: "ऋणकर्ता के अवरोध के लिए: 1 साल तक कारावास + जुर्माना।",
          te: "రుణగ్రహీత అడ్డంకికి: 1 సంవత్సరం వరకు జైలు + జరిమానా.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1355",
      },
      {
        name: "Prevention of Money Laundering Act (PMLA), 2002",
        year: 2002,
        short: {
          en: "Criminalises money laundering and requires mandatory KYC for financial transactions.",
          hi: "मनी लॉन्ड्रिंग को आपराधिक बनाता है और वित्तीय लेनदेन के लिए अनिवार्य KYC की आवश्यकता है।",
          te: "మనీ లాండరింగ్‌ను నేరంగా మారుస్తుంది మరియు ఆర్థిక లావాదేవీలకు తప్పనిసరి KYC అవసరం.",
        },
        governs: {
          en: [
            "Bank account agreements",
            "Investment contracts",
            "Real estate purchase agreements",
          ],
          hi: ["बैंक खाता समझौते", "निवेश अनुबंध", "रियल एस्टेट खरीद समझौते"],
          te: [
            "బ్యాంక్ ఖాతా ఒప్పందాలు",
            "పెట్టుబడి కాంట్రాక్టులు",
            "రియల్ ఎస్టేట్ కొనుగోలు ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.3",
            title: "Offence of money laundering",
            detail:
              "Anyone involved in a transaction with proceeds of crime is guilty — even if they didn't commit the crime.",
          },
          {
            section: "S.12",
            title: "Obligations of banking companies",
            detail:
              "Banks must verify identity (KYC), keep records for 5 years, and report suspicious transactions.",
          },
          {
            section: "S.19",
            title: "Power to arrest",
            detail:
              "ED officers can arrest without warrant if they believe a PMLA offence is being committed.",
          },
        ],
        watchFor: {
          en: "Contracts obscuring the source of funds, splitting large transactions to avoid reporting, or using shell companies can expose all signatories to PMLA prosecution.",
          hi: "धन के स्रोत को छुपाने, रिपोर्टिंग से बचने के लिए बड़े लेनदेन को विभाजित करने, या शेल कंपनियों का उपयोग करने वाले अनुबंध सभी हस्ताक्षरकर्ताओं को PMLA अभियोजन के लिए उजागर कर सकते हैं।",
          te: "నిధుల మూలాన్ని దాచిపెట్టే, నివేదించడాన్ని నివారించడానికి పెద్ద లావాదేవీలను విభజించే కాంట్రాక్టులు అన్ని సంతకందారులను PMLA విచారణకు గురిచేస్తాయి.",
        },
        penalty: {
          en: "3 to 7 years imprisonment + fine equal to the laundered amount. Property attachment and confiscation.",
          hi: "3 से 7 साल कारावास + लॉन्डर्ड राशि के बराबर जुर्माना। संपत्ति कुर्की और जब्ती।",
          te: "3 నుండి 7 సంవత్సరాల జైలు + లాండర్ చేసిన మొత్తానికి సమానమైన జరిమానా. ఆస్తి జతపరచడం మరియు జప్తు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1423",
      },
      {
        name: "Negotiable Instruments Act, 1881",
        year: 1881,
        short: {
          en: "Governs cheques, promissory notes, and bills of exchange — cheque bounce is a criminal offence.",
          hi: "चेक, प्रॉमिसरी नोट और बिल ऑफ एक्सचेंज को नियंत्रित करता है — चेक बाउंस एक आपराधिक अपराध है।",
          te: "చెక్కులు, ప్రామిసరీ నోట్లు మరియు బిల్స్ ఆఫ్ ఎక్స్ఛేంజ్‌లను నియంత్రిస్తుంది — చెక్ బౌన్స్ నేర నిందగా పరిగణించబడుతుంది.",
        },
        governs: {
          en: [
            "Loan agreements (post-dated cheques)",
            "Business contracts",
            "Rental agreements (security cheques)",
          ],
          hi: [
            "ऋण समझौते (पोस्ट-डेटेड चेक)",
            "व्यापार अनुबंध",
            "किराया समझौते (सुरक्षा चेक)",
          ],
          te: [
            "రుణ ఒప్పందాలు (పోస్ట్-డేటెడ్ చెక్కులు)",
            "వ్యాపార కాంట్రాక్టులు",
            "అద్దె ఒప్పందాలు (భద్రత చెక్కులు)",
          ],
        },
        keySections: [
          {
            section: "S.138",
            title: "Dishonour of cheque",
            detail:
              "Bouncing a cheque is a CRIMINAL offence — imprisonment up to 2 years or fine up to 2x cheque amount.",
          },
          {
            section: "S.139",
            title: "Presumption",
            detail:
              "Court presumes the cheque was issued for a legal debt — burden is on the accused to prove otherwise.",
          },
          {
            section: "S.142",
            title: "Cognizance of offences",
            detail:
              "Complaint must be filed within 30 days of dishonour notice.",
          },
        ],
        watchFor: {
          en: "Contracts requiring you to issue blank or post-dated cheques as 'security' create serious criminal liability if the amount is filled in and it bounces.",
          hi: "'सुरक्षा' के रूप में खाली या पोस्ट-डेटेड चेक जारी करने की आवश्यकता वाले अनुबंध गंभीर आपराधिक दायित्व बनाते हैं।",
          te: "'భద్రత' కోసం ఖాళీ లేదా పోస్ట్-డేటెడ్ చెక్కులు జారీ చేయమని అడిగే కాంట్రాక్టులు తీవ్రమైన నేర బాధ్యతను సృష్టిస్తాయి.",
        },
        penalty: {
          en: "Imprisonment up to 2 years and/or fine up to twice the cheque amount.",
          hi: "2 साल तक कारावास और/या चेक राशि के दोगुने तक जुर्माना।",
          te: "2 సంవత్సరాల వరకు జైలు మరియు/లేదా చెక్ మొత్తానికి రెట్టింపు వరకు జరిమానా.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1392",
      },
      {
        name: "Payment and Settlement Systems Act, 2007",
        year: 2007,
        short: {
          en: "Regulates digital payment systems — UPI, NEFT, RTGS, digital wallets, and payment gateways.",
          hi: "डिजिटल भुगतान प्रणालियों को नियंत्रित करता है — UPI, NEFT, RTGS, डिजिटल वॉलेट और पेमेंट गेटवे।",
          te: "డిజిటల్ పేమెంట్ సిస్టమ్‌లను నియంత్రిస్తుంది — UPI, NEFT, RTGS, డిజిటల్ వాలెట్లు మరియు పేమెంట్ గేట్‌వేలు.",
        },
        governs: {
          en: [
            "Fintech agreements",
            "Payment gateway contracts",
            "Digital wallet agreements",
          ],
          hi: ["फिनटेक समझौते", "पेमेंट गेटवे अनुबंध", "डिजिटल वॉलेट समझौते"],
          te: [
            "ఫిన్‌టెక్ ఒప్పందాలు",
            "పేమెంట్ గేట్‌వే కాంట్రాక్టులు",
            "డిజిటల్ వాలెట్ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.18",
            title: "Power to call for information",
            detail: "RBI can inspect and audit any payment system operator.",
          },
          {
            section: "S.26",
            title: "Penalties",
            detail:
              "Up to ₹10 lakh per day for operating without authorisation.",
          },
        ],
        watchFor: {
          en: "Fintech terms that hold users liable for unauthorized transactions conflict with RBI's zero liability framework. Watch for clauses allowing platforms to freeze funds without notice.",
          hi: "फिनटेक नियम जो उपयोगकर्ताओं को अनधिकृत लेनदेन के लिए उत्तरदायी ठहराते हैं, RBI के शून्य दायित्व ढांचे के साथ संघर्ष करते हैं।",
          te: "అనధికార లావాదేవీలకు వినియోగదారులను బాధ్యులను చేసే ఫిన్‌టెక్ నిబంధనలు RBI యొక్క జీరో లయబిలిటీ ఫ్రేమ్‌వర్క్‌కు విరుద్ధంగా ఉంటాయి.",
        },
        penalty: {
          en: "Up to ₹10 lakh/day for unauthorised operation. Criminal liability for serious fraud.",
          hi: "अनधिकृत संचालन के लिए ₹10 लाख/दिन तक। गंभीर धोखाधड़ी के लिए आपराधिक दायित्व।",
          te: "అనధికార కార్యకలాపాలకు రోజుకు ₹10 లక్షలు. తీవ్రమైన మోసానికి నేర బాధ్యత.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1548",
      },
      {
        name: "Insurance Act, 1938 & IRDA Act, 1999",
        year: 1938,
        short: {
          en: "Regulates insurance companies, protects policyholders, and governs claim settlement.",
          hi: "बीमा कंपनियों को नियंत्रित करता है, पॉलिसीधारकों की रक्षा करता है और दावा निपटान को नियंत्रित करता है।",
          te: "బీమా కంపెనీలను నియంత్రిస్తుంది, పాలసీదారులను రక్షిస్తుంది మరియు క్లెయిమ్ సెటిల్‌మెంట్‌ను నియంత్రిస్తుంది.",
        },
        governs: {
          en: [
            "Life insurance policies",
            "Health insurance contracts",
            "Motor insurance",
            "Home insurance",
          ],
          hi: [
            "जीवन बीमा पॉलिसी",
            "स्वास्थ्य बीमा अनुबंध",
            "वाहन बीमा",
            "गृह बीमा",
          ],
          te: [
            "జీవిత బీమా పాలసీలు",
            "ఆరోగ్య బీమా కాంట్రాక్టులు",
            "వాహన బీమా",
            "గృహ బీమా",
          ],
        },
        keySections: [
          {
            section: "S.45",
            title: "Policy not questioned after 3 years",
            detail:
              "After 3 years, insurer cannot reject a claim on grounds of misrepresentation (except fraud).",
          },
          {
            section: "S.64VB",
            title: "No risk before premium payment",
            detail: "Risk only commences after premium is received.",
          },
          {
            section: "IRDAI Regulations",
            title: "Claim settlement timelines",
            detail:
              "Insurers must settle claims within 30 days of receiving all documents.",
          },
        ],
        watchFor: {
          en: "Policies with exclusion clauses buried in fine print — pre-existing conditions, waiting periods. Clauses allowing insurer to redefine terms at renewal without notice.",
          hi: "महीन प्रिंट में दबी बहिष्करण शर्तों वाली पॉलिसी — पूर्व-विद्यमान स्थितियां, प्रतीक्षा अवधि। बीमाकर्ता को नवीनीकरण पर बिना सूचना के शर्तें पुनर्परिभाषित करने की अनुमति देने वाली शर्तें।",
          te: "చిన్న అక్షరాలలో దాచిన మినహాయింపు నిబంధనలతో పాలసీలు — ముందు నుండి ఉన్న పరిస్థితులు, వేచి ఉండే కాలాలు. నవీకరణ సమయంలో నోటీసు లేకుండా నిబంధనలు పునర్నిర్వచించడానికి బీమాదారుకు అనుమతించే నిబంధనలు.",
        },
        penalty: {
          en: "IRDAI can impose fines up to ₹1 crore on insurers for violations. Policyholders can approach the Insurance Ombudsman.",
          hi: "IRDAI उल्लंघन के लिए बीमाकर्ताओं पर ₹1 करोड़ तक जुर्माना लगा सकती है। पॉलिसीधारक बीमा लोकपाल से संपर्क कर सकते हैं।",
          te: "IRDAI ఉల్లంఘనలకు బీమాదారులపై ₹1 కోటి వరకు జరిమానాలు విధించవచ్చు. పాలసీదారులు ఇన్సూరెన్స్ అంబుడ్స్‌మన్‌ను సంప్రదించవచ్చు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1351",
      },
    ],
  },
  {
    category: "Contract & Civil",
    color: "#0D47A1",
    icon: "📜",
    laws: [
      {
        name: "Indian Contract Act, 1872",
        year: 1872,
        short: {
          en: "The backbone of all contracts in India — defines what makes a contract valid and what makes it void.",
          hi: "भारत में सभी अनुबंधों की रीढ़ — परिभाषित करता है कि अनुबंध को वैध क्या बनाता है और शून्य क्या।",
          te: "భారతదేశంలో అన్ని కాంట్రాక్టుల వెన్నెముక — కాంట్రాక్ట్‌ను చెల్లుబాటు అయ్యేలా చేసేది ఏమిటో మరియు చెల్లనిదిగా చేసేది ఏమిటో నిర్వచిస్తుంది.",
        },
        governs: {
          en: [
            "All contracts",
            "Employment agreements",
            "Service contracts",
            "NDAs",
          ],
          hi: ["सभी अनुबंध", "रोजगार समझौते", "सेवा अनुबंध", "NDA"],
          te: [
            "అన్ని కాంట్రాక్టులు",
            "ఉద్యోగ ఒప్పందాలు",
            "సేవా కాంట్రాక్టులు",
            "NDAలు",
          ],
        },
        keySections: [
          {
            section: "S.10",
            title: "What agreements are contracts",
            detail:
              "Requires free consent, lawful consideration, lawful object, and competent parties.",
          },
          {
            section: "S.17",
            title: "Fraud",
            detail:
              "Contract induced by fraud is voidable at the option of the deceived party.",
          },
          {
            section: "S.23",
            title: "Unlawful consideration",
            detail:
              "Contract is void if object is illegal, immoral, or opposed to public policy.",
          },
          {
            section: "S.27",
            title: "Restraint of trade",
            detail:
              "Post-employment non-compete clauses are largely VOID in India.",
          },
          {
            section: "S.74",
            title: "Compensation for breach",
            detail:
              "Party can only claim actual losses, not arbitrary penalty amounts.",
          },
        ],
        watchFor: {
          en: "Extremely broad non-compete clauses (void under S.27), penalty clauses far exceeding actual damage, contracts signed under pressure or fraud.",
          hi: "अत्यंत व्यापक नॉन-कॉम्पीट शर्तें (S.27 के तहत शून्य), वास्तविक नुकसान से कहीं अधिक दंड शर्तें, दबाव या धोखाधड़ी में हस्ताक्षरित अनुबंध।",
          te: "అత్యంత విస్తృత నాన్-కాంపీట్ నిబంధనలు (S.27 కింద చెల్లవు), వాస్తవ నష్టానికి చాలా మించిన పెనాల్టీ నిబంధనలు, ఒత్తిడి లేదా మోసం క్రింద సంతకం చేసిన కాంట్రాక్టులు.",
        },
        penalty: {
          en: "Civil — breach entitles the aggrieved party to compensation. No criminal penalty unless fraud is involved.",
          hi: "दीवानी — उल्लंघन पीड़ित पक्ष को मुआवजे का हकदार बनाता है। जब तक धोखाधड़ी शामिल न हो, कोई आपराधिक दंड नहीं।",
          te: "సివిల్ — ఉల్లంఘన నష్టపోయిన వ్యక్తికి పరిహారానికి హక్కు కలిగిస్తుంది. మోసం పాల్గొనకపోతే నేర శిక్ష లేదు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/12845",
      },
      {
        name: "Arbitration and Conciliation Act, 1996",
        year: 1996,
        short: {
          en: "Governs arbitration clauses — when disputes go to private arbitration instead of court.",
          hi: "मध्यस्थता शर्तों को नियंत्रित करता है — जब विवाद अदालत के बजाय निजी मध्यस्थता में जाते हैं।",
          te: "మధ్యవర్తిత్వ నిబంధనలను నియంత్రిస్తుంది — వివాదాలు న్యాయస్థానానికి బదులు ప్రైవేట్ మధ్యవర్తిత్వానికి వెళ్ళినప్పుడు.",
        },
        governs: {
          en: [
            "Business contracts",
            "Employment agreements",
            "Service agreements",
          ],
          hi: ["व्यापार अनुबंध", "रोजगार समझौते", "सेवा समझौते"],
          te: ["వ్యాపార కాంట్రాక్టులు", "ఉద్యోగ ఒప్పందాలు", "సేవా ఒప్పందాలు"],
        },
        keySections: [
          {
            section: "S.7",
            title: "Arbitration agreement",
            detail:
              "Must be in writing to be valid. Oral arbitration agreements are not enforceable.",
          },
          {
            section: "S.11",
            title: "Appointment of arbitrators",
            detail:
              "Courts can intervene to ensure fairness if one party controls arbitrator selection.",
          },
          {
            section: "S.34",
            title: "Setting aside arbitral award",
            detail:
              "Awards can be challenged if the arbitration clause itself was invalid or process was unfair.",
          },
        ],
        watchFor: {
          en: "Clauses requiring arbitration in a distant city, with arbitrators chosen solely by the stronger party, or with costs that make arbitration inaccessible.",
          hi: "किसी दूरस्थ शहर में मध्यस्थता की आवश्यकता वाली शर्तें, जहां मध्यस्थ केवल मजबूत पक्ष द्वारा चुना जाता है।",
          te: "దూర నగరంలో మధ్యవర్తిత్వం అవసరమయ్యే నిబంధనలు, మధ్యవర్తిని బలమైన పక్షం మాత్రమే ఎంచుకునే పరిస్థితి.",
        },
        penalty: {
          en: "Civil — courts can set aside unfair arbitration awards. Parties must still honour valid arbitration clauses.",
          hi: "दीवानी — अदालतें अनुचित मध्यस्थता पुरस्कारों को अलग कर सकती हैं।",
          te: "సివిల్ — న్యాయస్థానాలు అన్యాయమైన మధ్యవర్తిత్వ అవార్డులను రద్దు చేయవచ్చు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1558",
      },
      {
        name: "Limitation Act, 1963",
        year: 1963,
        short: {
          en: "Sets time limits to file legal action. Miss the deadline and you permanently lose your right to sue.",
          hi: "कानूनी कार्रवाई दायर करने की समय सीमा निर्धारित करता है। समय सीमा चूकने पर आप स्थायी रूप से मुकदमा करने का अधिकार खो देते हैं।",
          te: "చట్టపరమైన చర్య దాఖలు చేయడానికి గడువులు నిర్ణయిస్తుంది. గడువు మిస్ అయితే మీరు శాశ్వతంగా వ్యాజ్యం వేసే హక్కు కోల్పోతారు.",
        },
        governs: {
          en: ["All contracts", "Property disputes", "Debt recovery"],
          hi: ["सभी अनुबंध", "संपत्ति विवाद", "ऋण वसूली"],
          te: ["అన్ని కాంట్రాక్టులు", "ఆస్తి వివాదాలు", "అప్పు వసూలు"],
        },
        keySections: [
          {
            section: "S.3",
            title: "Bar of limitation",
            detail:
              "Courts shall dismiss suits filed after the limitation period expires.",
          },
          {
            section: "S.18",
            title: "Effect of acknowledgement",
            detail:
              "Written acknowledgement of a debt restarts the limitation period.",
          },
          {
            section: "Art.54-55",
            title: "Contracts limitation",
            detail: "3 years for most contract disputes from date of breach.",
          },
        ],
        watchFor: {
          en: "Contract clauses that try to shorten the limitation period are generally void. But you must still act within 3 years — do not wait.",
          hi: "सीमा अवधि को छोटा करने की कोशिश करने वाली अनुबंध शर्तें आमतौर पर शून्य हैं। लेकिन आपको फिर भी 3 साल के भीतर कार्रवाई करनी होगी।",
          te: "పరిమితి కాలాన్ని తగ్గించే కాంట్రాక్ట్ నిబంధనలు సాధారణంగా చెల్లవు. కానీ మీరు 3 సంవత్సరాలలోపు చర్య తీసుకోవాలి.",
        },
        penalty: {
          en: "No penalty — but you permanently lose your right to sue once the period expires.",
          hi: "कोई दंड नहीं — लेकिन समय सीमा समाप्त होने पर आप स्थायी रूप से मुकदमा करने का अधिकार खो देते हैं।",
          te: "శిక్ష లేదు — కానీ కాలం ముగిసిన తర్వాత మీరు శాశ్వతంగా వ్యాజ్యం వేసే హక్కు కోల్పోతారు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1547",
      },
    ],
  },
  {
    category: "Property & Real Estate",
    color: "#4A148C",
    icon: "🏠",
    laws: [
      {
        name: "RERA — Real Estate (Regulation & Development) Act, 2016",
        year: 2016,
        short: {
          en: "India's strongest homebuyer protection law — mandates delivery timelines, escrow accounts, and builder accountability.",
          hi: "भारत का सबसे मजबूत गृह खरीदार संरक्षण कानून — वितरण समयसीमा, एस्क्रो खाते और बिल्डर जवाबदेही को अनिवार्य बनाता है।",
          te: "భారతదేశంలో అత్యంత బలమైన గృహ కొనుగోలుదారు రక్షణ చట్టం — డెలివరీ టైమ్‌లైన్లు, ఎస్క్రో ఖాతాలు మరియు బిల్డర్ జవాబుదారీతనాన్ని తప్పనిసరి చేస్తుంది.",
        },
        governs: {
          en: [
            "Builder-buyer agreements",
            "Apartment purchase contracts",
            "Real estate developer agreements",
          ],
          hi: [
            "बिल्डर-खरीदार समझौते",
            "अपार्टमेंट खरीद अनुबंध",
            "रियल एस्टेट डेवलपर समझौते",
          ],
          te: [
            "బిల్డర్-కొనుగోలుదారు ఒప్పందాలు",
            "అపార్ట్‌మెంట్ కొనుగోలు కాంట్రాక్టులు",
            "రియల్ ఎస్టేట్ డెవలపర్ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.4",
            title: "Registration of real estate projects",
            detail:
              "Builder MUST register project with RERA authority before selling.",
          },
          {
            section: "S.11",
            title: "Functions and duties of promoter",
            detail:
              "Builder must disclose all project details, deliver possession on time, and maintain the project.",
          },
          {
            section: "S.18",
            title: "Return of amount and compensation",
            detail:
              "If builder fails to deliver on time, buyer can get full refund + interest (SBI MCLR + 2%).",
          },
          {
            section: "S.14",
            title: "Adherence to approved plans",
            detail:
              "Builder cannot change project specifications without buyer consent.",
          },
        ],
        watchFor: {
          en: "Clauses allowing builders to delay possession indefinitely with only a token penalty, changes to floor plans without consent, or broad force majeure covering routine delays.",
          hi: "बिल्डरों को केवल नाममात्र दंड के साथ अनिश्चितकाल के लिए कब्जा देरी करने की अनुमति देने वाली शर्तें, सहमति के बिना मंजिल योजनाओं में बदलाव।",
          te: "నామమాత్ర పెనాల్టీతో బిల్డర్లు అనిశ్చితంగా స్వాధీనాన్ని ఆలస్యం చేయడానికి అనుమతించే నిబంధనలు, అనుమతి లేకుండా ఫ్లోర్ ప్లాన్లు మార్చడం.",
        },
        penalty: {
          en: "Builder: up to 10% of project cost for non-registration. Up to 3 years imprisonment for repeated violations.",
          hi: "बिल्डर: गैर-पंजीकरण के लिए परियोजना लागत का 10% तक। बार-बार उल्लंघन के लिए 3 साल तक कारावास।",
          te: "బిల్డర్: నమోదు చేయకపోవడానికి ప్రాజెక్ట్ ఖర్చులో 10% వరకు. పదే పదే ఉల్లంఘనలకు 3 సంవత్సరాల వరకు జైలు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/2158",
      },
      {
        name: "Transfer of Property Act, 1882",
        year: 1882,
        short: {
          en: "Governs all transfers of immovable property — sale, mortgage, lease, gift, and exchange.",
          hi: "अचल संपत्ति के सभी हस्तांतरणों को नियंत्रित करता है — बिक्री, बंधक, पट्टा, उपहार और विनिमय।",
          te: "అన్ని స్థిర ఆస్తి బదిలీలను నియంత్రిస్తుంది — అమ్మకం, తనఖా, లీజు, బహుమతి మరియు మార్పిడి.",
        },
        governs: {
          en: [
            "Property sale agreements",
            "Mortgage deeds",
            "Lease agreements",
            "Gift deeds",
          ],
          hi: [
            "संपत्ति बिक्री समझौते",
            "बंधक विलेख",
            "पट्टा समझौते",
            "उपहार विलेख",
          ],
          te: [
            "ఆస్తి అమ్మకపు ఒప్పందాలు",
            "తనఖా దస్తావేజులు",
            "లీజు ఒప్పందాలు",
            "బహుమతి దస్తావేజులు",
          ],
        },
        keySections: [
          {
            section: "S.54",
            title: "Sale defined",
            detail:
              "Transfer of ownership for a price. Must be by registered instrument for immovable property above ₹100.",
          },
          {
            section: "S.58",
            title: "Mortgage defined",
            detail:
              "Defines types of mortgage — simple, usufructuary, English. Rights differ significantly by type.",
          },
          {
            section: "S.105",
            title: "Lease defined",
            detail: "Leases over 12 months must be registered.",
          },
          {
            section: "S.108",
            title: "Rights of lessor and lessee",
            detail:
              "Tenant's right to safe premises, landlord's obligation for repairs — cannot be contracted away.",
          },
        ],
        watchFor: {
          en: "Unregistered sale deeds for immovable property are inadmissible in court. Mortgage type matters — English mortgage allows easier foreclosure.",
          hi: "अचल संपत्ति के लिए अपंजीकृत बिक्री विलेख अदालत में अस्वीकार्य हैं। बंधक प्रकार मायने रखता है।",
          te: "అచల ఆస్తికి నమోదు కాని అమ్మకపు దస్తావేజులు న్యాయస్థానంలో అంగీకరించబడవు. తనఖా రకం ముఖ్యమైనది.",
        },
        penalty: {
          en: "Civil — unregistered documents cannot be used as evidence. Specific performance can be ordered by courts.",
          hi: "दीवानी — अपंजीकृत दस्तावेज साक्ष्य के रूप में उपयोग नहीं किए जा सकते।",
          te: "సివిల్ — నమోదు కాని పత్రాలు సాక్ష్యంగా ఉపయోగించలేవు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1396",
      },
      {
        name: "Registration Act, 1908",
        year: 1908,
        short: {
          en: "Mandates which documents MUST be registered to be legally valid — many contracts are worthless without registration.",
          hi: "निर्दिष्ट करता है कि कौन से दस्तावेजों का पंजीकरण अनिवार्य है — बिना पंजीकरण के कई अनुबंध बेकार हैं।",
          te: "చట్టబద్ధంగా చెల్లుబాటు అవ్వడానికి ఏ పత్రాలు తప్పనిసరిగా నమోదు చేయాలో నిర్దేశిస్తుంది.",
        },
        governs: {
          en: [
            "Property sale deeds",
            "Long-term leases",
            "Gift deeds",
            "Mortgage deeds",
          ],
          hi: [
            "संपत्ति बिक्री विलेख",
            "दीर्घकालिक पट्टे",
            "उपहार विलेख",
            "बंधक विलेख",
          ],
          te: [
            "ఆస్తి అమ్మకపు దస్తావేజులు",
            "దీర్ఘకాలిక లీజులు",
            "బహుమతి దస్తావేజులు",
            "తనఖా దస్తావేజులు",
          ],
        },
        keySections: [
          {
            section: "S.17",
            title: "Documents requiring compulsory registration",
            detail:
              "Sale deeds for property above ₹100 and leases exceeding one year MUST be registered.",
          },
          {
            section: "S.49",
            title: "Effect of non-registration",
            detail:
              "An unregistered document that requires registration cannot be used as evidence in court.",
          },
        ],
        watchFor: {
          en: "An 'agreement to sell' vs an actual sale deed — only a registered sale deed transfers ownership. An unregistered agreement gives no ownership rights.",
          hi: "'बिक्री समझौते' और वास्तविक बिक्री विलेख के बीच अंतर — केवल पंजीकृत बिक्री विलेख स्वामित्व हस्तांतरित करता है।",
          te: "'అమ్మకపు ఒప్పందం' vs అసలు అమ్మకపు దస్తావేజు — నమోదైన అమ్మకపు దస్తావేజు మాత్రమే యాజమాన్యాన్ని బదిలీ చేస్తుంది.",
        },
        penalty: {
          en: "Civil — the document simply cannot be used as evidence. The transaction becomes legally unenforceable.",
          hi: "दीवानी — दस्तावेज केवल साक्ष्य के रूप में उपयोग नहीं किया जा सकता।",
          te: "సివిల్ — పత్రాన్ని సాక్ష్యంగా ఉపయోగించలేరు. లావాదేవీ చట్టబద్ధంగా అమలు చేయలేనిదిగా మారుతుంది.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1392",
      },
    ],
  },
  {
    category: "Employment & Labour",
    color: "#BF360C",
    icon: "👷",
    laws: [
      {
        name: "Code on Wages, 2019",
        year: 2019,
        short: {
          en: "Consolidates four wage laws — sets minimum wages, timely payment, and equal pay standards.",
          hi: "चार वेतन कानूनों को एकीकृत करता है — न्यूनतम वेतन, समय पर भुगतान और समान वेतन मानक निर्धारित करता है।",
          te: "నాలుగు వేతన చట్టాలను ఏకీకృతం చేస్తుంది — కనీస వేతనాలు, సకాలంలో చెల్లింపు మరియు సమాన వేతన ప్రమాణాలు నిర్ణయిస్తుంది.",
        },
        governs: {
          en: ["Employment contracts", "Offer letters", "HR policies"],
          hi: ["रोजगार अनुबंध", "ऑफर लेटर", "HR नीतियां"],
          te: ["ఉద్యోగ కాంట్రాక్టులు", "ఆఫర్ లెటర్లు", "HR విధానాలు"],
        },
        keySections: [
          {
            section: "S.3",
            title: "Equal wages",
            detail:
              "No discrimination in wages on grounds of gender for same work.",
          },
          {
            section: "S.6",
            title: "Minimum rate of wages",
            detail:
              "Every employer must pay wages not less than the floor wage.",
          },
          {
            section: "S.9",
            title: "Fixing hours for normal working day",
            detail:
              "Normal working day must include intervals for rest — typically 8-9 hours.",
          },
        ],
        watchFor: {
          en: "Employment contracts splitting CTC into many components (food allowance, transport, etc.) to reduce the 'basic wage' and lower PF contributions — now actively challenged in courts.",
          hi: "रोजगार अनुबंध जो 'मूल वेतन' को कम करने और PF योगदान को घटाने के लिए CTC को कई घटकों में विभाजित करते हैं।",
          te: "'మూల వేతనాన్ని' తగ్గించి PF సహకారాలను తక్కువ చేయడానికి CTC ని అనేక భాగాలుగా విభజించే ఉద్యోగ కాంట్రాక్టులు — ఇప్పుడు న్యాయస్థానాల్లో చురుగ్గా సవాలు చేయబడుతున్నాయి.",
        },
        penalty: {
          en: "Fine up to ₹50,000 for first offence. Imprisonment up to 3 months for repeat violations.",
          hi: "पहले अपराध के लिए ₹50,000 तक जुर्माना। बार-बार उल्लंघन के लिए 3 महीने तक कारावास।",
          te: "మొదటి నేరానికి ₹50,000 వరకు జరిమానా. పదే పదే ఉల్లంఘనలకు 3 నెలల వరకు జైలు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/15131",
      },
      {
        name: "Maternity Benefit Act, 1961",
        year: 1961,
        short: {
          en: "Guarantees 26 weeks paid maternity leave and protects women from termination during pregnancy.",
          hi: "26 सप्ताह का वेतन सहित मातृत्व अवकाश की गारंटी देता है और गर्भावस्था के दौरान महिलाओं को बर्खास्तगी से बचाता है।",
          te: "26 వారాల వేతనంతో కూడిన మాతృత్వ సెలవు హామీ ఇస్తుంది మరియు గర్భధారణ సమయంలో మహిళలను తొలగింపు నుండి రక్షిస్తుంది.",
        },
        governs: {
          en: ["Employment contracts", "HR policies", "Service agreements"],
          hi: ["रोजगार अनुबंध", "HR नीतियां", "सेवा समझौते"],
          te: ["ఉద్యోగ కాంట్రాక్టులు", "HR విధానాలు", "సేవా ఒప్పందాలు"],
        },
        keySections: [
          {
            section: "S.4",
            title: "Employment during certain periods prohibited",
            detail:
              "No employer shall employ a woman within 6 weeks after delivery or miscarriage.",
          },
          {
            section: "S.5",
            title: "Right to maternity benefit",
            detail:
              "Every woman is entitled to 26 weeks paid leave at average daily wages.",
          },
          {
            section: "S.12",
            title: "Dismissal during absence prohibited",
            detail:
              "A woman cannot be dismissed during the period of her maternity benefit.",
          },
        ],
        watchFor: {
          en: "Employment contracts providing less than 26 weeks maternity leave, or performance clauses penalising absence during maternity leave — any such clause is void.",
          hi: "26 सप्ताह से कम मातृत्व अवकाश प्रदान करने वाले रोजगार अनुबंध, या मातृत्व अवकाश के दौरान अनुपस्थिति को दंडित करने वाली प्रदर्शन शर्तें — ऐसी शर्तें शून्य हैं।",
          te: "26 వారాల కంటే తక్కువ మాతృత్వ సెలవు అందించే ఉద్యోగ కాంట్రాక్టులు, లేదా మాతృత్వ సెలవు సమయంలో గైర్హాజరీని శిక్షించే నిబంధనలు చెల్లవు.",
        },
        penalty: {
          en: "Imprisonment up to 1 year and/or fine up to ₹5,000 for employers violating this act.",
          hi: "इस अधिनियम का उल्लंघन करने वाले नियोक्ताओं के लिए 1 साल तक कारावास और/या ₹5,000 तक जुर्माना।",
          te: "ఈ చట్టాన్ని ఉల్లంఘించే యజమానులకు 1 సంవత్సరం వరకు జైలు మరియు/లేదా ₹5,000 వరకు జరిమానా.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1482",
      },
      {
        name: "POSH Act — Sexual Harassment of Women at Workplace, 2013",
        year: 2013,
        short: {
          en: "Mandates Internal Complaints Committee (ICC) and protects women from sexual harassment at work.",
          hi: "आंतरिक शिकायत समिति (ICC) को अनिवार्य बनाता है और कार्यस्थल पर यौन उत्पीड़न से महिलाओं की रक्षा करता है।",
          te: "అంతర్గత ఫిర్యాదుల కమిటీ (ICC) ని తప్పనిసరి చేస్తుంది మరియు పని ప్రదేశంలో మహిళలను లైంగిక వేధింపు నుండి రక్షిస్తుంది.",
        },
        governs: {
          en: [
            "Employment contracts",
            "HR policies",
            "Freelance/gig work agreements",
          ],
          hi: ["रोजगार अनुबंध", "HR नीतियां", "फ्रीलांस/गिग कार्य समझौते"],
          te: [
            "ఉద్యోగ కాంట్రాక్టులు",
            "HR విధానాలు",
            "ఫ్రీలాన్స్/గిగ్ వర్క్ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.4",
            title: "Constitution of ICC",
            detail:
              "Every employer with 10+ employees MUST have an ICC. Presiding officer must be a senior woman employee.",
          },
          {
            section: "S.19",
            title: "Duties of employer",
            detail:
              "Employer must display POSH policy, organise awareness programs, and file annual reports.",
          },
          {
            section: "S.26",
            title: "Penalties",
            detail: "Fine up to ₹50,000 for non-compliance.",
          },
        ],
        watchFor: {
          en: "Employment contracts or NDAs that prohibit you from reporting sexual harassment, or require settling harassment complaints without ICC involvement — such clauses are void.",
          hi: "रोजगार अनुबंध या NDA जो यौन उत्पीड़न की रिपोर्ट करने से रोकते हैं — ऐसी शर्तें शून्य हैं।",
          te: "లైంగిక వేధింపులను నివేదించడాన్ని నిషేధించే ఉద్యోగ కాంట్రాక్టులు లేదా NDAlు — అటువంటి నిబంధనలు చెల్లవు.",
        },
        penalty: {
          en: "Fine up to ₹50,000 for employers. Repeat offences can lead to cancellation of business licences.",
          hi: "नियोक्ताओं के लिए ₹50,000 तक जुर्माना। बार-बार अपराध से व्यापार लाइसेंस रद्द हो सकता है।",
          te: "యజమానులకు ₹50,000 వరకు జరిమానా. పదే పదే నేరాలు వ్యాపార లైసెన్సు రద్దుకు దారితీయవచ్చు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/15569",
      },
      {
        name: "Minimum Wages Act, 1948",
        year: 1948,
        short: {
          en: "Mandates minimum wage rates set by state governments — any contract paying below this is void.",
          hi: "राज्य सरकारों द्वारा निर्धारित न्यूनतम वेतन दरों को अनिवार्य करता है — इससे कम भुगतान वाला कोई भी अनुबंध शून्य है।",
          te: "రాష్ట్ర ప్రభుత్వాలు నిర్ణయించిన కనీస వేతన రేట్లను తప్పనిసరి చేస్తుంది — దీని కంటే తక్కువ చెల్లించే కాంట్రాక్ట్ చెల్లదు.",
        },
        governs: {
          en: [
            "Employment contracts",
            "Labour contracts",
            "Contractual/gig work agreements",
          ],
          hi: ["रोजगार अनुबंध", "श्रम अनुबंध", "संविदा/गिग कार्य समझौते"],
          te: [
            "ఉద్యోగ కాంట్రాక్టులు",
            "కార్మిక కాంట్రాక్టులు",
            "కాంట్రాక్ట్/గిగ్ వర్క్ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.3",
            title: "Fixing of minimum wages",
            detail:
              "State governments fix minimum wages for different scheduled employments.",
          },
          {
            section: "S.12",
            title: "Payment of minimum wages",
            detail:
              "Employer must pay not less than the minimum wage — any contractual clause paying less is void.",
          },
          {
            section: "S.22",
            title: "Penalties",
            detail: "Up to 6 months imprisonment and/or fine up to ₹500.",
          },
        ],
        watchFor: {
          en: "Contracts offsetting statutory minimum wages with 'benefits' like food or accommodation without cash payment. The cash component must meet the minimum wage threshold.",
          hi: "नकद भुगतान के बिना भोजन या आवास जैसे 'लाभों' के साथ वैधानिक न्यूनतम वेतन की भरपाई करने वाले अनुबंध।",
          te: "నగదు చెల్లింపు లేకుండా ఆహారం లేదా వసతి వంటి 'ప్రయోజనాలతో' వైధానిక కనీస వేతనాన్ని భర్తీ చేసే కాంట్రాక్టులు.",
        },
        penalty: {
          en: "Imprisonment up to 6 months and/or fine. Under Code on Wages, this increases significantly.",
          hi: "6 महीने तक कारावास और/या जुर्माना। मजदूरी संहिता के तहत यह काफी बढ़ जाता है।",
          te: "6 నెలల వరకు జైలు మరియు/లేదా జరిమానా. వేతనాల కోడ్ కింద ఇది గణనీయంగా పెరుగుతుంది.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1535",
      },
    ],
  },
  {
    category: "Consumer Protection",
    color: "#E65100",
    icon: "🛡️",
    laws: [
      {
        name: "Consumer Protection Act, 2019",
        year: 2019,
        short: {
          en: "India's most powerful consumer law — defines unfair contracts, mandates e-commerce disclosures, and allows class action.",
          hi: "भारत का सबसे शक्तिशाली उपभोक्ता कानून — अनुचित अनुबंधों को परिभाषित करता है और ई-कॉमर्स प्रकटीकरण को अनिवार्य बनाता है।",
          te: "భారతదేశంలో అత్యంత శక్తివంతమైన వినియోగదారు చట్టం — అన్యాయమైన కాంట్రాక్టులను నిర్వచిస్తుంది మరియు ఈ-కామర్స్ వెల్లడింపులను తప్పనిసరి చేస్తుంది.",
        },
        governs: {
          en: [
            "E-commerce terms",
            "Service agreements",
            "Product purchase contracts",
            "App Terms of Service",
          ],
          hi: [
            "ई-कॉमर्स नियम",
            "सेवा समझौते",
            "उत्पाद खरीद अनुबंध",
            "ऐप सेवा की शर्तें",
          ],
          te: [
            "ఈ-కామర్స్ నిబంధనలు",
            "సేవా ఒప్పందాలు",
            "ఉత్పత్తి కొనుగోలు కాంట్రాక్టులు",
            "యాప్ సేవా నిబంధనలు",
          ],
        },
        keySections: [
          {
            section: "S.2(46)",
            title: "Unfair contract defined",
            detail:
              "A contract causing significant imbalance in rights is 'unfair' and the clause can be struck down.",
          },
          {
            section: "S.10",
            title: "Central Consumer Protection Authority",
            detail:
              "CCPA can investigate unfair trade practices, order product recalls, and penalise false advertising.",
          },
          {
            section: "S.47",
            title: "Jurisdiction of District Commission",
            detail:
              "Consumers can file complaints for claims up to ₹1 crore at District Commission — no lawyer needed.",
          },
        ],
        watchFor: {
          en: "Auto-renewal clauses without clear consent, terms allowing companies to change pricing after purchase, mandatory arbitration clauses preventing you from going to consumer forums.",
          hi: "स्पष्ट सहमति के बिना ऑटो-नवीनीकरण शर्तें, कंपनियों को खरीद के बाद मूल्य निर्धारण बदलने की अनुमति देने वाली शर्तें।",
          te: "స్పష్టమైన అనుమతి లేకుండా ఆటో-రెన్యువల్ నిబంధనలు, కొనుగోలు తర్వాత ధరలు మార్చడానికి కంపెనీలకు అనుమతించే నిబంధనలు.",
        },
        penalty: {
          en: "CCPA fines up to ₹10 lakh (₹50 lakh for repeat). Courts can award compensation + punitive damages.",
          hi: "CCPA ₹10 लाख तक जुर्माना (दोबारा के लिए ₹50 लाख)। अदालतें मुआवजा + दंडात्मक हर्जाना दे सकती हैं।",
          te: "CCPA ₹10 లక్షల వరకు జరిమానాలు (మళ్ళీ అయితే ₹50 లక్షలు). న్యాయస్థానాలు పరిహారం + శిక్షాత్మక నష్టపరిహారం అందించవచ్చు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/16103",
      },
      {
        name: "Food Safety and Standards Act (FSSAI), 2006",
        year: 2006,
        short: {
          en: "Regulates food safety and quality — relevant in restaurant, catering, and food supply contracts.",
          hi: "खाद्य सुरक्षा और गुणवत्ता को नियंत्रित करता है — रेस्तरां, कैटरिंग और खाद्य आपूर्ति अनुबंधों में प्रासंगिक।",
          te: "ఆహార భద్రత మరియు నాణ్యతను నియంత్రిస్తుంది — రెస్టారెంట్, కేటరింగ్ మరియు ఆహార సరఫరా కాంట్రాక్టులలో సంబంధితం.",
        },
        governs: {
          en: [
            "Restaurant agreements",
            "Catering contracts",
            "Food supply agreements",
            "Cloud kitchen contracts",
          ],
          hi: [
            "रेस्तरां समझौते",
            "कैटरिंग अनुबंध",
            "खाद्य आपूर्ति समझौते",
            "क्लाउड किचन अनुबंध",
          ],
          te: [
            "రెస్టారెంట్ ఒప్పందాలు",
            "కేటరింగ్ కాంట్రాక్టులు",
            "ఆహార సరఫరా ఒప్పందాలు",
            "క్లౌడ్ కిచెన్ కాంట్రాక్టులు",
          ],
        },
        keySections: [
          {
            section: "S.26",
            title: "Responsibilities of food business operators",
            detail:
              "All food businesses must ensure food is safe. This obligation cannot be contracted away.",
          },
          {
            section: "S.38",
            title: "Powers of food safety officer",
            detail:
              "Officers can inspect premises, take samples, and seize unsafe food at any time.",
          },
          {
            section: "S.59",
            title: "Punishment for unsafe food",
            detail:
              "Imprisonment up to 6 months and/or fine up to ₹1 lakh for selling unsafe food.",
          },
        ],
        watchFor: {
          en: "Franchise contracts shifting FSSAI compliance liability entirely to the franchisee while the franchisor controls the product — both parties remain liable.",
          hi: "फ्रैंचाइज़ी अनुबंध जो FSSAI अनुपालन दायित्व को फ्रेंचाइजी पर डालते हैं जबकि फ्रेंचाइजर उत्पाद को नियंत्रित करता है।",
          te: "ఫ్రాంచైజర్ ఉత్పత్తిని నియంత్రిస్తూ FSSAI సమ్మతి బాధ్యతను ఫ్రాంచైజీకి పూర్తిగా మార్చే ఫ్రాంచైజ్ కాంట్రాక్టులు.",
        },
        penalty: {
          en: "Fines ranging ₹1 lakh to ₹10 lakh + imprisonment up to life for causing death.",
          hi: "₹1 लाख से ₹10 लाख तक जुर्माना + मृत्यु का कारण बनने पर आजीवन कारावास।",
          te: "₹1 లక్ష నుండి ₹10 లక్షల వరకు జరిమానాలు + మరణానికి కారణమైతే జీవిత కారాగారం.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1530",
      },
    ],
  },
  {
    category: "Digital & Data Privacy",
    color: "#006064",
    icon: "💻",
    laws: [
      {
        name: "Digital Personal Data Protection Act (DPDPA), 2023",
        year: 2023,
        short: {
          en: "India's landmark data privacy law — requires specific consent, grants right to erasure, and imposes massive penalties.",
          hi: "भारत का महत्वपूर्ण डेटा गोपनीयता कानून — विशिष्ट सहमति की आवश्यकता है, मिटाने का अधिकार प्रदान करता है।",
          te: "భారతదేశం యొక్క ముఖ్యమైన డేటా గోప్యతా చట్టం — నిర్దిష్ట సమ్మతి అవసరం, తొలగింపు హక్కు మంజూరు చేస్తుంది.",
        },
        governs: {
          en: [
            "App Terms of Service",
            "Privacy Policies",
            "Data processing agreements",
            "E-commerce terms",
          ],
          hi: [
            "ऐप सेवा की शर्तें",
            "गोपनीयता नीतियां",
            "डेटा प्रसंस्करण समझौते",
            "ई-कॉमर्स नियम",
          ],
          te: [
            "యాప్ సేవా నిబంధనలు",
            "గోప్యతా విధానాలు",
            "డేటా ప్రాసెసింగ్ ఒప్పందాలు",
            "ఈ-కామర్స్ నిబంధనలు",
          ],
        },
        keySections: [
          {
            section: "S.6",
            title: "Consent",
            detail:
              "Consent must be free, specific, informed, unconditional, and unambiguous. 'By using this app you agree' is non-compliant.",
          },
          {
            section: "S.12",
            title: "Right to correction and erasure",
            detail:
              "Data principals can request correction or erasure of personal data at any time.",
          },
          {
            section: "S.33",
            title: "Financial penalties",
            detail: "Up to ₹250 crore per violation.",
          },
        ],
        watchFor: {
          en: "Terms granting 'irrevocable, perpetual, worldwide' data rights, blanket consent covering unstated purposes, sharing data with unnamed 'partners', no mention of your right to erasure.",
          hi: "'अपरिवर्तनीय, सतत, विश्वव्यापी' डेटा अधिकार प्रदान करने वाली शर्तें, अनिर्दिष्ट उद्देश्यों को कवर करने वाली व्यापक सहमति।",
          te: "'ఉపసంహరించలేని, శాశ్వత, ప్రపంచవ్యాప్త' డేటా హక్కులు మంజూరు చేసే నిబంధనలు, అసంబద్ధ ప్రయోజనాల కోసం ఆమోదం.",
        },
        penalty: {
          en: "Up to ₹250 crore per incident. The Data Protection Board can impose penalties and order compliance.",
          hi: "प्रति घटना ₹250 करोड़ तक। डेटा संरक्षण बोर्ड दंड लगा सकता है।",
          te: "ప్రతి సంఘటనకు ₹250 కోట్లు వరకు. డేటా ప్రొటెక్షన్ బోర్డ్ జరిమానాలు విధించవచ్చు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/22037",
      },
      {
        name: "Information Technology Act, 2000",
        year: 2000,
        short: {
          en: "Governs electronic contracts, digital signatures, cybercrime, and data breach liability.",
          hi: "इलेक्ट्रॉनिक अनुबंध, डिजिटल हस्ताक्षर, साइबर अपराध और डेटा उल्लंघन दायित्व को नियंत्रित करता है।",
          te: "ఎలక్ట్రానిక్ కాంట్రాక్టులు, డిజిటల్ సంతకాలు, సైబర్ నేరాలు మరియు డేటా ఉల్లంఘన బాధ్యతను నియంత్రిస్తుంది.",
        },
        governs: {
          en: [
            "Online agreements",
            "E-commerce terms",
            "Software contracts",
            "Digital service agreements",
          ],
          hi: [
            "ऑनलाइन समझौते",
            "ई-कॉमर्स नियम",
            "सॉफ्टवेयर अनुबंध",
            "डिजिटल सेवा समझौते",
          ],
          te: [
            "ఆన్‌లైన్ ఒప్పందాలు",
            "ఈ-కామర్స్ నిబంధనలు",
            "సాఫ్ట్‌వేర్ కాంట్రాక్టులు",
            "డిజిటల్ సేవా ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.10A",
            title: "Validity of electronic contracts",
            detail:
              "Contracts formed electronically (click-wrap, browse-wrap) are legally valid.",
          },
          {
            section: "S.43A",
            title: "Compensation for failure to protect data",
            detail:
              "Companies handling sensitive personal data must maintain reasonable security.",
          },
          {
            section: "S.66",
            title: "Computer related offences",
            detail:
              "Hacking, unauthorized access, data theft — criminal offences with imprisonment up to 3 years.",
          },
        ],
        watchFor: {
          en: "Terms disclaiming all liability for data breaches (S.43A liability cannot be fully disclaimed). Contracts allowing companies to access your device data beyond stated purposes.",
          hi: "डेटा उल्लंघनों के लिए सभी दायित्व का अस्वीकरण करने वाली शर्तें (S.43A दायित्व पूरी तरह से नकारा नहीं जा सकता)।",
          te: "డేటా ఉల్లంఘనలకు అన్ని బాధ్యతను నిరాకరించే నిబంధనలు (S.43A బాధ్యతను పూర్తిగా నిరాకరించలేరు).",
        },
        penalty: {
          en: "S.43A: compensation determined by adjudicating officer. S.66: imprisonment up to 3 years + fine.",
          hi: "S.43A: न्यायनिर्णय अधिकारी द्वारा निर्धारित मुआवजा। S.66: 3 साल तक कारावास + जुर्माना।",
          te: "S.43A: న్యాయ అధికారి నిర్ణయించిన పరిహారం. S.66: 3 సంవత్సరాల వరకు జైలు + జరిమానా.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1999",
      },
    ],
  },
  {
    category: "Criminal Law",
    color: "#B71C1C",
    icon: "⚖️",
    laws: [
      {
        name: "Bharatiya Nyaya Sanhita (BNS), 2023",
        year: 2023,
        short: {
          en: "Replaces IPC — criminalises fraud, forgery, and cheating in contracts.",
          hi: "IPC की जगह लेता है — अनुबंधों में धोखाधड़ी, जालसाजी और ठगी को आपराधिक बनाता है।",
          te: "IPC ని భర్తీ చేస్తుంది — కాంట్రాక్టులలో మోసం, నకిలీ మరియు మోసగించడాన్ని నేరంగా మారుస్తుంది.",
        },
        governs: {
          en: [
            "All contracts (when fraud is involved)",
            "Financial agreements",
            "Property documents",
          ],
          hi: [
            "सभी अनुबंध (जब धोखाधड़ी शामिल हो)",
            "वित्तीय समझौते",
            "संपत्ति दस्तावेज",
          ],
          te: [
            "అన్ని కాంట్రాక్టులు (మోసం పాల్గొన్నప్పుడు)",
            "ఆర్థిక ఒప్పందాలు",
            "ఆస్తి పత్రాలు",
          ],
        },
        keySections: [
          {
            section: "S.316",
            title: "Cheating",
            detail:
              "Fraudulently inducing someone to sign a contract is a criminal offence — imprisonment up to 3 years.",
          },
          {
            section: "S.318",
            title: "Cheating by personation",
            detail: "Signing as someone else — imprisonment up to 5 years.",
          },
          {
            section: "S.336",
            title: "Forgery",
            detail: "Making a false document — imprisonment up to 2 years.",
          },
          {
            section: "S.340",
            title: "Using forged document",
            detail:
              "Using a document you know is forged — same punishment as forgery.",
          },
        ],
        watchFor: {
          en: "If you were pressured, misled, or deceived into signing a contract, it may be a criminal offence — not just a civil matter. Document all communications before signing.",
          hi: "यदि आपको किसी अनुबंध पर हस्ताक्षर करने के लिए दबाव डाला गया, गुमराह किया गया, या धोखा दिया गया, तो यह केवल दीवानी मामला नहीं — यह आपराधिक अपराध हो सकता है।",
          te: "మీరు ఒత్తిడికి గురయ్యారు, తప్పుదోవ పట్టించబడ్డారు, లేదా మోసం చేయబడి కాంట్రాక్ట్‌పై సంతకం చేశారంటే, అది సివిల్ విషయం మాత్రమే కాదు — ఇది నేర నిందగా పరిగణించవచ్చు.",
        },
        penalty: {
          en: "Imprisonment ranging 2–7 years depending on the offence + fines. Property can also be attached.",
          hi: "अपराध के आधार पर 2-7 साल कारावास + जुर्माना। संपत्ति भी कुर्क की जा सकती है।",
          te: "నేరాన్ని బట్టి 2-7 సంవత్సరాల జైలు + జరిమానాలు. ఆస్తిని కూడా జతపరచవచ్చు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/21803",
      },
      {
        name: "Prevention of Corruption Act, 1988",
        year: 1988,
        short: {
          en: "Criminalises bribery of public officials — relevant in any contract involving government approvals or licenses.",
          hi: "सरकारी अधिकारियों की रिश्वतखोरी को आपराधिक बनाता है — सरकारी अनुमोदन या लाइसेंस से जुड़े किसी भी अनुबंध में प्रासंगिक।",
          te: "ప్రభుత్వ అధికారులకు లంచం ఇవ్వడాన్ని నేరంగా మారుస్తుంది — ప్రభుత్వ అనుమతులు లేదా లైసెన్సులు సంబంధించిన కాంట్రాక్టులలో సంబంధితం.",
        },
        governs: {
          en: [
            "Government contracts",
            "License agreements",
            "Regulatory approval contracts",
          ],
          hi: ["सरकारी अनुबंध", "लाइसेंस समझौते", "नियामक अनुमोदन अनुबंध"],
          te: [
            "ప్రభుత్వ కాంట్రాక్టులు",
            "లైసెన్స్ ఒప్పందాలు",
            "నియంత్రణ అనుమతి కాంట్రాక్టులు",
          ],
        },
        keySections: [
          {
            section: "S.7",
            title: "Offence relating to public servant",
            detail:
              "A public servant taking gratification other than legal remuneration is guilty.",
          },
          {
            section: "S.7A",
            title: "Taking undue advantage",
            detail:
              "Any person giving or taking advantage to influence a public servant is guilty.",
          },
        ],
        watchFor: {
          en: "Contracts disguising bribes as 'consultancy fees', 'referral charges', or 'facilitation payments' to government-connected parties. ALL signatories face criminal liability.",
          hi: "सरकार से जुड़े पक्षों को 'परामर्श शुल्क', 'रेफरल शुल्क', या 'सुविधा भुगतान' के रूप में रिश्वत छुपाने वाले अनुबंध।",
          te: "ప్రభుత్వంతో అనుసంధానమైన వ్యక్తులకు 'కన్సల్టెన్సీ ఫీజులు', 'రిఫరల్ చార్జీలు' లేదా 'సులభతర చెల్లింపులు' పేరిట లంచాలను దాచే కాంట్రాక్టులు.",
        },
        penalty: {
          en: "Imprisonment 3 to 7 years (extendable to 10 years for repeat offences) + fine + property attachment.",
          hi: "3 से 7 साल कारावास (बार-बार अपराध के लिए 10 साल तक) + जुर्माना + संपत्ति कुर्की।",
          te: "3 నుండి 7 సంవత్సరాల జైలు (పదే పదే నేరాలకు 10 సంవత్సరాలు) + జరిమానా + ఆస్తి జప్తు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1563",
      },
    ],
  },
  {
    category: "Business & Intellectual Property",
    color: "#4E342E",
    icon: "💼",
    laws: [
      {
        name: "Patents Act, 1970",
        year: 1970,
        short: {
          en: "Protects inventions for 20 years — highly relevant in employment contracts and startup founder agreements.",
          hi: "आविष्कारों को 20 साल के लिए सुरक्षित करता है — रोजगार अनुबंधों और स्टार्टअप संस्थापक समझौतों में अत्यंत प्रासंगिक।",
          te: "20 సంవత్సరాల పాటు ఆవిష్కరణలను రక్షిస్తుంది — ఉద్యోగ కాంట్రాక్టులు మరియు స్టార్టప్ వ్యవస్థాపక ఒప్పందాలలో చాలా సంబంధితం.",
        },
        governs: {
          en: [
            "Employment contracts (IP clauses)",
            "Startup agreements",
            "Technology transfer agreements",
          ],
          hi: [
            "रोजगार अनुबंध (IP शर्तें)",
            "स्टार्टअप समझौते",
            "प्रौद्योगिकी हस्तांतरण समझौते",
          ],
          te: [
            "ఉద్యోగ కాంట్రాక్టులు (IP నిబంధనలు)",
            "స్టార్టప్ ఒప్పందాలు",
            "సాంకేతిక బదిలీ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.6",
            title: "Persons entitled to apply for patents",
            detail:
              "The true and first inventor or assignee can apply. Employment contracts can assign patent rights to employer.",
          },
          {
            section: "S.39",
            title: "Residents not to apply without permission",
            detail:
              "Indian residents must get permission before filing patents abroad for inventions made in India.",
          },
          {
            section: "S.84",
            title: "Compulsory licence",
            detail:
              "After 3 years, anyone can apply for compulsory licence if patented product is not available at affordable price.",
          },
        ],
        watchFor: {
          en: "Employment contracts claiming ownership of ALL inventions including those created outside work hours using personal resources — this is legally questionable.",
          hi: "रोजगार अनुबंध जो काम के घंटों के बाहर व्यक्तिगत संसाधनों का उपयोग करके बनाए गए आविष्कारों सहित सभी आविष्कारों पर स्वामित्व का दावा करते हैं।",
          te: "పని గంటలకు వెలుపల వ్యక్తిగత వనరులతో సృష్టించిన ఆవిష్కరణలతో సహా అన్ని ఆవిష్కరణలపై యాజమాన్యాన్ని దావా చేసే ఉద్యోగ కాంట్రాక్టులు.",
        },
        penalty: {
          en: "Patent infringement: fine up to ₹20 lakh and/or imprisonment up to 2 years for repeated infringement.",
          hi: "पेटेंट उल्लंघन: बार-बार उल्लंघन के लिए ₹20 लाख तक जुर्माना और/या 2 साल तक कारावास।",
          te: "పేటెంట్ ఉల్లంఘన: పదే పదే ఉల్లంఘనకు ₹20 లక్షల వరకు జరిమానా మరియు/లేదా 2 సంవత్సరాల వరకు జైలు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1392",
      },
      {
        name: "Copyright Act, 1957",
        year: 1957,
        short: {
          en: "Protects creative works for life + 60 years — crucial in freelance, content creation, and software contracts.",
          hi: "जीवन + 60 वर्षों के लिए रचनात्मक कार्यों की रक्षा करता है — फ्रीलांस, कंटेंट निर्माण और सॉफ्टवेयर अनुबंधों में महत्वपूर्ण।",
          te: "జీవితకాలం + 60 సంవత్సరాల పాటు సృజనాత్మక రచనలను రక్షిస్తుంది — ఫ్రీలాన్స్, కంటెంట్ నిర్మాణం మరియు సాఫ్ట్‌వేర్ కాంట్రాక్టులలో కీలకం.",
        },
        governs: {
          en: [
            "Freelance contracts",
            "Content creation agreements",
            "Software development contracts",
            "Publishing agreements",
          ],
          hi: [
            "फ्रीलांस अनुबंध",
            "कंटेंट निर्माण समझौते",
            "सॉफ्टवेयर विकास अनुबंध",
            "प्रकाशन समझौते",
          ],
          te: [
            "ఫ్రీలాన్స్ కాంట్రాక్టులు",
            "కంటెంట్ నిర్మాణ ఒప్పందాలు",
            "సాఫ్ట్‌వేర్ అభివృద్ధి కాంట్రాక్టులు",
            "ప్రచురణ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.13",
            title: "Works in which copyright subsists",
            detail:
              "Original literary, dramatic, musical, artistic works, films, and sound recordings are automatically protected.",
          },
          {
            section: "S.17",
            title: "First owner of copyright",
            detail:
              "The creator is the first owner UNLESS it was created in the course of employment.",
          },
          {
            section: "S.57",
            title: "Author's special rights",
            detail:
              "Author retains moral rights even after assignment — cannot be waived by contract.",
          },
        ],
        watchFor: {
          en: "Freelance contracts claiming 'work for hire' for all creative output — India's work-for-hire doctrine is narrower than the US. Broad IP assignment clauses that include moral rights are void under S.57.",
          hi: "सभी रचनात्मक आउटपुट के लिए 'वर्क फॉर हायर' का दावा करने वाले फ्रीलांस अनुबंध — भारत का वर्क-फॉर-हायर सिद्धांत अमेरिका से संकीर्ण है।",
          te: "అన్ని సృజనాత్మక అవుట్‌పుట్ కోసం 'వర్క్ ఫర్ హైర్' దావా చేసే ఫ్రీలాన్స్ కాంట్రాక్టులు — భారతదేశం యొక్క వర్క్-ఫర్-హైర్ సిద్ధాంతం US కంటే సంకుచితంగా ఉంటుంది.",
        },
        penalty: {
          en: "Civil: injunction + damages. Criminal: imprisonment up to 3 years + fine up to ₹2 lakh.",
          hi: "दीवानी: निषेधाज्ञा + हर्जाना। आपराधिक: 3 साल तक कारावास + ₹2 लाख तक जुर्माना।",
          te: "సివిల్: నిషేధాజ్ఞ + నష్టపరిహారం. నేర: 3 సంవత్సరాల వరకు జైలు + ₹2 లక్షల వరకు జరిమానా.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1526",
      },
      {
        name: "Competition Act, 2002",
        year: 2002,
        short: {
          en: "Prohibits anti-competitive agreements — relevant in distribution, franchise, and supply contracts.",
          hi: "प्रतिस्पर्धा-विरोधी समझौतों पर प्रतिबंध लगाता है — वितरण, फ्रेंचाइज़ और आपूर्ति अनुबंधों में प्रासंगिक।",
          te: "పోటీ వ్యతిరేక ఒప్పందాలను నిషేధిస్తుంది — పంపిణీ, ఫ్రాంచైజ్ మరియు సరఫరా కాంట్రాక్టులలో సంబంధితం.",
        },
        governs: {
          en: [
            "Distribution agreements",
            "Franchise contracts",
            "Supply contracts",
            "Licensing agreements",
          ],
          hi: [
            "वितरण समझौते",
            "फ्रेंचाइज़ अनुबंध",
            "आपूर्ति अनुबंध",
            "लाइसेंसिंग समझौते",
          ],
          te: [
            "పంపిణీ ఒప్పందాలు",
            "ఫ్రాంచైజ్ కాంట్రాక్టులు",
            "సరఫరా కాంట్రాక్టులు",
            "లైసెన్సింగ్ ఒప్పందాలు",
          ],
        },
        keySections: [
          {
            section: "S.3",
            title: "Anti-competitive agreements",
            detail:
              "Agreements that fix prices, limit production, share markets, or bid-rig are void.",
          },
          {
            section: "S.4",
            title: "Abuse of dominant position",
            detail:
              "Dominant companies cannot impose unfair conditions or predatory pricing.",
          },
          {
            section: "S.27",
            title: "Penalties",
            detail:
              "CCI can impose fines up to 10% of average annual turnover for 3 preceding years.",
          },
        ],
        watchFor: {
          en: "Exclusive dealing clauses preventing you from buying from or selling to competitors, resale price maintenance where supplier dictates your selling price.",
          hi: "विशेष व्यापार शर्तें जो आपको प्रतिस्पर्धियों से खरीदने या बेचने से रोकती हैं, पुनः बिक्री मूल्य रखरखाव जहां आपूर्तिकर्ता आपकी बिक्री मूल्य तय करता है।",
          te: "పోటీదారుల నుండి కొనడం లేదా వారికి అమ్మడాన్ని నిరోధించే ఎక్స్‌క్లూజివ్ డీలింగ్ నిబంధనలు.",
        },
        penalty: {
          en: "Fines up to 10% of average turnover + cease and desist orders. Up to 3 years imprisonment for cartel formation.",
          hi: "औसत टर्नओवर का 10% तक जुर्माना + संचालन बंद करने के आदेश। कार्टेल बनाने के लिए 3 साल तक कारावास।",
          te: "సగటు టర్నోవర్‌లో 10% వరకు జరిమానాలు. కార్టెల్ ఏర్పాటుకు 3 సంవత్సరాల వరకు జైలు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1407",
      },
    ],
  },
  {
    category: "Environment",
    color: "#2E7D32",
    icon: "🌿",
    laws: [
      {
        name: "Environment Protection Act, 1986",
        year: 1986,
        short: {
          en: "The umbrella environmental law — requires clearances for major projects and holds parties liable for environmental damage.",
          hi: "पर्यावरण संरक्षण की छत्र कानून — प्रमुख परियोजनाओं के लिए मंजूरी की आवश्यकता और पर्यावरणीय क्षति के लिए पक्षों को उत्तरदायी ठहराता है।",
          te: "పర్యావరణ రక్షణ యొక్క గొడుగు చట్టం — ప్రధాన ప్రాజెక్టులకు అనుమతులు అవసరం మరియు పర్యావరణ నష్టానికి పక్షాలను బాధ్యులుగా చేస్తుంది.",
        },
        governs: {
          en: [
            "Land purchase agreements",
            "Industrial leases",
            "Construction contracts",
            "Infrastructure contracts",
          ],
          hi: [
            "भूमि खरीद समझौते",
            "औद्योगिक पट्टे",
            "निर्माण अनुबंध",
            "बुनियादी ढांचे के अनुबंध",
          ],
          te: [
            "భూమి కొనుగోలు ఒప్పందాలు",
            "పారిశ్రామిక లీజులు",
            "నిర్మాణ కాంట్రాక్టులు",
            "మౌలిక సదుపాయాల కాంట్రాక్టులు",
          ],
        },
        keySections: [
          {
            section: "S.3",
            title: "Powers of Central Government",
            detail:
              "Government can restrict industries in sensitive areas and set environmental standards — these override contractual rights.",
          },
          {
            section: "S.5",
            title: "Power to give directions",
            detail:
              "Government can direct closure of any industry — contracts cannot override this.",
          },
          {
            section: "S.15",
            title: "Penalties",
            detail:
              "Imprisonment up to 5 years and/or fine up to ₹1 lakh. Daily fine of ₹5,000 for continuing violation.",
          },
        ],
        watchFor: {
          en: "Land purchase contracts claiming 'clear title' in environmentally restricted zones. Industrial lease agreements that transfer all environmental liability to tenant — both parties can face liability.",
          hi: "पर्यावरणीय प्रतिबंधित क्षेत्रों में 'स्पष्ट शीर्षक' का दावा करने वाले भूमि खरीद अनुबंध। औद्योगिक पट्टा समझौते जो सभी पर्यावरणीय दायित्व को किरायेदार को हस्तांतरित करते हैं।",
          te: "పర్యావరణ పరిమిత జోన్లలో 'స్పష్టమైన యాజమాన్యం' దావా చేసే భూ కొనుగోలు కాంట్రాక్టులు. అన్ని పర్యావరణ బాధ్యతను అద్దెదారుకు మార్చే పారిశ్రామిక లీజు ఒప్పందాలు.",
        },
        penalty: {
          en: "Imprisonment up to 5 years + fine up to ₹1 lakh. After 1 year of continuing violation: additional 7 years imprisonment.",
          hi: "5 साल तक कारावास + ₹1 लाख तक जुर्माना। 1 साल तक उल्लंघन जारी रहने पर: अतिरिक्त 7 साल कारावास।",
          te: "5 సంవత్సరాల వరకు జైలు + ₹1 లక్ష వరకు జరిమానా. 1 సంవత్సరం కొనసాగే ఉల్లంఘన తర్వాత: అదనపు 7 సంవత్సరాల జైలు.",
        },
        officialUrl: "https://www.indiacode.nic.in/handle/123456789/1593",
      },
    ],
  },
];

export default LAWS;

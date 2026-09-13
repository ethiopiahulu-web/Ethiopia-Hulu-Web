import { ResearchService, TrainingCourse } from '../types';

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'spss-mastery',
    software: 'SPSS',
    popular: true,
    title: {
      en: 'IBM SPSS Statistics: Complete Practical Mastery',
      am: 'IBM SPSS Statistics፡ የተሟላ የተግባር ስልጠና (ከጀማሪ እስከ ከፍተኛ)',
    },
    subtitle: {
      en: 'The industry-standard statistical software for social sciences, business, health, and academic research.',
      am: 'ለማህበራዊ ሳይንስ፣ ለጤና፣ ለቢዝነስና ለአካዳሚክ ጥናት ዋናው የስታትስቲክስ ሶፍትዌር።',
    },
    level: {
      en: 'Beginner to Advanced',
      am: 'ከጀማሪ እስከ ከፍተኛ ደረጃ',
    },
    duration: {
      en: '3 Weeks (Weekend / Evening)',
      am: '3 ሳምንት (ቅዳሜ-እሁድ ወይም የማታ)',
    },
    hours: 24,
    priceETB: 3500,
    icon3D: 'spss',
    features: {
      en: [
        'Hands-on practice with authentic Ethiopian survey datasets',
        'Step-by-step interpretation of SPSS outputs into APA format',
        'Official certificate of completion + session video recordings',
        'Free 1-on-1 consultation on your personal thesis dataset',
      ],
      am: [
        'በኢትዮጵያ እውነተኛ የጥናት ዳታዎች ላይ የተመሰረተ ተግባራዊ ልምምድ',
        'የSPSS ውጤቶችን (Outputs) በቀላሉ የመተንተንና በAPA ፎርማት የማዘጋጀት ዘዴ',
        'ህጋዊ የብቃት ማረጋገጫ ሰርተፊኬት እና የተቀረጹ ቪዲዮዎች',
        'በራስዎ የቴሲስ ዳታ ላይ ነጻ የ1-ለ-1 ማማከር እድል',
      ],
    },
    syllabus: {
      en: [
        'Variable definition, data coding, cleaning, and managing missing values',
        'Descriptive statistics (Mean, Std Dev, Frequencies, Cross-tabulations)',
        'Parametric & Non-parametric tests (Independent t-test, Paired t-test, Mann-Whitney U)',
        'ANOVA (One-way, Two-way, Post-Hoc comparisons)',
        'Correlation Analysis (Pearson, Spearman) & Multicollinearity diagnosis',
        'Multiple Linear Regression & Binary Logistic Regression modeling',
        'Scale Reliability analysis (Cronbach’s Alpha) & Exploratory Factor Analysis (EFA)',
      ],
      am: [
        'የዳታ ማስገባት፣ ኮድ ማድረግ፣ ዳታ ማጽዳት (Data Cleaning) እና የተጓደሉ መረጃዎችን ማስተካከል',
        'ገላጭ ስታትስቲክስ (Descriptive Stats, ድግግሞሽ እና ክሮስ-ታቡሌሽን)',
        'የቲ-ቴስት (T-Test) እና ተዛማጅ የስታትስቲክስ ሙከራዎች',
        'የአኖቫ (ANOVA) ትንተና እና የልዩነቶች ማነጻጸሪያ',
        'የኮሪሌሽን (Correlation) ትንተና እና ተያያዥነት መለኪያ',
        'መልቲፕል ሊኒየር እና ባይነሪ ሎጂስቲክ ሪግሬሽን (Regression Modeling)',
        'የመጠይቅ አስተማማኝነት መፈተሻ (Cronbach’s Alpha) እና ፋክተር አናሊሲስ',
      ],
    },
  },
  {
    id: 'stata-econometrics',
    software: 'STATA',
    popular: true,
    title: {
      en: 'STATA for Econometrics & Panel Data Analysis',
      am: 'STATA ለኢኮኖሜትሪክስ እና ፓነል ዳታ ትንተና',
    },
    subtitle: {
      en: 'Specialized for Economics, Finance, Agricultural Economics, and Macroeconomic modeling.',
      am: 'ለኢኮኖሚክስ፣ ለፋይናንስ፣ ለግብርና ኢኮኖሚክስ እና ማክሮ ኢኮኖሚክስ ጥናቶች ተመራጭ።',
    },
    level: {
      en: 'Intermediate to Advanced',
      am: 'መካከለኛ እስከ ከፍተኛ',
    },
    duration: {
      en: '3 Weeks',
      am: '3 ሳምንት',
    },
    hours: 24,
    priceETB: 4000,
    icon3D: 'stata',
    features: {
      en: [
        'Do-file programming for reproducible research and automated analysis',
        'Fixed Effects vs. Random Effects (Hausman test interpretation)',
        'Time-series stationarity testing (ADF, Phillips-Perron) & ARDL / VECM',
        'Post-estimation diagnostic tests (Heteroskedasticity, Autocorrelation)',
      ],
      am: [
        'የDo-file ፕሮግራሚንግ እና አውቶሜትድ የዳታ አያያዝ',
        'የፊክስድ ኢፌክትስ (Fixed) እና ራንደም ኢፌክትስ (Random Effects) ሞዴሊንግ',
        'የታይም ሲሪየስ (Time-Series) ስቴሽነሪቲ እና ARDL ሞዴሎች',
        'የሞዴል ትክክለኛነት መመርመሪያ ፈተናዎች (Diagnostic Tests)',
      ],
    },
    syllabus: {
      en: [
        'STATA command syntax and do-file workflow management',
        'Cross-sectional regression diagnostics and robust standard errors',
        'Panel data setup, xtreg models, and random/fixed decision criteria',
        'Limited dependent variables: Probit, Logit, and Tobit models',
        'Time-series forecasting, unit root tests, and Co-integration',
      ],
      am: [
        'የSTATA ትዕዛዛት አገባብ (Syntax) እና የDo-file አሰራር',
        'ክሮስ-ሴክሽናል ሪግሬሽን እና ዳያግኖስቲክስ',
        'የፓነል ዳታ አደረጃጀት እና የxtreg ሞዴሎች አሰራር',
        'ፕሮቢት፣ ሎጂት እና ቶቢት (Probit, Logit, Tobit) ሞዴሎች',
        'የታይም-ሲሪየስ ትንበያ እና ኮ-ኢንተግሬሽን ትንተና',
      ],
    },
  },
  {
    id: 'nvivo-qualitative',
    software: 'NVivo',
    title: {
      en: 'Qualitative & Mixed Methods Research with NVivo',
      am: 'የጥራት (Qualitative) መረጃ ትንተና በNVivo',
    },
    subtitle: {
      en: 'The definitive tool for coding interviews, focus group discussions (FGD), and literature.',
      am: 'ቃለ-መጠይቆችን፣ የቡድን ውይይቶችን (FGD) እና ጽሁፎችን ለመተንተን የተዘጋጀ።',
    },
    level: {
      en: 'All Levels',
      am: 'ለሁሉም ደረጃ',
    },
    duration: {
      en: '2 Weeks',
      am: '2 ሳምንት',
    },
    hours: 16,
    priceETB: 3000,
    icon3D: 'nvivo',
    features: {
      en: [
        'Audio/text interview transcription importing and automated thematic coding',
        'Visual matrix queries, hierarchy charts, and word frequency clouds',
        'Triangulation of qualitative themes with quantitative findings',
      ],
      am: [
        'የቃለ መጠይቅ ድምጾችንና ጽሁፎችን ማስገባትና በጭብጥ (Themes) መከፋፈል',
        'የቪዥዋል ማትሪክስ፣ የሃይራርኪ ቻርቶች እና የወርድ ክላውድ ዝግጅት',
        'የጥራት እና የቁጥር መረጃዎችን አቀናጅቶ የማቅረብ ዘዴ (Mixed Methods)',
      ],
    },
    syllabus: {
      en: [
        'Setting up NVivo projects, cases, nodes, and classifications',
        'Inductive vs Deductive coding strategies for thematic analysis',
        'Exploring relationships via Cross-tab and Matrix Coding queries',
        'Visualizing research results for dissertation chapters',
      ],
      am: [
        'የNVivo ፕሮጀክት አከፋፈት፣ ኖዶች እና ምድቦች (Nodes & Classifications)',
        'ጭብጥ ተኮር ኮዲንግ (Thematic Analysis Coding)',
        'የተለያዩ ተለዋዋጮችን በCross-tab ማገናኘት',
        'የምርምር ውጤቶችን በግራፍና በቻርት የማቅረብ ዘዴ',
      ],
    },
  },
  {
    id: 'r-python-datascience',
    software: 'R & Python',
    title: {
      en: 'R & Python for Statistical Computing & Visualization',
      am: 'R እና Python ለስታትስቲክስና ዳታ ሳይንስ',
    },
    subtitle: {
      en: 'Open-source statistical programming with R (tidyverse, ggplot2) and Python for researchers.',
      am: 'በአለም አቀፍ ደረጃ ተወዳጅ የሆኑት R እና Python ለዳታ ትንተና እና ሳይንሳዊ ግራፎች።',
    },
    level: {
      en: 'Intermediate',
      am: 'መካከለኛ',
    },
    duration: {
      en: '4 Weeks',
      am: '4 ሳምንት',
    },
    hours: 28,
    priceETB: 4500,
    icon3D: 'python',
    features: {
      en: [
        'Publication-ready plots with ggplot2 and seaborn',
        'Automated reproducible reports using RMarkdown / Quarto',
        'Machine learning basics for predictive classification',
      ],
      am: [
        'ለጆርናል ህትመት ብቁ የሆኑ ውብ ግራፎችና ቻርቶች ዝግጅት',
        'አውቶሜትድ ሪፖርት አዘገጃጀት (RMarkdown / Quarto)',
        'የማሽን ለርኒንግ (Machine Learning) መሰረታዊ መተግበሪያዎች',
      ],
    },
    syllabus: {
      en: [
        'RStudio & Jupyter Notebook workflow setup',
        'Data wrangling using dplyr, tidyr, and pandas',
        'Advanced statistical testing and multivariate visualization',
        'Predictive regression modeling and performance evaluation',
      ],
      am: [
        'የRStudio እና Jupyter አጠቃቀም ቅድመ ዝግጅት',
        'የዳታ ማስተካከል ስራዎች በdplyr እና pandas',
        'የላቁ ስታትስቲካል ሙከራዎች እና ቪዥዋላይዜሽን',
        'የትንበያ ሞዴሎች ግንባታ እና ግምገማ',
      ],
    },
  },
  {
    id: 'sem-smartpls',
    software: 'SmartPLS & Amos',
    title: {
      en: 'Structural Equation Modeling (PLS-SEM & CB-SEM)',
      am: 'ስትራክቸራል ኢኩዌሽን ሞዴሊንግ (SmartPLS እና AMOS)',
    },
    subtitle: {
      en: 'Model complex relationships, mediation, and moderation in Management, Marketing, and Psychology.',
      am: 'ውስብስብ ግንኙነቶችን፣ ሚዲዬሽን እና ሞደሬሽን ተለዋዋጮችን ለመተንተን የሚያስችል ስልጠና።',
    },
    level: {
      en: 'Advanced',
      am: 'ከፍተኛ ደረጃ',
    },
    duration: {
      en: '2 Weeks',
      am: '2 ሳምንት',
    },
    hours: 18,
    priceETB: 3800,
    icon3D: 'sem',
    features: {
      en: [
        'Evaluation of Measurement Model (Reliability, Convergent & Discriminant Validity)',
        'Evaluation of Structural Model (R-squared, f-squared, Path coefficients)',
        'Testing Mediation and Moderation effects with Bootstrapping',
      ],
      am: [
        'የመለኪያ ሞዴል ትክክለኛነት ማረጋገጫ (Reliability & Validity)',
        'የስትራክቸራል ሞዴል ውጤቶች (R², Path Coefficients)',
        'የሚዲዬሽንና ሞደሬሽን (Mediation & Moderation) ሙከራዎች',
      ],
    },
    syllabus: {
      en: [
        'Foundations of Structural Equation Modeling (SEM)',
        'PLS-SEM vs CB-SEM model selection criteria',
        'Formative vs Reflective construct specifications',
        'Bootstrapping procedures and reporting guidelines for journals',
      ],
      am: [
        'የስትራክቸራል ኢኩዌሽን ሞዴሊንግ መሰረቶች',
        'የPLS-SEM እና CB-SEM ልዩነቶችና መምረጫ መንገዶች',
        'የቡትስትራፒንግ (Bootstrapping) አሰራርና የውጤት አቀራረብ',
      ],
    },
  },
  {
    id: 'kobo-mobile-collection',
    software: 'Kobo & Epi Info',
    title: {
      en: 'Mobile Data Collection with KoboToolbox & ODK',
      am: 'የሞባይል ዳታ መሰብሰቢያ ዘዴዎች (KoboToolbox & ODK)',
    },
    subtitle: {
      en: 'Design digital questionnaires for field surveys, GPS tracking, and instant automated cloud export.',
      am: 'ለአካል ላይ ጥናት ዲጂታል መጠይቆችን በሞባይል ማዘጋጀት እና ፈጣን የክላውድ ዳታ አሰባሰብ።',
    },
    level: {
      en: 'Beginner to Intermediate',
      am: 'ጀማሪ እስከ መካከለኛ',
    },
    duration: {
      en: '10 Days',
      am: '10 ቀናት',
    },
    hours: 14,
    priceETB: 2800,
    icon3D: 'data',
    features: {
      en: [
        'XLSForm syntax authoring and advanced skip logic / validation rules',
        'Offline mobile deployment via KoboCollect / ODK Collect android apps',
        'Direct export to Excel, SPSS, and live dashboard mapping',
      ],
      am: [
        'የXLSForm አዘገጃጀት እና የጥያቄ መዝለያ (Skip Logic) ህጎች',
        'ኢንተርኔት በሌለበት አካባቢ በስልክ መረጃ የመሰብሰብ ዘዴ',
        'መረጃዎችን በቀጥታ ወደ Excel እና SPSS ኤክስፖርት ማድረግ',
      ],
    },
    syllabus: {
      en: [
        'Creating forms in KoboToolbox web builder vs XLSForm Excel templates',
        'Cascading selects, GPS location coordinates, and photo uploads',
        'Quality control, enumerator management, and data cleaning pipelines',
      ],
      am: [
        'በKoboToolbox ፎርሞችን ማዘጋጀት',
        'የGPS መገኛ፣ ፎቶዎች እና ድምጾችን ማካተት',
        'የመረጃ ሰብሳቢዎችን መከታተልና ጥራትን መቆጣጠር',
      ],
    },
  },
];

export const RESEARCH_SERVICES: ResearchService[] = [
  {
    id: 'thesis-guidance',
    category: 'thesis',
    title: {
      en: 'Thesis & Dissertation Comprehensive Advisory',
      am: 'የቴሲስና ዲሰርቴሽን የተሟላ የማማከር አገልግሎት',
    },
    shortDesc: {
      en: 'Personalized mentoring from topic selection and research problem formulation to final chapter compilation and mock defense coaching.',
      am: 'ከጥናት ርዕስ መረጣ እና የጥናት ጥያቄ ቀረጻ ጀምሮ እስከ 5ኛው ምዕራፍ እና የዲፌንስ (Defense) ዝግጅት ድረስ የቅርብ እገዛ።',
    },
    deliverables: {
      en: [
        'Refinement of Research Problem, Objectives, and Hypotheses',
        'Literature Review matrix and theoretical/conceptual framework',
        'Methodology structuring (Design, Population, Sampling, Instruments)',
        'Results presentation, Discussion aligned with empirical literature',
        'Mock defense presentation slides and anticipated examiner Q&A prep',
      ],
      am: [
        'የጥናቱን ችግር (Statement of Problem) እና አላማዎችን ማስተካከል',
        'የስነ-ጽሁፍ ዳሰሳ (Literature Review) እና ኮንሴፕቹዋል ፍሬምወርክ',
        'የጥናቱ ዘዴ (Methodology) ማደራጀትና የናሙና አወሳሰድ ቀመር',
        'የጥናት ውጤቶች አቀራረብና ከቀደምት ጥናቶች ጋር ማነጻጸር',
        'የዲፌንስ ፓወርፖይንት (Slides) እና የፈታኝ ጥያቄዎች ዝግጅት',
      ],
    },
    toolsUsed: ['SPSS', 'STATA', 'Mendeley', 'Turnitin'],
    turnaroundTime: {
      en: 'Phased (1 to 3 Weeks per Milestone)',
      am: 'በደረጃ (በየደረጃው ከ1 እስከ 3 ሳምንታት)',
    },
    estimatedPriceETB: 5000,
    icon3D: 'graduation',
  },
  {
    id: 'statistical-data-analysis',
    category: 'data-analysis',
    title: {
      en: 'Statistical Data Analysis & Hypothesis Testing',
      am: 'የስታትስቲክስ ዳታ ትንተና እና የሃይፖቴሲስ ፍተሻ',
    },
    shortDesc: {
      en: 'Send us your raw survey or secondary dataset. We clean, code, execute advanced statistical tests in SPSS/STATA, and deliver APA tables with thorough narratives.',
      am: 'የሰበሰቡትን ጥሬ መረጃ ይላኩልን፤ አጽድተን፣ በSPSS ወይም STATA ፈትሸን፣ በAPA ቴብልና በተሟላ ገላጭ ማብራሪያ እናስረክብዎታለን።',
    },
    deliverables: {
      en: [
        'Data cleaning, missing value imputation, and normality checks',
        'Descriptive statistics tables (Mean, Standard Deviation, Percentages)',
        'Inferential statistics (Regression, ANOVA, T-Tests, Chi-Square, Correlation)',
        'Reliability testing (Cronbach’s Alpha) & Factor Analysis results',
        'Complete Chapter 4 draft written in polished academic English/Amharic',
      ],
      am: [
        'ዳታ ማጽዳት፣ የተዛቡ መረጃዎችን ማስተካከልና ኖርማሊቲ ፍተሻ',
        'ገላጭ ስታትስቲክስ ቴብሎች (ድግግሞሽ፣ አማካይ እና መቶኛ)',
        'ኢንፈረንሻል ስታትስቲክስ (ሪግሬሽን፣ አኖቫ፣ ቲ-ቴስት፣ ካይ-ስኩዌር)',
        'የመጠይቅ አስተማማኝነት (Cronbach Alpha) እና የፋክተር ውጤቶች',
        'የ4ኛውን ምዕራፍ የተሟላ ረቂቅ ጽሁፍ በAPA ስታንዳርድ',
      ],
    },
    toolsUsed: ['IBM SPSS 29', 'STATA 18', 'SmartPLS 4'],
    turnaroundTime: {
      en: '3 to 7 Business Days',
      am: 'ከ3 እስከ 7 የስራ ቀናት',
    },
    estimatedPriceETB: 4500,
    icon3D: 'chart',
  },
  {
    id: 'proposal-formulation',
    category: 'proposal',
    title: {
      en: 'Research Proposal & Methodology Structuring',
      am: 'የምርምር ፕሮፖዛል እና ሜተዶሎጂ ዝግጅት',
    },
    shortDesc: {
      en: 'Develop an impenetrable research proposal ready for university approval or institutional research grant funding.',
      am: 'በዩኒቨርሲቲው ወይም በፈንድ ሰጪው አካል በቀላሉ ተቀባይነት የሚያገኝ ጥራት ያለው የፕሮፖዛል ሰነድ ዝግጅት።',
    },
    deliverables: {
      en: [
        'Problem Statement justification with recent citations and empirical gaps',
        'Sampling size determination (Yamane, Cochran, or Krejcie-Morgan formulas)',
        'Operational definition of variables and measurement indicators',
        'Ethical clearance documentation and research timeline/budget',
      ],
      am: [
        'አሳማኝ የሆነ የችግሩ መግለጫ (Statement of the Problem) ከወቅታዊ መረጃዎች ጋር',
        'የናሙና ብዛት መወሰኛ ሳይንሳዊ ቀመሮች (Yamane, Cochran Formulas)',
        'የተለዋዋጮች ተግባራዊ ትርጓሜ (Operationalization of Variables)',
        'የስነ-ምግባር ደንብ (Ethical Considerations) እና የጊዜ ሰሌዳ',
      ],
    },
    toolsUsed: ['APA 7th Edition', 'Zotero', 'Mendeley'],
    turnaroundTime: {
      en: '5 to 10 Business Days',
      am: 'ከ5 እስከ 10 የስራ ቀናት',
    },
    estimatedPriceETB: 3500,
    icon3D: 'document',
  },
  {
    id: 'questionnaire-design',
    category: 'questionnaire',
    title: {
      en: 'Questionnaire Design, Translation & Pilot Testing',
      am: 'የጥናት መጠይቅ ዝግጅት፣ ትርጉም እና ፓይለት ቴስት',
    },
    shortDesc: {
      en: 'Formulate valid, reliable measurement scales in English and Amharic, with expert review for construct validity.',
      am: 'ጥናትዎ የሚፈልገውን ትክክለኛ መረጃ የሚያስገኙ መጠይቆችን በእንግሊዝኛ እና በአማርኛ ማዘጋጀትና ማረጋገጥ።',
    },
    deliverables: {
      en: [
        '5-point or 7-point Likert scale instruments adapted from validated literature',
        'Professional bilingual English to Amharic (and reverse) translation',
        'KoboToolbox / Google Forms digital online survey deployment',
        'Pre-test analysis of 20-30 pilot responses for reliability index',
      ],
      am: [
        'ከአለም አቀፍ ደረጃዎች ጋር የተጣጣሙ የላይከርት ስኬል (Likert Scale) መጠይቆች',
        'ጥራት ያለው የእንግሊዝኛ-አማርኛ ትርጉም',
        'መጠይቁን በKoboToolbox ወይም Google Forms ኦንላይን የማዘጋጀት ስራ',
        'የ20-30 ተጠቃሚዎች የቅድመ-ሙከራ (Pilot Test) ዳታ ትንተና',
      ],
    },
    toolsUsed: ['KoboToolbox', 'Google Forms', 'SPSS Reliability'],
    turnaroundTime: {
      en: '3 to 5 Business Days',
      am: 'ከ3 እስከ 5 የስራ ቀናት',
    },
    estimatedPriceETB: 2500,
    icon3D: 'questionnaire',
  },
  {
    id: 'journal-publication',
    category: 'publication',
    title: {
      en: 'Journal Article Extraction & Plagiarism Reduction',
      am: 'የጆርናል አርቲክሌ ዝግጅትና የፕላጃሪዝም (Plagiarism) ቅነሳ',
    },
    shortDesc: {
      en: 'Convert your 100-page thesis into a concise, peer-reviewed manuscript and reduce Turnitin similarity scores below university thresholds.',
      am: 'ትልቁን የቴሲስ ሰነድ ለጆርናል ህትመት በሚመጥን መልኩ ማሳጠር እና የTurnitin ተመሳሳይነት ውጤትን (Similarity Score) መቀነስ።',
    },
    deliverables: {
      en: [
        'Extraction of 5,000-7,000 word manuscript tailored to targeted journal style',
        'Turnitin similarity reduction through professional academic paraphrasing',
        'Reference formatting in APA, Harvard, Vancouver, or IEEE styles',
        'Response letter addressing peer-reviewer comments',
      ],
      am: [
        'ለታለመው ጆርናል የሚመጥን ከ5,000-7,000 ቃላት ያሉት ጽሁፍ ማዘጋጀት',
        'የተርኒቲን (Turnitin) ውጤትን ከ15% በታች የማውረድ ስራ',
        'የማጣቀሻዎች (References) አቀማመጥ በAPA፣ Harvard ወይም Vancouver ማስተካከል',
        'ከጆርናል ገምጋሚዎች ለሚመጡ ጥያቄዎች ምላሽ የማዘጋጀት ድጋፍ',
      ],
    },
    toolsUsed: ['Turnitin', 'Grammarly Premium', 'EndNote'],
    turnaroundTime: {
      en: '5 to 8 Business Days',
      am: 'ከ5 እስከ 8 የስራ ቀናት',
    },
    estimatedPriceETB: 4000,
    icon3D: 'analytics',
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Dr. Dawit Haile',
    nameAm: 'ዶ/ር ዳዊት ኃይሌ',
    title: 'Assistant Professor & Public Health Researcher',
    titleAm: 'ረዳት ፕሮፌሰር እና የህዝብ ጤና ተመራማሪ',
    institution: 'Addis Ababa University',
    institutionAm: 'አዲስ አበባ ዩኒቨርሲቲ',
    quote: {
      en: 'The SPSS and STATA advanced training provided by Ethiopia Hulu was exceptional. They don’t just teach where to click; they teach the mathematical logic and how to interpret regression and logistic odds ratios with confidence.',
      am: 'በኢትዮጵያ ሁሉ የወሰድኩት የSPSS እና STATA ተግባራዊ ስልጠና እጅግ ድንቅ ነበር። ሶፍትዌሩን የት ጋር እንደሚነካ ብቻ ሳይሆን የስታትስቲክስ ውጤቶችን እንዴት በትክክል መተርጎም እንደምንችል አስተምረውናል።',
    },
    rating: 5,
    software: 'SPSS & STATA',
  },
  {
    id: 't2',
    name: 'Meron Tadesse, MBA',
    nameAm: 'ሜሮን ታደሰ (MBA)',
    title: 'Masters Graduate in Finance & Banking',
    titleAm: 'የፋይናንስና ባንኪንግ የማስተርስ ተመራቂ',
    institution: 'St. Mary’s University',
    institutionAm: 'ቅድስት ማርያም ዩኒቨርሲቲ',
    quote: {
      en: 'I was struggling with my Chapter 4 data analysis and panel regression for my Master’s thesis. Ethiopia Hulu guided me through data cleaning and Hausman testing in STATA. I defended with an "Excellent" grade!',
      am: 'ለማስተርስ ቴሲሴ የምዕራፍ 4 ዳታ ትንተና በጣም ተቸግሬ ነበር። የኢትዮጵያ ሁሉ ባለሙያዎች ዳታዬን በማስተካከልና በSTATA በመተንተን ከፍተኛ እገዛ አድርገውልኝ በ"እጅግ በጣም ጥሩ" ውጤት ተመርቄአለሁ!',
    },
    rating: 5,
    software: 'STATA & Thesis Advisory',
  },
  {
    id: 't3',
    name: 'Binyam Assefa',
    nameAm: 'ቢንያም አሰፋ',
    title: 'M&E Specialist at International NGO',
    titleAm: 'የክትትልና ግምገማ (M&E) ባለሙያ በአለም አቀፍ NGO',
    institution: 'Development Sector, Hawassa',
    institutionAm: 'የልማት ዘርፍ፣ ሃዋሳ',
    quote: {
      en: 'We enrolled our field team in the KoboToolbox and SPSS analysis course. The payment process via Telebirr was seamless, and the trainer tailored every session to our real humanitarian survey datasets.',
      am: 'የመረጃ ሰብሳቢ ቡድናችንን በKoboToolbox እና SPSS ስልጠና አስመዝግበን ነበር። ክፍያውን በቴሌብር በቀላሉ ፈጽመን ስልጠናውን ጀመርን፤ ለሰብአዊ ስራዎቻችን እጅግ ጠቃሚ ሆኖ አግኝተነዋል።',
    },
    rating: 5,
    software: 'Kobo & SPSS',
  },
];

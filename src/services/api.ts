export interface PageContent {
  title: string;
  subtitle?: string;
  content?: string;
  sections?: any[];
}

const db = {
  home: {
    hero: {
      title: "Trust, Verified.",
      subtitle: "Verifynex is a leading Background Verification Group (BVG). We empower companies to make confident hiring decisions with comprehensive, accurate, and fast background checks.",
      cta: "Get Started Today",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    aboutPreview: {
      title: "Who We Are",
      content: "Verifynex is a premier Background Verification Group dedicated to providing exhaustive screening solutions. Established with a vision to build trust in the corporate ecosystem, we leverage advanced technology and deep expertise to deliver reliable verification reports.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800&h=600"
    },
    servicesPreview: {
      title: "Our Core Services",
      subtitle: "Comprehensive screening solutions tailored to your industry needs.",
      services: [
        { id: "emp", title: "Employment Verification", desc: "Verify past employment history, roles, and performance.", icon: "Briefcase" },
        { id: "edu", title: "Education Verification", desc: "Authenticate degrees, diplomas, and certifications directly from institutions.", icon: "GraduationCap" },
        { id: "crim", title: "Criminal Record Check", desc: "Thorough screening of local and national criminal databases.", icon: "ShieldAlert" },
        { id: "addr", title: "Address Verification", desc: "Physical and digital verification of residential addresses.", icon: "MapPin" }
      ]
    },
    whyChooseUs: {
      title: "Why Choose Verifynex?",
      reasons: [
        { title: "Unmatched Accuracy", desc: "Our multi-tier verification process ensures 99.9% accuracy in all reports." },
        { title: "Fast Turnaround", desc: "Get comprehensive reports in record time without compromising quality." },
        { title: "Data Security", desc: "Bank-grade encryption and strict compliance with data protection laws." },
        { title: "Global Reach", desc: "Extensive network covering urban and remote locations globally." }
      ]
    },
    established: {
      title: "Our Legacy",
      content: "Established in New York, Verifynex has grown from a regional verification agency to a trusted national partner for Fortune 500 companies and growing startups alike. Our journey is defined by our unwavering commitment to truth and integrity."
    },
    process: {
      title: "How It Works",
      subtitle: "A streamlined, transparent verification process.",
      steps: [
        { step: "01", title: "Request Initiation", desc: "Submit candidate details securely through our portal or API." },
        { step: "02", title: "Data Collection", desc: "We gather necessary documents and consent directly from the candidate." },
        { step: "03", title: "Verification", desc: "Our experts and automated systems verify the data across multiple sources." },
        { step: "04", title: "Report Delivery", desc: "Receive a comprehensive, color-coded report detailing all findings." }
      ]
    },
    industries: {
      title: "Industries We Serve",
      subtitle: "Tailored verification protocols for every sector.",
      list: [
        { name: "Information Technology", icon: "Monitor" },
        { name: "Banking & Finance", icon: "Landmark" },
        { name: "Healthcare", icon: "HeartPulse" },
        { name: "Manufacturing", icon: "Factory" },
        { name: "Retail & E-commerce", icon: "ShoppingBag" },
        { name: "Education", icon: "BookOpen" },
        { name: "Construction", icon: "HardHat" }
      ]
    },
    stats: {
      items: [
        { value: "1M+", label: "Verifications Completed" },
        { value: "99.9%", label: "Accuracy Rate" },
        { value: "500+", label: "Corporate Clients" },
        { value: "24/7", label: "Support Available" }
      ]
    },
    testimonials: {
      title: "What Our Clients Say",
      reviews: [
        { quote: "Verifynex has completely transformed our hiring process. Their reports are incredibly detailed and always delivered on time.", author: "HR Director, NexaTech Solutions" },
        { quote: "The level of accuracy and the global reach they offer is unmatched. Highly recommended for any growing enterprise.", author: "Talent Acquisition Head, FinServe Global" },
        { quote: "Their API integration with our ATS was seamless. It saved us hundreds of hours of manual work.", author: "VP of Operations, RetailEdge Partners" },
        { quote: "We rely on Verifynex for all our cross-border hires. Their international background checks are thorough and compliant.", author: "Global HR Manager, Altus Finance" },
        { quote: "Exceptional service and quick turnaround times. They helped us scale our workforce securely.", author: "Director of People, CloudSync IT" },
        { quote: "The best background verification partner we've worked with. Their customer support is highly responsive.", author: "Operations Lead, Apex HR Consultancy" },
        { quote: "Verifynex's attention to detail in education verification has saved us from several bad hires.", author: "Recruitment Manager, EduTech Innovations" },
        { quote: "Their criminal record checks are exhaustive. We feel much safer with our new onboarding process.", author: "Security Officer, Prime Logistics" },
        { quote: "A truly global BVG. They handled our complex multi-country verification requests with ease.", author: "Head of Talent, Vertex Manufacturing" },
        { quote: "The dashboard is intuitive and makes tracking verification statuses incredibly easy.", author: "HR Business Partner, Quantum Health" },
        { quote: "Reliable, fast, and accurate. Verifynex is an integral part of our recruitment strategy.", author: "Chief People Officer, Stellar Dynamics" },
        { quote: "We appreciate their strict adherence to data privacy laws across different regions.", author: "Compliance Director, FinTrust Advisors" },
        { quote: "Their address verification process is robust and highly dependable.", author: "Onboarding Specialist, Urban Build Construction" },
        { quote: "Verifynex provides a level of transparency that is rare in this industry.", author: "VP of HR, Nexus Retail Group" },
        { quote: "The red-amber-green reporting system makes decision-making so much faster.", author: "Talent Acquisition Specialist, CyberNet Security" },
        { quote: "They consistently deliver high-quality reports within the promised SLAs.", author: "HR Manager, Horizon Energy" },
        { quote: "We've seen a significant drop in early attrition since partnering with Verifynex.", author: "Director of Operations, OmniStaffing" },
        { quote: "Their team is knowledgeable and always ready to assist with complex verification cases.", author: "Recruitment Coordinator, Global Trade Partners" },
        { quote: "Verifynex's technology platform is lightyears ahead of their competitors.", author: "CTO, InnovateTech" },
        { quote: "We value their commitment to ethical verification practices.", author: "Head of HR, EcoSolutions Inc." },
        { quote: "A seamless experience from start to finish. Highly professional team.", author: "HR Director, Apex Financial Services" },
        { quote: "Their reference checks provide deep insights that go beyond the resume.", author: "Talent Manager, Creative Minds Agency" },
        { quote: "Verifynex is our trusted partner for executive-level background screening.", author: "VP of Talent, Summit Leadership" },
        { quote: "They handle high-volume requests efficiently without compromising quality.", author: "Operations Manager, Swift Delivery Co." },
        { quote: "The integration with Workday was flawless. It has streamlined our entire workflow.", author: "HRIS Manager, Enterprise Solutions" },
        { quote: "We are impressed by their global network and local expertise in various countries.", author: "Global Mobility Manager, TechFrontiers" },
        { quote: "Verifynex provides peace of mind. We know our hires are thoroughly vetted.", author: "CEO, SecureNet Systems" },
        { quote: "Their reports are clear, concise, and actionable. Exactly what we need.", author: "HR Generalist, BlueWave Marine" },
        { quote: "A reliable partner that understands the unique needs of the healthcare sector.", author: "Director of Nursing, CarePlus Hospitals" },
        { quote: "We highly recommend Verifynex for their professionalism and accuracy.", author: "Managing Partner, LegalEdge Associates" }
      ]
    },
    cta: {
      title: "Ready to secure your workforce?",
      subtitle: "Join hundreds of companies that trust Verifynex for their background verification needs.",
      buttonText: "Contact Sales"
    }
  },
  about: {
    title: "About Verifynex",
    subtitle: "Building a Foundation of Trust",
    content: "Verifynex is a specialized Background Verification Group (BVG) headquartered in New York. We understand that a company's greatest asset is its people, and ensuring the integrity of your workforce is paramount. Our mission is to mitigate hiring risks by providing transparent, accurate, and timely background screening services.",
    mission: "To be the most trusted partner in background verification, enabling organizations to build secure and reliable teams.",
    vision: "A corporate world where every hire is made with absolute confidence and trust.",
    established: "Since our inception, we have conducted over 1 million verifications, serving clients across IT, BFSI, Healthcare, and Manufacturing sectors. Our deep roots in New York provide us with a strong operational base, while our technological capabilities allow us to serve clients globally.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200&h=600",
    values: {
      title: "Our Core Values",
      items: [
        { title: "Integrity", desc: "We uphold the highest ethical standards in every verification we conduct." },
        { title: "Transparency", desc: "Clear communication and honest reporting are the hallmarks of our service." },
        { title: "Innovation", desc: "Continuously adopting new technologies to improve accuracy and speed." },
        { title: "Confidentiality", desc: "Strict adherence to data privacy and protection protocols." }
      ]
    },
    technology: {
      title: "Technology & Security",
      content: "We employ state-of-the-art encryption and secure data storage solutions to protect sensitive candidate information. Our platform is ISO 27001 certified, ensuring that your data is handled with the utmost care and in compliance with global security standards. We utilize AI-driven algorithms to cross-reference databases rapidly, minimizing human error.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500"
    },
    network: {
      title: "Global Network",
      content: "While our roots are in New York, our reach is global. We have established a vast network of field agents, legal experts, and institutional contacts across every state. For international hires, we partner with trusted global agencies to ensure seamless cross-border verifications."
    },
    compliance: {
      title: "Compliance & Legal Adherence",
      content: "Navigating the complex landscape of employment law is our expertise. Verifynex ensures that every background check complies with local, state, and national regulations, including data protection laws. We guide our clients on obtaining proper consent and utilizing the reports legally."
    },
    approach: {
      title: "Our Client-Centric Approach",
      content: "We don't believe in one-size-fits-all. Every organization has unique risk profiles and hiring needs. Our team works closely with your HR department to design customized screening packages, establish clear SLAs, and provide a dedicated account manager for seamless communication."
    }
  },
  services: {
    title: "Comprehensive Verification Services",
    subtitle: "Tailored solutions to mitigate risk and ensure compliance.",
    servicesList: [
      {
        id: "employment",
        title: "Employment Verification",
        description: "We verify the candidate's previous employment details including tenure, designation, reason for leaving, and performance feedback directly from HR departments or authorized personnel.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800&h=500"
      },
      {
        id: "education",
        title: "Education Verification",
        description: "Authentication of educational qualifications, degrees, and certificates directly from universities, colleges, and educational boards to prevent credential fraud.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjZ-4GLhW3kqGHgbeihdCjhnjzedmx7Ewkw&s"
      },
      {
        id: "criminal",
        title: "Criminal Record Check",
        description: "Comprehensive screening through police records, court databases, and litigation searches to identify any past criminal history or pending cases.",
        image: "https://cdn.prod.website-files.com/63fef929dc32cb28d93d6c87/642422bfbaa60940acec0246_62fbe57d7e92a583766972c7_Everything%2520You%2520Need%2520to%2520Know%2520Criminal%2520Record%2520Checks.webp"
      },
      {
        id: "address",
        title: "Address Verification",
        description: "Physical site visits and digital verification to confirm the candidate's current and permanent residential addresses.",
        image: "https://img.freepik.com/free-vector/location_53876-25530.jpg?semt=ais_hybrid&w=740&q=80"
      },
      {
        id: "reference",
        title: "Reference Check",
        description: "Detailed interviews with professional references to gather insights on the candidate's work ethic, behavior, and professional capabilities.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EBoXajdUHy81baJQ1oO686X3xtTBND4RFA&s"
      },
      {
        id: "identity",
        title: "Identity Verification",
        description: "Validation of government-issued IDs such as PAN, Aadhaar, Passport, and Voter ID to ensure the candidate is who they claim to be.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUkhc2jD8TXHB2hsIhw2UUqm3MJ2G7bVQH9w&s"
      }
    ],
    packages: {
      title: "Service Packages",
      subtitle: "Choose the right level of screening for your roles.",
      options: [
        { name: "Standard", target: "Entry-level & Blue-collar", features: ["Identity Check", "Address Verification", "Basic Criminal Check"] },
        { name: "Professional", target: "Mid-level Management", features: ["Standard Package +", "Highest Education Check", "Last 2 Employments", "Detailed Criminal Check"] },
        { name: "Executive", target: "Senior Leadership & C-Suite", features: ["Professional Package +", "All Employments (10 yrs)", "Global Database Check", "Directorship Search", "Media & Reputation Check"] }
      ]
    },
    integration: {
      title: "Seamless ATS Integration",
      content: "Connect Verifynex directly with your Applicant Tracking System (ATS) or HRIS. We offer robust APIs and pre-built connectors for popular platforms like Workday, Greenhouse, and SAP SuccessFactors. Initiate checks and receive reports without ever leaving your dashboard."
    },
    turnaround: {
      title: "Industry-Leading Turnaround Times",
      items: [
        { check: "Identity & Database Checks", time: "Instant to 24 Hours" },
        { check: "Employment Verification", time: "3 to 5 Business Days" },
        { physical: "Physical Address Check", time: "4 to 7 Business Days" },
        { check: "Education Verification", time: "7 to 14 Business Days (Institution dependent)" }
      ]
    },
    sampleReports: {
      title: "Clear, Actionable Reports",
      content: "Our reports are designed for HR professionals. We use a simple Red, Amber, Green (RAG) color-coding system to highlight discrepancies instantly. Every report includes detailed annexures, timestamped evidence, and clear summaries to help you make fast, informed decisions."
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        { q: "Do you need candidate consent?", a: "Yes, explicit written or digital consent is mandatory before initiating any background check." },
        { q: "What happens if a discrepancy is found?", a: "We flag it as 'Amber' or 'Red' depending on severity and provide all supporting evidence. We also offer a dispute resolution process for candidates." },
        { q: "Can you verify international degrees?", a: "Yes, our global network allows us to verify educational and employment credentials across 150+ countries." }
      ]
    }
  },
  contact: {
    title: "Contact Us",
    subtitle: "Get in touch with our verification experts.",
    address: {
      street: "120 Broadway, Suite 1500",
      city: "New York",
      state: "NY",
      zip: "10271",
      country: "USA"
    },
    emails: [
      "verification.team@verifynex.info",
      "bgvdesk@verifynex.info"
    ],
    phone: "+1 (212) 555-0198",
    workingHours: "Monday - Friday: 9:00 AM - 6:00 PM"
  },
  terms: {
    title: "Terms & Conditions",
    lastUpdated: "March 6, 2026",
    content: `
      1. Acceptance of Terms
      By accessing and using the services provided by Verifynex (Background Verification Group), you agree to comply with and be bound by these Terms and Conditions.

      2. Service Description
      Verifynex provides background verification services including but not limited to employment, education, criminal, and address checks. The reports are generated based on information obtained from third-party sources, institutions, and public records.

      3. Client Responsibilities
      The client must obtain explicit, written consent from the candidate before initiating any background check. The client is responsible for ensuring that the use of our reports complies with all applicable local, state, and national laws.

      4. Accuracy of Information
      While Verifynex strives for the highest level of accuracy, we rely on information provided by third parties. We do not guarantee the absolute accuracy of the reports and shall not be held liable for any decisions made based on these reports.

      5. Confidentiality
      Both parties agree to maintain strict confidentiality regarding all candidate data and proprietary business information shared during the course of the engagement.

      6. Limitation of Liability
      Verifynex shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.

      7. Governing Law
      These terms shall be governed by and construed in accordance with the laws of the United States. Any disputes shall be subject to the exclusive jurisdiction of the courts in New York.
    `
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "March 6, 2026",
    content: `
      1. Introduction
      Verifynex is committed to protecting the privacy and security of the personal information we collect and process. This Privacy Policy outlines our practices regarding data collection, use, and protection.

      2. Information We Collect
      We collect personal information necessary to conduct background verifications. This may include names, addresses, dates of birth, educational records, employment history, government IDs, and criminal records.

      3. How We Use Information
      The information collected is used solely for the purpose of conducting background checks as requested by our clients. We do not sell, rent, or use this information for marketing purposes.

      4. Data Sharing and Disclosure
      We share personal information with authorized third parties (such as educational institutions, past employers, and government agencies) only to the extent necessary to verify the information. We may also disclose information if required by law.

      5. Data Security
      We implement robust technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.

      6. Data Retention
      We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.

      7. Your Rights
      Candidates have the right to request access to, correction of, or deletion of their personal data held by us, subject to legal and contractual restrictions.

      8. Contact Us
      For any privacy-related concerns, please contact our Data Protection Officer at privacy@verifynex.info or write to us at our New York office.
    `
  }
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPageContent = async (page: keyof typeof db) => {
  await delay(500); // Simulate network latency
  return db[page];
};

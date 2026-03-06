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
      subtitle: "Verifynex is India's leading Background Verification Group (BVG). We empower companies to make confident hiring decisions with comprehensive, accurate, and fast background checks.",
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
        { title: "Pan-India Reach", desc: "Extensive network covering urban and remote locations across India." }
      ]
    },
    established: {
      title: "Our Legacy",
      content: "Established in Kolkata, Verifynex has grown from a regional verification agency to a trusted national partner for Fortune 500 companies and growing startups alike. Our journey is defined by our unwavering commitment to truth and integrity."
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
        { name: "Education", icon: "BookOpen" }
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
        { quote: "Verifynex has completely transformed our hiring process. Their reports are incredibly detailed and always delivered on time.", author: "HR Director, TechCorp India" },
        { quote: "The level of accuracy and the pan-India reach they offer is unmatched. Highly recommended for any growing enterprise.", author: "Talent Acquisition Head, FinServe" },
        { quote: "Their API integration with our ATS was seamless. It saved us hundreds of hours of manual work.", author: "VP of Operations, GlobalRetail" }
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
    content: "Verifynex is a specialized Background Verification Group (BVG) headquartered in Kolkata. We understand that a company's greatest asset is its people, and ensuring the integrity of your workforce is paramount. Our mission is to mitigate hiring risks by providing transparent, accurate, and timely background screening services.",
    mission: "To be the most trusted partner in background verification, enabling organizations to build secure and reliable teams.",
    vision: "A corporate world where every hire is made with absolute confidence and trust.",
    established: "Since our inception, we have conducted over 1 million verifications, serving clients across IT, BFSI, Healthcare, and Manufacturing sectors. Our deep roots in Kolkata provide us with a strong operational base, while our technological capabilities allow us to serve clients globally.",
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
      title: "Pan-India & Global Network",
      content: "While our roots are in Kolkata, our reach is global. We have established a vast network of field agents, legal experts, and institutional contacts across every state in India. For international hires, we partner with trusted global agencies to ensure seamless cross-border verifications."
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
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800&h=500"
      },
      {
        id: "criminal",
        title: "Criminal Record Check",
        description: "Comprehensive screening through police records, court databases, and litigation searches to identify any past criminal history or pending cases.",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800&h=500"
      },
      {
        id: "address",
        title: "Address Verification",
        description: "Physical site visits and digital verification to confirm the candidate's current and permanent residential addresses.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800&h=500"
      },
      {
        id: "reference",
        title: "Reference Check",
        description: "Detailed interviews with professional references to gather insights on the candidate's work ethic, behavior, and professional capabilities.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800&h=500"
      },
      {
        id: "identity",
        title: "Identity Verification",
        description: "Validation of government-issued IDs such as PAN, Aadhaar, Passport, and Voter ID to ensure the candidate is who they claim to be.",
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ce?auto=format&fit=crop&q=80&w=800&h=500"
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
      street: "Verifynex Tower, Sector V, Salt Lake",
      city: "Kolkata",
      state: "West Bengal",
      zip: "700091",
      country: "India"
    },
    email: "contact@verifynex.com",
    phone: "+91 33 4567 8900",
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
      These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
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
      For any privacy-related concerns, please contact our Data Protection Officer at privacy@verifynex.com or write to us at our Kolkata office.
    `
  }
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPageContent = async (page: keyof typeof db) => {
  await delay(500); // Simulate network latency
  return db[page];
};

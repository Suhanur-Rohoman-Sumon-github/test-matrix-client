import {
  Award,
  BookOpen,
  Brain,
  Clock,
  Ear,
  Pencil,
  Shield,
  Target,
  Lock,
  Globe,
  VideoIcon,
  FileCheck,
  Star,
  Mail,
  Download,
  BarChart3,
  Smartphone,
  Book,
  Headphones,
  Text,
} from "lucide-react";

export const features = [
  {
    icon: Brain,
    title: "3-Step English Proficiency Test",
    description: "Progress from A1 → B1 → C1 certification levels",
  },
  {
    icon: Shield,
    title: "Secure Exam Environment",
    description:
      "Safe browser mode, anti-cheating technology, real-time supervision",
  },
  {
    icon: Clock,
    title: "Timed English Assessments",
    description: "Strict time limits with automatic submission on timeout",
  },
  {
    icon: Award,
    title: "Official English Certificates",
    description: "Receive instant digital certificates for each passed level",
  },
];

export const competencies = [
  { icon: BookOpen, title: "Reading Comprehension", levels: "A1-C2" },
  { icon: Award, title: "Speaking & Conversation", levels: "A1-C2" },
  { icon: Pencil, title: "Writing Skills", levels: "B1-C2" },
  { icon: Ear, title: "Listening Skills", levels: "A2-C2" },
];

export const objectives = [
  {
    icon: Target,
    title: "Evaluate English Proficiency",
    description:
      "Comprehensive testing based on recognized CEFR levels from A1 to C2",
  },
  {
    icon: Shield,
    title: "Stepwise Certification Process",
    description:
      "Three-level assessment pathway to validate skills progressively",
  },
  {
    icon: Award,
    title: "Instant Digital Certificates",
    description:
      "Automated issuance of certificates reflecting achieved English levels",
  },
  {
    icon: Lock,
    title: "Secure and Fair Testing",
    description:
      "Strict timers, anti-cheating measures, and retest restrictions to ensure integrity",
  },
];

export const levels = [
  {
    step: "Step 1",
    levels: ["A1", "A2"],
    title: "Basic User",
    description:
      "Understand and use familiar everyday expressions and very basic phrases",
    requirements: "25% pass threshold, below 25% = fail with no retake",
    color: "bg-success/20 border-success/40 text-success-glow",
  },
  {
    step: "Step 2",
    levels: ["B1", "B2"],
    title: "Independent User",
    description:
      "Can deal with most situations likely to arise while travelling or at work",
    requirements: "Accessible after achieving 75% in Step 1",
    color: "bg-primary/20 border-primary/40 text-primary-glow",
  },
  {
    step: "Step 3",
    levels: ["C1", "C2"],
    title: "Proficient User",
    description:
      "Can understand demanding texts, express ideas fluently, and use language effectively",
    requirements: "Accessible after achieving 75% in Step 2",
    color: "bg-accent/20 border-accent/40 text-accent-glow",
  },
];

export const competencyAreas = [
  {
    icon: BookOpen,
    title: "Grammar & Vocabulary",
    description:
      "Parts of speech, sentence structure, word usage, and vocabulary building",
  },
  {
    icon: Globe,
    title: "Speaking & Pronunciation",
    description:
      "Conversation skills, pronunciation, fluency, and spoken interaction",
  },
  {
    icon: Pencil,
    title: "Writing Skills",
    description:
      "Sentence formation, paragraph writing, formal and informal texts",
  },
  {
    icon: Ear,
    title: "Listening Comprehension",
    description:
      "Understanding spoken English in conversations, lectures, and media",
  },
];

export const coreFeatures = [
  {
    icon: Brain,
    title: "3-Step Assessment Flow",
    description:
      "Progressive evaluation through Foundation (A1-A2), Intermediate (B1-B2), and Advanced (C1-C2) levels",
    features: [
      "Smart scoring algorithm",
      "Level-appropriate questions",
      "Progressive unlocking system",
      "Performance-based advancement",
    ],
  },
  {
    icon: Clock,
    title: "Advanced Timer System",
    description:
      "Sophisticated time management with countdown timers and automatic submission capabilities",
    features: [
      "1 minute per question default",
      "Configurable time limits",
      "Auto-submit on expiration",
      "Real-time countdown display",
    ],
  },
  {
    icon: Award,
    title: "Digital Certification",
    description:
      "Automated certificate generation with instant delivery and verification systems",
    features: [
      "Instant PDF generation",
      "Email delivery system",
      "Digital verification codes",
      "Professional certificate design",
    ],
  },
];

export const securityFeatures = [
  {
    icon: Shield,
    title: "Secure Exam Environment",
    description:
      "Safe Exam Browser integration with comprehensive security measures",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Restricted navigation and input methods during assessment",
  },
  {
    icon: VideoIcon,
    title: "Live Monitoring",
    description:
      "Optional video recording during exams for integrity verification",
  },
  {
    icon: FileCheck,
    title: "Anti-Cheat System",
    description: "Advanced detection of unauthorized activities and attempts",
  },
];

export const whyChooseUs = [
  {
    icon: Star,
    title: "Trusted by Thousands",
    description: "Used by students and professionals worldwide",
  },
  {
    icon: VideoIcon,
    title: "Fast Results",
    description: "Receive scores and certificates immediately after completion",
  },
  {
    icon: Mail,
    title: "24/7 Support",
    description: "Dedicated helpdesk for all your queries and technical issues",
  },
  {
    icon: Download,
    title: "Global CEFR Standard",
    description:
      "Tests designed strictly following international language standards",
  },
];

export const bonusFeatures = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Detailed performance analytics per competency and trending data",
  },
  {
    icon: Mail,
    title: "Email Notifications",
    description:
      "Automated email system for results, certificates, and updates",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "Fully responsive design for seamless mobile and tablet experience",
  },
];

export const competency = [
  { name: "Basic Grammar", icon: BookOpen, questions: 8 },
  { name: "Vocabulary & Usage", icon: Pencil, questions: 12 },
  { name: "Reading Comprehension", icon: Book, questions: 10 },
  { name: "Listening Skills", icon: Headphones, questions: 8 },
  { name: "Speaking & Pronunciation", icon: Globe, questions: 6 },
  { name: "Writing Skills", icon: Text, questions: 7 },
];

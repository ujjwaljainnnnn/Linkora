export type Person = {
  id: string;
  name: string;
  title: string;
  company: string;
  city: string;
  industry: string;
  skills: string[];
  connections: string[]; // ids of first-degree connections
};

// Demo dataset — fictional people for the prototype.
export const ME = "me";

export const PEOPLE: Person[] = [
  { id: "me", name: "You", title: "Student", company: "RIT Dubai", city: "Dubai", industry: "education", skills: ["python", "react"], connections: ["p1", "p2", "p3"] },
  { id: "p1", name: "Aarav Patel", title: "Senior Data Scientist", company: "Fintech Labs", city: "Dubai", industry: "fintech", skills: ["python", "machine learning", "credit risk"], connections: ["me", "p4", "p5", "p9"] },
  { id: "p2", name: "Sara Khan", title: "ML Engineer", company: "BankAI", city: "Abu Dhabi", industry: "banking", skills: ["pytorch", "mlops", "nlp"], connections: ["me", "p6", "p7"] },
  { id: "p3", name: "Omar Haddad", title: "Product Manager", company: "Souq Cloud", city: "Dubai", industry: "e-commerce", skills: ["product strategy", "analytics", "sql"], connections: ["me", "p8", "p10"] },
  { id: "p4", name: "Lina Farouk", title: "Head of Data", company: "PayGulf", city: "Dubai", industry: "fintech", skills: ["data strategy", "sql", "governance"], connections: ["p1", "p11", "p12"] },
  { id: "p5", name: "Rohan Mehta", title: "Backend Engineer", company: "Fintech Labs", city: "Dubai", industry: "fintech", skills: ["go", "kubernetes", "postgres"], connections: ["p1", "p13"] },
  { id: "p6", name: "Fatima Al Mansoori", title: "AI Governance Lead", company: "Emirates Capital", city: "Abu Dhabi", industry: "banking", skills: ["ai governance", "risk", "compliance"], connections: ["p2", "p14"] },
  { id: "p7", name: "Daniel Reyes", title: "Cloud Architect", company: "Desert Systems", city: "Riyadh", industry: "cloud", skills: ["aws", "terraform", "security"], connections: ["p2", "p15"] },
  { id: "p8", name: "Meera Iyer", title: "UX Designer", company: "Souq Cloud", city: "Dubai", industry: "e-commerce", skills: ["figma", "user research", "prototyping"], connections: ["p3", "p16"] },
  { id: "p9", name: "Yusuf Rahman", title: "Quant Analyst", company: "Marina Investments", city: "Dubai", industry: "finance", skills: ["python", "statistics", "forecasting"], connections: ["p1", "p17"] },
  { id: "p10", name: "Chen Wei", title: "Data Engineer", company: "LogiX", city: "Dubai", industry: "logistics", skills: ["spark", "airflow", "python"], connections: ["p3", "p18"] },
  { id: "p11", name: "Hana Saleh", title: "Data Scientist", company: "PayGulf", city: "Dubai", industry: "fintech", skills: ["python", "fraud detection", "machine learning"], connections: ["p4"] },
  { id: "p12", name: "Arjun Nair", title: "Engineering Manager", company: "TabbyPay", city: "Dubai", industry: "fintech", skills: ["leadership", "java", "payments"], connections: ["p4", "p19"] },
  { id: "p13", name: "Noor Qasim", title: "DevOps Engineer", company: "CloudNest", city: "Sharjah", industry: "cloud", skills: ["docker", "ci/cd", "linux"], connections: ["p5"] },
  { id: "p14", name: "James Whitfield", title: "Risk Consultant", company: "Big Four Advisory", city: "Dubai", industry: "consulting", skills: ["risk", "ai governance", "audit"], connections: ["p6", "p20"] },
  { id: "p15", name: "Priya Menon", title: "Security Analyst", company: "Desert Systems", city: "Riyadh", industry: "cloud", skills: ["soc", "siem", "incident response"], connections: ["p7"] },
  { id: "p16", name: "Khalid Ahmed", title: "Frontend Engineer", company: "Careway", city: "Dubai", industry: "mobility", skills: ["react", "typescript", "next.js"], connections: ["p8"] },
  { id: "p17", name: "Elena Popova", title: "Data Scientist", company: "Marina Investments", city: "Dubai", industry: "finance", skills: ["python", "nlp", "time series"], connections: ["p9"] },
  { id: "p18", name: "Ravi Kumar", title: "Operations Analyst", company: "LogiX", city: "Dubai", industry: "logistics", skills: ["excel", "sql", "power bi"], connections: ["p10"] },
  { id: "p19", name: "Aisha Bakr", title: "Software Engineer", company: "TabbyPay", city: "Dubai", industry: "fintech", skills: ["react", "node.js", "payments"], connections: ["p12"] },
  { id: "p20", name: "Tom Becker", title: "AI Strategy Manager", company: "Big Four Advisory", city: "Dubai", industry: "consulting", skills: ["ai strategy", "governance", "transformation"], connections: ["p14"] },
];

export const byId = (id: string) => PEOPLE.find((p) => p.id === id);

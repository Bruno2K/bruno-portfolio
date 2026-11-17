export type Role = {
  dates: string;
  title: string;
  company: string;
  summary: string;
  stack: string;
};

export const experience: Role[] = [
  {
    dates: "JUL 2019 — PRESENT",
    title: "Development Manager",
    company: "Ubicua",
    summary:
      "Leads delivery of automation, customer experience, and omnichannel software, translating requirements into prioritized work across product, design, and engineering. Responsible for stakeholder alignment, quality, and coordination of concurrent initiatives spanning WhatsApp and Dialogflow integrations, CRM, BI, mobile applications, and RPA.",
    stack: "Leadership · SDLC · Omnichannel · CRM · BI · RPA",
  },
  {
    dates: "JUN 2017 — JUL 2019",
    title: "Full Stack Developer",
    company: "Ubicua",
    summary:
      "Built and maintained production software for automation and customer experience, including omnichannel platforms integrated with the official WhatsApp API and Dialogflow. Delivered REST integrations, CRM and BI workflows, mobile applications, marketplace and gamification features, RPA, SMS campaigns, and evolutionary maintenance.",
    stack: "REST APIs · WhatsApp · Dialogflow · CRM · Mobile · RPA",
  },
];

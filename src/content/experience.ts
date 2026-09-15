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
      "Leading software projects focused on automation, customer experience, and omnichannel solutions, including WhatsApp-integrated platforms and Dialogflow conversational flows. Owns delivery from requirements analysis through execution, stakeholder alignment, prioritization, quality, and coordination across product, design, and engineering. Coordinates multiple concurrent initiatives spanning CRM, BI, mobile applications, and RPA.",
    stack: "Leadership · SDLC · Omnichannel · CRM · BI · RPA",
  },
  {
    dates: "JUN 2017 — JUL 2019",
    title: "Full Stack Developer",
    company: "Ubicua",
    summary:
      "Built full-stack solutions for automation and customer experience, including omnichannel service platforms integrated with the official WhatsApp API and Dialogflow. Worked across CRM, dashboards and BI, iOS/Android applications, marketplace and gamification features, REST API integrations, RPA, SMS campaigns, and evolutionary maintenance of production systems.",
    stack: "REST APIs · WhatsApp · Dialogflow · CRM · Mobile · RPA",
  },
];

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "services",
    url: "#features",
  },
  {
    id: "1",
    title: "Aboutus",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Projects",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Achievements",
    url: "#roadmap",
  },
  
  
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Tricky Automation",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Marketing Campaign Automation",
    text: "Automate email marketing, social media posting, and campaign analytics for better outreach.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Automated Video Content Creation",
    text: "Produce videos from templates using automated text-to-speech and video editing tools.",
    date: "Dec 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Telegram Bot for Content Distribution",
    text: "Distribute blog posts, news, and updates directly to subscribers.",
    date: "Mar 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Discord Bot for Content Alerts",
    text: "Notify community members about new content, such as videos, streams, or blog posts, as soon as they are published.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Business Ananysis ",
    description: "First we analyse your workflow and then plan and design a software suitable for you",
    price: "Step 1",
    features: [
      "Identify Objectives: Determine the organization’s goals and project requirements.",
      "Stakeholder Interviews: Gather insights and requirements from key stakeholders.",
      "Analyze Data: Assess current processes and identify areas for improvement.",
    ],
  },
  {
    id: "1",
    title: "Software & Tools",
    description: "Advanced Softwares ,apps and tools for Bussiness with an Admin dashboard.",
    price: "Step 2",
    features: [
      "Research Needs: Identify the necessary software and tools based on the project requirements.",
      "Evaluate Options: Compare features, pricing, and compatibility of various tools.",
      "Select & Implement: Choose the best-suited tools and integrate them into the workflow.",
    ],
  },
  {
    id: "2",
    title: "Work Strategies",
    description: "Decrease the manual work of the employees leave it to us",
    price: "Step 3",
    features: [
      "Define Roles: Assign specific tasks and responsibilities to each team member.",
      "Create Workflow: Develop a clear and efficient process for task management.",
      "Set Milestones: Establish key deadlines and deliverables to track progress.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Workflow Sync and Automation",
    text: "We connect your existing business tools together making data flow freely across your company, increasing collaboration.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
     iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Business Process Automation",
    text: "Your employees are always busy, however that work is not always productive. We remove manual labour and let them focus on growth.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Development",
    text: "Get custom solutions for your business that help you leverage AI and Automation for the processes.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Automation",
    text: "Leverage available tools to automate the tasks you're doing manually. Eliminate hours of work, save money, and get more done.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Cost Cutting",
    text: "Less people to manage and more solutions and better result than ever.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "We uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/SaashOfficial?t=Vk9UWvKs26SkH3I16GPq9g&s=08",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/saash__official?igsh=MXhscmMxam5kOGxi",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=61561840696985",
  },
];

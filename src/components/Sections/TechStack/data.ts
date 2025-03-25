interface TechTool {
  name: string;
  icon: string;
}

interface TechCategory {
  category: string;
  tools: TechTool[];
}

export const techCategories: TechCategory[] = [
  {
    category: "UX_UI_DESIGN",
    tools: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "After Effects", icon: "/icons/ae.svg" },
      { name: "Lottie Files", icon: "/icons/lottie.svg" },
      { name: "Spline", icon: "/icons/Spline.svg" },
    ],
  },
  {
    category: "INFRASTRUCTURE",
    tools: [
      { name: "Railway", icon: "/icons/railway.svg" },
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Netlify", icon: "/icons/netlify.svg" },
    ],
  },
  {
    category: "FRONT_END_TECHNOLOGIES",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "HTML5", icon: "/icons/html5.svg" },
      { name: "CSS3", icon: "/icons/css3.svg" },
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "React", icon: "/icons/reactjs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    ],
  },
  {
    category: "BACK_END_TECHNOLOGIES",
    tools: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Nest", icon: "/icons/nestjs.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
      { name: "Swagger", icon: "/icons/swagger.svg" },
    ],
  },
  {
    category: "SECURITY",
    tools: [
      { name: "Auth0", icon: "/icons/auth0.svg" },
      { name: "JWT", icon: "/icons/JWT.svg" },
    ],
  },
  {
    category: "DOCUMENTATION_MANAGEMENT",
    tools: [{ name: "Notion", icon: "/icons/notion.svg" }],
  },
];

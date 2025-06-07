interface ProjectTypes {
  thumbnail: string;
  images: string[];
  title: string;
  description: string;
  demo: { name: string; link: string } | undefined;
  tech: string[];
}

const projectsData: ProjectTypes[] = [
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749019682/personal-portfolio-by-jcrea-design_wkjmim.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749019682/personal-portfolio-by-jcrea-design_wkjmim.png",
    ],
    title: "JCREA — Personal Portfolio Website for Product Designer",
    description: `
    <p class="mb-6">JCREA is a modern, and visually captivating personal portfolio website built for a product designer to showcase services, work experience, portfolio projects, client testimonials, and blog posts. The goal is to provide a professional digital presence that communicates skills, achievements, and creativity, while also encouraging potential clients or employers to get in touch.</p> 
    
    <p class="font-bold mb-1">Key highlights of this project include:</p>

    <ul class="list-inside list-disc mb-3">
      <li>Clean and elegant design with strong visual hierarchy.</li>
      <li>Sections for services, portfolio, work experience, testimonials, and blog.</li>
      <li>CTA buttons like "Hire Me" and "Let’s Discuss" for client engagement.</li>
      <li>Engaging animations and interactive transitions that enhance the user experience and add a dynamic feel to the site.</li>
    </ul>

    <p>⚠️ This project is currently optimized for laptop and desktop screen sizes only. Mobile responsiveness is not fully supported.</p>
    `,
    demo: {
      name: "JCREA — Personal Portfolio Website for Product Designer",
      link: "https://personal-portfolio-by-jcrea-design.vercel.app/",
    },
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Swiper", "@svgr/webpack"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749019784/ai-product-landing-tools_tpfhz8.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749019784/ai-product-landing-tools_tpfhz8.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749030662/ai-product-tools-landing-vercel-app-signup_mofvan.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749030662/ai-product-tools-landing-vercel-app-signin_rlwfbg.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749030662/ai-product-tools-landing-vercel-app-forgotpassword_cjkn7q.png",
    ],
    title: "AI Product Tools – Modern Landing Page",
    description: `
    <p class="mb-6">This project is a modern landing page template designed for AI-driven product teams. Built with a focus on content-first principles, it showcases a clean UI, smart layout, and effective visual hierarchy to promote collaboration tools and workflows for modern development teams.</p> 
    
    <p class="font-bold mb-1">The landing page includes:</p>

    <ul class="list-inside list-disc mb-6">
      <li>Hero section with strong call-to-action</li>
      <li>Product journey mapping with feature highlights</li>
      <li>Collaboration benefits for product teams</li>
      <li>Client testimonials from recognizable brands</li>
      <li>Footer with resourceful navigation and CTAs</li>
    </ul>

    <p class="mb-1">Perfect for SaaS platforms or startups that want to present their AI-powered product with credibility and style.</p> 
    <p>⚠️ This project is currently optimized for laptop and desktop screen sizes only. Mobile responsiveness is not fully supported.</p>`,
    demo: {
      name: "AI Product Tools – Modern Landing Page",
      link: "https://ai-product-tools-landing.vercel.app/",
    },
    tech: ["Next.js", "TailwindCSS", "aos", "@headlessui/react", "@svgr/webpack"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749019816/admin-dashboard-dashlite_aafgbe.png`,
    images: ["https://res.cloudinary.com/harie/image/upload/q_auto/v1749019816/admin-dashboard-dashlite_aafgbe.png"],
    title: "DashLite – Admin Dashboard UI",
    description: `
    <p class="mb-6">DashLite is a modern, admin dashboard UI template built for showcasing eCommerce analytics, product performance, and sales insights.</p> 
    
    <p class="font-bold mb-1">Key features displayed:</p>

    <ul class="list-inside list-disc mb-6">
      <li>Sales metrics (Total Earnings, Orders, Customers, Balance)</li>
      <li>Interactive revenue and conversion rate graphs</li>
      <li>Sales analytics by location, age, and gender</li>
      <li>Best selling products and top seller summaries</li>
      <li>Order history and delivery tracking</li>
      <li>Stock and inventory status reports</li>
      <li>Discount product sales trends</li>
    </ul>

    <p class="mb-1">⚠️ Note:</p>
    <ul class="list-inside list-disc">
      <li>This project is currently optimized for laptop and desktop screen sizes only. Mobile responsiveness is not fully supported.</li>
      <li>This project only includes the dashboard view. Other pages listed in the sidebar (e.g. User Profile, Account, Blog, Pricing, Support Center, etc.) are not included or implemented. This is purely a static front-end UI for the dashboard layout.</li>
    </ul>

    `,
    demo: {
      name: "DashLite – Admin Dashboard UI",
      link: "https://dashboard-by-dashlite-design.vercel.app/",
    },
    tech: ["React.js", "Vite", "TailwindCSS", "Recharts", "React Router", "React Paginate"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749325790/1-edu-world_drkxva.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325790/1-edu-world_drkxva.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325790/2-edu-world_hhad0v.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325790/3-edu-world_cmkboz.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325790/4-edu-world_cguonc.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325791/5-edu-world_x9ly15.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325790/6-edu-world_ta0xux.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325790/7-edu-world_latfd8.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325789/8-edu-world_hj0qmm.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325789/9-edu-world_j26fxr.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749325789/10-edu-world_gxjbj4.png",
    ],
    title: "Edu World",
    description: `
    <p class="mb-6">Edu World is a web-based Learning Management System (LMS) designed specifically for instructors to manage and deliver online courses efficiently. The platform provides a streamlined interface that empowers instructors to focus on teaching while easily organizing course content, monitoring student progress, and handling assignments.</p>

    <p class="font-bold mb-1">Key features of the application include:</p>

    <ul class="list-inside list-disc mb-6">
      <li>A clean, professional dashboard tailored for instructor workflows.</li>
      <li>Course management tools to create, update, and delete courses with ease.</li>
      <li>Modular learning content management, allowing instructors to build and organize structured learning modules.</li>
      <li>Student management, providing insights into enrolled learners and their activity.</li>
      <li>Assignment creation and tracking, enabling instructors to post tasks and review student submissions.</li>
      <li>A responsive landing page that introduces the platform and guides users to the instructor login.</li>
    </ul>

    <p>Edu World focuses on clarity, usability, and functionality, making it an effective tool for instructors to manage digital learning environments with confidence and control.</p>
    `,
    demo: undefined,
    tech: ["React.js", "Redux", "RTK Query", "Bootstrap"],
  },
];

export { projectsData };
export type { ProjectTypes };

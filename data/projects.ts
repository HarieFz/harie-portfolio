interface Project {
  thumbnail: string;
  images: string[];
  title: string;
  description: string;
  web_name: { name: string; link: string };
  tech: string[];
}

const projectsData: Project[] = [
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/v1749019682/personal-portfolio-by-jcrea-design_wkjmim.png`,
    images: ["https://res.cloudinary.com/harie/image/upload/v1749019682/personal-portfolio-by-jcrea-design_wkjmim.png"],
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
    web_name: {
      name: "JCREA — Personal Portfolio Website for Product Designer",
      link: "https://personal-portfolio-by-jcrea-design.vercel.app/",
    },
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Swiper", "@svgr/webpack"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/v1749019784/ai-product-landing-tools_tpfhz8.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/v1749019784/ai-product-landing-tools_tpfhz8.png",
      "https://res.cloudinary.com/harie/image/upload/v1749030662/ai-product-tools-landing-vercel-app-signup_mofvan.png",
      "https://res.cloudinary.com/harie/image/upload/v1749030662/ai-product-tools-landing-vercel-app-signin_rlwfbg.png",
      "https://res.cloudinary.com/harie/image/upload/v1749030662/ai-product-tools-landing-vercel-app-forgotpassword_cjkn7q.png",
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
    web_name: {
      name: "AI Product Tools – Modern Landing Page",
      link: "https://ai-product-tools-landing.vercel.app/",
    },
    tech: ["Next.js", "TailwindCSS", "aos", "@headlessui/react", "@svgr/webpack"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/v1749019816/admin-dashboard-dashlite_aafgbe.png`,
    images: ["https://res.cloudinary.com/harie/image/upload/v1749019816/admin-dashboard-dashlite_aafgbe.png"],
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
    web_name: {
      name: "DashLite – Admin Dashboard UI",
      link: "https://dashboard-by-dashlite-design.vercel.app/",
    },
    tech: ["React.js", "Vite", "TailwindCSS", "Recharts", "React Router", "React Paginate"],
  },
];

export { projectsData };
export type { Project };

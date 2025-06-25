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
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1750872625/3d-carousel_eh3esh.png`,
    images: ["https://res.cloudinary.com/harie/image/upload/q_auto/v1750872625/3d-carousel_eh3esh.png"],
    title: "3D Carousel Interactive Nike Shoes",
    description: `
    <p class="mb-6">3D Carousel Interactive Nike Shoes is a visually engaging product showcase website designed to highlight various Nike shoe models in a dynamic and modern way. The project features high-resolution shoe images combined with a circular carousel and smooth transition effects, creating an intuitive and immersive browsing experience that blends aesthetics with usability.</p>

    <p class="font-bold mb-1">Key highlights of this project include:</p>

    <ul class="list-inside list-disc mb-3">
      <li>Visually appealing circular carousel to explore Nike's shoe collection interactively.</li>
      <li>Minimalist UI focused on product visibility, with clear display of price, color variants, and size selection.</li>
      <li>Smooth transition animations that give a semi-3D feel and enhance the overall experience.</li>
      <li>Call-to-action features like “Buy” button, color selectors, and size options to support user engagement.</li>
      <li>Strong visual branding using a dark theme, bold typography, and vibrant accent elements for a sporty and premium look.</li>
    </ul>

    <p>⚠️ This website is currently optimized for desktop viewing only. Full mobile support is still under development.</p>
    `,
    demo: {
      name: "3D Carousel Interactive Nike Shoes",
      link: "https://3d-carousel-interactive-nike-shoes.vercel.app/",
    },
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
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
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749463515/tunas-unggul/login_lrzzi7.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749463515/tunas-unggul/login_lrzzi7.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749402767/tunas-unggul/home_etnpgf.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749402765/tunas-unggul/akademik_tpxgat.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749402768/tunas-unggul/kesiswaan_i4n4kk.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749402771/tunas-unggul/keuangan_cxztle.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749402772/tunas-unggul/koperasi_pwgex2.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749402775/tunas-unggul/pengaturan_cwysnk.png",
    ],
    title: "Tunas Unggul",
    description: `
    <p class="mb-6">Tunas Unggul is a comprehensive web-based School Management System (SMS) developed to support multi-level educational institutions in efficiently managing academic, administrative, and operational activities. Designed to serve Play School through Senior High School, the platform integrates essential modules that streamline school workflows while ensuring data consistency and accessibility across departments.</p>

    <p class="font-bold mb-1">Key features of the application include:</p>

    <ul class="list-inside list-disc mb-6">
      <li><span class="font-bold">Home page</span> that showcases all school units (Play School, Early Year, SD, SMP, and SMA), allowing administrators and staff to quickly access specific segments of the institution.</li>
      <li><span class="font-bold">A dynamic dashboard</span> offering real-time insights into school statistics, student population, financial status, and academic activities, providing a quick overview for school leaders.</li>
      <li><span class="font-bold">Comprehensive academic management</span>, including school level configuration, grade definitions, academic year setup, school calendar planning, student promotions, graduation processing, alumni tracking, school profile management, and memo distribution.</li>
      <li><span class="font-bold">Robust student affairs management</span> covering student records, scholarship assignments, extracurricular program enrollment, and student bank accounts for financial tracking.</li>
      <li><span class="font-bold">Integrated financial management</span> modules for managing tuition and other charges, bank withdrawals, payment processing, payment history tracking, outstanding balances, deposits, and detailed SPP (monthly tuition) management—including support for student transfers.</li>
      <li><span class="font-bold">A digital cooperative system (koperasi)</span> that handles product ordering (e.g., uniforms), purchasing logs, item receipt documentation, catering services, and student transportation. The transportation module features Google Maps integration to calculate distance-based fares based on destinations input.</li>
      <li><span class="font-bold">Detailed reporting</span> functionality across academic, financial, and administrative sectors, enabling stakeholders to generate and export essential records for decision-making.</li>
      <li><span class="font-bold">Human resources management</span> for maintaining employee data, tracking teaching assignments, and managing HR activities within the institution.</li>
      <li><span class="font-bold">Role-based user access control</span> through a dedicated settings panel where admins can define user roles (e.g., cooperative staff), assign module access permissions, and generate login credentials for each role with email-based authentication.</li>
    </ul>

    <p>Tunas Unggul focuses on operational clarity, administrative precision, and cross-functional integration, making it a powerful digital backbone for schools seeking to modernize and unify their educational ecosystem.</p>
    `,
    demo: undefined,
    tech: [
      "React.js",
      "Vite",
      "React Router Dom",
      "TailwindCSS",
      "Material UI",
      "Styled Component",
      "TanStack Query (React Query)",
      "Axios",
      "React Hook Form",
      "Zod",
      "dayjs",
      "@vis.gl/react-google-maps",
      "React Webcam",
    ],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749460782/naara/screencapture-file-C-Users-hp-Downloads-Home-png-2025-06-09-16_11_28_lplqs4.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749460782/naara/screencapture-file-C-Users-hp-Downloads-Home-png-2025-06-09-16_11_28_lplqs4.png",
    ],
    title: "Naara",
    description: `
    <p>Naara Aesthetic Clinic is a modern and elegant clinic website designed to showcase aesthetic services, skincare products, client testimonials, and clinic information in a user-friendly and visually appealing layout. The website aims to build trust, enhance brand identity, and make it easy for clients to explore treatments and connect with the clinic.</p>
    `,
    demo: {
      name: "Official Web",
      link: "https://naara.id/",
    },
    tech: ["Next.js", "Next Auth", "TailwindCSS", "Axios"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749398358/mitra-group/landing-page/screencapture-mitragroup-co-id-2025-06-08-22_53_44_ia2zw1.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749398358/mitra-group/landing-page/screencapture-mitragroup-co-id-2025-06-08-22_53_44_ia2zw1.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749398360/mitra-group/landing-page/screencapture-mitragroup-co-id-about-us-2025-06-08-22_53_09_uqxpd6.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749398361/mitra-group/landing-page/screencapture-mitragroup-co-id-news-2025-06-08-22_54_10_pcdypb.png",
    ],
    title: "Mitra Group",
    description: `
    <p class="mb-6">Mitra Group Indonesia is a professional corporate website developed to establish a strong digital presence for a trusted manpower outsourcing company. Designed with a clean, modern, and corporate-friendly aesthetic, the website serves as a central hub for presenting the company’s profile, services, news updates, and career opportunities.</p> 
    <p>The website not only strengthens Mitra Group’s credibility but also streamlines engagement with potential clients and job seekers through a straightforward and informative interface.</p> 
    `,
    demo: {
      name: "Official Web",
      link: "https://mitragroup.co.id/",
    },
    tech: ["React.js", "Vite", "TailwindCSS", "Redux", "Axios"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749398353/mitra-group/rekrutmen/screencapture-rekrutmen-mitragroup-co-id-job-vacancy-public-2025-06-08-22_54_55_doohvo.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749398353/mitra-group/rekrutmen/screencapture-rekrutmen-mitragroup-co-id-job-vacancy-public-2025-06-08-22_54_55_doohvo.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749398353/mitra-group/rekrutmen/screencapture-rekrutmen-mitragroup-co-id-job-vacancy-2025-06-08-22_56_26_lkmh4y.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749400133/mitra-group/rekrutmen/detail-loker_g5u9s6.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749398353/mitra-group/rekrutmen/screencapture-rekrutmen-mitragroup-co-id-my-application-2025-06-08-22_57_13_srh6up.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749398355/mitra-group/rekrutmen/screencapture-rekrutmen-mitragroup-co-id-profile-personal-data-2025-06-08-22_56_40_rxqecd.png",
    ],
    title: "Rekrutmen Mitra Group",
    description: `
    <p class="mb-6">Mitra Group Recruitment Portal is a dedicated web platform designed to streamline the recruitment process for job seekers and HR teams within Mitra Group Indonesia. Built to provide a smooth, transparent, and professional hiring experience, the platform connects qualified candidates with available job opportunities across various industries and locations.</p> 
    <p>The recruitment portal enhances the efficiency and transparency of the hiring process, while also helping Mitra Group attract and manage a wider pool of qualified candidates.</p> 
    `,
    demo: {
      name: "Official Web",
      link: "https://rekrutmen.mitragroup.co.id/job-vacancy/public",
    },
    tech: ["React.js", "Vite", "TailwindCSS", "Redux", "Axios"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749397092/Real-Time%20Facial%20Recognition%20Attendance%20System/screencapture-si-attendance-face-recognition-vercel-app-2025-06-08-22_37_11_od5liy.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749397092/Real-Time%20Facial%20Recognition%20Attendance%20System/screencapture-si-attendance-face-recognition-vercel-app-2025-06-08-22_37_11_od5liy.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749394421/Real-Time%20Facial%20Recognition%20Attendance%20System/screencapture-si-attendance-face-recognition-vercel-app-school-year-2025-06-08-21_47_24_suqoqx.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749394421/Real-Time%20Facial%20Recognition%20Attendance%20System/screencapture-si-attendance-face-recognition-vercel-app-register-students-2025-06-08-21_42_42_ecstcy.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749394421/Real-Time%20Facial%20Recognition%20Attendance%20System/screencapture-si-attendance-face-recognition-vercel-app-register-students-2025-06-08-21_42_52_gbpg9b.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749394422/Real-Time%20Facial%20Recognition%20Attendance%20System/screencapture-si-attendance-face-recognition-vercel-app-add-course-2025-06-08-21_42_33_kxa4uh.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749394423/Real-Time%20Facial%20Recognition%20Attendance%20System/screencapture-si-attendance-face-recognition-vercel-app-attendance-2025-06-08-21_44_52_pt0ng7.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749394422/Real-Time%20Facial%20Recognition%20Attendance%20System/Screenshot_2025-06-08_214655_wor29u.jpg",
    ],
    title: "Real-Time Facial Recognition Attendance System",
    description: `
    <p class="mb-6">Portfolio Maker is a web application built with React.js and Firebase that empowers university alumni to easily create professional, job-ready personal portfolios. Designed with simplicity and usability in mind, the platform streamlines the portfolio creation process—making it accessible even for users without technical backgrounds.</p>

    <p class="font-bold mb-1">Key features of the application include:</p>

    <ul class="list-inside list-disc mb-6">
      <li>Landing Page: A welcoming homepage that introduces the platform and its benefits.</li>
      <li>User Authentication: Secure login system to access and manage personal portfolios.</li>
      <li>User Profile Management: Alumni can update their personal information, contact details, and other profile data.</li>
      <li>Create & Edit Portfolio: Easy-to-use interface for building personalized portfolios with sections like education, experience, projects, and skills.</li>
      <li>Public Portfolio Preview: Each portfolio has a unique public link that can be shared with recruiters or potential employers.</li>
      <li>Admin Page: A dedicated dashboard for admins to manage users and monitor platform activity.</li>
    </ul>

    <p>Portfolio Maker focuses on helping alumni showcase their achievements, skills, and experience in a structured and visually appealing way—helping bridge the gap between graduation and employment opportunities.</p>
    `,
    demo: undefined,
    tech: ["React.js", "Firebase", "face-api.js", "Twilio", "Bootstrap"],
  },
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749390823/portfolio-maker/Homepage-1_amln6w.jpg`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749390823/portfolio-maker/Homepage-1_amln6w.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749390825/portfolio-maker/See_More_E-Portfolio_ufwlpk.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749393303/portfolio-maker/Modal_Preview_Publik_fngom3.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749390822/portfolio-maker/Login_l01ftk.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749390823/portfolio-maker/User_Profile_k85mxz.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749391421/portfolio-maker/Create_Portofolio_po5joc.jpg",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749390823/portfolio-maker/Admin_Page_uwyh4g.jpg",
    ],
    title: "Portfolio Maker",
    description: `
    <p class="mb-6">Portfolio Maker is a web application built with React.js and Firebase that empowers university alumni to easily create professional, job-ready personal portfolios. Designed with simplicity and usability in mind, the platform streamlines the portfolio creation process—making it accessible even for users without technical backgrounds.</p>


    <p class="font-bold mb-1">Key features of the application include:</p>

    <ul class="list-inside list-disc mb-6">
      <li>Landing Page: A welcoming homepage that introduces the platform and its benefits.</li>
      <li>User Authentication: Secure login system to access and manage personal portfolios.</li>
      <li>User Profile Management: Alumni can update their personal information, contact details, and other profile data.</li>
      <li>Create & Edit Portfolio: Easy-to-use interface for building personalized portfolios with sections like education, experience, projects, and skills.</li>
      <li>Public Portfolio Preview: Each portfolio has a unique public link that can be shared with recruiters or potential employers.</li>
      <li>Admin Page: A dedicated dashboard for admins to manage users and monitor platform activity.</li>
    </ul>

    <p>Portfolio Maker focuses on helping alumni showcase their achievements, skills, and experience in a structured and visually appealing way—helping bridge the gap between graduation and employment opportunities.</p>
    `,
    demo: undefined,
    tech: ["React.js", "Firebase", "Bootstrap"],
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
  {
    thumbnail: `https://res.cloudinary.com/harie/image/upload/q_auto/v1749329530/secondhand/1-secondhand-Home_mr2gcv.png`,
    images: [
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329530/secondhand/1-secondhand-Home_mr2gcv.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329530/secondhand/3-secondhand-Login_yptvyh.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329530/secondhand/4-secondhand-Register_pxbug4.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329529/secondhand/2-secondhand-Info_profil_b0hgux.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329648/secondhand/Buyer/5-secondhand-Halaman_produk_tqq5ve.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329649/secondhand/Buyer/8-secondhand-Halaman_produk-3_vfv8tv.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329648/secondhand/Buyer/6-secondhand-Halaman__produk-1_jdtsvd.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329649/secondhand/Buyer/7-secondhand-Halaman_produk-2_sw1aov.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329673/secondhand/Seller/13-secondhand-Info_produk_dtsy65.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329672/secondhand/Seller/12-secondhand-Halaman_produk_iejglz.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329678/secondhand/Seller/9-secondhand-Daftar_jual_geaaqx.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329671/secondhand/Seller/11-secondhand-Daftar_jual-2_wqcmtz.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329678/secondhand/Seller/19-secondhand-Notifikasi_hs93js.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329674/secondhand/Seller/14-secondhand-Info_produk-1_axtiex.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329674/secondhand/Seller/15-secondhand-Info_produk-3_pzduff.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329675/secondhand/Seller/16-secondhand-Info_produk-4_gjkiwu.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329676/secondhand/Seller/17-secondhand-Info_produk-2_fuhpct.png",
      "https://res.cloudinary.com/harie/image/upload/q_auto/v1749329677/secondhand/Seller/18-secondhand-Info_produk-5_rbrkzi.png",
    ],
    title: "Secondhand",
    description: `
    <p class="mb-6">SecondHand is an online e-commerce platform dedicated to buying and selling secondhand items across a variety of categories. Built to be accessible and flexible, the platform allows users to act as both buyers and sellers using a single account, making the trading process simple and community-driven.</p>
    <p class="mb-6">The platform facilitates direct negotiation between users and encourages independent transactions outside the platform, giving users full control over their buying and selling experience.</p>

    <p class="font-bold mb-1">Key features of the application include:</p>

    <ul class="list-inside list-disc mb-6">
      <li>Unified registration system (email & password) for both buying and selling.</li>
      <li>Interactive seller dashboard for managing listings, complete with image upload, item details, pricing, and location.</li>
      <li>Buyer experience with product browsing, detailed listing view, and a locally stored wishlist.</li>
      <li>Transaction history tracking for both buyer and seller roles, helping users keep record of their activities.</li>
      <li>In-app notification system (bell icon) for real-time alerts and interactions.</li>
      <li>User profiles with photo, contact number, and address for better transaction trust and clarity.</li>
      <li>Product listings are categorized into five main categories, with a maximum of four active posts per user to maintain listing quality.</li>
    </ul>

    <p>SecondHand offers a straightforward, user-friendly experience for those looking to give pre-loved items a second life through meaningful, peer-to-peer exchange.</p>
    `,
    demo: undefined,
    tech: ["React.js", "Express.js", "Axios", "Bootstrap"],
  },
];

export { projectsData };
export type { ProjectTypes };

export const caseStudies = {
  "harie-digital-invitation": {
    overview: {
      heading: "A more personal way to",
      highlight: "share the moment.",
      paragraphs: [
        "Harie Digital Invitation is a personal product built to reimagine how couples share their wedding celebrations. It brings together elegant invitation designs, meaningful storytelling, and practical features in one digital experience.",
        "Beyond the invitation itself, the platform includes a structured workflow for collecting client information, managing orders, reviewing submissions, and publishing personalized invitations.",
      ],
      points: [
        {
          number: "01",
          title: "The Idea",
          description:
            "Create wedding invitations that feel personal, expressive, and thoughtfully designed for each couple.",
        },
        {
          number: "02",
          title: "The Experience",
          description:
            "Make it easy for guests to explore wedding details, discover the couple's story, and respond to the invitation.",
        },
        {
          number: "03",
          title: "The Product",
          description:
            "Build a manageable platform that connects invitation themes, client submissions, and the publishing workflow.",
        },
      ],
    },
    process: {
      heading: "Thoughtful by design.",
      highlight: "Practical by nature.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Balancing beauty with functionality.",
          description:
            "A wedding invitation needs to feel personal and memorable, but it also has to communicate important information clearly. The challenge was to create distinct visual experiences without making the product difficult to manage or use.",
          points: [
            "Maintain a consistent experience across different invitation themes.",
            "Present wedding details clearly on mobile devices.",
            "Keep client submissions and invitation publishing manageable.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "Building with flexibility in mind.",
          description:
            "I approached the product as a reusable platform rather than a collection of standalone invitation pages. Shared data structures, theme-based rendering, and a structured order workflow help keep the experience flexible while supporting different visual directions.",
          points: [
            "Use structured invitation data to support multiple themes.",
            "Separate invitation content from its visual presentation.",
            "Connect client forms, admin review, and publishing into one workflow.",
          ],
        },
      ],
    },

    highlights: {
      heading: "More than",
      highlight: "just an invitation.",
      description: "A closer look at the experiences and systems that bring Harie Digital Invitation together.",
      items: [
        {
          number: "01",
          title: "Distinctive Invitation Themes",
          description:
            "Four carefully crafted themes, each with its own visual identity, typography, and storytelling approach. From warm and personal to cinematic and culturally inspired, every theme offers a different way to celebrate a couple's story.",
          image: "/images/projects/invitation/highlight-01.webp",
          imageAlt: "Harie Digital Invitation theme collection",
          caption: "Invitation Theme Collection",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Thoughtful Guest Experience",
          description:
            "Each invitation brings together essential wedding details and interactive features, including RSVP, photo galleries, event locations, countdowns, digital gifts, and music, all designed with a mobile-first experience in mind.",
          image: "/images/projects/invitation/highlight-02.webp",
          imageAlt: "Harie Digital Invitation guest experience",
          caption: "Interactive Wedding Invitation",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "A Streamlined Workflow",
          description:
            "A structured client submission form and private admin dashboard simplify the process of collecting information, reviewing submissions, preparing invitation previews, and publishing completed invitations.",
          image: "/images/projects/invitation/highlight-03.webp",
          imageAlt: "Harie Digital Invitation administration workflow",
          caption: "Client Form & Admin Dashboard",
          background: "#DCE2DD",
        },
      ],
    },

    reflection: {
      heading: "Built with purpose.",
      highlight: "Refined through practice.",
      description: "The technologies, decisions, and lessons behind building a product from the ground up.",
      techStack: [
        {
          category: "Frontend",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          category: "Backend & Data",
          technologies: ["Supabase", "PostgreSQL", "Supabase Auth"],
        },
        {
          category: "Tools & Deployment",
          technologies: ["Git", "GitHub", "Vercel"],
        },
      ],
      reflection: {
        title: "More than writing code.",
        paragraphs: [
          "Building Harie Digital Invitation has given me the opportunity to think beyond individual components and consider how an entire product works together. From visual consistency across themes to data structures and administrative workflows, each decision has an impact on the overall experience.",
          "As a personal product, it also continues to challenge me to balance design ambitions with practical implementation, maintainability, and the needs of real users. It is an ongoing process of learning, refining, and turning ideas into something useful.",
        ],
      },
    },
  },

  "gold-to-mecca-umrah": {
    overview: {
      heading: "Making every step",
      highlight: "toward Umrah count.",
      paragraphs: [
        "Gold to Mecca — Umrah is a financial planning experience that helps users prepare for their Umrah journey through gold-based savings. Built as a WebView application integrated with native mobile platforms, it brings financial tools and travel planning into one connected experience.",
        "The platform combines gold and cash wallets, savings plans, financial insights, gold transactions, and Umrah package booking, helping users manage their savings and plan their journey within a unified interface.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description:
            "Support Umrah financial planning through accessible gold-based savings and clear progress tracking.",
        },
        {
          number: "02",
          title: "The Experience",
          description:
            "Connect savings, wallet management, gold transactions, and travel planning within a mobile-first experience.",
        },
        {
          number: "03",
          title: "The Platform",
          description: "Deliver a Vue-based WebView experience integrated with native mobile applications.",
        },
      ],
    },

    process: {
      heading: "Simplifying complexity.",
      highlight: "One step at a time.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Making financial journeys easier to navigate.",
          description:
            "The product brings together multiple financial activities, from managing gold and cash balances to tracking savings and booking Umrah packages. The challenge was to present these connected workflows clearly within a mobile WebView environment.",
          points: [
            "Organize multiple financial features into intuitive mobile navigation.",
            "Present balances, transaction histories, and savings progress clearly.",
            "Maintain a consistent experience across native and WebView interactions.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "A structured, mobile-first experience.",
          description:
            "The frontend was built around reusable Vue components, structured state management, and API-driven data flows. This approach supports complex financial interactions while keeping the interface consistent and manageable.",
          points: [
            "Build reusable components for shared financial interface patterns.",
            "Manage application state and server data with Pinia and Vue Query.",
            "Use typed interfaces and form validation to support reliable user flows.",
          ],
        },
      ],
    },

    highlights: {
      heading: "From saving gold",
      highlight: "to planning the journey.",
      description:
        "A closer look at the connected financial tools and travel experiences within Gold to Mecca — Umrah.",
      items: [
        {
          number: "01",
          title: "Gold-Based Savings",
          description:
            "Savings plans help users prepare for Umrah with progress tracking, savings details, reminders, and financial insights that make their goals easier to follow.",
          image: "/images/projects/gtm-umrah/highlight-01.webp",
          imageAlt: "Gold to Mecca Umrah savings interface",
          caption: "Savings Plans & Progress",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Gold & Wallet Management",
          description:
            "A connected financial experience for viewing gold and cash balances, managing gold purchases and sales, and reviewing transaction history and asset ownership.",
          image: "/images/projects/gtm-umrah/highlight-02.webp",
          imageAlt: "Gold to Mecca Umrah wallet interface",
          caption: "Gold Wallet & Transactions",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "Umrah Package Booking",
          description:
            "Users can explore available Umrah travel packages and continue through booking and payment workflows within the same application experience.",
          image: "/images/projects/gtm-umrah/highlight-03.webp",
          imageAlt: "Gold to Mecca Umrah package booking interface",
          caption: "Travel Packages & Booking",
          background: "#DCE2DD",
        },
      ],
    },

    reflection: {
      heading: "Building for clarity.",
      highlight: "Designing for confidence.",
      description: "The technologies and frontend considerations behind a connected financial WebView experience.",
      techStack: [
        {
          category: "Frontend & UI",
          technologies: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "Reka UI"],
        },
        {
          category: "State & Data",
          technologies: ["Pinia", "TanStack Vue Query", "Axios"],
        },
        {
          category: "Forms & Utilities",
          technologies: ["VeeValidate", "Yup", "VueUse", "Decimal.js"],
        },
      ],
      reflection: {
        title: "Connecting complex experiences.",
        paragraphs: [
          "Working on Gold to Mecca — Umrah reinforced the importance of making complex financial information approachable. Bringing together wallets, savings plans, gold transactions, and travel booking required careful attention to component structure, data handling, and interface consistency.",
          "Developing within a WebView environment also highlighted the importance of coordinating web experiences with native application flows. The project strengthened my approach to building maintainable, API-driven frontend applications with clear and reliable user interactions.",
        ],
      },
    },
  },

  "gold-to-mecca-hajj": {
    overview: {
      heading: "A thoughtful way",
      highlight: "to prepare for Hajj.",
      paragraphs: [
        "Gold to Mecca — Hajj is a mobile WebView experience designed to support Hajj financial planning through gold-based savings and asset management. Integrated into the BPKH native application, it provides access to financial tools within an existing mobile ecosystem.",
        "The experience brings together three Hajj savings plans—Registration, Settlement, and Travel Expenses—alongside gold, cash, and RPED wallets, financial insights, and gold transactions. Each savings plan supports a different stage of Hajj preparation, from securing a place in the pilgrimage queue to completing payments and preparing travel funds.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description:
            "Support different stages of Hajj preparation through dedicated savings plans and gold-based financial tools.",
        },
        {
          number: "02",
          title: "The Experience",
          description:
            "Make savings progress, wallet balances, asset ownership, and financial activity easier to understand and manage.",
        },
        {
          number: "03",
          title: "The Platform",
          description: "Deliver a mobile-first WebView interface integrated with the BPKH native application.",
        },
      ],
    },

    process: {
      heading: "Complex financial tools.",
      highlight: "A clearer experience.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Bringing financial clarity to a mobile experience.",
          description:
            "The application combines multiple Hajj savings plans, wallet types, gold transactions, and financial information within a mobile environment. The challenge was to organize these connected features into an experience that remains clear, consistent, and practical for everyday use.",
          points: [
            "Present different Hajj savings plans and their progress clearly.",
            "Organize gold, cash, and RPED wallet information consistently.",
            "Maintain intuitive financial workflows within a native application WebView.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "Structured interfaces for connected workflows.",
          description:
            "The frontend uses reusable Vue components, typed data structures, and API-driven interactions to support savings and financial workflows. A consistent visual system and clear information hierarchy help users navigate between savings plans, wallets, transactions, and financial details.",
          points: [
            "Build reusable UI patterns for savings plans, wallets, and financial information.",
            "Organize application state and server data using Pinia and Vue Query.",
            "Support financial forms and transactions with validation and clear feedback.",
          ],
        },
      ],
    },

    highlights: {
      heading: "Preparing for Hajj.",
      highlight: "Managing with confidence.",
      description:
        "A closer look at the savings plans and connected financial tools that support different stages of Hajj preparation.",
      items: [
        {
          number: "01",
          title: "Hajj Savings Plans",
          description:
            "Three dedicated savings plans support different stages of Hajj preparation: Registration for securing a pilgrimage queue number, Settlement for completing Hajj payments, and Travel Expenses for preparing personal funds during the journey.",
          image: "/images/projects/gtm-hajj/highlight-01.webp",
          imageAlt: "Gold to Mecca Hajj savings plans interface",
          caption: "Registration, Settlement & Travel Savings",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Multi-Wallet Experience",
          description:
            "A connected interface for viewing and managing gold, cash, and RPED wallets, with financial information organized for clarity and accessibility.",
          image: "/images/projects/gtm-hajj/highlight-02.webp",
          imageAlt: "Gold to Mecca Hajj multi-wallet interface",
          caption: "Gold, Cash & RPED Wallets",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "Gold Transactions & Financial Insights",
          description:
            "Gold buying and selling workflows connect with transaction histories, asset ownership, profit and loss information, and withdrawal features to provide a clearer view of financial activity.",
          image: "/images/projects/gtm-hajj/highlight-03.webp",
          imageAlt: "Gold to Mecca Hajj transactions and financial insights interface",
          caption: "Gold Trading & Financial Overview",
          background: "#DCE2DD",
        },
      ],
    },

    reflection: {
      heading: "Designed for clarity.",
      highlight: "Built for consistency.",
      description:
        "The technologies and frontend considerations behind a financial WebView experience for Hajj preparation.",
      techStack: [
        {
          category: "Frontend & UI",
          technologies: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "Reka UI"],
        },
        {
          category: "State & Data",
          technologies: ["Pinia", "TanStack Vue Query", "Axios"],
        },
        {
          category: "Forms & Utilities",
          technologies: ["VeeValidate", "Yup", "VueUse", "Decimal.js"],
        },
      ],
      reflection: {
        title: "Consistency across connected products.",
        paragraphs: [
          "Working on Gold to Mecca — Hajj reinforced the importance of presenting financial information with clarity and consistency. Supporting different savings plans alongside wallet management and gold transactions required careful consideration of how complex information is organized and presented.",
          "The project also provided experience in building mobile-first interfaces within an existing native application ecosystem. It strengthened my approach to reusable components, API integration, and maintaining a cohesive experience across related financial products.",
        ],
      },
    },
  },

  "gold-to-mecca-admin": {
    overview: {
      heading: "Behind every journey,",
      highlight: "a connected operation.",
      paragraphs: [
        "Gold to Mecca — Admin is a web-based internal management platform supporting operational activities within the Gold to Mecca ecosystem. It provides administrative tools for managing travel agencies, Umrah and Hajj packages, financial records, and related business information.",
        "The platform brings different management workflows into a structured web interface. My role focused on frontend development, building reusable interfaces, integrating APIs, and implementing consistent interactions across administrative modules.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description:
            "Support travel management, financial administration, and operational activities through a centralized platform.",
        },
        {
          number: "02",
          title: "The Experience",
          description:
            "Provide clear data tables, structured forms, and consistent interactions for administrative workflows.",
        },
        {
          number: "03",
          title: "My Role",
          description:
            "Develop frontend interfaces, integrate backend APIs, and maintain reusable UI patterns across modules.",
        },
      ],
    },

    process: {
      heading: "Complex operations.",
      highlight: "Clearer workflows.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Making complex information easier to manage.",
          description:
            "An administrative platform involves multiple types of information, forms, and operational workflows. The frontend challenge was to present these elements consistently while keeping interfaces readable, responsive, and practical for daily use.",
          points: [
            "Organize complex information through structured tables and forms.",
            "Maintain consistent UI patterns across different management modules.",
            "Handle asynchronous data, form states, and user feedback clearly.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "Reusable components for connected workflows.",
          description:
            "I developed frontend interfaces using Vue 3 and TypeScript, with reusable components and API-driven data handling. Shared UI patterns, structured state management, and form validation helped maintain consistency across different administrative features.",
          points: [
            "Build reusable components for data tables, forms, and management interfaces.",
            "Manage application state and server data using Pinia and TanStack Vue Query.",
            "Implement API integration, form validation, loading states, and error feedback.",
          ],
        },
      ],
    },

    highlights: {
      heading: "One platform.",
      highlight: "Multiple operations.",
      description:
        "An overview of the platform's core capabilities and the frontend work involved in supporting administrative workflows.",
      items: [
        {
          number: "01",
          title: "Travel & Package Management",
          description:
            "Management interfaces for travel agencies, Umrah and Hajj packages, and related business information. My frontend work involved implementing structured data tables, reusable forms, and API-connected management interactions.",
        },
        {
          number: "02",
          title: "Financial & Transaction Management",
          description:
            "Administrative interfaces supporting financial records, payment information, and transaction-related activities. I worked on presenting structured data, handling API responses, and implementing consistent interface states.",
        },
        {
          number: "03",
          title: "Reusable Frontend Architecture",
          description:
            "A component-based frontend approach using Vue 3 and TypeScript to support multiple administrative modules. Shared interface patterns, state management, form validation, and API integration helped maintain consistency and reduce duplicated implementation.",
        },
      ],
    },

    reflection: {
      heading: "Built for operations.",
      highlight: "Designed for clarity.",
      description: "The technologies and frontend considerations behind a multi-module administrative platform.",
      techStack: [
        {
          category: "Frontend & UI",
          technologies: ["Vue 3", "TypeScript", "Vite", "Tailwind CSS", "Reka UI"],
        },
        {
          category: "State & Data",
          technologies: ["Pinia", "TanStack Vue Query", "Axios"],
        },
        {
          category: "Forms & Utilities",
          technologies: ["VeeValidate", "Yup", "VueUse", "Day.js"],
        },
      ],
      reflection: {
        title: "Thinking beyond individual screens.",
        paragraphs: [
          "Working on Gold to Mecca — Admin reinforced the importance of building consistent frontend experiences across multiple administrative modules. Reusable components, predictable interaction patterns, and structured data handling were essential for keeping complex interfaces maintainable and understandable.",
          "The project strengthened my experience with Vue 3, TypeScript, API integration, and state management in data-intensive applications. It also improved my approach to frontend architecture, form validation, and designing interfaces around practical operational needs.",
        ],
      },
    },
  },

  "axel-intelligence": {
    overview: {
      heading: "Making API integration",
      highlight: "more approachable.",
      paragraphs: [
        "Axel Intelligence is a developer-focused platform designed to make API discovery and integration more accessible. It brings together API exploration, AI-assisted interactions, and account access within a connected web experience.",
        "My role focused on frontend development across the public landing page, AI chat interface, authentication flows, and API catalogue. The work involved building responsive interfaces, reusable React components, and API-connected interactions while maintaining a consistent user experience.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description: "Make API services easier to discover and explore through a developer-focused platform.",
        },
        {
          number: "02",
          title: "The Experience",
          description: "Connect product introduction, AI-assisted interactions, account access, and API discovery.",
        },
        {
          number: "03",
          title: "My Role",
          description:
            "Develop the landing page, AI chat, authentication interfaces, and API catalogue using React and TypeScript.",
        },
      ],
    },

    process: {
      heading: "Complex technology.",
      highlight: "Simpler experiences.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Making developer tools feel approachable.",
          description:
            "Developer platforms need to communicate technical capabilities while remaining accessible to different users. The frontend challenge was to create clear, responsive interfaces across public-facing pages and interactive application features.",
          points: [
            "Present the platform's capabilities through a clear and engaging landing page.",
            "Create intuitive interfaces for AI-assisted conversations and API discovery.",
            "Maintain consistent interactions across authentication and application screens.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "Consistent interfaces across different experiences.",
          description:
            "I developed frontend features using React and TypeScript, focusing on reusable components, responsive layouts, and API integration. Consistent interface patterns helped connect the public landing page with the platform's interactive features.",
          points: [
            "Build responsive landing page sections and reusable UI components.",
            "Implement AI chat interfaces and authentication flows.",
            "Develop API catalogue interfaces with structured information and API-driven data.",
          ],
        },
      ],
    },

    highlights: {
      heading: "From introduction",
      highlight: "to exploration.",
      description: "A closer look at my frontend contributions across the Axel Intelligence platform.",
      items: [
        {
          number: "01",
          title: "Public Landing Page",
          description:
            "Developed a responsive landing page introducing Axel Intelligence, focusing on clear content presentation, reusable components, and consistent layouts across different screen sizes.",
        },
        {
          number: "02",
          title: "AI Chat Experience",
          description:
            "Built conversational interfaces for AI-assisted interactions, including message presentation, user input, and API-connected communication.",
        },
        {
          number: "03",
          title: "Authentication & API Catalogue",
          description:
            "Developed authentication interfaces and API catalogue components, supporting account access and structured API discovery through reusable React components.",
        },
      ],
    },

    reflection: {
      heading: "Built for developers.",
      highlight: "Focused on usability.",
      description: "The frontend technologies and engineering considerations behind a developer-focused API platform.",
      techStack: [
        {
          category: "Frontend",
          technologies: ["React", "TypeScript"],
        },
        {
          category: "API Integration",
          technologies: ["REST APIs", "HTTP Requests", "JSON"],
        },
        {
          category: "Development Tools",
          technologies: ["Git", "API Documentation", "Browser DevTools"],
        },
      ],
      reflection: {
        title: "Connecting product experience with functionality.",
        paragraphs: [
          "Working on Axel Intelligence gave me experience developing both public-facing pages and interactive application features. Building the landing page, AI chat, authentication, and API catalogue required balancing visual consistency with different functional requirements.",
          "The project strengthened my approach to reusable React components, responsive design, and API-connected interfaces. It also reinforced the importance of creating intuitive experiences that help users navigate technical products more comfortably.",
        ],
      },
    },
  },

  "tunas-unggul": {
    overview: {
      heading: "Connecting education",
      highlight: "with better operations.",
      paragraphs: [
        "Tunas Unggul is a school management platform supporting academic and administrative operations across multiple education levels, from Play School to Senior High School. It brings different school activities and management workflows into a connected digital environment.",
        "The platform covers academic management, student affairs, finance, human resources, school services, and reporting. My role focused on frontend development, building structured interfaces, integrating backend APIs, and maintaining consistent user experiences across different management modules.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description:
            "Support academic, administrative, and operational activities through a centralized school management platform.",
        },
        {
          number: "02",
          title: "The Experience",
          description:
            "Provide structured interfaces for managing school information, operational workflows, and administrative data.",
        },
        {
          number: "03",
          title: "My Role",
          description:
            "Develop frontend interfaces, integrate REST APIs, and implement reusable UI patterns across school management modules.",
        },
      ],
    },

    process: {
      heading: "Many moving parts.",
      highlight: "One connected system.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Managing complexity across school operations.",
          description:
            "A school management platform involves interconnected workflows, different data requirements, and multiple user responsibilities. The frontend challenge was to present complex information clearly while maintaining consistent interactions across academic, administrative, and operational modules.",
          points: [
            "Organize complex information through structured forms and data tables.",
            "Maintain consistent UI patterns across different management modules.",
            "Handle asynchronous data, validation, and user feedback across workflows.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "Reusable interfaces for connected workflows.",
          description:
            "I worked on frontend interfaces using reusable components, structured data presentation, and REST API integration. Shared layouts, form patterns, and consistent interaction states helped support different school management activities within a cohesive application.",
          points: [
            "Develop reusable components for forms, tables, and management interfaces.",
            "Build responsive layouts for different administrative workflows.",
            "Integrate REST APIs and handle loading, validation, and error states.",
          ],
        },
      ],
    },

    highlights: {
      heading: "Supporting education.",
      highlight: "Simplifying operations.",
      description:
        "An overview of the platform's core capabilities and the frontend work involved in supporting school management workflows.",
      items: [
        {
          number: "01",
          title: "Academic & Student Management",
          description:
            "Interfaces supporting student information, academic activities, and student affairs across different education levels. My frontend work involved presenting structured information, implementing management forms, and connecting interfaces with backend services.",
        },
        {
          number: "02",
          title: "Finance & Administration",
          description:
            "Administrative interfaces supporting financial records, human resources, and reporting. I worked on organizing data through consistent tables, forms, and API-connected interactions to support everyday management activities.",
        },
        {
          number: "03",
          title: "School Services & Transportation",
          description:
            "Operational features supporting school cooperative activities, orders, and transportation services. The platform also includes route-based fare calculations using Google Maps, connecting location-related functionality with school service workflows.",
        },
      ],
    },

    reflection: {
      heading: "Built for complexity.",
      highlight: "Focused on usability.",
      description:
        "The frontend considerations and engineering practices behind a multi-module school management platform.",
      techStack: [
        {
          category: "Frontend Engineering",
          technologies: ["Responsive Web Interfaces", "Reusable Components", "Form Handling"],
        },
        {
          category: "Integration",
          technologies: ["REST APIs", "Google Maps", "Role-Based Access"],
        },
        {
          category: "Development Practices",
          technologies: ["Git", "Component-Based Development", "Cross-Functional Collaboration"],
        },
      ],
      reflection: {
        title: "Building systems that work together.",
        paragraphs: [
          "Working on Tunas Unggul strengthened my experience developing frontend interfaces for a large management platform with interconnected modules and different user responsibilities. Maintaining consistency across academic, financial, and operational workflows reinforced the importance of reusable components and clear information architecture.",
          "The project also improved my approach to API integration, form handling, and collaboration across different development responsibilities. It reinforced the importance of building maintainable interfaces that support practical workflows in complex applications.",
        ],
      },
    },
  },
};

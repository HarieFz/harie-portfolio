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
          image: "/images/case-study/harie/themes.webp",
          imageAlt: "Harie Digital Invitation theme collection",
          caption: "Invitation Theme Collection",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Thoughtful Guest Experience",
          description:
            "Each invitation brings together essential wedding details and interactive features, including RSVP, photo galleries, event locations, countdowns, digital gifts, and music, all designed with a mobile-first experience in mind.",
          image: "/images/case-study/harie/guest-experience.webp",
          imageAlt: "Harie Digital Invitation guest experience",
          caption: "Interactive Wedding Invitation",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "A Streamlined Workflow",
          description:
            "A structured client submission form and private admin dashboard simplify the process of collecting information, reviewing submissions, preparing invitation previews, and publishing completed invitations.",
          image: "/images/case-study/harie/workflow.webp",
          imageAlt: "Harie Digital Invitation administration workflow",
          caption: "Client Form & Admin Dashboard",
          background: "#DCE2DD",
        },
      ],
    },

    showcase: {
      heading: "A closer look at",
      highlight: "the details.",
      description:
        "A visual exploration of the interfaces, interactions, and design decisions that shape the final experience.",
      items: [
        {
          number: "01",
          title: "The Platform",
          description: "A welcoming starting point for discovering invitation themes.",
          image: "/images/case-study/harie/showcase-platform.webp",
          imageAlt: "Harie Digital Invitation platform interface",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "The Invitation",
          description: "Personalized wedding stories brought to life through digital design.",
          image: "/images/case-study/harie/showcase-invitation.webp",
          imageAlt: "Harie Digital Invitation wedding invitation interface",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "The Management",
          description: "A structured workspace for managing the invitation workflow.",
          image: "/images/case-study/harie/showcase-management.webp",
          imageAlt: "Harie Digital Invitation admin management interface",
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
          image: "/images/case-study/gtm-umrah/savings.webp",
          imageAlt: "Gold to Mecca Umrah savings interface",
          caption: "Savings Plans & Progress",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Gold & Wallet Management",
          description:
            "A connected financial experience for viewing gold and cash balances, managing gold purchases and sales, and reviewing transaction history and asset ownership.",
          image: "/images/case-study/gtm-umrah/wallet.webp",
          imageAlt: "Gold to Mecca Umrah wallet interface",
          caption: "Gold Wallet & Transactions",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "Umrah Package Booking",
          description:
            "Users can explore available Umrah travel packages and continue through booking and payment workflows within the same application experience.",
          image: "/images/case-study/gtm-umrah/booking.webp",
          imageAlt: "Gold to Mecca Umrah package booking interface",
          caption: "Travel Packages & Booking",
          background: "#DCE2DD",
        },
      ],
    },

    showcase: {
      heading: "A closer look at",
      highlight: "the experience.",
      description: "Selected interfaces from the mobile financial planning and Umrah journey experience.",
      items: [
        {
          number: "01",
          title: "The Dashboard",
          description: "An overview of savings, wallets, and financial activity.",
          image: "/images/case-study/gtm-umrah/dashboard.webp",
          imageAlt: "Gold to Mecca Umrah dashboard",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "The Savings Journey",
          description: "Tracking progress toward an Umrah savings goal.",
          image: "/images/case-study/gtm-umrah/savings-detail.webp",
          imageAlt: "Gold to Mecca Umrah savings details",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "The Booking Experience",
          description: "Exploring and selecting Umrah travel packages.",
          image: "/images/case-study/gtm-umrah/packages.webp",
          imageAlt: "Gold to Mecca Umrah travel packages",
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
        "The experience brings together gold, cash, and RPED wallets, financial insights, gold transactions, and Hajj-related planning. Its purpose is to make important financial information accessible while helping users navigate their preparation for Hajj.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description: "Support Hajj preparation through accessible financial tools and gold-based asset management.",
        },
        {
          number: "02",
          title: "The Experience",
          description:
            "Make wallet balances, asset ownership, transaction history, and financial insights easier to understand.",
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
            "The application combines different wallet types, gold transactions, and financial information within a mobile environment. The challenge was to organize these features into an experience that remains clear, consistent, and practical for everyday use.",
          points: [
            "Present gold, cash, and RPED wallet information clearly.",
            "Make asset ownership and transaction history easy to navigate.",
            "Maintain consistent interactions within a native application WebView.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "Structured interfaces for connected workflows.",
          description:
            "The frontend uses reusable Vue components, typed data structures, and API-driven interactions to support financial workflows. A consistent visual system and clear information hierarchy help users navigate between wallets, transactions, and financial details.",
          points: [
            "Build reusable UI patterns for wallets and financial information.",
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
        "Selected features that connect wallet management, gold transactions, and financial planning within the Hajj experience.",
      items: [
        {
          number: "01",
          title: "Multi-Wallet Experience",
          description:
            "A connected interface for viewing and managing gold, cash, and RPED wallets, with financial information organized for clarity and accessibility.",
          image: "/images/case-study/gtm-hajj/wallets.webp",
          imageAlt: "Gold to Mecca Hajj multi-wallet interface",
          caption: "Gold, Cash & RPED Wallets",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Gold Transactions",
          description:
            "Gold buying and selling workflows, supported by transaction histories and asset ownership information that help users follow their financial activity.",
          image: "/images/case-study/gtm-hajj/transactions.webp",
          imageAlt: "Gold to Mecca Hajj gold transaction interface",
          caption: "Gold Trading & History",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "Financial Insights & Withdrawals",
          description:
            "Financial details, profit and loss information, and withdrawal flows presented through a structured mobile interface.",
          image: "/images/case-study/gtm-hajj/financial-insights.webp",
          imageAlt: "Gold to Mecca Hajj financial insights interface",
          caption: "Financial Overview",
          background: "#DCE2DD",
        },
      ],
    },

    showcase: {
      heading: "A closer look at",
      highlight: "the Hajj experience.",
      description:
        "Selected mobile interfaces showcasing the financial tools and user journeys within Gold to Mecca — Hajj.",
      items: [
        {
          number: "01",
          title: "The Wallet Overview",
          description: "A centralized view of financial balances and assets.",
          image: "/images/case-study/gtm-hajj/dashboard.webp",
          imageAlt: "Gold to Mecca Hajj wallet dashboard",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "The Gold Experience",
          description: "Managing gold transactions and reviewing ownership details.",
          image: "/images/case-study/gtm-hajj/gold.webp",
          imageAlt: "Gold to Mecca Hajj gold management screen",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "The Financial Journey",
          description: "Accessing financial insights and withdrawal workflows.",
          image: "/images/case-study/gtm-hajj/withdrawal.webp",
          imageAlt: "Gold to Mecca Hajj withdrawal interface",
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
          "Working on Gold to Mecca — Hajj reinforced the importance of presenting financial information with clarity and consistency. Even when products share similar technologies, their workflows and user needs can differ, requiring careful consideration of how information is organized and presented.",
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
        "Gold to Mecca — Admin is a web-based management platform supporting the operational workflows behind the Gold to Mecca ecosystem. It provides a centralized interface for managing travel agencies, Umrah and Hajj packages, financial transactions, and administrative activities.",
        "The platform brings together business data, operational requests, payment records, and account management into structured workflows. By organizing these processes within one dashboard, it helps administrative teams navigate complex information and manage day-to-day operations.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description:
            "Support the operational management of financial services, travel packages, and administrative activities.",
        },
        {
          number: "02",
          title: "The Experience",
          description:
            "Provide structured dashboards, data tables, forms, and management workflows for administrative users.",
        },
        {
          number: "03",
          title: "The Platform",
          description:
            "Build a scalable frontend experience for managing interconnected business and financial operations.",
        },
      ],
    },

    process: {
      heading: "Complex operations.",
      highlight: "Clearer workflows.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Managing complexity across multiple workflows.",
          description:
            "The administrative platform covers different operational areas, from travel agency and package management to payments, withdrawals, and user administration. The challenge was to organize these interconnected processes into a consistent interface that supports efficient daily operations.",
          points: [
            "Present complex business data through readable tables and dashboards.",
            "Support multiple management workflows with consistent interactions.",
            "Handle forms, transaction details, and operational states clearly.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "A structured system built around usability.",
          description:
            "The frontend was developed using reusable Vue components, consistent interface patterns, and API-driven data management. Shared layouts and interaction patterns help keep administrative workflows predictable while supporting different operational requirements.",
          points: [
            "Create reusable patterns for data tables, forms, and management screens.",
            "Organize application state and API interactions using Pinia and Vue Query.",
            "Apply form validation and clear feedback throughout operational workflows.",
          ],
        },
      ],
    },

    highlights: {
      heading: "One platform.",
      highlight: "Multiple operations.",
      description: "A closer look at the management tools that support the Gold to Mecca ecosystem behind the scenes.",
      items: [
        {
          number: "01",
          title: "Operational Dashboard",
          description:
            "A centralized workspace for accessing operational information, navigating management modules, and reviewing activities across the platform.",
          image: "/images/case-study/gtm-admin/dashboard.webp",
          imageAlt: "Gold to Mecca Admin operational dashboard",
          caption: "Dashboard & Overview",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Travel & Package Management",
          description:
            "Administrative workflows for managing travel agencies, Umrah and Hajj packages, master data, and related business information through structured forms and data tables.",
          image: "/images/case-study/gtm-admin/packages.webp",
          imageAlt: "Gold to Mecca Admin travel package management",
          caption: "Travel Agencies & Packages",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "Financial & Transaction Workflows",
          description:
            "Interfaces for reviewing and managing orders, vendor payments, withdrawals, and other financial activities with organized transaction details and operational states.",
          image: "/images/case-study/gtm-admin/transactions.webp",
          imageAlt: "Gold to Mecca Admin financial transaction management",
          caption: "Payments & Transactions",
          background: "#DCE2DD",
        },
      ],
    },

    showcase: {
      heading: "A closer look at",
      highlight: "the operations.",
      description:
        "Selected interfaces highlighting the dashboard, management modules, and transaction workflows within Gold to Mecca — Admin.",
      items: [
        {
          number: "01",
          title: "The Dashboard",
          description: "A centralized entry point for administrative activities and operational information.",
          image: "/images/case-study/gtm-admin/showcase-dashboard.webp",
          imageAlt: "Gold to Mecca Admin dashboard interface",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "The Management",
          description: "Structured data tables and forms for managing business information.",
          image: "/images/case-study/gtm-admin/showcase-management.webp",
          imageAlt: "Gold to Mecca Admin management interface",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "The Transactions",
          description: "Detailed operational views for payments, orders, and withdrawals.",
          image: "/images/case-study/gtm-admin/showcase-transactions.webp",
          imageAlt: "Gold to Mecca Admin transaction interface",
          background: "#DCE2DD",
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
          "Working on Gold to Mecca — Admin highlighted the importance of consistency across complex administrative interfaces. With multiple modules and operational workflows, reusable components and predictable interaction patterns became essential for keeping the frontend maintainable and the experience understandable.",
          "The project strengthened my approach to building data-intensive applications, handling API-driven workflows, and organizing frontend architecture around practical business needs. It also reinforced how thoughtful interface decisions can make complex operational tasks easier to navigate.",
        ],
      },
    },
  },

  "axel-intelligence": {
    overview: {
      heading: "Making API integration",
      highlight: "more approachable.",
      paragraphs: [
        "Axel Intelligence is a centralized API integration platform designed to simplify how developers discover, understand, and work with available APIs. It brings API documentation, access requests, and testing capabilities into a connected web experience.",
        "The platform supports the integration journey from exploring API services and reviewing technical documentation to managing approval workflows and testing requests directly in the browser. AI-assisted features also help make the development experience more accessible.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description: "Simplify API discovery, documentation access, and integration workflows for developers.",
        },
        {
          number: "02",
          title: "The Experience",
          description: "Bring API exploration, access management, and interactive testing into a consistent interface.",
        },
        {
          number: "03",
          title: "The Platform",
          description:
            "Deliver a developer-focused web application with API-driven interactions and reusable frontend components.",
        },
      ],
    },

    process: {
      heading: "Complex integrations.",
      highlight: "Simpler interactions.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Making technical workflows easier to navigate.",
          description:
            "API integration involves multiple steps, from discovering available services and understanding documentation to requesting access and validating API responses. The challenge was to organize these technical workflows into a clear interface without sacrificing the detail developers need.",
          points: [
            "Present API catalogs and technical documentation clearly.",
            "Support access requests and approval-related workflows.",
            "Make request configuration and API responses easier to inspect.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "A developer experience built around clarity.",
          description:
            "The frontend was developed with reusable React components, TypeScript, and REST API integration. Consistent interface patterns and structured interactions help developers navigate documentation, manage access requests, and test APIs within the platform.",
          points: [
            "Build reusable components for API catalogs and documentation.",
            "Connect frontend workflows with REST API services.",
            "Provide interactive request and response views for API testing.",
          ],
        },
      ],
    },

    highlights: {
      heading: "From discovery",
      highlight: "to integration.",
      description: "A closer look at the tools and workflows designed to make API integration more accessible.",
      items: [
        {
          number: "01",
          title: "API Discovery & Documentation",
          description:
            "A centralized catalog for exploring available APIs, understanding their capabilities, and accessing the technical information needed to begin integration.",
          image: "/images/case-study/axel/api-catalog.webp",
          imageAlt: "Axel Intelligence API catalog and documentation",
          caption: "API Catalog & Documentation",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Access & Approval Workflows",
          description:
            "Structured interfaces for requesting API access and following approval-related processes, helping developers navigate the steps required before integration.",
          image: "/images/case-study/axel/access-management.webp",
          imageAlt: "Axel Intelligence API access management",
          caption: "Access Requests & Approvals",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "Interactive API Testing",
          description:
            "Browser-based tools for configuring API requests, submitting test calls, and inspecting responses without leaving the platform.",
          image: "/images/case-study/axel/api-testing.webp",
          imageAlt: "Axel Intelligence interactive API testing interface",
          caption: "API Requests & Responses",
          background: "#DCE2DD",
        },
      ],
    },

    showcase: {
      heading: "A closer look at",
      highlight: "the developer experience.",
      description:
        "Selected interfaces highlighting API discovery, documentation, and interactive integration workflows.",
      items: [
        {
          number: "01",
          title: "The API Catalog",
          description: "Exploring available services through a centralized interface.",
          image: "/images/case-study/axel/showcase-catalog.webp",
          imageAlt: "Axel Intelligence API catalog interface",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "The Documentation",
          description: "Understanding endpoints, parameters, and integration requirements.",
          image: "/images/case-study/axel/showcase-documentation.webp",
          imageAlt: "Axel Intelligence API documentation interface",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "The API Playground",
          description: "Configuring requests and reviewing API responses in the browser.",
          image: "/images/case-study/axel/showcase-playground.webp",
          imageAlt: "Axel Intelligence API playground interface",
          background: "#DCE2DD",
        },
      ],
    },

    reflection: {
      heading: "Built for developers.",
      highlight: "Focused on usability.",
      description:
        "The frontend technologies and engineering considerations behind a developer-focused API integration platform.",
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
        title: "Designing for technical users.",
        paragraphs: [
          "Working on Axel Intelligence strengthened my understanding of how developers interact with API platforms. Building interfaces for documentation, access management, and request testing required attention to both technical accuracy and usability.",
          "The project reinforced the value of clear information architecture, reusable React components, and reliable API integration. It also showed how thoughtful frontend development can reduce friction in complex technical workflows and make developer tools easier to use.",
        ],
      },
    },
  },

  "tunas-unggul": {
    overview: {
      heading: "Connecting education",
      highlight: "with better operations.",
      paragraphs: [
        "Tunas Unggul is a comprehensive school management platform designed to support academic and administrative operations across multiple education levels, from Play School to Senior High School. It brings essential school activities into a connected digital environment.",
        "The platform covers academic management, student affairs, finance, human resources, school services, and reporting. Through structured workflows and role-based access, it helps different school stakeholders manage information and everyday operations within one system.",
      ],
      points: [
        {
          number: "01",
          title: "The Purpose",
          description:
            "Bring academic, administrative, and operational activities together within a centralized school management platform.",
        },
        {
          number: "02",
          title: "The Experience",
          description:
            "Provide organized interfaces for managing students, academic activities, financial records, and school services.",
        },
        {
          number: "03",
          title: "The Platform",
          description:
            "Support multiple education levels and user roles through consistent, data-driven management interfaces.",
        },
      ],
    },

    process: {
      heading: "Many moving parts.",
      highlight: "One connected system.",
      columns: [
        {
          label: "01 / The Challenge",
          title: "Bringing diverse school operations together.",
          description:
            "School management involves many interconnected activities, each with different workflows, data requirements, and user responsibilities. The challenge was to organize these operations into a consistent platform while keeping individual modules practical and easy to navigate.",
          points: [
            "Support different academic levels and operational requirements.",
            "Present complex student, financial, and administrative data clearly.",
            "Maintain consistent interactions across multiple modules and user roles.",
          ],
        },
        {
          label: "02 / The Approach",
          title: "A modular approach to everyday operations.",
          description:
            "The frontend was developed around reusable interface patterns, structured data presentation, and REST API integration. Consistent layouts, forms, and management views help users navigate different school workflows while maintaining a cohesive experience.",
          points: [
            "Create reusable components for dashboards, forms, and data tables.",
            "Organize modules around academic and administrative responsibilities.",
            "Integrate frontend workflows with backend services and role-based access.",
          ],
        },
      ],
    },

    highlights: {
      heading: "Supporting education.",
      highlight: "Simplifying operations.",
      description:
        "A closer look at the interconnected modules supporting academic activities, school administration, and everyday services.",
      items: [
        {
          number: "01",
          title: "Academic & Student Management",
          description:
            "Structured workflows for managing student information, academic activities, and student affairs across different education levels within the school.",
          image: "/images/case-study/tunas-unggul/academic.webp",
          imageAlt: "Tunas Unggul academic and student management interface",
          caption: "Academic & Student Affairs",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "Finance & Administration",
          description:
            "Administrative tools for managing financial records, human resources, and reporting through organized data tables, forms, and management interfaces.",
          image: "/images/case-study/tunas-unggul/finance.webp",
          imageAlt: "Tunas Unggul finance and administration interface",
          caption: "Finance & Administration",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "Connected School Services",
          description:
            "Operational modules supporting school cooperative activities, orders, and transportation services, including route-based fare calculations using Google Maps.",
          image: "/images/case-study/tunas-unggul/services.webp",
          imageAlt: "Tunas Unggul school services and transportation interface",
          caption: "School Services & Transportation",
          background: "#DCE2DD",
        },
      ],
    },

    showcase: {
      heading: "A closer look at",
      highlight: "the school experience.",
      description:
        "Selected interfaces highlighting the academic, administrative, and operational workflows within Tunas Unggul.",
      items: [
        {
          number: "01",
          title: "The Management Dashboard",
          description: "A centralized workspace for navigating school operations and management modules.",
          image: "/images/case-study/tunas-unggul/dashboard.webp",
          imageAlt: "Tunas Unggul school management dashboard",
          background: "#D8DCD3",
        },
        {
          number: "02",
          title: "The Academic Experience",
          description: "Managing student information and academic activities through structured interfaces.",
          image: "/images/case-study/tunas-unggul/showcase-academic.webp",
          imageAlt: "Tunas Unggul academic management interface",
          background: "#DDD3C9",
        },
        {
          number: "03",
          title: "The Operational Experience",
          description: "Supporting administrative tasks, school services, and reporting workflows.",
          image: "/images/case-study/tunas-unggul/showcase-operations.webp",
          imageAlt: "Tunas Unggul operational management interface",
          background: "#DCE2DD",
        },
      ],
    },

    reflection: {
      heading: "Built for complexity.",
      highlight: "Focused on usability.",
      description: "The frontend considerations and lessons behind building a multi-module school management platform.",
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
          "Working on Tunas Unggul gave me experience navigating the complexity of a large management platform with interconnected modules and different user responsibilities. Building consistent interfaces across academic, financial, and operational workflows reinforced the importance of reusable components and thoughtful information architecture.",
          "The project also strengthened my ability to collaborate across disciplines, integrate frontend applications with backend services, and translate diverse operational requirements into practical user experiences. It shaped how I approach larger systems where clarity, consistency, and maintainability matter just as much as visual design.",
        ],
      },
    },
  },
};

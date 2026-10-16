export const portfolioData = {
  developer: {
    name: "Eslam Gamil Ebrahim",
    shortName: "Eslam Gamil",
    monogram: "EG // DEV",
    title: "Front-End Developer & CS Student",
    headline: "Thoughtful interfaces. Precise engineering. Digital experiences that stand apart.",
    subheadline: "Computing & Data Science student at Alexandria University (GPA 3.66). Frontend engineer specializing in React 19, TypeScript, and modern web architectures with 200+ algorithmic problems solved on Codeforces & LeetCode.",
    location: "Alexandria, Egypt",
    timezone: "UTC+2 (EET)",
    phone: "+20 01211735629",
    education: {
      university: "Alexandria University",
      faculty: "Faculty of Computing and Data Science",
      department: "Data Science",
      timeline: "2024 – 2028",
      gpa: "3.66 (Excellent)",
      focus: "Data Structures, Algorithms, Object-Oriented Programming (OOP), Software Architecture"
    },
    certifications: [
      {
        institution: "Digital Egypt Pioneers Initiative (DEPI)",
        track: "React Frontend Track (2025)",
        description: "Completed intensive national initiative training in React, JavaScript, modern web standards, and UI/UX best practices."
      },
      {
        institution: "Route Academy",
        track: "Front-End Development (React) Track",
        description: "Hands-on component architecture, state management, and modern React application development."
      }
    ],
    achievements: {
      problemSolving: "Solved 200+ algorithmic problems on Codeforces and LeetCode",
      focusAreas: ["OOP", "Data Structures", "Algorithms", "REST API Consumption", "Unit Testing", "Agile Methodologies"]
    },
    status: {
      available: true,
      label: "Available for Front-End Roles & Internships",
      type: "Remote / On-site / Hybrid"
    },
    contact: {
      email: "eslamgamil214@gmail.com",
      phone: "+20 01211735629",
      github: "https://github.com/eslam2981",
      linkedin: "https://www.linkedin.com/in/eslam-gamil",
      location: "Alexandria, Egypt",
      hasCustomBackend: false
    }
  },

  projects: [
    {
      id: "sphera-social",
      index: "01",
      name: "Sphera Social",
      year: "2026",
      badge: "Flagship Social Network",
      tagline: "Modern Social Platform with Real-Time Interactions, Infinite Scroll & Optimistic Updates",
      category: "Full Social Network Application",
      technologies: [
        "React 19", 
        "TypeScript", 
        "Tailwind CSS v4", 
        "TanStack Query v5", 
        "Framer Motion", 
        "HeroUI", 
        "React Hook Form", 
        "Zod", 
        "React Router v7", 
        "JWT Decode"
      ],
      status: "Live on Vercel • Active Production Project",
      statusType: "live",
      description: "A feature-rich social media web application built with React, TypeScript, and TanStack Query. Features secure JWT authentication, infinite-scroll newsfeed, post creation with image uploads, real-time optimistic reactions, interactive comments, user profiles with cover banners, friend connection workflows, and full dark mode.",
      highlights: [
        "Infinite-scroll newsfeed with TanStack Query caching and sub-50ms optimistic UI reactions",
        "Robust JWT authentication flow with client-side form validation using Zod and React Hook Form",
        "Interactive post reactions, nested comments thread, follow/unfollow and saved posts repository",
        "Comprehensive user profile views with cover banners, custom avatars, and personal post history",
        "First-class dark mode support with automatic system-preference detection and manual toggling"
      ],
      caseStudy: {
        summary: "Sphera Social was engineered to tackle real-world social feed challenges: zero perceived latency on likes/comments, efficient query invalidation, and strict TypeScript contracts across payloads.",
        problem: "Users expect instantaneous response when interacting with social feeds. Traditional client-side fetching leads to UI layout shifts, stale cache bugs, and laggy mobile scrolling.",
        role: "Frontend Engineer — Designed component hierarchy, implemented TanStack Query infinite feed queries, styled responsive layouts with Tailwind v4 & HeroUI, and enforced strict TypeScript interfaces.",
        techDecisions: [
          {
            tech: "TanStack Query v5 & Axios",
            rationale: "Automated caching, background refetching, and optimistic updates for likes and comments, delivering zero perceived latency."
          },
          {
            tech: "TypeScript & Zod Validation",
            rationale: "Ensured 100% type safety across API responses and validated complex user input forms before network transit."
          },
          {
            tech: "Tailwind CSS v4 & Framer Motion",
            rationale: "Achieved ultra-fast build times, smooth micro-interactions, fluid layout transitions, and seamless theme changes without heavy UI runtimes."
          }
        ],
        challenges: [
          {
            challenge: "Infinite Scrolling Memory & Re-render Optimization",
            solution: "Used TanStack Query infinite query pagination combined with virtualized feed item recycling to keep memory footprint under 60MB on mobile."
          },
          {
            challenge: "Optimistic Commenting & Reaction Synchronization",
            solution: "Engineered rollback handlers in mutation hooks so failed network calls seamlessly restore previous state with accessible toast warnings."
          }
        ],
        metrics: [
          { label: "Deployment", value: "Live on Vercel" },
          { label: "Data Layer", value: "TanStack Query v5" },
          { label: "Type Coverage", value: "100% Strict TypeScript" }
        ],
        links: {
          code: "https://github.com/eslam2981/Sphera-Social",
          demo: "https://sphera-social-amber.vercel.app",
          isDemoPlaceholder: false
        }
      }
    },
    {
      id: "baby-zone-store",
      index: "02",
      name: "Baby Zone (Rawaa Store)",
      year: "2026",
      badge: "E-Commerce & Interactive Utilities",
      tagline: "Comprehensive Kids & Maternity E-Commerce with Hospital Bag Checklist & Live Tracking",
      category: "Full E-Commerce Web Application",
      technologies: [
        "React 19", 
        "JavaScript (ES6+)", 
        "Tailwind CSS", 
        "React Router DOM v7", 
        "Context API", 
        "LocalStorage Sync", 
        "Lucide React"
      ],
      status: "Live on Vercel • Deployed Application",
      statusType: "live",
      description: "A specialized kids and maternity e-commerce platform featuring 17 age-targeted product categories, an interactive Hospital Bag Checklist with live progress tracking, a 4-stage live order tracking system, quick-view product modals, and reactive cart management with free shipping progress meter.",
      highlights: [
        "Interactive Hospital Bag Checklist utility with live progress calculation and LocalStorage save",
        "Live 4-stage Order Tracking timeline (Ordered → Preparing → Out for Delivery → Delivered)",
        "Catalog system with 17 curated age stages from newborn (0m) to child (6y)",
        "Smart cart drawer with dynamic free-shipping progress meter and WhatsApp ordering integration"
      ],
      caseStudy: {
        summary: "Engineered specifically for expectant parents and families, Baby Zone solves both commercial shopping and parental preparation through tailored interactive utilities.",
        problem: "Parents shopping for newborns face overwhelming checklists and uncertainty about hospital preparation and shipment arrival timing.",
        role: "Frontend Engineer — Designed responsive layout, implemented hospital bag checklist calculator, structured category navigation, and built order tracking timeline.",
        techDecisions: [
          {
            tech: "React 19 & Context API",
            rationale: "Managed global cart, wishlist, and shipping threshold calculations with zero unnecessary bundle bloat."
          },
          {
            tech: "LocalStorage Synchronization",
            rationale: "Ensured checklist completion state and cart contents persist across browser tabs and sessions without forcing account login."
          },
          {
            tech: "Tailwind CSS & Mobile-First Rhythm",
            rationale: "Delivered tactile, accessible touch targets for busy parents using one-handed mobile devices."
          }
        ],
        challenges: [
          {
            challenge: "Checklist Progress Calculation Across Categories",
            solution: "Implemented an aggregate selector that calculates overall percentage while preserving distinct categories (Mother, Baby, Nursery)."
          },
          {
            challenge: "Real-Time Order Tracking Timeline",
            solution: "Built a declarative step tracker component that visualizes shipment status with dynamic courier details and timestamps."
          }
        ],
        metrics: [
          { label: "Deployment", value: "Live on Vercel" },
          { label: "Specialized Utilities", value: "Hospital Bag + Tracker" },
          { label: "Catalog Breadth", value: "17 Age Categories" }
        ],
        links: {
          code: "https://github.com/eslam2981/baby-zone-store",
          demo: "https://baby-zone-store.vercel.app",
          isDemoPlaceholder: false
        }
      }
    },
    {
      id: "lens-studio",
      index: "03",
      name: "Lens Studio",
      year: "2025",
      badge: "Creative Visual Showcase",
      tagline: "Editorial Photography & Visual Experience Web Application",
      category: "Creative Web Experience",
      technologies: [
        "JavaScript (ES6+)", 
        "Modern CSS3", 
        "Vite", 
        "Responsive Design", 
        "Vercel"
      ],
      status: "Live on Vercel • Deployed Application",
      statusType: "live",
      description: "An editorial photography and creative studio showcase highlighting asymmetric typography, smooth gallery interactions, dynamic visual lighting adjustments, and responsive image presentation.",
      highlights: [
        "Editorial asymmetrical grid layouts showcasing visual portfolio items",
        "High-performance image loading with reserved aspect-ratio dimensions to prevent layout shifts",
        "Fluid responsive design adapting gracefully from mobile phones to high-DPI displays",
        "Clean, semantic modern frontend architecture built with Vite"
      ],
      caseStudy: {
        summary: "A focused creative-development project exploring editorial web design, subtle typography hierarchy, and visual storytelling.",
        problem: "Creative portfolios often suffer from sluggish image rendering and cluttered interfaces that distract from visual content.",
        role: "Creative Developer — Concept design, typography pairing, CSS architecture, and deployment.",
        techDecisions: [
          {
            tech: "Modern CSS Grid & Flexbox",
            rationale: "Engineered responsive magazine-style layouts with clean negative space and zero layout shift."
          }
        ],
        challenges: [
          {
            challenge: "Preventing Layout Shifts (CLS)",
            solution: "Defined strict aspect-ratio containers and image load handlers for jitter-free viewing."
          }
        ],
        metrics: [
          { label: "Deployment", value: "Live on Vercel" },
          { label: "CLS Target", value: "0.0 Layout Shift" }
        ],
        links: {
          code: "https://github.com/eslam2981/lens-studio",
          demo: "https://lens-studio-alpha.vercel.app",
          isDemoPlaceholder: false
        }
      }
    },
    {
      id: "quiz-master",
      index: "04",
      name: "QuizMaster — Ultimate Trivia",
      year: "2026",
      badge: "Logic & State Handling",
      tagline: "Interactive Trivia Quiz App with Dynamic Flow, Live Timer & Score Tracking",
      category: "Logic-Driven Web App",
      technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Timer APIs", "State Machines"],
      status: "Verified GitHub Project",
      statusType: "live",
      description: "An interactive trivia quiz application engineered with dynamic question flow, score tracking, multiple categories and difficulty levels, with a live countdown timer per question and instant tactical feedback.",
      highlights: [
        "Interval-based countdown timer per question with automatic timeout handling",
        "Multiple categories and difficulty levels with randomized question sequencing",
        "Responsive, replayable UI with instant feedback and animated final score summary",
        "Defensive interval cleanup to prevent memory leaks on component unmount"
      ],
      caseStudy: {
        summary: "Engineered to master state-machine transitions, timer lifecycles, and algorithmic question sequencing in React.",
        problem: "Timed quizzes often suffer from timer drift, interval memory leaks, and brittle score tracking on rapid user clicking.",
        role: "Frontend Developer — State architecture, timer loops, feedback animations, and responsive layout.",
        techDecisions: [
          {
            tech: "React & Custom Hooks",
            rationale: "Encapsulated countdown timer logic into reusable hooks with strict interval cleanup routines."
          }
        ],
        challenges: [
          {
            challenge: "Memory Leak Prevention",
            solution: "Defensive cleanup lifecycle hooks ensuring no dangling interval timers persist."
          }
        ],
        metrics: [
          { label: "Timer Precision", value: "Defensive Interval Teardown" },
          { label: "Difficulty Tiers", value: "Multi-Category Matrix" }
        ],
        links: {
          code: "https://github.com/eslam2981/QuizMaster---The-Ultimate-Trivia-Challenge",
          demo: "https://github.com/eslam2981/QuizMaster---The-Ultimate-Trivia-Challenge",
          isDemoPlaceholder: false
        }
      }
    },
    {
      id: "nutriplan",
      index: "05",
      name: "NutriPlan — Fitness & Nutrition",
      year: "2026",
      badge: "Health & Analytics Web App",
      tagline: "Food, Nutrition & Fitness Planner with Macro Breakdown & Workout Tracker",
      category: "Productivity & Health Web App",
      technologies: ["React", "JavaScript", "Tailwind CSS", "LocalStorage", "Data Visualization"],
      status: "Verified GitHub Project",
      statusType: "live",
      description: "A comprehensive nutrition and fitness planning application to track daily meals, macronutrients, and custom workout goals. Features automatic calorie breakdown, macro ratio visualization, and workout progress tracking.",
      highlights: [
        "Automated calorie and macronutrient breakdown (proteins, carbs, fats)",
        "Workout planner with progress tracking across custom fitness milestones",
        "Intuitive macro distribution charts and responsive daily log interface",
        "Local persistence for meal records and training routines"
      ],
      caseStudy: {
        summary: "Created to help users monitor caloric intake and exercise routines through a clear, intuitive visual interface.",
        problem: "Fitness trackers are often bloated with ads and paywalls; NutriPlan provides an instant, clean, zero-clutter planning tool.",
        role: "Frontend Developer — Full architecture, calculation engine, and responsive UI.",
        techDecisions: [
          {
            tech: "React State & LocalStorage",
            rationale: "Instant client-side calculation of macro distributions with zero server latency."
          }
        ],
        challenges: [
          {
            challenge: "Real-Time Macro Math Calculation",
            solution: "Optimized aggregation reducers calculating nutritional percentages in real time."
          }
        ],
        metrics: [
          { label: "Macro Tracking", value: "Carbs / Protein / Fats" },
          { label: "Architecture", value: "Modular React Components" }
        ],
        links: {
          code: "https://github.com/eslam2981/nutriplan-fitness",
          demo: "https://github.com/eslam2981/nutriplan-fitness",
          isDemoPlaceholder: false
        }
      }
    }
  ],

  capabilities: [
    {
      category: "Computer Science & Problem Solving",
      summary: "Academic foundation from Faculty of Computing & Data Science and competitive programming.",
      skills: [
        { name: "200+ Solved Algorithmic Problems", level: "Competitive Programming", evidence: "Codeforces & LeetCode" },
        { name: "Data Structures & Algorithms", level: "Academic & Practical", evidence: "Linked Lists, Trees, Search, Sort" },
        { name: "Object-Oriented Programming (OOP)", level: "Core Foundation", evidence: "Java University Management System" },
        { name: "C++ & Java", level: "Academic Core", evidence: "Alexandria University CS Curriculum" },
        { name: "Python", level: "Data & Scripting", evidence: "Computing & Data Science Curriculum" }
      ]
    },
    {
      category: "Front-End Core & Modern React",
      summary: "Modern React 19, TypeScript, and state architectures.",
      skills: [
        { name: "React 19", level: "Core Production", evidence: "Sphera Social, Baby Zone, NutriPlan, QuizMaster" },
        { name: "TypeScript", level: "Core Production", evidence: "Sphera Social (100% typed contracts & Zod)" },
        { name: "TanStack Query v5", level: "Core Production", evidence: "Sphera Social infinite feed, cache & mutations" },
        { name: "JavaScript (ES6+)", level: "Core Production", evidence: "DOM APIs, Async, Closures, Algorithms" },
        { name: "HTML5 & CSS3 Semantic Layouts", level: "Core Production", evidence: "Clean landmarks, responsive flexbox & grid" }
      ]
    },
    {
      category: "Styling & UI Systems",
      summary: "Tailwind CSS v4, component systems, and responsive design.",
      skills: [
        { name: "Tailwind CSS (v3 / v4)", level: "Core Production", evidence: "Sphera Social, Baby Zone, Portfolio" },
        { name: "Framer Motion & Micro-Interactions", level: "Core Production", evidence: "Sphera Social animations & feed" },
        { name: "HeroUI & Component Systems", level: "Core Production", evidence: "Sphera Social modal, dropdown & nav components" },
        { name: "Responsive & Touch-First Design", level: "Core Production", evidence: "Mobile-first testing (320px to 4K)" },
        { name: "Bootstrap 5", level: "Diploma Verified", evidence: "Route Academy responsive coursework" }
      ]
    },
    {
      category: "Tools, Routing & Delivery",
      summary: "Developer experience, version control, and production deployment.",
      skills: [
        { name: "React Router DOM v7", level: "Core Production", evidence: "Sphera Social, Baby Zone SPA navigation" },
        { name: "Git, GitHub & Postman", level: "Core Production", evidence: "Active GitHub profile (github.com/eslam2981)" },
        { name: "Vercel Cloud Deployment", level: "Core Production", evidence: "Live deployed SPAs with SPA rewrites" },
        { name: "DEPI & Route Academy", level: "Certified Tracks", evidence: "MCIT DEPI (2025) & Route Diploma" }
      ]
    }
  ],

  principles: [
    {
      number: "01",
      title: "Algorithmic Rigor & Clean Structure",
      tagline: "Solid Computer Science fundamentals elevate frontend engineering.",
      description: "With 200+ solved problems on Codeforces & LeetCode and academic CS training at Alexandria University, I apply data structure efficiency, optimal time complexity, and clean OOP principles directly to UI state and data pipelines."
    },
    {
      number: "02",
      title: "Defensive State & Zero Perceived Latency",
      tagline: "Optimistic updates, smart query caching, and resilient error recovery.",
      description: "In Sphera Social and commercial applications, users expect sub-50ms feedback. Using TanStack Query, optimistic mutations, and defensive lifecycles, interfaces feel instantaneous while handling failures gracefully."
    },
    {
      number: "03",
      title: "Accessibility & Universal Usability",
      tagline: "The web is universal; interfaces must welcome everyone.",
      description: "Accessibility is not an afterthought added before launch. High-contrast typography (WCAG 2.2 AA), full keyboard navigability, logical heading semantics, and respect for prefers-reduced-motion are engineered from line one."
    },
    {
      number: "04",
      title: "Maintainable, Scalable Architecture",
      tagline: "Favor readable simplicity over clever, fragile abstractions.",
      description: "Code is read ten times more often than it is written. Clean component boundaries, self-documenting TypeScript contracts, and modular styling ensure that projects scale effortlessly."
    },
    {
      number: "05",
      title: "Continuous Hands-On Craftsmanship",
      tagline: "Learning through building real, tangible software.",
      description: "Formally structured through Alexandria University, the Digital Egypt Pioneers Initiative (DEPI), and Route Academy, my engineering philosophy is anchored in continuous building, benchmarking results, and raising the quality bar."
    }
  ],

  about: {
    lead: "Computing & Data Science student at Alexandria University (GPA 3.66) and Front-End Developer with strong Computer Science and Algorithmic foundations.",
    paragraphs: [
      "I am currently studying at the Faculty of Computing and Data Science, Alexandria University (2024–2028, GPA 3.66 - Excellent). My academic foundation in Data Structures, Algorithms, and Object-Oriented Programming gives me a technical depth that goes far beyond basic UI styling.",
      "To complement my academic studies with industry-standard engineering practices, I completed the intensive Digital Egypt Pioneers Initiative (DEPI) React Frontend Track (2025) backed by the Egyptian Ministry of Communications (MCIT), alongside specialized training at Route Academy. This dual foundation enables me to bridge theoretical computer science with modern React and TypeScript architecture.",
      "As a competitive programmer with over 200+ algorithmic problems solved across Codeforces and LeetCode, I approach frontend development with an algorithmic mindset: optimizing re-render lifecycles, managing complex client-side state, and building robust, production-grade applications like Sphera Social, Baby Zone Store, and NutriPlan."
    ],
    educationDetails: {
      university: "Alexandria University",
      faculty: "Faculty of Computing and Data Science",
      gpa: "3.66 / 4.00 (Grade: Excellent)",
      period: "2024 – 2028",
      highlights: [
        "Data Structures & Algorithm Design",
        "Object-Oriented Programming (Java, C++, Python)",
        "Database Systems & REST API Consumption",
        "Competitive Programming: 200+ Problems Solved on Codeforces & LeetCode"
      ]
    },
    trainings: [
      {
        name: "Digital Egypt Pioneers Initiative (DEPI) — MCIT Egypt",
        track: "React Frontend Track (2025)",
        focus: "Intensive training in modern React, JavaScript (ES6+), scalable web apps, and UI/UX best practices."
      },
      {
        name: "Route Academy",
        track: "Front-End Development (React) Track",
        focus: "Hands-on projects, component-based architecture, TypeScript, and modern state management."
      }
    ]
  }
};

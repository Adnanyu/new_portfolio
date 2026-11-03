import ecoImage from "./resources/main_arch.png";
import ss1 from "./resources/ss1.png";
import ss2 from "./resources/ss2.png";
import ss3 from "./resources/ss3.png";
import ss4 from "./resources/ss4.png";
import ss5 from "./resources/ss5.png";
import ss6 from "./resources/ss6.png";
import ss7 from "./resources/ss7.png";
import ss8 from "./resources/ss8.png";
import savedRoute from "./resources/saved_routes.png";
import generateScreen from "./resources/generate_screen.png";
import generateLine from "./resources/generated_line.png";
import generateFromMap from "./resources/generate_from_map.png";
import databaseDiagram from "./resources/database.png";
import kumbaraDataFlow from "./resources/kumbara-data-flow.png";
import kumbaraSystemDesign from "./resources/kumbara-system-design.png";
import dromosDataFlow from "./resources/dromos-live-activity-tracking-flow.png";
import dromosSystemDesign from "./resources/dromos-system-architecture.png";
import ecoDataFlow from "./resources/eco_data_flow.png";
import blurBefore from "./resources/blur_before.png";
import blurAfter from "./resources/blur_after.png";
import dromos_icon from "./resources/dromos_icon.png";


export const ME = {
  name: "Adnan Yusuf",
  role: "Software Engineer · M.S. Student",
  tagline: "Building at the intersection of elegant systems and human experience.",
  bio: `I'm a software engineer currently pursuing my Master's in Computer Science, specialising in distributed systems and full-stack development. I believe the best software is equal parts engineering rigour and design intuition.\n\nWhen I'm not in the terminal, I'm probably on a climbing wall, rereading Lamport papers, or finding unexpected connections between both.`,
  location: "Washington, D.C",
  email: "cadnaan7067@gmail.com",
  github: "https://github.com/adnanyu",
  linkedin: "https://linkedin.com/in/adnanyu",
  resume: "/Adnan_yusuf.pdf",
  education: [
    { degree: "M.S. Computer Science", school: "George Washington University", period: "2025 – Present", note: "Distributed Systems & ML Systems" },
    { degree: "B.S. Computer Engineering", school: "Istanbul Arel University", period: "2021 – 2025", note: "GPA: 3.56 / 4.0" },
  ],
  skills: [
  {
    cat: "Languages",
    items: [
      "Java",
      "C",
      "C++",
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "Kotlin",
      "HTML",
      "CSS",
    ],
  },

  {
    cat: "Frameworks & Technologies",
    items: [
      "React",
      "React Native",
      "SolidJS",
      "Next.js",
      "Node.js",
      "Express",
      "Spring Boot",
      "FastAPI",
      "Redux Toolkit",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "REST APIs",
      "Microservices",
      "MVC",
    ],
  },

  {
    cat: "Developer Tools",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "GitLab",
      "Linux",
      "AWS",
      "Jest",
      "JUnit",
      "Mockito",
      "Pytest",
      "Android SDK",
      "CI/CD",
    ],
  }
],
};

export const PROJECTS = [
  {
    id: "kumbara",
    title: "Kumbara",
    subtitle: "Personal expense analysis app with AI-powered insights",
    status: "completed",
    tags: ["React", "Vite", "TypeScript", "Tailwind", "shadcn/ui", "Express", "SQLite"],
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0891b2 100%)",
    icon: "💳",
    description: "A full-stack app that turns raw bank statements into categorized transactions and clear spending analytics, with an AI assistant to answer questions about your finances.",
    fullDescription: `Kumbara was built to solve a simple annoyance: bank statements are a pain to make sense of. You upload a PDF, CSV, or XLSX statement and the app parses it, auto-categorizes the transactions, and lays everything out in a dashboard so you can actually see where your money goes.

    On top of the raw analytics, there's an AI finance assistant you can ask questions like "how much did I spend on food last month" or "what's my biggest recurring expense" instead of digging through spreadsheets yourself.`,

    technical: [
      "React + Vite + TypeScript frontend styled with Tailwind and shadcn/ui",
      "Express + TypeScript backend with a SQLite database",
      "Custom parsers for PDF, CSV, and XLSX bank statement formats",
      "Auto-categorization logic to sort transactions without manual tagging",
      "Analytics dashboards for spending trends and category breakdowns",
      "AI assistant integrated for natural-language questions about transaction history",
    ],
    systemDesign: kumbaraSystemDesign,
    dataFlow: [
      "User uploads a bank statement (PDF/CSV/XLSX)",
      "Backend parses and normalizes the transactions",
      "Auto-categorization tags each transaction",
      "Data is stored in SQLite",
      "Dashboard and AI assistant query the data on demand"
    ],

    dataFlowDiagram: kumbaraDataFlow,
    database: {
      sqlite: [
        "Users",
        "Transactions",
        "Categories",
        "Uploaded statements"
      ]
    },
    // databaseDiagram: databaseDiagram,
    goals: [
      "Make bank statements easy to understand at a glance",
      "Cut down manual work spent categorizing expenses",
      "Let users ask plain-language questions about their own spending",
    ],
    achievements: [
      "Built parsers that handle three different statement formats reliably",
      "Built an auto-categorization system that reduces manual tagging",
      "Connected an AI assistant to real transaction data for Q&A",
    ],
    learnings: [
      "Bank statement formats vary a lot even within PDF/CSV, so parsing needed more edge-case handling than expected",
      "Good categorization rules save a lot of user effort but need sensible fallbacks for uncategorized transactions",
      "Keeping the AI assistant grounded in actual transaction data (rather than generic answers) took some prompt iteration",
    ],
    futureWork: [
      "Support for more bank/statement formats",
      "Budgeting and goal-tracking features",
      "Recurring subscription detection",
      "Multi-account support",
    ],

    github: "https://github.com/Adnanyu/Kumbara",
    live: "https://kumbara.adnanbuilds.me"
    // demo: {
    //   video: "/videos/Kumbara.mp4",
    //   screenshots: [ls1, ls2, ls3, ls4, ls5]
    // },
  },
  {
  id: "dromos",
  // short muted loop shown on the project card (full videos are in demo)
  preview: { video: "/videos/previews/dromos.mp4", poster: "/videos/previews/dromos.jpg", portrait: true },
  title: "Dromos",
  subtitle: "GPS fitness tracking app with real-time route generation and social features",
  status: "ongoing",
  tags: ["React Native", "Expo", "Go", "Node.js", "Python", "TimescaleDB", "PostGIS", "Redis", "Kafka"],
  gradient: "linear-gradient(135deg, #0f4c75 0%, #1b6ca8 50%, #4cd9b0 100%)",
  icon: "🏃",
  description: "A cross-platform fitness app that generates smart running and cycling routes, tracks activities in real-time using on-device GPS, and lets you share progress with a social feed.",
  fullDescription: `Dromos is a fitness tracking platform built for runners and cyclists who want more than just a stopwatch. Instead of manually plotting routes, users describe what they want — a 5km loop, a flat cycle, a hilly trail — and Dromos generates it using OpenStreetMap data and GraphHopper's routing engine with elevation baked in.

  During a run, all live metrics (distance, pace, elevation) are computed directly on the phone from native GPS sensors, keeping the HUD snappy and fully functional even without signal. Raw GPS points stream to the backend every 10 seconds, where they're stored in a TimescaleDB hypertable. When you finish, PostGIS rebuilds the authoritative track from those raw points and computes your final stats.

  The social layer lets you follow other athletes, give kudos, share routes, and compete on leaderboards — all powered by an event-driven Kafka pipeline that fans out activity completions across the platform.`,

  technical: [
    "Cross-platform mobile app built with React Native and Expo",
    "Go + Fiber WebSocket server for GPS ingestion — handles 50K+ concurrent connections with minimal memory overhead",
    "On-device metric computation (distance, pace, elevation) — no server round-trip during a run",
    "Python + FastAPI route service backed by self-hosted GraphHopper with OSM + NASA SRTM elevation data",
    "TimescaleDB hypertable for time-series GPS storage with PostGIS finalizing tracks on activity completion",
    "Node.js microservices for auth, user profiles, social feed, notifications, and media",
    "Apache Kafka event bus connecting activity completions to social, analytics, and notification services",
    "Kong API Gateway handling JWT validation, rate limiting, and routing across all services",
    "Redis for session recovery, route caching, JWT blacklist, and real-time leaderboards",
  ],

  systemDesign: dromosSystemDesign,
  dataFlow: [
    "User taps Start — app calls POST /activities and opens a WebSocket",
    "Phone GPS computes live distance, pace, and elevation on-device",
    "Raw GPS batches upload to Go backend every ~10s and are stored in TimescaleDB",
    "On finish, PostGIS rebuilds the track and computes authoritative final stats",
    "Kafka fans out activity.completed to social feed, analytics, and notifications",
  ],
  dataFlowDiagram: dromosDataFlow,

  database: {
    timescaledb: ["GPS points (hypertable)", "Activity records", "Track geometry (PostGIS)"],
    postgres: ["Users", "Auth", "Routes", "Social graph"],
    mongodb: ["Notifications"],
    redis: ["Active sessions", "Route cache", "Leaderboards"],
  },
  // databaseDiagram: "image_url",

  goals: [
    "Make route planning effortless — describe what you want and get a real, runnable route back",
    "Keep the tracking HUD instant and offline-resilient by doing all live computation on the phone",
    "Build a social layer that makes sharing and competing with friends feel natural",
  ],

  achievements: [
    "Designed a full microservices architecture with 9 independently deployable services",
    "Shifted live metric computation fully on-device, simplifying the backend to pure GPS ingestion",
    "Integrated GraphHopper + OSM + SRTM to generate loop and A-to-B routes with elevation profiles in a single call",
    "Built a Kafka-driven event pipeline connecting activity completions to downstream social and analytics services",
  ],

  learnings: [
    "Moving computation to the device (distance, pace, elevation) removes latency, improves offline resilience, and dramatically simplifies the backend",
    "Go's goroutine model is the right call for WebSocket-heavy services — 50K connections at ~2KB each vs ~512KB for Java threads",
    "Passing GPS point IDs between services instead of raw coordinate arrays keeps inter-service payloads tiny",
    "TimescaleDB hypertables + PostGIS is a powerful combo for GPS data — time-partitioned ingestion, then spatial finalization on completion",
    "A single explicit WebSocket upgrade dispatcher eliminates race conditions when proxying multiple WS routes",
  ],

  futureWork: [
    "Wearable integration for real-time heart rate and cadence",
    "Semantic search across your activity library using GPS track embeddings",
    "Collaborative route planning and group runs",
    "Offline map tile caching for trail running without signal",
    "Hiking profile with trail network support and POI waypoints",
  ],

  github: "https://github.com/Adnanyu/dromos",
  demo: {
    video: ["/videos/route_on_map_generate.mp4", "/videos/route_loope_generate.mp4", "/videos/route_generate_distance.mp4"],
    screenshots: [savedRoute, generateScreen, generateLine,generateFromMap],
  },
},
  {
    id: "eco-transcribe",
    // short muted loop shown on the project card (full videos are in demo)
    preview: { video: "/videos/previews/eco-transcribe.mp4", poster: "/videos/previews/eco-transcribe.jpg", portrait: true },
    title: "Eco-Transcribe",
    subtitle: "AI-powered audio transcription and knowledge assistant",
    status: "completed",
    tags: ["React Native", "Spring Boot", "FastAPI", "Whisper", "Llama 3", "PostgreSQL", "MongoDB", "Cloudinary"],
    gradient: "linear-gradient(135deg, #14532d 0%, #0f766e 100%)",
    icon: "🎙️",
    description: "A cross-platform mobile application that records or uploads audio and transforms it into searchable transcripts, summaries, translations, and AI-powered conversations.",
    fullDescription: `Eco-Transcribe is an intelligent note-taking platform built for students, researchers, and professionals who regularly capture meetings, lectures, interviews, and personal ideas. Users can record audio directly from the app or upload existing files, which are automatically transcribed using OpenAI Whisper and enriched with AI-generated summaries, translations, and question-answering capabilities.

    The platform combines speech recognition with large language models, allowing users to chat with a single recording or their entire audio library. Instead of manually searching through hours of recordings, users can ask natural language questions like "What tasks were assigned?" or "Generate a project report from last week's meeting."`,

    technical: [
      "Cross-platform mobile application built with React Native and Expo",
      "Spring Boot backend coordinating authentication, storage, and microservice communication",
      "FastAPI transcription microservice running OpenAI Whisper for speech-to-text",
      "Dedicated AI microservice powered by Llama 3 for summarization, translation, and question answering",
      "Cloudinary integration for scalable cloud audio storage",
      "Hybrid PostgreSQL + MongoDB architecture separating structured and unstructured data",
      "Redux Toolkit with asynchronous state management using Redux Thunk",
      "REST-based microservice communication with decoupled processing pipelines",
    ],
    systemDesign: ecoImage,
    dataFlow: [
      "User uploads or records audio",
      "Spring Boot stores metadata",
      "FastAPI transcribes audio",
      "Llama 3 generates summaries",
      "Results return to the app"
    ],

    dataFlowDiagram: ecoDataFlow,
    database: {
      postgres: [
        "Users",
        "Authentication",
        "Audio metadata"
      ],
      mongo: [
        "Transcripts",
        "Summaries",
        "Conversation history"
      ]
    },
    databaseDiagram: databaseDiagram,
    goals: [
      "Create an intelligent audio note-taking platform for students and professionals",
      "Reduce the time required to review long meetings and lectures",
      "Enable conversational search across an entire library of recordings",
    ],
    achievements: [
      "Designed and implemented a scalable microservice architecture",
      "Integrated speech recognition, AI summarization, translation, and QA into a single workflow",
      "Built a cross-platform mobile application supporting both recording and file uploads",
    ],
    learnings: [
      "Separating transcription and AI processing into dedicated microservices greatly improves maintainability and scalability",
      "Hybrid databases provide a clean balance between structured relational data and flexible document storage",
      "Caching application state locally with Redux Toolkit reduces unnecessary backend requests and improves user experience",
      "Passing database identifiers between services instead of large text payloads significantly reduces network overhead",
    ],
    futureWork: [
      "Real-time collaborative transcript editing and sharing",
      "Speaker diarization and multi-speaker identification",
      "Semantic search across an entire audio library using embeddings",
      "Offline transcription support for mobile devices",
      "Calendar and meeting platform integrations",
    ],

    github: "https://github.com/Adnanyu/Eco-Transcribe",
    demo: {
      video: ["/videos/project6.mp4"],
      screenshots: [ss8,ss3, ss4,ss2,ss5,ss6,ss7, ss1]
    },
  },
  {
  id: "parallel-png-blur",
  title: "Parallel PNG Blur Processor",
  subtitle: "Multithreaded batch image processing with libpng",
  status: "completed",
  tags: [
    "C++",
    "Multithreading",
    "libpng",
    "Image Processing",
    "Concurrency",
    "Filesystem",
    "Atomic Operations"
  ],
  gradient: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
  icon: "🖼️",
  description:
    "A high-performance C++ application that batch processes PNG images using a multithreaded blur filter. The system leverages both image-level and pixel-section parallelism to accelerate image processing workloads.",

  fullDescription: `Parallel PNG Blur Processor is a desktop image-processing application designed to efficiently apply blur effects to large collections of PNG images. The application scans an input directory, loads images using libpng, and applies a box-blur filter before saving the processed results to an output directory.

  To improve performance, the system implements two layers of concurrency. Multiple images can be processed simultaneously while each image is further divided into sections that are processed by separate worker threads. This allows the application to take advantage of modern multi-core processors and significantly reduce processing times when handling large image datasets.

  The project demonstrates low-level memory management, image format handling, thread synchronization, filesystem operations, and concurrent workload distribution in C++.`,

  technical: [
    "PNG image decoding and encoding using libpng",
    "Multithreaded image processing using std::thread",
    "Atomic work distribution using std::atomic",
    "Filesystem traversal using C++17 std::filesystem",
    "Dynamic image partitioning across worker threads",
    "Box blur implementation using neighborhood averaging",
    "Mutex-protected image read/write operations",
    "Batch processing pipeline for large image collections"
  ],
  goals: [
    "Build a high-performance image processing application in modern C++",
    "Explore multithreaded workload distribution strategies",
    "Apply image filtering algorithms to large datasets",
    "Gain experience with low-level memory management and concurrency"
  ],

  achievements: [
    "Implemented a complete PNG processing pipeline using libpng",
    "Designed a two-level parallelization architecture",
    "Enabled concurrent processing of multiple images and image sections",
    "Successfully automated batch image filtering across entire directories"
  ],
  learnings: [
    "Thread-safe image processing requires separating read and write buffers",
    "Atomic counters provide an efficient method for dynamic workload scheduling",
    "Frequent memory allocations inside tight loops significantly impact performance",
    "Image-processing algorithms often become memory-bandwidth bound before CPU bound",
    "Parallel processing introduces race conditions that must be carefully managed"
  ],
  futureWork: [
    "Implement separate source and destination image buffers to eliminate race conditions",
    "Replace box blur with Gaussian blur for higher-quality output",
    "Introduce a reusable thread pool to reduce thread creation overhead",
    "Optimize blur calculations using integral images",
    "Add SIMD acceleration with AVX2 or AVX-512",
    "Support additional image formats such as JPEG and BMP",
    "Provide GPU acceleration through CUDA or OpenCL"
  ],
  demo: {
    screenshots: [
      blurBefore,
      blurAfter,
    ]
  }
},
  {
    id: "apartment-seeker",
    // short muted loop shown on the project card (full videos are in demo)
    preview: { video: "/videos/previews/apartment-seeker.mp4", poster: "/videos/previews/apartment-seeker.jpg" },
    title: "Apartment Seeker",
    subtitle: "Full-stack apartment listing platform with real-time chat",
    status: "completed",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Socket.io", "Mapbox", "Cloudinary"],
    gradient: "linear-gradient(135deg, #7c2d12 0%, #c2410c 55%, #f59e0b 100%)",
    icon: "🏠",
    description: "A full-stack web app where users can post and search for apartments, browse listings on a map, and chat with post owners in real time.",
    fullDescription: `Apartment Seeker is a server-rendered web application for finding and listing rental apartments. Landlords and tenants can create posts with photos, price, availability, number of bedrooms, contact details and location, and anyone can browse and filter listings across the city.

    Each listing is geocoded with Mapbox and stored as a GeoJSON point, so posts appear on an interactive cluster map as well as on a dedicated map for each listing. Interested users can open a conversation with a post's owner directly from the listing and chat in real time over Socket.io, with online presence shown for active users.`,
    technical: [
      "Express server with an MVC structure: routes, controllers and Mongoose models",
      "MongoDB data models for users, posts, chats, messages and visitors",
      "Listings stored with GeoJSON Point geometry and geocoded through the Mapbox SDK",
      "Cluster map for all listings and a single-listing map on each post page",
      "Real-time chat rooms with Socket.io, persisting messages to MongoDB and tracking online users",
      "Image uploads through Multer streamed to Cloudinary, with on-the-fly thumbnail transforms",
      "Session-based authentication using Passport (local strategy) and passport-local-mongoose",
      "Server-side validation with Joi schemas and client-side form validation",
      "Server-rendered views with EJS, ejs-mate layouts and Bootstrap",
      "Centralised async error handling with a catchAsync wrapper and custom ExpressError class",
    ],
    goals: [
      "Build a complete full-stack app end to end, from data models to UI",
      "Make it easy to discover apartments by location",
      "Let renters contact owners without leaving the platform",
    ],
    achievements: [
      "Shipped a deployed app with listing CRUD, saved posts and per-user post pages",
      "Integrated maps, image hosting and real-time messaging into one product",
      "Implemented authentication, authorization middleware and input validation",
    ],
    learnings: [
      "Storing locations as GeoJSON makes map rendering and future geo-queries straightforward",
      "WebSockets need their own thinking about rooms, presence and persistence alongside the REST app",
      "Validating on both the client and the server keeps bad data out without hurting the user experience",
    ],
    futureWork: [
      "Search by distance and richer filters using MongoDB geospatial queries",
      "Read receipts and notifications for new messages",
      "Migrate the UI to a component-based frontend framework",
    ],
    github: "https://github.com/Adnanyu/Apartment-seeker",
    live: "https://apartment-seeker.adnanbuilds.me",
    demo: {
      video: ["/videos/project5.mp4"],
    },
  },
  {
    id: "setup-spot",
    // short muted loop shown on the project card (full videos are in demo)
    preview: { video: "/videos/previews/setup-spot.mp4", poster: "/videos/previews/setup-spot.jpg" },
    title: "Setup Spot",
    subtitle: "MERN community for sharing gaming, podcast and streaming setups",
    status: "completed",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Vite"],
    gradient: "linear-gradient(135deg, #312e81 0%, #6d28d9 55%, #db2777 100%)",
    icon: "🎮",
    description: "A MERN stack app where anyone can post their favourite gaming, podcast and streaming setups, with full CRUD support, likes and saved posts.",
    fullDescription: `Setup Spot is a community platform for showing off desk and studio setups. Users post photos of their gaming, podcasting or streaming setups along with a write-up and links to the gear they use, and other users can browse, like and save the setups they want to come back to.

    The project is split into a React single-page client and an Express REST API. The client manages posts, the current post and the user session with Redux Toolkit, while the API handles authentication, image uploads and all create, read, update and delete operations on posts.`,
    technical: [
      "React client built with Vite and React Router, including protected routes for authenticated pages",
      "Global state managed with Redux Toolkit slices for posts, the selected post and the user",
      "Express REST API with separate routes and controllers for posts and users",
      "Token-based authentication with Passport JWT and cookies",
      "Mongoose models with validation requiring at least one image and one gear link per post",
      "Likes and saved posts modelled as references to users",
      "Image uploads with Multer stored on Cloudinary, displayed through a custom image slider",
      "Request validation with Joi and centralised async error handling",
    ],
    goals: [
      "Build a MERN application with a separated frontend and backend",
      "Practise state management with Redux Toolkit in a real app",
      "Create a place for people to share and discover setups",
    ],
    achievements: [
      "Implemented full CRUD for posts with image uploads",
      "Added authentication, likes and saved posts",
      "Deployed the client to Netlify",
    ],
    learnings: [
      "Separating the client and API makes each side easier to reason about and deploy",
      "Redux Toolkit slices keep async data fetching and UI state predictable",
      "Schema-level validation in Mongoose catches bad data that the UI might miss",
    ],
    futureWork: [
      "Comments and follow relationships between users",
      "Search and filtering by setup category or gear",
      "Pagination or infinite scrolling for the feed",
    ],
    github: "https://github.com/Adnanyu/setupSpot",
    live: "https://setup-spot.netlify.app/posts",
    demo: {
      video: ["/videos/project4.mp4"],
    },
  },
  {
    id: "aden-style",
    // short muted loop shown on the project card (full videos are in demo)
    preview: { video: "/videos/previews/aden-style.mp4", poster: "/videos/previews/aden-style.jpg" },
    title: "Aden Style",
    subtitle: "React e-commerce store with Firebase and Stripe",
    status: "completed",
    tags: ["React", "Redux Toolkit", "Firebase", "Stripe", "Sass", "Netlify Functions"],
    gradient: "linear-gradient(135deg, #0f172a 0%, #334155 55%, #94a3b8 100%)",
    icon: "🛍️",
    description: "A complete React e-commerce site with a Firebase backend, Redux Toolkit state management and Stripe payments.",
    fullDescription: `Aden Style is a clothing store built as a single-page React application. Shoppers can browse product categories, view individual category pages, add items to a cart, and check out with a card payment.

    Firebase provides authentication and the product data, Redux Toolkit manages the user, the categories and the cart, and payments are handled by Stripe through a Netlify serverless function that creates the payment intent.`,
    technical: [
      "React single-page app with React Router routes for home, shop, categories, authentication and checkout",
      "Redux Toolkit store with slices for the user, categories and cart",
      "Firebase Authentication for sign-up and sign-in, with product categories stored in Firebase",
      "Stripe card payments using Stripe Elements on the client",
      "Netlify serverless function that creates Stripe payment intents",
      "Reusable components such as the cart dropdown, cart icon, checkout items and form inputs",
      "Styling with Sass and styled-components",
    ],
    goals: [
      "Build a realistic online store from browsing through to payment",
      "Learn Firebase as a backend-as-a-service",
      "Integrate a real payment provider securely",
    ],
    achievements: [
      "Shipped a working storefront with authentication, cart and checkout",
      "Kept the Stripe secret key on the server by using a serverless function",
      "Deployed the site on Netlify",
    ],
    learnings: [
      "Serverless functions are a simple way to keep payment secrets off the client",
      "A normalised Redux store keeps cart logic easy to test and reuse",
      "Backend-as-a-service tools like Firebase speed up development considerably",
    ],
    futureWork: [
      "Order history and user profiles",
      "Product search and filtering",
      "Inventory management through an admin dashboard",
    ],
    github: "https://github.com/Adnanyu/new-project1/tree/redux-branch",
    live: "https://aden-style.netlify.app",
    demo: {
      video: ["/videos/aden-style.mp4"],
    },
  },
  {
    id: "apple-calculator",
    // short muted loop shown on the project card (full videos are in demo)
    preview: { video: "/videos/previews/apple-calculator.mp4", poster: "/videos/previews/apple-calculator.jpg" },
    title: "Apple Calculator Clone",
    subtitle: "iOS-style calculator driven by a React reducer",
    status: "completed",
    tags: ["React", "useReducer", "CSS"],
    gradient: "linear-gradient(135deg, #1c1917 0%, #44403c 55%, #f97316 100%)",
    icon: "🧮",
    description: "A clone of Apple's calculator that uses a React reducer to handle calculations instead of the eval() function.",
    fullDescription: `A pixel-faithful clone of the iOS calculator built with React. Rather than building an expression string and passing it to eval(), every key press is dispatched as an action to a useReducer state machine that tracks the current number, the previous number and the pending operation.

    This approach avoids the security and correctness problems of eval() and makes edge cases explicit: ignoring repeated leading zeros, preventing a second decimal point, chaining operations, deleting the last digit, and starting a fresh number after a result is shown.`,
    technical: [
      "Calculator state handled by a single useReducer reducer",
      "Explicit actions for adding digits, choosing an operation, deleting, clearing and evaluating",
      "Chained operations evaluate the pending result before applying the next operator",
      "Overwrite flag so typing after a result starts a new number",
      "Reusable number and operation button components",
      "Styled to match the iOS calculator with the SF UI Text font",
    ],
    goals: [
      "Implement calculator logic without relying on eval()",
      "Practise modelling UI behaviour as a reducer",
    ],
    achievements: [
      "Built a calculator that handles the common edge cases of the iOS app",
      "Deployed it on GitHub Pages",
    ],
    learnings: [
      "Reducers make small state machines explicit and easy to follow",
      "Avoiding eval() forces you to think about every input case",
    ],
    futureWork: [
      "Percentage and sign-toggle keys",
      "Keyboard input support",
      "Scientific mode in landscape orientation",
    ],
    github: "https://github.com/Adnanyu/calculator",
    live: "/calculator",
    demo: {
      video: ["/videos/calculator.mp4"],
    },
  },
  {
    id: "weather-app",
    // short muted loop shown on the project card (full videos are in demo)
    preview: { video: "/videos/previews/weather-app.mp4", poster: "/videos/previews/weather-app.jpg" },
    title: "Weather App",
    subtitle: "React weather forecast app powered by WeatherAPI",
    status: "completed",
    tags: ["React", "WeatherAPI", "CSS"],
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0284c7 55%, #7dd3fc 100%)",
    icon: "⛅",
    description: "A React weather app that uses WeatherAPI to show current conditions with hourly and weekly forecasts for any city.",
    fullDescription: `A weather app inspired by the iOS Weather app. Users search for any city to see current conditions, an hourly forecast and a seven-day outlook, all fetched from WeatherAPI.

    The interface switches between day and night styling based on whether it is currently daytime in the selected location, and includes a toggle for switching the units used in the display.`,
    technical: [
      "React app built from search, current conditions, hourly forecast and weekly forecast components",
      "Fetches current weather and a 7-day forecast from the WeatherAPI forecast endpoint",
      "Day and night themes driven by the API's is_day flag",
      "Unit toggle that changes the values displayed across all components",
      "City search with input normalisation before querying the API",
    ],
    goals: [
      "Practise working with a third-party REST API in React",
      "Recreate the look and feel of a familiar native app",
    ],
    achievements: [
      "Built a responsive forecast app for any city",
      "Deployed it on GitHub Pages",
    ],
    learnings: [
      "Splitting the UI into small components that share one API response keeps rendering simple",
      "API keys used in client-side code are visible to everyone and belong behind a server",
    ],
    futureWork: [
      "Detect the user's location automatically",
      "Move the API key behind a small backend proxy",
      "Handle errors for unknown cities and show loading states",
    ],
    github: "https://github.com/Adnanyu/weather-app",
    live: "/weather-app",
    demo: {
      video: ["/videos/weather-app.mp4"],
    },
  },
];

export const JOURNAL = [
  {
    id: 1,
    date: "March 12, 2025",
    title: "On the aesthetics of distributed systems",
    moodEmoji: "🌙",
    tags: ["systems", "philosophy"],
    excerpt: "There's a kind of beauty in a well-designed distributed system that I struggle to articulate to non-engineers. It's more like the beauty of a proof.",
    content: `There's a kind of beauty in a well-designed distributed system that I struggle to articulate to non-engineers. It's not the beauty of a painting or a melody — it's more like the beauty of a proof. Elegant, inevitable, surprising in retrospect.

I spent the afternoon rereading Lamport's "Time, Clocks, and the Ordering of Events in a Distributed System." Written in 1978. Still stunning. The idea that you can define causality without a shared global clock — just through message passing — feels like discovering that you don't need a universal "now" to have a coherent universe.

This maps onto something I think about in software architecture constantly: the urge to have a single source of truth, a single clock, a single coordinator. It feels safe. It's also often a lie. The world is distributed. The best systems accept this and design with it, not against it.

Maybe that's why I find distributed systems beautiful — they're honest about the nature of reality in a way most software isn't.`,
  },
  {
    id: 2,
    date: "February 3, 2025",
    title: "Rock climbing taught me how to debug",
    moodEmoji: "🧗",
    tags: ["climbing", "hobbies", "debugging"],
    excerpt: "A boulder problem is just a bug you can touch. Both reward lateral thinking over brute force — and both punish fatigue in exactly the same way.",
    content: `A boulder problem is just a bug you can touch.

Both require you to step back when stuck. Both reward lateral thinking over brute force. Both have that specific frustration of knowing the solution exists — you've watched others find it — but your hands (or your brain) won't cooperate yet.

The biggest lesson from climbing that transferred directly to debugging: the answer is almost always in the part you skipped. In climbing, it's the foot placement you dismissed as irrelevant. In debugging, it's the assumption you marked "obviously correct" and stopped examining.

I've been climbing for 18 months now. Currently working on V5. I treat it like a side project: document what doesn't work, identify the constraint, rest, try again. The rest part is key — both on the wall and at the keyboard, fatigue causes you to repeat the same failed approaches with slightly more conviction each time.

Some parallels I keep noticing:
— Reading beta (watching others solve it) = reading docs + other people's GitHub issues
— Campus board training (pure strength) = grinding fundamentals
— Projecting a route for weeks = that bug living rent-free in your head
— Sending it finally = a full test suite going green`,
  },
  {
    id: 3,
    date: "January 8, 2025",
    title: "Books that actually rearranged my thinking",
    moodEmoji: "📚",
    tags: ["books", "learning"],
    excerpt: "Not a comprehensive list. Just the ones that genuinely changed something — not just added information, but reorganised how I see problems.",
    content: `Not a comprehensive list. Just the ones that genuinely changed something — not just added information, but reorganised how I see problems.

The Design of Everyday Things — Don Norman. Made me permanently unable to use a bad door handle without noticing. More importantly: errors are never the user's fault. I applied this immediately to API design — if people consistently misuse an interface, the interface is wrong.

A Philosophy of Software Design — John Ousterhout. The chapter on deep versus shallow modules reorganised how I think about abstraction. Deep modules hide genuine complexity. Shallow modules just rename it. Most of what I thought was good abstraction turned out to be the latter.

The Pragmatic Programmer — I know. But rereading it at year five of my career hit differently. The tracer bullet concept finally clicked — not as a project management technique, but as a strategy for managing uncertainty in systems with unknown terrain.

Designing Data-Intensive Applications — Kleppmann. Started it three times. The replication and consensus chapters alone are worth the price of the book. This year I'm actually finishing it.

What I'm looking for next: something completely outside technology. Recommendations genuinely welcome.`,
  },
];


export const EXPERIENCE = [
  {
    title: "Software Engineer",
    company: "B Tech Analytics Technology",
    location: "Istanbul, Turkey",
    period: "May 2025 – Aug 2025",

    highlights: [
      "Developed a data-intensive BI platform using SolidStart and Apache ECharts to support large-scale analytics workflows and interactive dashboards.",

      "Improved backend scalability and reduced query latency by 45% through migration from SQLite to DuckDB.",

      "Designed optimized data processing pipelines enabling efficient querying and visualization of high-volume datasets.",

      "Collaborated on frontend and backend system integration to deliver performant, production-ready analytics features.",
    ],
  },

  {
    title: "Software Engineer Intern",
    company: "B Tech Analytics Technology",
    location: "Istanbul, Turkey",
    period: "Feb 2025 – May 2025",

    highlights: [
      "Refactored frontend architecture using TypeScript and Tailwind CSS, improving application performance by 25%.",

      "Engineered an automated PNG-to-WebP asset pipeline reducing frontend load times by 50%.",

      "Improved maintainability and UI consistency by restructuring reusable frontend components and styling workflows.",
    ],
  },
];
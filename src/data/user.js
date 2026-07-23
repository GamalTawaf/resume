const INFO = {
	main: {
		title: "Gamal Tawaf Resume",
		name: "Gamal Tawaf",
		email: "ja.tawaf@gmail.com",
	},

	socials: {
		github: "https://github.com/GamalTawaf/",
		linkedin: "https://www.linkedin.com/in/gamaltawaf/",
		stackoverflow: "https://stackoverflow.com/users/2161866/gamal-tawaf",
		google_certified:
			"https://www.credly.com/badges/31e81f74-ded9-43d6-b602-7ec7a3a486fc",
	},

	homepage: {
		title: "Senior Software Engineer & Google Cloud Certified Professional Cloud Architect.",
		description:
			"12+ years building mission-critical, high-reliability backend systems — global MasterCard issuance at Binance, financial-services platforms at Fiserv, and consumer platforms serving 10M+ users at 99.9% uptime. Deep expertise in distributed systems, observability, and GCP cloud architecture, working primarily in Python today after a decade across PHP, Ruby, and Java. Proven technical lead who has hired and grown engineering teams and repeatedly turned months-long integration work into weeks.",
	},

	about: {
		title: "I'm Gamal Tawaf",
		description:
			"I build backend systems that have to stay up: payment-partner integrations at Binance, financial-services platforms at Fiserv, and enterprise systems on Google Cloud Platform. Mainly Python (FastAPI, Flask, Django), with production experience in Java/Spring Boot, PHP/Laravel, Ruby on Rails, and React. I've led teams, owned architecture end-to-end, and lately I've been building AI systems — RAG pipelines, multi-agent workflows, and compliance tooling on Vertex AI.",
	},

	projects: [
		{
			title: "GAIA Multi-Agent (HF AI Agents Course)",
			description:
				"A LangGraph supervisor + specialist multi-agent system built for the Hugging Face AI Agents Course final assignment. Routes GAIA benchmark questions to web-research, code/math, and file/vision workers to earn the course's Certificate of Excellence.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			tag: "LangGraph",
			linkText: "View Space",
			link: "https://huggingface.co/spaces/GamalTawaf/Final_Assignment_Template",
		},
		{
			title: "To-do Application",
			description:
				"A React-based task management application built with TypeScript. Features include task creation, completion tracking, and data persistence. Demonstrates modern React practices, TypeScript integration, and responsive design principles.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
			tag: "TypeScript",
			linkText: "View Project",
			link: "https://gamaltawaf.github.io/to-do/",
		},
		{
			title: "Game Center",
			description:
				"Just-for-fun builds: small games written to learn new languages and frameworks, from a React trivia quiz to a Rust/WebAssembly arcade game.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/rust/rust.png",
			tag: "For Fun",
			linkText: "View Games",
			link: "/games",
			internal: true,
		},
	],

	games: [
		{
			title: "Trivia Night",
			description:
				"A React trivia game with dynamic question generation, real-time scoring, and instant feedback. Built in TypeScript with a focus on state management and clean UI.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
			tag: "TypeScript",
			linkText: "Play Now",
			link: "https://gamaltawaf.github.io/quiz/",
		},
		{
			title: "Ping Pong",
			description:
				"Pong written in Rust with the macroquad engine, compiled to WebAssembly. Play vs. AI, two-player, or solo wall-bounce mode.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/rust/rust.png",
			tag: "Rust / WASM",
			linkText: "Play Now",
			link: "https://gamaltawaf.github.io/ping-pong/",
		},
		{
			title: "Learn Blockchain",
			description:
				"An interactive teaching tool for how blockchains work: SHA-256 hashing, proof-of-work mining, and chain-link validation with live tamper detection.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			tag: "JavaScript",
			linkText: "Play Now",
			link: "https://gamaltawaf.github.io/resume/blockchain-demo.html",
		},
		{
			title: "Bricks",
			description:
				"A Breakout-style browser game built with Svelte. Classic mode ramps up through tougher waves, and Endless mode keeps sending down new rows of bricks that fall faster over time.",
			logo: "https://cdn.simpleicons.org/svelte",
			tag: "Svelte",
			linkText: "Play Now",
			link: "https://gamaltawaf.github.io/bricks/",
		},
	],

	workHistory: [
		{
			company: "Fiserv (via Ascendion)",
			role: "Senior Software Engineer",
			duration: "Jan 2026 - Present",
			note: "Contract engagement through Dec 2026",
			highlights: [
				"Introduced OpenTelemetry distributed tracing across 24 microservices, cutting production issue diagnosis time by 80%.",
				"Re-architected vendor integration across 5 microservices into a configuration-driven design — new-vendor onboarding went from ~2 months of code changes to ~2 weeks of configuration.",
			],
		},
		{
			company: "Inkeros",
			role: "Solution Architect / Engineering Team Lead",
			duration: "Jan 2025 - Jan 2026",
			highlights: [
				"Recruited and led the full engineering team while owning architecture for a mission-critical enterprise portal (Python/Django on GCP) serving 250+ staff.",
				"Designed an AI compliance system analyzing call-center audio with Gemini and Vertex AI; ran the platform at 99.9% uptime with one-click CI/CD at a 99.8% success rate.",
			],
		},
		{
			company: "PERCS",
			role: "Senior Software Engineer",
			duration: "Apr 2024 - Jan 2025",
			note: "Startup — role eliminated in layoffs; company ceased operations in 2025",
			highlights: [
				"Scaled full-stack platform features through rapid user growth and launched Web3 games on Warpcast Frames during the protocol's early growth stage.",
			],
		},
		{
			company: "University of Toronto (via Tundra)",
			role: "Senior Software Engineer (Contract)",
			duration: "Jan 2024 - Apr 2024",
			highlights: [
				"Delivered a fixed-scope modernization: Laravel v8 to v10 upgrade with unit testing introduced to 90% coverage.",
			],
		},
		{
			company: "Binance - Card & Pay",
			role: "Senior Software Engineer",
			duration: "Jul 2022 - Jul 2023",
			note: "Role impacted by 2023 global workforce reduction",
			highlights: [
				"Integrated 3 global payment partners' REST APIs to enable MasterCard issuance across Europe, the Middle East, and South America.",
				"Migrated the card-ordering service from Laravel to Java/Spring Boot, cutting new payment-partner onboarding from ~3 months to ~1 week.",
			],
		},
		{
			company: "VerticalScope Inc.",
			role: "Senior Web Engineer",
			duration: "Jul 2021 - Jun 2022",
			highlights: [
				"Shipped features for community platforms serving 10M+ users and launched the platform's first marketplace product — a zero-to-one build and new revenue stream.",
			],
		},
		{
			company: "Afilias Canada",
			role: "Team Lead / Senior Software Developer",
			duration: "Feb 2016 - Jul 2021",
			highlights: [
				"Led the in-house migration of a business-critical Rails app off a third-party vendor (Rails v3→v5, MySQL→PostgreSQL in 6 months), delivering $500K in annual savings.",
				"Hired, trained, and led a team of 5–7 developers over 5+ years, growing engineers from junior to senior.",
			],
		},
		{
			company: "Carlton Group · Golf Canada · PAVR Labs",
			role: "Application Developer — earlier roles",
			duration: "Mar 2013 - Jan 2016",
		},
	],

	skills: {
		backend: [
			"Python",
			"FastAPI",
			"Flask",
			"Django",
			"asyncio",
			"Java / Spring Boot",
			"REST & gRPC API design",
		],
		cloud: [
			"Google Cloud Platform",
			"Cloud Run",
			"Pub/Sub",
			"Kubernetes",
			"Docker",
			"Terraform",
			"Microservices",
		],
		data: [
			"PostgreSQL",
			"MySQL",
			"Redis",
			"BigQuery",
			"Real-time event pipelines",
		],
		delivery: [
			"OpenTelemetry",
			"Monitoring & Alerting",
			"GitHub Actions",
			"GitLab CI/CD",
			"pytest",
			"JUnit",
		],
		ai: ["Vertex AI", "Gemini", "LangChain", "LangGraph", "RAG systems"],
	},

	certifications: [
		{
			name: "Google Cloud Professional Cloud Architect",
			issuer: "Google Cloud",
			date: "2025 - 2027",
			link: "https://www.credly.com/badges/31e81f74-ded9-43d6-b602-7ec7a3a486fc",
		},
		{
			name: "Hugging Face AI Agents Course — Certificate of Excellence",
			issuer: "Hugging Face",
			date: "Jul 2026",
			link: "https://gamaltawaf.github.io/resume/hf-agents-course-certificate.png",
		},
	],

	vibeCodingLessons: [
		{
			title: "CLAUDE.md",
			detail: "This is where you set your constraints and instructions — e.g. use pytest for all test cases, don't repeat code, prefer readability over complexity, use global constants where possible. Any time you catch the AI making the same mistake twice, add a rule for it here.",
		},
		{
			title: "Plan",
			detail: "Always use plan mode before asking for the actual work. Writing the vision down first means you know what to expect, saves you iteration, and lets you have the AI use sub-agents to implement the whole plan in one shot.",
		},
		{
			title: "Skills",
			detail: "If you notice yourself asking it to do the same task over and over, that's a skill worth adding to your CLAUDE.md file. It saves time and keeps the generated code consistent.",
		},
		{
			title: "Test",
			detail: "AI can generate tests, but review the logic yourself to make sure they actually make sense. Push it toward BDD, not unit tests — it should test your system starting at the entry point, mocking only two things: external API calls and database calls. Everything else should be real code.",
		},
		{
			title: "Start New Session",
			detail: "If what you're asking for has nothing to do with the previous question, start a new session. It saves time and money, and keeps the generated code cleaner.",
		},
		{
			title: "Plugins",
			detail: "Be very careful adding plugins — only install what your project actually needs. Each one burns tokens and slows down the response.",
		},
	],

	education: [
		{
			degree: "Bachelor of Computer Science",
			institution: "York University",
			location: "Toronto, Canada",
			year: "2014",
		},
		{
			degree: "Computer Programming Diploma",
			institution: "Seneca College",
			location: "Toronto, Canada",
			year: "2011",
		},
	],
};

export default INFO;

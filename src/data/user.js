const INFO = {
	main: {
		title: "Gamal Tawaf Resume",
		name: "Gamal Tawaf",
		email: "ja.tawaf@gmail.com",
	},

	socials: {
		github: "https://github.com/GamalTawaf/",
		linkedin: "https://www.linkedin.com/in/gamaltawaf/",
		google_certified:
			"https://www.credly.com/badges/31e81f74-ded9-43d6-b602-7ec7a3a486fc",
	},

	homepage: {
		title: "Senior Software Engineer & Google Cloud Certified Professional Cloud Architect.",
		description:
			"12+ years building high-reliability backends across payments and large-scale platforms — distributed systems, observability, and GCP, with Python as the primary language. Currently fractional CTO at Attendi. Technical lead who grows engineering teams and compresses partner integrations from months to weeks.",
	},

	about: {
		title: "I'm Gamal Tawaf",
		description:
			"I build high-reliability backends across payments and large-scale platforms — distributed systems, observability, and GCP, mainly in Python (FastAPI, Flask, Django), with production experience in Java/Spring Boot, PHP/Laravel, and React. I've led teams, owned architecture end-to-end, and I'm currently fractional CTO at Attendi. Lately I've been building AI systems — RAG pipelines, compliance tooling on Vertex AI, and multi-agent workflows.",
	},

	projects: [
		{
			title: "GAIA Multi-Agent (HF AI Agents Course)",
			description:
				"A LangGraph supervisor + specialist multi-agent system built for the Hugging Face AI Agents Course final assignment. Routes GAIA benchmark questions to web-research, code/math, and file/vision workers.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			tag: "LangGraph",
			linkText: "View Space",
			link: "https://huggingface.co/spaces/GamalTawaf/Final_Assignment_Template",
		},
		{
			title: "To-do Application",
			description:
				"A TypeScript task list: add a task, mark it done, and keep it after a refresh.",
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
			company: "Truss Payments",
			role: "Senior Software Engineer",
			duration: "Aug 2026 - Oct 2026",
			highlights: [
				"Cut new-engineer local setup to under an hour with Docker, and defined conventions for agent-written code.",
				"Designed a GCP cost-reduction plan targeting ~50% via Committed Use Discounts and ~20% more via rightsizing; audited infrastructure for compliance and owned on-call for payment issues.",
			],
		},
		{
			company: "Attendi",
			role: "Fractional CTO",
			duration: "Apr 2026 - Present",
			note: "Fractional, concurrent with Fiserv and Truss",
			highlights: [
				"Cut hosting costs 50% by consolidating five services into one GCP service with Terraform, and hardened the platform for its first production customer.",
				"Cut small-change delivery from weeks to under a day (Jira → PR → deploy on merge), with OTA mobile updates and store releases.",
				"Onboarded the non-technical CEO onto the delivery workflow so he can request, ship, and verify production features end-to-end.",
			],
		},
		{
			company: "Fiserv (via Ascendion)",
			role: "Senior Software Engineer",
			duration: "Jan 2026 - Aug 2026",
			note: "Contract via Ascendion",
			highlights: [
				"Feature Lead on a core financial-services platform (Python, FastAPI, Flask, asyncio, MySQL, Redis, Pub/Sub, Kubernetes).",
				"Introduced OpenTelemetry tracing across 24 microservices, cutting production diagnosis time by 80%.",
				"Re-architected vendor integration across 5 microservices into configuration-driven design — new-vendor onboarding from ~2 months to ~2 weeks.",
			],
		},
		{
			company: "Inkeros",
			role: "Solution Architect / Engineering Team Lead",
			duration: "Jan 2025 - Jan 2026",
			highlights: [
				"Recruited and led the full engineering team while owning architecture for a mission-critical enterprise portal (Python/Django on GCP) serving 250+ staff.",
				"Designed an AI compliance system with Gemini and Vertex AI; ran the platform at 99.9% uptime with one-click CI/CD at a 99.8% success rate.",
			],
		},
		{
			company: "PERCS",
			role: "Senior Software Engineer",
			duration: "Apr 2024 - Jan 2025",
			note: "Layoff",
			highlights: [
				"Scaled full-stack platform features through rapid user growth and launched Web3 games on Warpcast Frames during the protocol's early growth stage.",
			],
		},
		{
			company: "Binance - Card & Pay",
			role: "Senior Software Engineer",
			duration: "Jul 2022 - Jul 2023",
			note: "Layoff",
			highlights: [
				"Integrated 3 global payment partners' REST APIs to enable MasterCard issuance across Europe, the Middle East, and South America.",
				"Migrated card-ordering and KYC services from Laravel to Java/Spring Boot 3, cutting new payment-partner onboarding from ~3 months to ~1 week.",
			],
		},
		{
			company: "VerticalScope Inc.",
			role: "Senior Web Engineer",
			duration: "Jul 2021 - Jun 2022",
			note: "Recruited into Binance",
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
				"Hired, trained, and led a team of 5–7 developers over 5+ years; built a BI visualization tool (React, D3.js, Python, Qlik) for leadership.",
			],
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
			"PHP / Laravel",
			"REST API design",
		],
		frontend: ["React", "Svelte", "D3.js", "JavaScript", "HTML"],
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
		ai: ["Vertex AI", "Gemini", "LangChain", "RAG systems", "AI data pipelines"],
	},

	certifications: [
		{
			name: "Google Cloud Professional Cloud Architect",
			issuer: "Google Cloud",
			date: "2025 - 2027",
			link: "https://www.credly.com/badges/31e81f74-ded9-43d6-b602-7ec7a3a486fc",
		},
		{
			name: "Hugging Face AI Agents Course",
			issuer: "Hugging Face",
			date: "Jul 2026",
			link: "https://gamaltawaf.github.io/resume/hf-agents-course-certificate.png",
		},
	],

	vibeCodingLessons: [
		{
			title: "AGENTS.md",
			detail: "This is where you set the agent's constraints and instructions — e.g. use pytest for all test cases, don't repeat code, prefer readability over complexity, use global constants where possible. It replaces CLAUDE.md.",
		},
		{
			title: "ARCHITECTURE.md",
			detail: "Write down how the system fits together: boundaries, data flow, and the decisions that should stay put. New features should follow it, not invent a new shape.",
		},
		{
			title: "DESIGN.md",
			detail: "Capture the interface and product intent so new features stay consistent with the product.",
		},
		{
			title: "Plan",
			detail: "Always use plan mode before asking for the actual work. Writing the vision down first means you know what to expect, saves you iteration, and lets you have the AI use sub-agents to implement the whole plan in one shot.",
		},
		{
			title: "Skills",
			detail: "If you notice yourself asking it to do the same task over and over, add a skill in a skills folder. It saves time and keeps the generated code consistent without packing every instruction into the agent file.",
		},
		{
			title: "Rules",
			detail: "The same mistake twice belongs in a rules folder now, not in the agent file. Add rules that make the agent review ARCHITECTURE.md and DESIGN.md before it adds a feature. Review those rules as models improve — one that fixed an older model can fight a newer one, and you no longer need it.",
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
			detail: "Be very careful adding plugins — only install what your project actually needs. Each one burns tokens and slows down the response. Review them the same way you review rules: as AI evolves, drop the ones the model no longer needs.",
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

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
			"https://www.credly.com/badges/31e81f74-ded9-43d6-b602-7ec7a3a486fc/linked_in?t=t30g4u",
	},

	homepage: {
		title: "Certified Solutions Architect and Senior Software Engineer.",
		description:
			"I am a certified Solutions Architect and experienced software engineer with over 10 years of experience in designing, developing, and implementing software solutions across various industries. My expertise lies in full-stack development, cloud computing, and agile methodologies. I thrive in collaborative environments and am committed to delivering high-quality, scalable software that meets client needs.",
	},

	about: {
		title: "I'm Gamal Tawaf",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. I have fully designed and managed systems on Google Cloud Platform (GCP) mainly in Python and Laravel PHP, but I have also worked with Ruby on Rails, Java Spring Boot, Vue.js, Node.js, React. I have had the pleasure of working with Docker and containerization. I'm building my portfolio while learning new technologies on the way.",
	},

	projects: [
		{
			title: "React Todo Application",
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
				"A collection of small games I've built to learn new languages and frameworks, from a React trivia quiz to a Rust/WebAssembly arcade game.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/rust/rust.png",
			tag: "Games",
			linkText: "View Games",
			link: "/games",
			internal: true,
		},
	],

	games: [
		{
			title: "Interactive Quiz Platform",
			description:
				"An advanced React application featuring dynamic quiz generation, real-time scoring, and interactive feedback. Implemented using TypeScript with focus on state management, user experience, and clean code architecture.",
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
			title: "Blockchain Demo",
			description:
				"An interactive teaching tool for how blockchains work: SHA-256 hashing, proof-of-work mining, and chain-link validation with live tamper detection.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			tag: "JavaScript",
			linkText: "Play Now",
			link: "https://gamaltawaf.github.io/resume/blockchain-demo.html",
		},
	],

	workHistory: [
		{
			company: "Fiserv",
			role: "Senior Software Engineer",
			duration: "Jan 2026 - Present",
		},
		{
			company: "Inkeros",
			role: "Solution Architect / Engineering Team Lead",
			duration: "Jan 2025 - Jan 2026",
		},
		{
			company: "PERCS",
			role: "Senior Software Engineer",
			duration: "Apr 2024 - Jan 2025",
		},
		{
			company: "UFT",
			role: "Senior Software Engineer (Contract)",
			duration: "Jan 2024 - Apr 2024",
		},
		{
			company: "Binance - Card & Pay",
			role: "Senior Software Engineer",
			duration: "Jul 2022 - Jul 2023",
		},
		{
			company: "VerticalScope Inc.",
			role: "Senior Web Engineer",
			duration: "Jul 2021 - Jun 2022",
		},
		{
			company: "Afilias",
			role: "Team Lead / Senior Software Engineer",
			duration: "Feb 2016 - Jul 2021",
		},
		{
			company: "BlockX Labs",
			role: "Technologist in Residence",
			duration: "Nov 2017 - Mar 2018",
		},
		{
			company: "API Garage",
			role: "Application Developer",
			duration: "Jun 2015 - Jun 2016",
		},
		{
			company: "Carlton Group Ltd.",
			role: "Application Developer",
			duration: "Oct 2014 - Jan 2016",
		},
		{
			company: "CareerPal.co",
			role: "PHP Web Developer (Contract)",
			duration: "Jun 2014 - Oct 2014",
		},
		{
			company: "Pavr Labs",
			role: "PHP Web Developer",
			duration: "Mar 2013 - Apr 2014",
		},
	],

	skills: {
		languages: [
			"Python",
			"PHP",
			"JavaScript",
			"TypeScript",
			"Ruby",
			"Java",
		],
		frameworks: [
			"Laravel",
			"React",
			"Vue.js",
			"Spring Boot",
			"Ruby on Rails",
			"Node.js",
		],
		cloud: [
			"Google Cloud Platform",
			"Docker",
			"Kubernetes",
			"Microservices",
		],
		tools: [
			"Git",
			"CI/CD",
			"Agile Methodologies",
			"Test-Driven Development",
			"RESTful APIs",
		],
	},

	certifications: [
		{
			name: "Google Cloud Certified Solutions Architect Professional",
			issuer: "Google Cloud",
			date: "2025 - 2027",
			link: "https://www.credly.com/badges/31e81f74-ded9-43d6-b602-7ec7a3a486fc",
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

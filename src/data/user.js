const INFO = {
	main: {
		title: "Gamal Tawaf Resume",
		name: "Gamal Tawaf",
		email: "ja.tawaf@gmail.com",
		logo: "/logo.png",
	},

	socials: {
		github: "https://github.com/GamalTawaf/",
		linkedin: "https://www.linkedin.com/in/gamaltawaf/",
		stackoverflow: "https://stackoverflow.com/users/2161866/gamal-tawaf",
		google_certified: "https://www.credly.com/badges/31e81f74-ded9-43d6-b602-7ec7a3a486fc/linked_in?t=t30g4u"
	},

	homepage: {
		title: "Certified Solutions Architect and Senior Software Engineer.",
		description:
			"I am a certified Solutions Architect and experienced software engineer with over 10 years of experience in designing, developing, and implementing software solutions across various industries. My expertise lies in full-stack development, cloud computing, and agile methodologies. I thrive in collaborative environments and am committed to delivering high-quality, scalable software that meets client needs.",
	},

	about: {
		title: "I'm Gamal Tawaf",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. I have fully designed and managed systems on Google Cloud Platform (GCP) mainly in Python and Laravel PHP, but I have also worked with Ruby on Rails, Java Spring Boot, Vue.js, Node.js, React. I have had the pleasure of working with Docker and containerization. I'm building my portfolio while learning new technologies on the way."
		},

	projects: [
		{
			title: "React Todo Application",
			description:
				"A React-based task management application built with TypeScript. Features include task creation, completion tracking, and data persistence. Demonstrates modern React practices, TypeScript integration, and responsive design principles.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
			linkText: "View Project",
			link: "https://gamaltawaf.github.io/to-do/",
		},
		{
			title: "Interactive Quiz Platform",
			description:
				"An advanced React application featuring dynamic quiz generation, real-time scoring, and interactive feedback. Implemented using TypeScript with focus on state management, user experience, and clean code architecture.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
			linkText: "View Project",
			link: "https://gamaltawaf.github.io/quiz/",
		},
	],

	skills: {
		languages: ["Python", "PHP", "JavaScript", "TypeScript", "Ruby", "Java"],
		frameworks: ["Laravel", "React", "Vue.js", "Spring Boot", "Ruby on Rails", "Node.js"],
		cloud: ["Google Cloud Platform", "Docker", "Kubernetes", "Microservices"],
		tools: ["Git", "CI/CD", "Agile Methodologies", "Test-Driven Development", "RESTful APIs"]
	},

	certifications: [
		{
			name: "Google Cloud Certified Solutions Architect",
			issuer: "Google Cloud",
			date: "2025",
			link: "https://www.credly.com/badges/31e81f74-ded9-43d6-b602-7ec7a3a486fc"
		}
	],

	education: [
		{
		degree: "Bachelor of Science in Computer Science",
		institution: "Your University",
		location: "Toronto, Canada",
		year: "2014"
		},
		{
			degree: "Computer Programming Diploma",
			institution: "Seneca College",
			location: "Toronto, Canada",
			year: "2011"
		}
	]
};

export default INFO;

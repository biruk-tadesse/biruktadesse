import emoji from "react-easy-emoji";

export const greetings = {
	name: "Biruk Tadesse",
	title: "Hello, I'm Biruk",
	description:
		"I am a researcher with diverse work experience, including software development, machine learning, data analytics, system administration, lecturing, consulting, and providing IT support. I am dedicated to meeting customer requirements with innovative solutions that maximize efficiency and exceed capability targets. I am comfortable discussing technical issues and solutions with scientists and analysts as well as clients. I am known for a great personable demeanor and strong work ethic.",
	resumeLink:
		"https://drive.google.com/file/d/1cftbA67Kd742TqzNHIKS1aKahDVNYpg2/view?usp=sharing",
};

export const openSource = {
	githubUserName: "biruk-tadesse",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/biruk.tadesse.tefera",
	instagram: "https://www.instagram.com/biruk.t.tefera/",
	twitter: "https://twitter.com/biruk_t_tefera",
	github: "https://github.com/biruk-tadesse",
	linkedin: "https://www.linkedin.com/in/biruktadesse/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK DEVELOPER",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", 
		progressPercentage: "90", 
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
	{
		Stack: "Research and Planning",
		progressPercentage: "95",
	},
];

export const educationInfo = [
	{
		schoolName: "BiT",
		subHeader: "Master of Science in Computer Science",
		duration: "November 2015 - March 2018",
	},
	/*{
		schoolName: "DU",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2009 - July 2013",
	},*/
];

export const experience = [
	{
		role: "Lead Researcher (Full time)",
		company: "GA",
		companylogo: "/img/icons/common/ns.jpeg",
		date: "April 2022 – Now",
		desc: "Performing research activities.",
		
	},
	{
		role: "Associate Researcher (Full time)",
		company: "TECHIN",
		companylogo: "/img/icons/common/techin.jpeg",
		date: "June 2021 – April 2022",
		desc: "Designing, developing, testing, and deploying software systems; Performing research activities; Giving training and support; Administering an Integrated Civil Service Management Information System Software.",
		
	},
	{
		role: "Lecturer (Part time)",
		company: "ACT",
		companylogo: "/img/icons/common/act.jpeg",
		date: "September 2021 – Now",
		desc: "Adapting presentations to reach students of diverse backgrounds; Leveraging in-depth knowledge and experience in Computer Science to provide relevant information; Supervising students during team and individual training practice.",
		
	},
	{
		role: "Lecturer (Full time)",
		company: "WCU",
		companylogo: "/img/icons/common/wcu.jpeg",
		date: "March 2018 - June 2021",
		desc: "Adapting presentations to reach students of diverse backgrounds; Leveraging in-depth knowledge and experience in Computer Science to provide relevant information; Supervising students during team and individual training practice; Performing research activities.",
	},
	{
		role: "[SIMS] System Administrator (Part time)",
		company: "WCU",
		companylogo: "/img/icons/common/wcu.jpeg",
		date: "January 2020 - June 2021",
		desc: "Administering an Integrated Software that automates the student related business processes of a University including: Course and Curriculum Management System; Academic Program Management System; Student Admissions, Registration and Achievement System; Online Grade Submission and Approval System; Certification and Graduation System; Building and Dormitory Management System; and Online Student Information.",
	},
];

export const projects = [
	{
		name: "Automatic Identification of Major Ethiopian Languages",
		desc: "An adequate mechanism for efficient text-based language identification is presented with an emphasis on 7 major languages used in Ethiopia.",
		link: "mailto:biruk.tadesse.tefera@gmail.com",
	},
	{
		name: "A Machine Learning Approach for Estimating Monthly Power Consumption in Residential Houses",
		desc: "Study examines existing power consumption in residential houses and estimates the power consumption for the coming years.",
		link: "mailto:biruk.tadesse.tefera@gmail.com",
	},
	{
		name: "Forecasting Inflation: An Experiment Using Artificial Intelligence",
		desc: "Research findings provide statistical grounds that can help decrease the effects on economic growth because investment projects become less risky if we could predect future inflation.",
		link: "mailto:biruk.tadesse.tefera@gmail.com",
	},
	{
		name: "Artificial Intelligence Assisted Decision Making in Predicting a Patient’s Path: The case of COVID-19 patients",
		desc: "Research findings provide statistical grounds that will assist doctors in their decision making by predicting a COVID-19 patient’s path with the help of artificial intelligence.",
		link: "mailto:biruk.tadesse.tefera@gmail.com",
	},
	{
		name: "Student Information Management System",
		desc: "An Integrated Software that automates the student related business processes of a University including: Course and Curriculum Management System; Academic Program Management System; Student Admissions, Registration and Achievement System; Online Grade Submission and Approval System; Certification and Graduation System; Building and Dormitory Management System; and Online Student Information.",
		link: "mailto:biruk.tadesse.tefera@gmail.com",
	},
];


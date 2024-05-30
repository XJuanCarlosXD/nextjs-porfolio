import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Corpus Security',
		url: 'https://corpusec.com',
		category: 'Landing',
		img: '/images/moblapcorpus.png',
		ProjectHeader: {
			title: 'Corpus Security',
			publishDate: 'Jul 26, 2023',
			tags: 'Landing / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Corpus Security',
				img: '/images/moblapcorpus.png',
			},
			{
				id: uuidv4(),
				title: 'Corpus Security',
				img: '/images/laptopcorpus.png',
			},
			{
				id: uuidv4(),
				title: 'Corpus Security',
				img: '/images/mobilecorpus.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Corpus Security',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Landing',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://corpusec.com',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				"Our objective is to provide high-quality private security services, ensuring comprehensive protection and efficient surveillance for businesses, individuals, events, condominiums, and residences.",
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'CSS',
						'JavaScript',
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'A private security company offering comprehensive protection services to businesses, individuals, events, condominiums, and residences, as well as surveillance to maintain a controlled perimeter and environment.',
				},
				{
					id: uuidv4(),
					details:
						'Our mission is to protect, monitor, and guard through comprehensive services, all physical and/or legal entities that hire us to safeguard our clients’ particular interests.',
				},
				{
					id: uuidv4(),
					details:
						'Our vision is to be a leading company in the protection and custody of private entities throughout the Caribbean region.',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'Appbot',
		url: 'https://staging.appbot.do',
		category: 'Web Application',
		img: '/images/appbot2.png',
		ProjectHeader: {
			title: 'Appbot',
			publishDate: 'Oct 10, 2022',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Appbot',
				img: '/images/appbot3.png',
			},
			{
				id: uuidv4(),
				title: 'Appbot',
				img: '/images/appbot2.png',
			},
			{
				id: uuidv4(),
				title: 'Appbot',
				img: '/images/appbot1.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Pillarware',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://pillarware.io',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To enhance sales and productivity by automating appointments, orders, and sales through a bot with WhatsApp and web messaging. Our goal is to simplify operations, allowing businesses to focus on delivering superior service.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'SCSS',
						'TypeScript',
						'Next.js',
						'Django REST API'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Automate your appointments, orders, and sales with a bot using WhatsApp and web messaging.',
				},
				{
					id: uuidv4(),
					details:
						'Boost your sales and productivity by focusing on delivering better service while we simplify your operations.',
				},
				{
					id: uuidv4(),
					details:
						'Gain insights on your users, busiest appointment days, least busy days, most used services, and more.',
				},
				{
					id: uuidv4(),
					details:
						'Automate follow- ups on processes, appointments, and tasks with automated notifications through the bot or emails to your clients.',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 3,
		title: 'Pillarware',
		url: 'project-management-ui',
		category: 'Landing',
		img: '/images/pillarware1.png',
		ProjectHeader: {
			title: 'Pillarware',
			publishDate: 'Oct 10, 2022',
			tags: 'Landing',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Pillarware',
				img: '/images/pillarware1.png',
			},
			{
				id: uuidv4(),
				title: 'Pillarware',
				img: '/images/pillarware2.png',
			},
			{
				id: uuidv4(),
				title: 'Pillarware',
				img: '/images/pillarware3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Pillarware',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://pillarware.io',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To enhance sales and productivity by automating appointments, orders, and sales through a bot with WhatsApp and web messaging. Our goal is to simplify operations, allowing businesses to focus on delivering superior service.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'CSS',
						'TypeScript',
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Automate your appointments, orders, and sales with a bot using WhatsApp and web messaging.',
				},
				{
					id: uuidv4(),
					details:
						'Boost your sales and productivity by focusing on delivering better service while we simplify your operations.',
				},
				{
					id: uuidv4(),
					details:
						'Gain insights on your users, busiest appointment days, least busy days, most used services, and more.',
				},
				{
					id: uuidv4(),
					details:
						'Automate follow- ups on processes, appointments, and tasks with automated notifications through the bot or emails to your clients.',
				},
			],
			// SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: 'AF Corredores',
		url: 'https://af-corredores.web.app',
		category: 'Landing',
		img: '/images/afcorre2.png',
		ProjectHeader: {
			title: 'AF Corredores',
			publishDate: 'Jul 26, 2021',
			tags: 'Landing',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AF Corredores',
				img: '/images/afcorre1.png',
			},
			{
				id: uuidv4(),
				title: 'AF Corredores',
				img: '/images/afcorre2.png',
			},
			{
				id: uuidv4(),
				title: 'AF Corredores',
				img: '/images/afcorre3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Af Corredores',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://af-corredores.web.app',
				},
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: '',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'',
				},

			],
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 5,
		title: 'SBF.FUN',
		url: 'https://sbf.fun',
		category: 'Web Application',
		img: '/images/sbffun1.png',
		ProjectHeader: {
			title: 'SBF.FUN',
			publishDate: 'May 10, 2024',
			tags: 'Web Aplication / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'SBF.FUN',
				img: '/images/sbffun1.png',
			},
			{
				id: uuidv4(),
				title: 'SBF.FUN',
				img: '/images/sbffun2.png',
			},
			{
				id: uuidv4(),
				title: 'SBF.FUN',
				img: '/images/sbffun3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'SOM BONKMON FRAUD',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://sbf.fun',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'SBF is a web app designed to create and trade cryptocurrencies on the Solana blockchain.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'CSS',
						'TypeScript',
						'TailwindCSS',
						'Django',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'SBF is a web app designed to create and trade cryptocurrencies on the Solana blockchain. It aims to provide a seamless and efficient platform for users to manage their crypto assets and engage in trading activities.',
				},
				{
					id: uuidv4(),
					details:
						'Automate your appointments, orders, and sales with a bot using WhatsApp and web messaging. This helps businesses focus on delivering superior service while streamlining operations.',
				},
				{
					id: uuidv4(),
					details:
						'Increase your sales and productivity by concentrating on providing better service while we simplify your operations. Gain valuable insights on user behavior, appointment trends, and service utilization.',
				},
				{
					id: uuidv4(),
					details:
						'Automate follow-ups on processes, appointments, and tasks through automated notifications via the bot or emails to your clients. This ensures seamless communication and enhances customer satisfaction.',
				},
				{
					id: uuidv4(),
					details:
						'Our platform provides detailed analytics on your users, including the busiest and least busy appointment days, most utilized services, and more. Use this data to optimize your operations and improve customer experience.',
				},
			],
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/realstoman',
			// 	},
			// ],
		},
	},
	{
		id: 6,
		title: 'POKT RADAR',
		url: 'https://poktradar.io',
		category: 'Explore',
		img: '/images/poktrada2.png',
		ProjectHeader: {
			title: 'POKT RADAR',
			publishDate: 'Apr 24, 2024',
			tags: 'Explore / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'POKT RADAR',
				img: '/images/poktrada1.png',
			},
			{
				id: uuidv4(),
				title: 'POKT RADAR',
				img: '/images/poktrada2.png',
			},
			{
				id: uuidv4(),
				title: 'POKT RADAR',
				img: '/images/poktrada3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Nodefleet',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://nodefleet.org',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				"Nodefleet is an infrastructure company specializing in blockchain technology.",
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'CSS',
						'TypeScript',
						'TailwindCSS',
						'Prisma'
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'POKT RADAR is an explorer for managing your accounts and addresses on the POCKET NETWORK.',
				},
			]
			,
		},
	},
	{
		id: 7,
		title: 'Nodefleet',
		url: 'https://nodefleet.org/',
		category: 'Branding',
		img: '/images/nodefl1.png',
		ProjectHeader: {
			title: 'Nodefleet',
			publishDate: 'Jan 10, 2024',
			tags: 'Branding / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Nodefleet',
				img: '/images/nodefl1.png',
			},
			{
				id: uuidv4(),
				title: 'Nodefleet',
				img: '/images/nodefl2.png',
			},
			{
				id: uuidv4(),
				title: 'Nodefleet',
				img: '/images/nodefl3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Nodefleet',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://nodefleet.org',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Nodefleet is a company specializing in blockchain infrastructure, providing robust solutions for businesses looking to leverage blockchain technology for various applications. ',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'CSS',
						'TypeScript',
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Nodefleet is a company specializing in blockchain infrastructure, providing robust solutions for businesses looking to leverage blockchain technology for various applications.',
				},
				{
					id: uuidv4(),
					details:
						'Nodefleet provides blockchain infrastructure services, catering to the diverse needs of businesses seeking to integrate blockchain technology into their operations.',
				},
				{
					id: uuidv4(),
					details:
						'Nodefleet offers comprehensive blockchain infrastructure solutions, empowering organizations to harness the potential of blockchain for enhanced security, transparency, and efficiency in their processes.',
				},
				{
					id: uuidv4(),
					details:
						'Nodefleet specializes in providing cutting-edge blockchain infrastructure services, supporting businesses in their journey to adopt blockchain technology for optimized operations and innovative solutions.',
				},
			],
		},
	}, {
		id: 8,
		title: 'Wedding',
		url: 'https://invitacion-boda-maria-enmanuel.netlify.app',
		category: 'Branding',
		img: '/images/boda.png',
		ProjectHeader: {
			title: 'Nodefleet',
			publishDate: 'Jan 10, 2024',
			tags: 'Branding / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Nodefleet',
				img: '/images/boda.png',
			},
			{
				id: uuidv4(),
				title: 'Nodefleet',
				img: '/images/boda1.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Maria Abreu',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'The purpose of the page is to invite guests with a digital invitation and instantly know who will attend the wedding.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'CSS',
						'TypeScript',
						'TailwindCSS',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'The primary goal of this project is to create a digital platform for wedding invitations, allowing hosts to easily invite guests and track RSVPs in real-time.',
				},
				{
					id: uuidv4(),
					details:
						'Another objective is to streamline the RSVP process, providing guests with a convenient way to respond to the invitation digitally and allowing hosts to manage guest lists efficiently.',
				},
			]

		},
	},
	{
		id: 9,
		title: 'VcardDO',
		url: 'https://vcarddo-2b240.web.app',
		category: 'Web Aplication',
		img: '/images/vcard2.png',
		ProjectHeader: {
			title: 'VcardDO',
			publishDate: 'Jan 10, 2022',
			tags: 'Web Aplication / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'VcardDO',
				img: '/images/vcard1.png',
			},
			{
				id: uuidv4(),
				title: 'VcardDO',
				img: '/images/vcard2.png',
			},
			{
				id: uuidv4(),
				title: 'VcardDO',
				img: '/images/vcard3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Owner',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://vcarddo-2b240.web.app',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				"Vcardo is a webpage that offers a completely free service for creating or generating QR codes.",
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'CSS',
						'JavaScript',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Vcardo is a user-friendly platform that allows users to effortlessly create or generate QR codes at no cost. Whether for personal or professional use, Vcardo provides a convenient solution for individuals and businesses alike.',
				},
			],
		},
	},
	{
		id: 10,
		title: 'Bot Injective',
		url: 'https://vcarddo-2b240.web.app',
		category: 'Python Aplication',
		img: '/images/botInf.png',
		ProjectHeader: {
			title: 'Bot Injective',
			publishDate: 'Oct 12, 2023',
			tags: 'Python Aplication / Backend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Bot Injective',
				img: '/images/botInf.png',
			},
			{
				id: uuidv4(),
				title: 'Bot Injective',
				img: '/images/botIn.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Nodefleet',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Backend Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://nodefleet.org',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Nodefleet is a company specializing in blockchain infrastructure, providing robust solutions for businesses looking to leverage blockchain technology for various applications. ',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Bot Injective is a cryptocurrency bot that notifies users via Telegram about new coins launched on the Injective platform.',
				},
			],
		},
	},
];

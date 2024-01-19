//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiLinkedin,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';

import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/uuday3804/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/UdaykiranRegimudi',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/uday-kiran-81577621a/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Nxt Trendz',
    category: 'web development',
    description: "This pioneering e-commerce platform, inspired by the success of giants like Amazon and Flipkart, has been launched with an emphasis on innovation. Leveraging ReactRouter and React components, meticulously designed pages for Login, Products, and Product details promise a seamless user experience. The implementation of robust security measures, including JWT tokens, REST API calls, and local storage, ensures the utmost protection for user data. This cutting-edge platform not only mirrors industry leaders but also introduces novel features and enhanced security protocols, setting a new standard in the world of online commerce.",
		technologies: ' React JS, JS, CSS, Bootstrap, Routing, REST API Calls, LocalStorage, JWT Token, Authorization, Authentication',
		link: 'https://udayflipcart.ccbp.tech/login/',
  },
  {
    id: '2',
    image: Project2,
    name: 'Chatbot',
    category: 'AI/ML',
    description: 'Introducing a groundbreaking Chatbot designed for personalized and captivating user interactions, setting a new standard in conversational interfaces. The user-friendly UI, crafted with HTML, CSS, and Bootstrap, ensures a seamless display of engaging conversations between users and the chatbot. Leveraging JavaScript DOM operations and Array methods, the platform achieves dynamic rendering of user inputs and chatbot responses, enhancing the overall user experience. This innovative Chatbot goes beyond scripted interactions by tailoring responses to user inputs, intelligently filtering relevant answers from its predefined list. Immerse yourself in a world of interactive communication with this Chatbot, where technology meets user-centric design to deliver an unparalleled and personalized engagement.',
		link: 'https://udayaichatbot.ccbp.tech/',
		technologies:' HTML, CSS, JS, Bootstrap, ML'
  },
  {
    id: '3',
    image: Project3,
    name: 'School-Admission Website',
    category: 'web development',
    description: "In a dedicated effort to modernize my former school's administrative processes, I developed a comprehensive solution encompassing a sophisticated database system and an interactive school website. The system is specifically designed to efficiently store admission data, providing a centralized and organized approach for managing student information. The school website, crafted with a user-friendly interface, serves as a digital representation of the institution, offering valuable insights and updates to parents and stakeholders. To further streamline operations, the platform facilitates online admission requests, empowering parents with a convenient and accessible way to initiate the admission process. This integrated approach not only ensures data accuracy and security but also enhances the overall experience for both school administrators and prospective students' families.",
		technologies: 'HTML, CSS, JavaScript, Bootstrap, React.js, Node.js',
		link: 'https://zphschilukuru.ccbp.tech/login',
  },
  {
    id: '4',
    image: Project4,
    name: 'Online Weather Detection',
    category: 'web development',
    description: "This online weather website delivers real-time updates, precise forecasts, and interactive maps for a comprehensive weather experience. Stay ahead with personalized alerts, ensuring you're prepared for changing conditions. Explore detailed climate information and historical data to enhance your understanding of weather patterns. With a user-friendly design, our website offers seamless navigation across devices, keeping you connected to accurate and reliable meteorological data. Join our community of weather enthusiasts for a streamlined and informed weather-tracking experience.",
		link: 'https://gioeweatherweb.ccbp.tech/',
		technologies: 'React.js, JavaScript, CSS, HTML',
  },
  {
    id: '5',
    image: Project5,
    name: 'Country Search',
    category: 'web development',
    description: 'The Country Search Web Project is a streamlined platform designed to provide quick access to essential country information with a focus on simplicity. Users can effortlessly search for and retrieve country names, creating an efficient and straightforward experience. With minimalistic design, the project caters to those seeking swift access to specific country names, making it a convenient tool for various purposes. Enjoy the ease of finding country names on this no-frills web project.',
		technologies: 'JavaScript, CSS, HTML',
		link: 'https://udaycountry.ccbp.tech/',
  },
  {
    id: '6',
    image: Project6,
    name: 'Moji Game',
    category: 'web development',
    description: "The Emoji Game Project is an exciting venture that brings together creativity and technology in a fun and engaging way. Inspired by the universal language of emojis, this project aims to create a unique gaming experience where players decipher and guess phrases or words represented by a combination of emoticons. The game promises to be a delightful challenge, encouraging players to tap into their linguistic and visual skills. With a user-friendly interface and a diverse range of emoji puzzles, the project aims to cater to a wide audience, from casual gamers to language enthusiasts. Embracing the vibrant and expressive world of emojis, this project is set to redefine the gaming landscape, offering a fresh and entertaining take on interactive wordplay..",

		technologies: 'Vanilla JavaScript, CSS, HTML',
		link: 'https://mojigame.ccbp.tech/',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'AI/ML',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Uday, your exceptional work, positive attitude, and valuable skills make you a standout contributor to our team. Your commitment to excellence is truly commendable, and I appreciate the positive impact you bring every day.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Uday, your outstanding work, positive demeanor, and impressive skills consistently elevate our team. Your commitment to excellence and collaborative spirit are truly commendable, making a significant difference in our overall success. Thank you for your exceptional contributions.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Uday, your exemplary work, positive attitude, and exceptional skills make you a standout team member. Your commitment to excellence is evident in every task you undertake, and I want to express my appreciation for the positive impact you bring to the team.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at uuday3804@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Hyderabad',
    description: 'KMIT, Narayanaguda',
  },
];

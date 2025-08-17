/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adwait's Portfolio",
  description:
    "A new graduate and passionate developer with experience in full-stack development, seeking exciting opportunities in the industry. Outside of work, I have contributed to student tech organizations by organizing hackathons and social events.",
  og: {
    title: "Adwait Pujari Portfolio",
    type: "website",
    url: "", //              [TODO]
  },
};

//Home Page
const greeting = {
  title: "Adwait Pujari",
  //logo_name: "Adwait Pujari",
  nickname: "Full Stack Developer",
  subTitle:
    "A new graduate and passionate developer with experience in full-stack development, seeking exciting opportunities in the industry. Outside of work, I have contributed to student tech organizations by organizing hackathons and social events.",
  resumeLink: "https://adwait-pujari-full-stack-developer.tiiny.site",
  portfolio_repository: "", // [TODO]
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Adwait-Pujari",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adwait-pujari/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:adwaitpujari08@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "• Building responsive web applications using Angular for dynamic front-end development.",
        "• Creating RESTful APIs with Node.js and Express, connected to MongoDB for scalable back-end solutions.",
        "• Designing reporting and visualization tools to turn raw data into actionable insights.",
        "• Writing unit and integration tests with Jest, Karma, and Jasmine to ensure code reliability and maintainability.",
        "• Customizing enterprise applications on ServiceNow, developing client-side and server-side solutions.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "AWS",
      iconifyClassname: "simple-icons:amazonaws",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "Microsoft",
      imageName: "microsoft-logo",
    },
    {
      siteName: "Azure Cloud",
      iconifyClassname: "simple-icons:microsoftazure",
      style: {
        color: "#0089D6",
      },
    },
    {
      siteName: "Accenture",
      iconifyClassname: "simple-icons:accenture",
      style: {
        color: "#A100FF",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Manitoba",
      subtitle: "Bachelor of Computer Science",
      logo_path: "UM-logo-vertical.png",
      alt_name: "UofM",
      duration: "2021 - 2025",
      descriptions: [
        "• Built a strong foundation in core computer science, studying Data Structures, Algorithms, Operating Systems, Computer Architecture, Databases, Networking, and Cybersecurity.",
        "• Developed full-stack applications using technologies like Angular, Node.js, Express, and MongoDB, along with exposure to cloud computing concepts.",
        "• Worked on hands-on projects involving operating systems, peer-to-peer systems, and web development, applying classroom concepts to practical implementations.",
        "• Consistently maintained strong academic performance and earned recognition for contributions in student tech organizations and hackathons.",
      ],
      website_link: "https://umanitoba.ca/",
    },
    {
      title: "International College of Manitoba (ICM)",
      subtitle: "Bachelor of Science",
      logo_path: "ICM-logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2020 - 2021",
      descriptions: [
        "• Completed first-year coursework in Bachelor of Science program, focusing on core subjects such as Mathematics, Computer Science, and foundational sciences.",
        "• Built a strong academic base that prepared for direct entry into the University of Manitoba’s Computer Science program.",
        "• Gained early exposure to collaborative learning and adapting to an international academic environment.",
      ],
      website_link: "https://www.icmanitoba.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Cloud Practitioner",
      subtitle: "- Amazon",
      logo_path: "aws_logo.svg",
      certificate_link:
        "https://www.credly.com/badges/8ec775c5-b96e-45ab-af3e-895935d50843/linked_in_profile",
      alt_name: "AWS",
      color_code: "#c8e0f8ff",
    },
    {
      title: "Digital Skills: Digital Marketing",
      subtitle: "- Harry Hurst",
      logo_path: "accenture_logo.png",
      certificate_link: "https://www.futurelearn.com/certificates/632izdl",
      alt_name: "Digital Marketing",
      color_code: "#05050509",
    },
    {
      title:
        "Microsoft Technology Associate: Introduction to Python Programming",
      subtitle: "- Satya Nadella",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=8hMox57vetxAaK/H5qnisw==",
      alt_name: "MTA",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Full-Stack and Front-End Developer, as well as a Data Analyst, building applications, dashboards, and tools to support teams and projects. I also served as Treasurer for a student Computer Science club, managing finances and helping organize events and hackathons.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Royal Bank of Canada",
          company_url: "https://www.rbcroyalbank.com/personal.html",
          logo_path: "RBC_logo.png",
          duration: "May 2025 - Present",
          location: "Toronto, Ontario, Canada",
          description:
            "Developing and enhancing internal applications at RBC using the MEAN stack, building RESTful APIs, and implementing data visualization and reporting tools to support team workflows and analytics.",
          color: "#000000",
        },
        {
          title: "Junior Developer",
          company: "G3 Canada Limited",
          company_url: "https://www.g3.ca/",
          logo_path: "G3_logo.png",
          duration: "Aug 2024 - Apr 2025",
          location: "Winnipeg, Manitoba, Canada",
          description:
            "Developed interactive reports and user-friendly web pages in ServiceNow using Angular, built Automated Test Frameworks to improve test accuracy, and optimized caching and pagination to enhance system performance and report access speed.",
          color: "#0879bf",
        },
        {
          title: "Data Analyst",
          company: "G3 Canada Limited",
          company_url: "https://www.g3.ca/",
          logo_path: "G3_logo.png",
          duration: "Jan 2024 - Apr 2024",
          location: "Winnipeg, Manitoba, Canada",
          description:
            "Developed Business Intelligence cubes using ETL processes with Azure Data Factory and Azure Data Studio, improving data transfer to the warehouse by 23%, and built trader-focused web and mobile interfaces in ASP.NET integrating Excel calculators and Power BI reports to streamline dashboard navigation.",
          color: "#9b1578",
        },
        {
          title: "Teaching Assistant",
          company: "Univeristy of Manitoba",
          company_url:
            "https://umanitoba.ca/centre-advancement-teaching-learning/support/remote/ta",
          logo_path: "UM-logo-vertical.png",
          duration: "Jan 2024 - Aug 2024",
          location: "Winnipeg, Manitoba, Canada",
          description:
            "Assisted undergraduate computer science courses as a Teaching Assistant, providing guidance in Java, Python, C, and Data Structures & Algorithms, supporting students with labs, assignments, and problem-solving sessions, and helping improve overall course comprehension and performance.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Treasurer",
          company: ".devClub",
          company_url: "https://devclub.ca/",
          logo_path: "devClub_logo.png",
          duration: "Jun 2023 - Apr 2025",
          location: "Winnipeg, Manitoba, Canada",
          description:
            "Managed finances and budgeting for devClub, supporting the planning and execution of tech events, hackathons, and student initiatives. Implemented financial tracking and reporting processes to ensure transparency and efficient use of club resources.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

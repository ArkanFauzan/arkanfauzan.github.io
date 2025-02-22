/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Arkan Fauzan Ayyasyi",
  title: "Hi all, I'm Arkan!",
  subTitle: emoji(
    "A passionate Web Developer 🚀 having an experiences of building Web applications with Laravel, .NET Core, MySQL, MongoDB, Reactjs, Vuejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ArkanFauzan",
  linkedin: "https://www.linkedin.com/in/arkan-fauzan-ayyasyi/",
  gmail: "arkanfauzan93@gmail.com",
  gitlab: "https://gitlab.com/ArkanFauzan",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@arkanfauzan93",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "WEB DEVELOPER WHO WANTS TO BUILD USEFUL APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop scalable backend & frontend for your web applications"
    ),
    emoji(
      "⚡ Develop enhancement & bugs fixing for your web applications"
    ),
    emoji(
      "⚡ Integration with third party services such as Payment Gateway / OpenAI / AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.cvueom/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Drupal",
      fontAwesomeClassname: "fab fa-drupal"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "SQL/No-SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SAAS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sangga Buana YPKP University",
      logo: require("./assets/images/sanggabuana.jpg"),
      subHeader: "Bachelor of Informatics Engineering",
      duration: "2022 - 2026",
      desc: "Studied about algorithms, data structures, web and mobile applications, and Artificial Intelligent (AI)",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "FrontEnd/Design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Icreativelabs",
      companylogo: require("./assets/images/icreativelabs-logo.jpg"),
      date: "November 2021 – Present",
      desc: "Icreativelabs is an IT Consultant. I have done several projects for Icreativelabs by following client's requirements. There are:",
      descBullets: [
        "Created backend for analytical landing page using PHP Laravel and MongoDB. This project analyze visitor, unique visitor, popular pages, user browser, devices, and IP geolocation.",
        "Created Landing Page Generator using PHP and Vue JS. This project is to create landing page website without coding.",
        "Created Content Management System (CMS) using PHP with Drupal 9 and TWIG template.",
        "Created backend for network Inventory management system and port reservation using .Net Core (C#).",
        "Sahabatku (mobile app). I have created a backend for top-up balance with payment integration."
      ]
    },
    {
      role: "Bootcamp Mentor (Front-End Web Development)",
      company: "Dibimbing.id",
      companylogo: require("./assets/images/dibimbing-logo.jpg"),
      date: "August 2023 – February 2025",
      desc: "Mentoring bootcamp class from batch 13 to 21. The topics are:",
      descBullets: [
        "Live Coding Class: Improve student understanding in JavaScript Algorithm. This class discuss about coding implementation to solve problem using data structure, conditional statement, nested looping, searching, and sorting.",
        "Career Class: As a career switcher (from chemical analyst), I share to students what they need to prepare to achieve their goal of becoming a Web Developer."
      ]
    },
    {
      role: "Bootcamp Instructor (Web Development)",
      company: "Dibimbing.id",
      companylogo: require("./assets/images/dibimbing-logo.jpg"),
      date: "March 2022 – December 2023",
      desc: "Provide mentoring to students if they need additional sessions besides regular class to improve their understanding of Web Development (Front-End and Back-End) using React JS and Express JS. This session is like one-on-one mentoring."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: "",//require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Landing Page Analytics",
      projectFor: "For: Icreativelabs",
      projectDesc: "I have created backend using PHP Laravel and MongoDB. The features I have made are:",
      projectDescBullets: [
        "Unique visitors, total visitors, visit duration, page view pervisit",
        "Get visitor location using IP address geolocation",
        "Visitor browsers",
        "Visitor Operating System (OS)"
      ],
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "",//require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Landing Page Generator",
      projectFor: "For: Icreativelabs",
      projectDesc: "This project is to create a landing page without coding using PHP (as Backend) and Vue JS (as Frontend). In this project, I created Full Backend and customize a few part in Frontend. The features I have made are:",
      projectDescBullets: [
        "Create multiple pages with drag and drop content",
        "Customize page path url",
        "Create custom form. The available fields are: text input, textarea input, radio, select, checkbox",
        "Embedded custom form in page",
        "Page personalization. This is for displaying different page based on visitor's tag",
        "Built-in SEO tools, like meta title, meta description, and robots.txt"
      ],
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
        image: "",//require("./assets/images/saayaHealthLogo.webp"),
        projectName: "Content Management System (CMS)",
        projectFor: "For: Icreativelabs",
        projectDesc: "I am a full-stack developer in this project. This project is to create a CMS website for internet provider company using PHP, Drupal, and TWIG template engine. The features I have made are:",
        projectDescBullets: [
          "Customize internet package from technical language to marketing language",
          "Create a bundling internet package to become a product catalog",
          "Integrate with surrounding internal system"
        ],
        footerLink: [
          // {
          //   name: "Visit Website",
          //   url: "http://saayahealth.com/"
          // }
          //  you can add extra buttons here.
        ]
      },
      {
        image: "",//require("./assets/images/saayaHealthLogo.webp"),
        projectName: "Network Inventory Management System",
        projectFor: "For: Icreativelabs",
        projectDesc: "I am a back-end developer for this project, which was built using .NET Core (C#). This project is for managing network devices. The features I have made are:",
        projectDescBullets: [
          "Devices inventory for router and switch",
          "Port inventory (device can have many ports)",
          "Trunk capacity inventory, to divide bandwidth from 1 port to another device with multiple ports",
          "Port reservation"
        ],
        footerLink: [
          // {
          //   name: "Visit Website",
          //   url: "http://saayahealth.com/"
          // }
          //  you can add extra buttons here.
        ]
      },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "arkanfauzan93@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

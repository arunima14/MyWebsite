import self from "../img/self.png";
import VITConnect from "../img/portfolio.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Arunima",
  lastName: "Singh",
  initials: "AS",
  position: "a FrontEnd Web Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in Uttar Pradesh, India",
    },
    {
      emoji: "🎓",
      text: "Student at VIT Bhopal University",
    },
    {
      emoji: "📧",
      text: "arunimaforwork@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/arunima.singh.98837/",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/lifeofarunima?igshid=YmMyMTA2M2Y=",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/arunima14",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/-arunima-singh/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/Arunima26728410",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],

  bio: "Hello! I'm Arunima. I'm a final year CSE ungraduate student at VIT Bhopal University.",
  skills: {
    proficientWith: [
      "java",
      "html/css",
      "react",
      "javascript",
      "typescript",
      "nodejs",
      "bootstrap",
      "version control",
      "balasmiq",
    ],
    exposedTo: [
      "cloud computation",
      "EJS",
      "python",
      "cpp",
      "machine learning",
    ],
  },
  hobbies: [
    {
      label: "music",
      emoji: "🎧",
    },
    {
      label: "sports",
      emoji: "🏸",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
  ],

  portfolio: [
    {
      title: "VIT Connect",
      live: "#",
      source: "https://github.com/sankalp20/Emergency-VITConnect",
      image: VITConnect,
    },
    {
      title: "Book Recommender System",
      live: "https://github.com/arunima14/book-recommender-system-python",
      source: "https://github.com/arunima14/book-recommender-system-python",
      image: mock2,
    },
    {
      title: "Keeper Notes",
      live: "https://github.com/arunima14/Keeper-Notes",
      source: "https://github.com/arunima14/Keeper-Notes",
      image: mock2,
    },
    {
      title: "Update Time",
      live: "https://arunima14.github.io/UpdateTime/public/index.html",
      source: "https://github.com/arunima14/UpdateTime",
      image: mock3,
    },
    {
      title: "Drum Kit",
      live: "https://arunima14.github.io/drum-kit/",
      source: "https://github.com/arunima14/drum-kit",
      image: mock4,
    },
    {
      title: "FunEdu - shaping million tiny minds",
      live: "https://the-black-hats.github.io/fun-edu/",
      source: "https://github.com/arunima14/fun-edu",
      image: mock5,
    },
    {
      title: "Anchaal app",
      live: "https://github.com/arunima14/Anchaal-app",
      source: "https://github.com/arunima14/Anchaal-app",
      image: mock5,
    },
    {
      title: "Tindog",
      live: "https://github.com/arunima14/tindog",
      source: "https://github.com/arunima14/tindog",
      image: mock5,
    },
    {
      title: "Covid-19 resources",
      live: "https://github.com/arunima14/covid-19-resources",
      source: "https://github.com/arunima14/covid-19-resources",
      image: mock5,
    },
  ],
};

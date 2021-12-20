import chefsPost from '../images/chefsPostLogIn.png';
import ghostMan from '../images/ghostDeken.png';
import ghostVideo from '../images/Final.mp4';
import weatherify from '../images/weatherSearch.png';
import showreel from '../images/showreel.png';
import showreelVideo from '../images/Showreel Omar Aghallaj 2021.mp4';
import devil from '../images/devil.png';
import md from '../images/Marvelous designer.svg';
import xd from '../images/adobe-xd-seeklogo.com.svg';
import ae from '../images/after-effects-2019.svg';
import react from '../images/react.svg';
import ppro from '../images/premiere-cc.svg';
import js from '../images/js.svg';
import html from '../images/html.svg';
import linkKabel from '../images/linkkabel.png'
export const projects = [
    {
      id: 1,
      title: "Rising Cloth",
      description:
        "For the course Interactive Motion, I made a simulated animation that brought a 3D rendered object together with live footage. I've linked a sequence of animations on this model, and imported it to Marvelous Designer to simulate the cloth. Afterwards edit it out in Cinema 4D & After Effects for the final touch.",
      image: ghostMan,
      demo: ghostVideo,
      software: [md, ae,ppro ],
      alt: "ghostModel",
    },
    {
      id: 2,
      title: "ChefsPost",
      description:
        "This is a design I worked on with 2 other students, it would serve to develop an app that could've been used during the pandemic. People would compete with their friends to make a certain dish (complete challenge). The one first to finish and upload their result would win the cook battle.",
      image: chefsPost,
      demo: null,
      software: [xd],
      alt: "ChefsPost",
      
    },
    {
      id: 3,
      title: "Weatherify",
      description:
        "This webapp was the first time I heard of a full stack website, which was also the goal with this project. Building a frontend in Node.Js in combination with Express to handle the backend. This app is a weather tool that shows a weekly forcast based on the city/country that the user types. But also suggests a Spotify playlist depending on the current weather which can be added to the users favourites",
      image: weatherify,
      demo: null,
      software: [xd, js, html],
      alt: "Weatherify",
    },
    {
      id: 4,
      title: "Showreel 2021",
      description:
        "This video represents my favourite works that I made in de audiovisual scene for the past 2 years. Going from 3D, to videography but also directing music video's for local artists",
      image: showreel,
      demo: showreelVideo,
      software: [ae, ppro],
      alt: "Showreel 2021",
    },
    {
      id: 5,
      title: "React Three Fiber",
      description:
        "For my research concerning my graduation project, I was working on the first prototype of a feature that I would be implementing. Uploading a 3D model to the web and displaying it on the viewport by using R3F.",
      image: devil,
      demo: null,
      software: [react, js],
      alt: "React Three Fiber Devil",
      },
      {
        id: 6,
        title: "Link in de Kabel",
        description:
          "I was assigned to aid in this project, but also to gain some technical expertise. I learned how to use anime.js and animate SVG files with JSON data, but also came across how to implement a react component to a plain html file.",
        image: linkKabel,
        demo: null,
        software: [react, js, html],
        alt: "Link in de kabel",
        },
  ];
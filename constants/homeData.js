
import dseDesktop from "../public/assets/CourseIcons/dse-desktop.png";
import dmpDesktop from "../public/assets/CourseIcons/dmp-desktop.png";
import acppDesktop from "../public/assets/CourseIcons/acpp-desktop.png";
import acmpDesktop from "../public/assets/CourseIcons/acmp-desktop.png";
import dseMobile from "../public/assets/CourseIcons/mobile/dse.png";
import dmpMobile from "../public/assets/CourseIcons/mobile/dmp.png";
import acppMobile from "../public/assets/CourseIcons/mobile/acpp.png";
import acmpMobile from "../public/assets/CourseIcons/mobile/acmp.png";
import MobileGig from "../public/assets/hero-images/mobile-gig.jpg";
import MobilePassion from "../public/assets/hero-images/mobile-passion.jpg";
import MobileRight from "../public/assets/hero-images/mobile-rightway.jpg";
import DesktopGig from "../public/assets/hero-images/hero-gig.jpg";
import DesktopPassion from "../public/assets/hero-images/hero-passion.jpg";
import DesktopRight from "../public/assets/hero-images/hero-rightway.jpg";
import CSRDesktop from '../public/assets/CourseIcons/CSR.jpg';
import CSRMobile from '../public/assets/CourseIcons/mobile/csr.png'

export const HomeCoursesData = [
  {
    link: "/mumbai/sound-engineering-course",
    bgImage: dseDesktop,
    icon: dseMobile,
    title: "DSE",
    subtitle: "Diploma in Sound Engineering",
    data: [
      "Music Recording and Editing",
      "Digital Audio",
      "DAW (Digital Audio Workstation) advanced operations",
      "Basic Music Production",
      "Mixing & Mastering",
      "Live Sound Reinforcement",
      "Post Production",
      "ADR (Automated Dialogue replacement)",
      "Foley Recording",
      "Sound Design & Editing",
      "Surround Sound Mixing for Films",
    ],
  },
  {
    link: "/mumbai/music-production-course",
    bgImage: dmpDesktop,
    icon: dmpMobile,
    title: "DMP",
    subtitle: "Diploma in Music Production",
    data: [
      "Music Theory and Composition",
      "History and Development of Genres ",
      "Audio Editing",
      "Digital Audio Workstation ",
      "Wave Theory and Wave Synthesis  ",
      "Use of Virtual Instruments ",
      "Surround 5.1 Production Workflows",
      "Composing Scores for Film and Orchestras",
      "Arranging Ableton sets for Live Shows",
    ],
  },
  {
    link: "/courses/caap",
    bgImage: acppDesktop,
    icon: acppMobile,
    title: "CAAP",
    subtitle: "Certificate in Advanced Audio Production",
    data: [
      "Advanced ADR Techniques",
      "OTT Workflow",
      "Loudness Standards",
      "Advanced Audio Editing",
      "Dolby Atmos Workflow",
      "Designing and Mixing with Dolby Atmos",
      "Audio Delivery",
      "Game Audio",
      "Game Middleware Engines",
      "Virtual Reality",
      "Ambisonics",
      "Film Mixing",
    ],
  },
  {
    link: "/courses/acmp",
    bgImage: acmpDesktop,
    icon: acmpMobile,
    title: "CAMP",
    subtitle: "Certificate in Advanced Music Production",
    data: [
      "Advanced Music Theory and Composition",
      "Orchestral arrangement",
      "Vocal and Harmony Production",
      "Advanced use of DAW’s",
      "Synthesis",
      "Advanced use of Virtual Instruments",
      "Surround Sound Production Techniques",
      "Scoring for Films and Jingles",
    ],
  }, {
    link: "/courses/live-sound-reinforcement",
    bgImage: CSRDesktop,
    icon: CSRMobile,
    title: "CLS",
    subtitle: "Certificate in Live Sound",
    data: [
      "Digital Console Operations - Basics and Advanced",
      "Microphones and Miking Techniques",
      "Amplifiers and Loudspeakers",
      "System designing and integration",
      "System tuning and feedback management",
      "Radio Frequency Management",
      "Stage management",
      "Stage Electrical and Electronics",
    ],
  },
];

export const homeSliderData = [
  {
    h1: "Learn  on the  gig.",
    lorem: "We Have a Course",
    lorem2: "Enroll Now!",
    b1: "Know More",
    b2: "Apply Now!",
    mobileImage: MobileGig,
    desktopImage: DesktopGig,
    additionalClass: "text-shadow",
    text2class: "text-shadow",
    text3class: "text-shadow",
    buttonClass: "",
    knowButtonLink: "courses/acmp"
  },
  {
    h1: "Pro Audio <br/> simplified.",
    additionalClass: "text-theme text-shadow",
    text2class: "text-shadow",
    text3class: "text-shadow",
    lorem: "We Have a Course",
    lorem2: "Enroll Now!",
    b1: "Know More",
    b2: "Apply Now!",
    mobileImage: MobilePassion,
    desktopImage: DesktopPassion,
    buttonClass: "",
    knowButtonLink: "mumbai/sound-engineering-course"
  },
  {
    h1: "Music Production <br/> The Right Way.",
    lorem: "We Have a Course",
    lorem2: "Enroll Now!",
    text2class: "text-shadow",
    text3class: "text-shadow",
    b1: "Know More",
    b2: "Apply Now!",
    mobileImage: MobileRight,
    desktopImage: DesktopRight,
    additionalClass: "text-shadow",
    buttonClass: "",
    knowButtonLink: "mumbai/music-production-course"
  },
];

export const testimonials = [
  {
    name: "Shubham Satish",
    message: "DSE Batch 03 | Sound Engineering",
    videoId: '5g3Sos9IZrI',
    image: 'https://i3.ytimg.com/vi/5g3Sos9IZrI/maxresdefault.jpg'
  },
  {
    name: "Aryan Sharma",
    message: "DSE Batch 03 | Sound Engineering",
    videoId: 'oAxkHkV5rQo',
    image: 'https://i3.ytimg.com/vi/oAxkHkV5rQo/maxresdefault.jpg'
  },
  {
    name: "Pritam Senapati",
    message: " DMP Batch 01 | Music Production",
    videoId: 'pqNg9YUKExo',
    image: 'https://i3.ytimg.com/vi/pqNg9YUKExo/maxresdefault.jpg'
  }
];

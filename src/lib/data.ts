import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/hnnq.dev/",
    icon: Instagram,
  },
  { name: "Github", href: "https://github.com/NhatHONGUYEN", icon: Github },
  { name: "Twitter", href: "https://x.com/Nhatflix_", icon: Twitter },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nhat-quan-ho-nguyen/",
    icon: Linkedin,
  },
];

export const sections = [
  {
    title: "Anime",
    links: [
      { name: "All", href: "/all" },
      { name: "Upcoming", href: "/upcoming" },
      { name: "Popularity", href: "/bypopularity" },
      { name: "Favorite", href: "/favorite" },
    ],
  },
  {
    title: "Social",
    links: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/hnnq.dev/",
        icon: Instagram,
      },
      { name: "Github", href: "https://github.com/NhatHONGUYEN", icon: Github },
      { name: "Twitter", href: "https://x.com/Nhatflix_", icon: Twitter },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/nhat-quan-ho-nguyen/",
        icon: Linkedin,
      },
    ],
  },
];

export const avatars = [
  {
    src: "https://bumbeishvili.github.io/avatars/avatars/portrait9.png",
    fallback: "Avatar 1",
    alt: "User Avatar 1",
  },
  {
    src: "https://bumbeishvili.github.io/avatars/avatars/portrait74.png",
    fallback: "Avatar 2",
    alt: "User Avatar 2",
  },
  {
    src: "https://avatars.githubusercontent.com/u/59228569",
    fallback: "Avatar 3",
    alt: "User Avatar 3",
  },
];

export const ANIME_THUMBNAILS = [
  {
    title: "Dan1",
    thumbnail: "/gif/dandan (1).gif",
  },
  {
    title: "Dan2",
    thumbnail: "/gif/dandan (2).gif",
  },
  {
    title: "Dan3",
    thumbnail: "/gif/dandan (3).gif",
  },
  {
    title: "Dan4",
    thumbnail: "/gif/dandan (4).gif",
  },
  {
    title: "Dan5",
    thumbnail: "/gif/dandan (1).gif",
  },
  {
    title: "Dan6",
    thumbnail: "/gif/dandan (2).gif",
  },
  {
    title: "Dan7",
    thumbnail: "/gif/dandan (3).gif",
  },
  {
    title: "Dan8",
    thumbnail: "/gif/dandan (4).gif",
  },
];

export const FaqItems = [
  {
    question: "Why use a FAQ?",
    answer: "Because I just want to have a little chat with you.",
  },
  {
    question: "Why did I start this project?",
    answer:
      "I really love watching anime, and I'm particularly fascinated by animation, like the latest season of One Piece or Attack on Titan. They inspired me to start this project.",
  },
  {
    question: "Which stack do I use?",
    answer:
      "Next.js, Tailwind CSS, TypeScript, Vercel, TanStack Query, Prisma, PostgreSQL, Auth.js, Zustand, and Motion. And for the database, I use the API from Jikan API. Thanks to all the creators of these amazing tools!",
  },
  {
    question: "Do you appreciate the project?",
    answer:
      "At first, I never expected this project to go so far, which is why my Git repository isn't very well organized. But I really want to improve it. It has been an amazing experience to learn this stack. So if you like this project, just share it with others and help me land a job!",
  },
];

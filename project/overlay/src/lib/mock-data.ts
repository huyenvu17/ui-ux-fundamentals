// Mock data for scaffolding. Replace with a real API later.
// All numbers below (XP, likes, entries, streaks) are illustrative sample data.

export interface Designer {
  name: string;
  handle: string;
  avatar: string;
  level: string;
}

export interface Shot {
  id: string;
  title: string;
  author: Designer;
  image: string;
  likes: number;
  comments: number;
  match: number;
  challenge: string;
}

export interface Challenge {
  id: string;
  title: string;
  mode: "Figma" | "Code";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  xp: number;
  daysLeft: number;
  entries: number;
  image: string;
}

const avatar = (seed: string) =>
  `https://api.dicebear.com/9.x/thumbs/svg?seed=${seed}`;

export const designers: Record<string, Designer> = {
  mina: { name: "Mina Okafor", handle: "@minadraws", avatar: avatar("Mina"), level: "Lv 6" },
  theo: { name: "Theo Lindqvist", handle: "@theol", avatar: avatar("Theo"), level: "Lv 4" },
  june: { name: "June Park", handle: "@junepixels", avatar: avatar("June"), level: "Lv 8" },
  rafael: { name: "Rafael Duarte", handle: "@rafaduarte", avatar: avatar("Rafael"), level: "Lv 5" },
  noor: { name: "Noor Haddad", handle: "@noorh", avatar: avatar("Noor"), level: "Lv 7" },
  kiki: { name: "Kiki Tanaka", handle: "@kikicode", avatar: avatar("Kiki"), level: "Lv 3" },
  piotr: { name: "Piotr Nowak", handle: "@piotrnowak", avatar: avatar("Piotr"), level: "Lv 5" },
  ada: { name: "Ada Umeh", handle: "@adaumeh", avatar: avatar("Ada"), level: "Lv 9" },
};

export const shots: Shot[] = [
  {
    id: "music-card",
    title: "Music player card, third attempt",
    author: designers.mina,
    image: "https://picsum.photos/seed/overlay-music-app/640/460",
    likes: 214,
    comments: 31,
    match: 87,
    challenge: "Recreate: music player card",
  },
  {
    id: "fintech-dark",
    title: "Dark fintech dashboard",
    author: designers.theo,
    image: "https://picsum.photos/seed/overlay-fintech-dark/640/460",
    likes: 342,
    comments: 48,
    match: 92,
    challenge: "Recreate: fintech dashboard",
  },
  {
    id: "onboarding",
    title: "Onboarding flow, all three screens",
    author: designers.june,
    image: "https://picsum.photos/seed/overlay-onboarding/640/460",
    likes: 186,
    comments: 22,
    match: 78,
    challenge: "Recreate: onboarding flow",
  },
  {
    id: "pricing-code",
    title: "Pricing section in Tailwind",
    author: designers.rafael,
    image: "https://picsum.photos/seed/overlay-pricing/640/460",
    likes: 158,
    comments: 19,
    match: 84,
    challenge: "Code this: pricing section",
  },
  {
    id: "astronaut-404",
    title: "404 page with a lost astronaut",
    author: designers.noor,
    image: "https://picsum.photos/seed/overlay-404-space/640/460",
    likes: 427,
    comments: 56,
    match: 91,
    challenge: "Recreate: 404 with personality",
  },
  {
    id: "glass-nav",
    title: "Glass nav bar, hand-coded",
    author: designers.kiki,
    image: "https://picsum.photos/seed/overlay-glass-nav/640/460",
    likes: 121,
    comments: 14,
    match: 73,
    challenge: "Code this: glass nav bar",
  },
  {
    id: "recipe-app",
    title: "Recipe app home screen",
    author: designers.piotr,
    image: "https://picsum.photos/seed/overlay-recipe/640/460",
    likes: 173,
    comments: 27,
    match: 88,
    challenge: "Recreate: recipe app home",
  },
  {
    id: "settings-study",
    title: "Settings page spacing study",
    author: designers.ada,
    image: "https://picsum.photos/seed/overlay-settings/640/460",
    likes: 265,
    comments: 35,
    match: 95,
    challenge: "Recreate: settings page",
  },
];

export const challenges: Challenge[] = [
  {
    id: "ch-music",
    title: "Recreate: music player card",
    mode: "Figma",
    difficulty: "Beginner",
    xp: 40,
    daysLeft: 3,
    entries: 412,
    image: "https://picsum.photos/seed/overlay-ch-music/720/480",
  },
  {
    id: "ch-fintech",
    title: "Recreate: fintech dashboard in dark mode",
    mode: "Figma",
    difficulty: "Intermediate",
    xp: 90,
    daysLeft: 5,
    entries: 238,
    image: "https://picsum.photos/seed/overlay-ch-fintech/720/480",
  },
  {
    id: "ch-onboarding",
    title: "Recreate: onboarding flow, three screens",
    mode: "Figma",
    difficulty: "Advanced",
    xp: 140,
    daysLeft: 6,
    entries: 96,
    image: "https://picsum.photos/seed/overlay-ch-onboarding/720/480",
  },
  {
    id: "ch-pricing",
    title: "Code this: pricing section",
    mode: "Code",
    difficulty: "Intermediate",
    xp: 100,
    daysLeft: 4,
    entries: 187,
    image: "https://picsum.photos/seed/overlay-ch-pricing/720/480",
  },
  {
    id: "ch-404",
    title: "Recreate: 404 page with personality",
    mode: "Figma",
    difficulty: "Beginner",
    xp: 50,
    daysLeft: 2,
    entries: 365,
    image: "https://picsum.photos/seed/overlay-ch-404/720/480",
  },
  {
    id: "ch-glass",
    title: "Code this: glassmorphic nav bar",
    mode: "Code",
    difficulty: "Advanced",
    xp: 130,
    daysLeft: 7,
    entries: 74,
    image: "https://picsum.photos/seed/overlay-ch-glass/720/480",
  },
];

export const dailyChallenge: Challenge = {
  id: "daily-toggle",
  title: "Recreate: settings toggle row",
  mode: "Figma",
  difficulty: "Beginner",
  xp: 25,
  daysLeft: 0,
  entries: 512,
  image: "https://picsum.photos/seed/overlay-daily/720/480",
};

export const leaderboard: { designer: Designer; xp: number }[] = [
  { designer: designers.ada, xp: 1240 },
  { designer: designers.noor, xp: 1105 },
  { designer: designers.june, xp: 987 },
  { designer: designers.mina, xp: 861 },
  { designer: designers.theo, xp: 743 },
];

export const suggested: Designer[] = [
  designers.kiki,
  designers.piotr,
  designers.rafael,
];

export const streakDays = 7;

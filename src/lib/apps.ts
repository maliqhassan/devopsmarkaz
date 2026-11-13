import {
  Bell,
  Bot,
  BookOpen,
  CalendarClock,
  Camera,
  ChartColumn,
  ChartPie,
  Coins,
  FileSpreadsheet,
  GraduationCap,
  Hourglass,
  Languages,
  Lock,
  MessagesSquare,
  Mic,
  PiggyBank,
  Receipt,
  ShieldCheck,
  Timer,
  Wallet,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

export type AppPage = {
  /** Matches the project slug in site.ts and the /apps/[slug] route. */
  slug: string;
  name: string;
  /** Hero headline, split so the second part can be highlighted. */
  headline: [string, string];
  summary: string;
  category: string;
  /** App brand color used for highlights on its page. */
  accent: string;
  icon: string;
  playUrl: string;
  screens: string[];
  highlights: { value: string; label: string }[];
  features: { icon: LucideIcon; title: string; text: string }[];
  steps: { title: string; text: string }[];
  plans: { name: string; note: string; items: string[]; featured?: boolean }[];
  privacy: { title: string; text: string };
  faqs: { q: string; a: string }[];
};

const screens = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/apps/${slug}/screen-${i + 1}.png`);

export const apps: AppPage[] = [
  {
    slug: "translita",
    name: "Translita Offline Translator",
    headline: ["Say it in", "any language."],
    summary:
      "An offline translator and language-learning app in one. Translate text, voice, photos and conversations in 85+ languages — or learn to speak one with Fabalita, your AI language coach.",
    category: "Education · Translation",
    accent: "#22c3e6",
    icon: "/projects/apps/translita-icon.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.translita.app",
    screens: screens("translita", 5),
    highlights: [
      { value: "85+", label: "Languages online" },
      { value: "50+", label: "Languages offline" },
      { value: "60-day", label: "AI language course" },
      { value: "Free", label: "Full translator" },
    ],
    features: [
      {
        icon: WifiOff,
        title: "Offline translator",
        text: "Download language packs and translate without Wi-Fi or mobile data — perfect for flights, travel and roaming.",
      },
      {
        icon: Mic,
        title: "Voice translator",
        text: "Speak instead of typing, and hear every translation read aloud with text to speech.",
      },
      {
        icon: Camera,
        title: "Camera translator",
        text: "Point your camera at signs, menus, labels and printed pages. Text is recognised on your device, then translated.",
      },
      {
        icon: MessagesSquare,
        title: "Conversation mode",
        text: "Talk face to face with two microphones, one for each person — Translita translates both sides.",
      },
      {
        icon: GraduationCap,
        title: "Fabalita AI coach",
        text: "A 60-day course from beginner (A1) to everyday conversations (A2) in about 10 minutes a day.",
      },
      {
        icon: Bot,
        title: "AI speaking practice",
        text: "Chat with a friendly AI partner in real situations — a café, a hotel, the airport — with gentle corrections.",
      },
      {
        icon: Languages,
        title: "Text translator",
        text: "Type or paste text, detect the language automatically, swap in one tap, then copy, share or listen.",
      },
      {
        icon: BookOpen,
        title: "Phrasebook & history",
        text: "Ready-made travel phrases, searchable history and favourites, with large text, flags and dark mode.",
      },
    ],
    steps: [
      { title: "Pick your languages", text: "Choose from 85+ languages, or let Translita detect the language for you." },
      { title: "Download for offline", text: "Save both languages of a pair once and translate anywhere, signal or not." },
      { title: "Type, speak or snap", text: "Translate text, voice, photos or a live conversation — then learn with Fabalita." },
    ],
    plans: [
      { name: "Free", note: "Forever", items: ["The full translator", "Offline language packs", "Voice, camera & conversation", "Supported by ads"] },
      { name: "Translita Pro", note: "Monthly or yearly", items: ["Everything in Free", "Ad-free translator", "Low monthly or yearly price"] },
      {
        name: "Fabalita Elite",
        note: "Learn a language",
        featured: true,
        items: ["Every Fabalita course & AI coaching", "German, French, Spanish, Italian, Portuguese & Swedish", "Certificate after the final exam", "Ad-free translator included"],
      },
    ],
    privacy: {
      title: "Translations that stay on your phone",
      text: "Offline translations and camera text recognition happen entirely on your device. Online translations send only the text you translate, and AI lessons send only what you write or say in them.",
    },
    faqs: [
      { q: "Does Translita work without internet?", a: "Yes. Download language packs and translate offline in 50+ languages with no Wi-Fi or mobile data at all. Online, Translita covers 85+ languages." },
      { q: "What is Fabalita?", a: "Fabalita is Translita's AI language coach: a 60-day course that takes you from complete beginner (A1) to everyday conversations (A2) in German, French, Spanish, Italian, Brazilian Portuguese or Swedish. Day 1 of every course is free." },
      { q: "Can it translate a conversation?", a: "Yes. Conversation mode gives each person their own microphone and translates both sides. Conversations are saved so you can carry on later or clear them anytime." },
      { q: "Is Translita free?", a: "The full translator is free with ads. Translita Pro removes ads, and Fabalita Elite adds every course and AI coaching. You can cancel anytime in Google Play." },
    ],
  },
  {
    slug: "unbreakable",
    name: "Unbreakable — App Blocker & Focus",
    headline: ["Your phone.", "Your limits."],
    summary:
      "Pick the apps that pull you away, choose how long to block them, and get on with your day. When you open a blocked app, you get a calm reminder instead of the feed.",
    category: "Productivity · Digital Wellbeing",
    accent: "#9fd8ad",
    icon: "/projects/apps/unbreakable-icon.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.unbreakablelock.app",
    screens: screens("unbreakable", 6),
    highlights: [
      { value: "1 tap", label: "To lock distractions" },
      { value: "100%", label: "Data stays on your phone" },
      { value: "0", label: "Accounts required" },
      { value: "Free", label: "To get started" },
    ],
    features: [
      {
        icon: Timer,
        title: "Lock timer",
        text: "Block an app for fifteen minutes or eight hours. The countdown runs from a real clock, so restarting won't end it early.",
      },
      {
        icon: Hourglass,
        title: "Daily limits",
        text: "Give an app fifteen minutes a day. Once the allowance is gone it locks itself, and everything resets at midnight.",
      },
      {
        icon: Lock,
        title: "Strict Mode",
        text: "No cancel button, on purpose. Turn it on and there's no extra minute or snooze to talk yourself into.",
      },
      {
        icon: ChartColumn,
        title: "Screen time report",
        text: "See your day hour by hour, grouped into social, entertainment and productivity, plus your most-used apps.",
      },
      {
        icon: CalendarClock,
        title: "Schedules",
        text: "Block social apps on weeknights or during work hours automatically. Schedules survive a restart.",
      },
      {
        icon: ShieldCheck,
        title: "Honest by design",
        text: "No hidden services or accessibility tricks. If Android ever stops a lock, Unbreakable tells you plainly.",
      },
    ],
    steps: [
      { title: "Pick the apps", text: "Choose the apps that steal your day — it takes about 30 seconds." },
      { title: "Set a timer, limit or schedule", text: "Lock them now, cap them daily, or block them on a schedule." },
      { title: "Stay focused", text: "Open a blocked app and get a calm reminder instead of the feed." },
    ],
    plans: [
      { name: "Free", note: "Forever", items: ["One protected app", "Any timer length", "Daily usage limits", "Screen time report", "Supported by ads"] },
      {
        name: "Pro",
        note: "Unlock everything",
        featured: true,
        items: ["Unlimited apps", "Recurring schedules", "Strict Mode", "No ads", "Subscription follows you to a new phone"],
      },
    ],
    privacy: {
      title: "Your habits never leave your phone",
      text: "Blocked apps, schedules, limits and usage figures stay on your device. No account required, no analytics, no tracking — and no server of ours for your data to go to. Usage Access reads app names and times only, never your screen contents or messages.",
    },
    faqs: [
      { q: "Can I end a lock early?", a: "Outside Strict Mode you can take one more minute, a short snooze or the rest of the day. With Strict Mode on, there's no way out until the timer ends — that's the point." },
      { q: "Does Unbreakable read my messages?", a: "No. Usage Access only tells the app which app is in front of you and how long you use it. It never sees your screen contents, messages or anything inside your apps." },
      { q: "Do I need an account?", a: "No. Signing in is optional and only exists so a Pro subscription follows you to a new phone." },
      { q: "Why does it ask for Autostart on some phones?", a: "Some manufacturers' battery managers stop background apps. Unbreakable shows you where the Autostart setting is so your locks keep running." },
    ],
  },
  {
    slug: "money-manager",
    name: "Money Manager: Expense Tracker",
    headline: ["Find where your", "money goes."],
    summary:
      "A simple expense tracker and budget planner that helps you see where your money goes, stay on budget and save for what matters. No bank login, no account — start tracking in under a minute.",
    category: "Finance · Budgeting",
    accent: "#2bb7c2",
    icon: "/projects/apps/moneymanager-icon.png",
    playUrl: "https://play.google.com/store/apps/details?id=com.expensemanage.app",
    screens: screens("money-manager", 6),
    highlights: [
      { value: "< 1 min", label: "To start tracking" },
      { value: "90+", label: "Currencies" },
      { value: "100%", label: "Works offline" },
      { value: "0", label: "Bank logins, ever" },
    ],
    features: [
      {
        icon: Receipt,
        title: "Track expenses & income",
        text: "Add a transaction in a few taps with category, account, note and date. Split payments and attach receipt photos.",
      },
      {
        icon: ChartPie,
        title: "Budget planner",
        text: "Set monthly budgets by category, see what's left to spend and spot overspending before the month ends.",
      },
      {
        icon: Wallet,
        title: "Accounts & balances",
        text: "Cash, bank accounts, credit cards and wallets in one place, with your total balance and each account's history.",
      },
      {
        icon: Bell,
        title: "Bills & reminders",
        text: "Add rent, subscriptions and loans once. Recurring payments are logged on schedule, with reminders before they're due.",
      },
      {
        icon: PiggyBank,
        title: "Savings goals",
        text: "Save for a holiday, an emergency fund or a new phone, and see how close you are.",
      },
      {
        icon: ChartColumn,
        title: "Reports & insights",
        text: "Spending by category and merchant, monthly comparisons and your real savings rate.",
      },
      {
        icon: Coins,
        title: "Multi-currency",
        text: "Pick from 90+ currencies and record spending abroad, with automatic or custom exchange rates.",
      },
      {
        icon: FileSpreadsheet,
        title: "CSV import & export",
        text: "Import your bank's CSV statement with a preview first, and export all your data at any time.",
      },
    ],
    steps: [
      { title: "Add your accounts", text: "Cash, bank, cards and wallets — no bank login or sign-up needed." },
      { title: "Log spending in seconds", text: "Add expenses as they happen, or let recurring bills log themselves." },
      { title: "Budget and save", text: "Set budgets and goals, then watch your trends and savings rate improve." },
    ],
    plans: [
      { name: "Free", note: "Forever", items: ["Every budgeting & tracking feature", "Works fully offline", "CSV import & export", "Supported by ads"] },
      {
        name: "MoneyManager Pro",
        note: "Monthly or yearly",
        featured: true,
        items: ["Everything in Free", "Sign in with Google", "Back up & sync across devices", "No ads"],
      },
    ],
    privacy: {
      title: "Your money data stays yours",
      text: "MoneyManager works fully offline and stores your data on your phone, not in the cloud, unless you choose to sync. No bank connection and no bank passwords — ever.",
    },
    faqs: [
      { q: "Do I need to connect my bank?", a: "No. MoneyManager never asks for a bank connection or bank password. You can import your bank's CSV statement if you want to bring in past transactions." },
      { q: "Does it work offline?", a: "Yes. Everything works without internet, and your data is stored on your phone unless you choose to sync with Pro." },
      { q: "Can I track spending in other currencies?", a: "Yes. Choose your main currency from 90+ options and record spending in others, with exchange rates updated automatically or entered by you." },
      { q: "What does Pro add?", a: "Pro lets you sign in with Google to back up and sync across devices, and removes ads. Every budgeting and tracking feature stays free." },
    ],
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

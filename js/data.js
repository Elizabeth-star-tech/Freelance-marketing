const projects = [
    
  {
    id: 1,
    title: "E-commerce Website for a Clothing Brand",
    category: "Web Development",
    budgetMin: 800,
    budgetMax: 1500,
    description: "We need a responsive online store with product pages, a cart and checkout. Clean, modern design that matches our brand.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    deadline: "2026-12-15",
    client: "Urban Threads Ltd",
    status: "Open"
  },
  {
    id: 2,
    title: "Logo and Brand Identity Design",
    category: "Graphic Design",
    budgetMin: 200,
    budgetMax: 450,
    description: "Looking for a creative designer to build a logo, colour palette and brand guidelines for a new coffee shop.",
    skills: ["Illustrator", "Branding", "Photoshop"],
    deadline: "2026-11-30",
    client: "Bean & Brew Cafe",
    status: "Open"
  },
  {
    id: 3,
    title: "Blog Articles on Personal Finance",
    category: "Content Writing",
    budgetMin: 100,
    budgetMax: 300,
    description: "Ten SEO-friendly articles (800 words each) on budgeting, saving and investing for young adults.",
    skills: ["Copywriting", "SEO", "Research"],
    deadline: "2026-12-05",
    client: "MoneyWise Media",
    status: "In Progress"
  },
  {
    id: 4,
    title: "Social Media Marketing Campaign",
    category: "Digital Marketing",
    budgetMin: 400,
    budgetMax: 900,
    description: "Plan and run a one-month Instagram and TikTok campaign to launch our new skincare line.",
    skills: ["Social Media", "Content Strategy", "Analytics"],
    deadline: "2026-12-20",
    client: "Glow Naturals",
    status: "Open"
  },
  {
    id: 5,
    title: "Food Ordering Mobile App",
    category: "Mobile Apps",
    budgetMin: 1500,
    budgetMax: 3000,
    description: "Build a cross-platform mobile app that lets customers browse menus and place orders from local restaurants.",
    skills: ["React Native", "Firebase", "UI/UX"],
    deadline: "2027-01-20",
    client: "QuickBite Co",
    status: "Open"
  },
  {
    id: 6,
    title: "YouTube Video Editing Package",
    category: "Video Editing",
    budgetMin: 150,
    budgetMax: 400,
    description: "Edit 8 travel vlogs with transitions, subtitles, colour grading and background music.",
    skills: ["Premiere Pro", "After Effects", "Colour Grading"],
    deadline: "2026-12-10",
    client: "Wanderlust Stories",
    status: "Completed"
  },
  {
    id: 7,
    title: "School Management Dashboard",
    category: "Web Development",
    budgetMin: 1000,
    budgetMax: 2000,
    description: "An admin dashboard to manage students, teachers, classes and fee payments.",
    skills: ["JavaScript", "Python", "SQL"],
    deadline: "2027-01-10",
    client: "Bright Future Academy",
    status: "Open"
  },
  {
    id: 8,
    title: "Product Packaging and Poster Design",
    category: "Graphic Design",
    budgetMin: 250,
    budgetMax: 500,
    description: "Design packaging labels and three promotional posters for a line of organic honey products.",
    skills: ["Photoshop", "InDesign", "Packaging"],
    deadline: "2026-12-18",
    client: "Golden Hive",
    status: "In Progress"
  }
];
const freelancers = [
  {
    id: 1,
    name: "Amina Hassan",
    title: "Full-Stack Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    level: "Expert",
    rating: 4.9,
    reviews: 42,
    bio: "I build fast, responsive websites and web apps for startups and small businesses, with 6 years of experience.",
    image: "https://i.pravatar.cc/150?img=47",
    portfolio: ["Online Store Redesign", "Booking Platform", "Company Website"]
  },
  {
    id: 2,
    name: "Brian Otieno",
    title: "Graphic and Brand Designer",
    skills: ["Illustrator", "Photoshop", "Branding"],
    level: "Intermediate",
    rating: 4.7,
    reviews: 28,
    bio: "Creative designer who turns ideas into memorable logos and brand identities.",
    image: "https://i.pravatar.cc/150?img=12",
    portfolio: ["Cafe Brand Kit", "Event Posters", "Packaging Series"]
  },
  {
    id: 3,
    name: "Grace Wanjiru",
    title: "Content Writer and SEO Specialist",
    skills: ["Copywriting", "SEO", "Research"],
    level: "Expert",
    rating: 4.8,
    reviews: 35,
    bio: "I write clear, engaging articles that rank on Google and keep readers coming back.",
    image: "https://i.pravatar.cc/150?img=45",
    portfolio: ["Finance Blog Series", "Product Descriptions", "Website Copy"]
  },
  {
    id: 4,
    name: "Daniel Kimani",
    title: "Mobile App Developer",
    skills: ["React Native", "Firebase", "UI/UX"],
    level: "Intermediate",
    rating: 4.6,
    reviews: 19,
    bio: "I design and build smooth cross-platform mobile apps for Android and iOS.",
    image: "https://i.pravatar.cc/150?img=33",
    portfolio: ["Delivery App", "Fitness Tracker", "Learning App"]
  },
  {
    id: 5,
    name: "Faith Achieng",
    title: "Social Media Marketer",
    skills: ["Social Media", "Content Strategy", "Analytics"],
    level: "Beginner",
    rating: 4.4,
    reviews: 11,
    bio: "Passionate about growing small brands online through creative campaigns.",
    image: "https://i.pravatar.cc/150?img=49",
    portfolio: ["Skincare Launch", "Restaurant Campaign"]
  },
  {
    id: 6,
    name: "Kevin Mutua",
    title: "Video Editor and Motion Designer",
    skills: ["Premiere Pro", "After Effects", "Colour Grading"],
    level: "Expert",
    rating: 4.9,
    reviews: 51,
    bio: "I edit videos that look cinematic, from YouTube channels to brand commercials.",
    image: "https://i.pravatar.cc/150?img=15",
    portfolio: ["Travel Vlog Series", "Brand Commercial", "Music Video"]
  }
];
const currentUser = {
  name: "Alex Johnson",
  role: "Client and Freelancer",
  email: "alex.johnson@email.com",
  location: "Remote",
  memberSince: "October 2026",
  bio: "I post projects for my small business and take on freelance web design work in my spare time.",
  image: "https://i.pravatar.cc/150?img=5"
};
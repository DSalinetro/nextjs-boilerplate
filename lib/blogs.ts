// lib/blogs.ts
export type BlogCard = {
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  link: string;   // Medium URL or site shortlink like /gaza-children
  image: string;  // Imgur or /images/...
};

export const BLOGS = [
  {
    title: "Silent Depression and Loneliness: What We Don’t Always See",
    excerpt: "Exploring the unseen battles of loneliness and silent depression, and how empathy helps us connect with those who feel invisible.",
    readTime: "6 min read",
    date: "October 2025",
    link: "https://medium.com/@dsalinetro/silent-depression-and-loneliness-what-we-dont-always-see-f87d07afb5e8",
    image: "https://imgur.com/lCKxZhF.png", // update with your chosen image
  },
  {
    title: "Gaza’s Children and the Hunger Humanity Must End",
    excerpt: "Why empathy must translate into immediate action for children facing hunger and trauma.",
    readTime: "6 min read",
    date: "September 2025",
    link: "/gaza-children", // already shortlinked
    image: "https://i.imgur.com/7WiZ7HW.png",
  },
  {
    title: "When Childhood is Interrupted: A Crisis We Can’t Ignore",
    excerpt: "A child’s coloring book in rubble becomes a haunting reminder of innocence lost to conflict and crisis.",
    readTime: "9 min read",
    date: "September 2025",
    link: "https://medium.com/@dsalinetro/when-childhood-is-interrupted-a-crisis-we-cant-ignore-87c39b1a65bf",
    image: "https://imgur.com/j8pqMrx.png",
  },
  {
    title: "The Invisible Walls That Separate People from Access and Belonging",
    excerpt: "How unseen barriers in design quietly exclude users—and what we can do to remove them.",
    readTime: "7 min read",
    date: "September 2025",
    link: "https://medium.com/@dsalinetro/a-surreal-glass-like-barrier-with-cracks-symbolizing-the-invisible-walls-that-separate-people-from-d2a582f6707e",
    image: "https://imgur.com/SPlMkgL.png",
  },
  {
    title: "The Empathy Audit: How to Evaluate Your Design’s Human Impact",
    excerpt: "A practical framework for testing whether your design truly prioritizes compassion and inclusion.",
    readTime: "11 min read",
    date: "August 2025",
    link: "https://medium.com/@dsalinetro/the-empathy-audit-how-to-evaluate-your-designs-human-impact-267dc8af1bf5",
    image: "https://imgur.com/J16isks.png",
  },
  {
    title: "Designing for Mental Health: A Toolkit for Compassionate Creativity",
    excerpt: "Practical ways to create calm, supportive design environments that respect mental health.",
    readTime: "7 min read",
    date: "August 2025",
    link: "https://medium.com/@dsalinetro/designing-for-mental-health-a-toolkit-for-compassionate-creativity-5b727955a802",
    image: "https://imgur.com/NTuGg3J.png",
  },
  {
    title: "Beyond “Why Didn’t They Just Leave?”: How Design Can Change the Conversation",
    excerpt: "Design can shift harmful narratives around domestic abuse and provide new avenues of empathy.",
    readTime: "8 min read",
    date: "August 2025",
    link: "https://medium.com/@dsalinetro/beyond-why-didnt-they-just-leave-how-design-can-change-the-conversation-31ac8881fe14",
    image: "https://imgur.com/BNcsAzB.png",
  },
  {
    title: "Every Child Deserves a Fair Start: Turning Awareness into Action",
    excerpt: "Bringing visibility to the silent struggles of disadvantaged children and the need for fair opportunities.",
    readTime: "3 min read",
    date: "August 2025",
    link: "https://medium.com/@dsalinetro/every-child-deserves-a-fair-start-turning-awareness-into-action-2ac7a73f7393",
    image: "https://imgur.com/kwxj0S3.png",
  },
  {
    title: "Designing With Empathy: My Creative Journey",
    excerpt: "Reflections on my personal path as a designer and why empathy remains at the core of my creative process.",
    readTime: "4 min read",
    date: "August 2025",
    link: "https://medium.com/@dsalinetro/designing-with-empathy-my-creative-journey-ebc6ad12ceb5",
    image: "https://imgur.com/Bh5K9tK/png",
  },
];

const CATEGORIES = [
  { name: "Daily", catslug: "daily" },
  { name: "Weekly", catslug: "weekly" },
  { name: "Monthly", catslug: "monthly" },
];

const POSTS = [
  {
    title: "A Day in My Parlour: The Delights of a Victorian Childhood",
    slug: "victorian-parlour-delights",
    content:
      "Greetings, dear readers! Join me for a glimpse into the enchanting world of my parlour, where I spend my days immersed in delightful pastimes. From intricate dollhouses to the wonders of paper dolls, this entry explores the simple joys that fill my Victorian childhood.",
    category: "daily",
  },
  {
    title: "Adventures in the Garden: Tales of Frolicking Amongst Blooms",
    slug: "victorian-garden-adventures",
    content:
      "In this entry, I share my adventures in the family garden, where the fragrant roses and vibrant daisies beckon me to play. From games of hide-and-seek amongst the shrubbery to the wonders of tending to my very own corner of the garden, life outdoors in the Victorian era holds a special charm.",
    category: "weekly",
  },
  {
    title: "Afternoon Tea: A Ritual of Elegance and Etiquette",
    slug: "victorian-afternoon-tea",
    content:
      "Step into the drawing-room with me as I recount the grace and decorum of our afternoon tea rituals. From delicate teacups to the intricacies of polite conversation, this entry provides a glimpse into the refined social customs of a Victorian childhood.",
    category: "monthly",
  },
  {
    title:
      "Lessons in Etiquette: Navigating the Social Graces of Victorian Youth",
    slug: "victorian-etiquette-lessons",
    content:
      "Join me as I reflect on the lessons in etiquette bestowed upon me by my governess. From the proper curtsy to the art of letter writing, this entry explores the importance of refined manners in the upbringing of a Victorian child.",
    category: "daily",
  },
  {
    title:
      "A Wardrobe of Whimsy: The Charms of Victorian Fashion for Little Ones",
    slug: "victorian-fashion-charms",
    content:
      "Delve into the enchanting world of children's fashion in the Victorian era, where frilly dresses and dapper suits adorn young ones like myself. I share tales of dressing up for special occasions and the joy that comes with twirling in layers of lace and silk.",
    category: "weekly",
  },
  {
    title: "A Tale by Candlelight: Evenings of Storytelling and Wonder",
    slug: "victorian-candlelight-tale",
    content:
      "As the sun sets and the gas lamps cast a warm glow, gather 'round for evenings of storytelling and wonder. In this entry, I recount the tales spun by flickering candlelight, from fairy tales to adventures of gallant heroes, transporting us to magical realms beyond the confines of our Victorian home.",
    category: "monthly",
  },
];

export function getPosts() {
  return POSTS;
}

export function getPostsBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategories() {
  return CATEGORIES;
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}

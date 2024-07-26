const blogPosts = [
  {
    id: "blog-1",
    author: "Shane",
    date: "26/8/24",
    title: "The GQL Revolution",
    body: "Info goes here",
    techStack: ["Next.js", "GraphQL", "Vercel", "Heroku"],
  },
  {
    id: "blog-2",
    author: "Soft Touch",
    date: "26/8/24",
    title: "The GQL Invasion",
    body: "Info goes here, or does it",
    techStack: ["Next.js", "GraphQL", "Vercel", "Heroku"],
  },
];

const resolvers = {
  Query: {
    blogPost: (_, { id }, __) => blogPosts.find((posts) => posts.id === id),
    blogs: () => blogPosts,
  },
};

module.exports = resolvers;

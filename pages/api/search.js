// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPosts } from 'lib';

export default (req, res) => {
  let posts;

  if (process.env.NODE_ENV === 'production') {
    // @TODO - cache posts
  } else {
    posts = getPosts();
  }
  const results = posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().indexOf(req.query.q) !== -1 ||
      post.frontmatter.excerpt.toLowerCase().indexOf(req.query.q) !== -1 ||
      post.frontmatter.category.toLowerCase().indexOf(req.query.q) !== -1
  );

  res.status(200).json({ results });
};

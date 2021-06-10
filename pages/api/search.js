// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPosts } from 'lib';

export default (req, res) => {
  let posts;

  if (process.env.NODE_ENV === 'production') {
    // @TODO - cache posts
    posts = require('../../cache/data.js').posts;
  } else {
    const files = fs.readdirSync(path.join('posts'));

    posts = files.map((filename) => {
      const slug = filename.replace('.md', '');

      const markdownWithMeta = fs.readFileSync(
        path.join('posts', filename),
        'utf-8'
      );

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        slug,
        frontmatter,
      };
    });
  }
  const results = posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().indexOf(req.query.q) !== -1 ||
      post.frontmatter.excerpt.toLowerCase().indexOf(req.query.q) !== -1 ||
      post.frontmatter.category.toLowerCase().indexOf(req.query.q) !== -1
  );

  res.status(200).json({ results });
};

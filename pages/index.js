import fs from 'fs';
import path from 'path';
import marked from 'marked';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import PostIem from '../components/PostIem';

export default function HomePage({ posts }) {
  return (
    <Layout>
      {posts.map((post) => (
        <PostIem key={post.slug} post={post} />
      ))}
    </Layout>
  );
}

export const getStaticProps = () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((file) => {
    const slug = file.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.slice(0, 6),
    },
  };
};

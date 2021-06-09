import fs from 'fs';
import path from 'path';
import Layout from '@/components/Layout';
import Post from '@/components/Post';
import { POSTS_PER_PAGE } from '@/config/index';
import Pagination from '@/components/Pagination';
import { getPosts } from 'lib';

export default function BlogPage({ posts, numPages, currentPage }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Blogs</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>

      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
}

export const getStaticPaths = () => {
  const files = fs.readdirSync(path.join('posts'));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  const paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const page = (params && params.page_index) || 1;
  const files = fs.readdirSync(path.join('posts'));

  const posts = getPosts();

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: +page,
    },
  };
};

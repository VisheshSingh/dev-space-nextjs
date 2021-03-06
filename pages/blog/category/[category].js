import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Layout from '@/components/Layout';
import Post from '@/components/Post';
import { getPosts } from 'lib';
import CategoryList from '@/components/CategoryList';

export default function CategoryPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='w-3/4 mr-10'>
          <h1 className='text-5xl border-b-4 p-5 font-bold'>
            All {categoryName} blogs
          </h1>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {posts.map((post) => (
              <Post key={post.slug} post={post} />
            ))}
          </div>
        </div>

        <div className='w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>

      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          All Posts
        </a>
      </Link>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((file) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { params: { category: frontmatter.category.toLowerCase() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { category } }) => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = getPosts();

  const categories = posts.map((post) => post.frontmatter.category);

  const uniqueCategories = [...new Set(categories)];
  console.log(uniqueCategories);

  // Filter by category
  const filteredPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category
  );

  return {
    props: {
      posts: filteredPosts,
      categoryName: category,
      categories: uniqueCategories,
    },
  };
};

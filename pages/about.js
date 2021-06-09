import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title='About DevSpace'>
      <h1 className='text-5xl font-bold border-b-4 pb-5'>About</h1>

      <div className='bg-white shadow-md rounded-lg py-6 px-10 mt-6'>
        <h3 className='text-2xl mb-5'>DevSpace Blog</h3>
        <p className='mb-3'>This blog is built with Next.js and Markdown</p>
        <p className='font-bold'>Version 1.0.0</p>
      </div>
    </Layout>
  );
};

export default About;

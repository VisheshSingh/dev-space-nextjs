import Image from 'next/image';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout title='Page not found'>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src='/images/logo.png'
          width={70}
          height={70}
          alt='logo'
          className='bg-gray-900 rounded-2xl'
        />
        <h1 className='text-6xl my-5'>Whoops!</h1>
        <h1 className='text-4xl text-gray-500'>This page does not exist</h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

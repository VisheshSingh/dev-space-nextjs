import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-gray-900 text-gray-100 shadow w-full'>
      <div className='container mx-auto flex flex-wrap flex-col md:flex-row items-center p-5'>
        <Link href='/' className='items-center'>
          <a className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <Image src='/images/logo.png' alt='logo' width={40} height={40} />
            <span className='ml-3 text-xl'>DevSpace</span>
          </a>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 justify-end md:ml-auto'>
          <Link href='/blogs'>
            <a className='mx-5 cursor-pointer hover:text-indigo-300 uppercase'>
              Blogs
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer hover:text-indigo-300 uppercase'>
              About
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;

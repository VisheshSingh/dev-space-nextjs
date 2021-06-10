import Head from 'next/head';
import Header from './Header';
import Search from './Search';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  description:
    'Some good informative blogs for getting better at code, development & programming',
  keywords: 'code, development, programming, design',
};

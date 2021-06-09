import Link from 'next/link';

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Ruby: 'red',
    Python: 'green',
    PHP: 'purple',
  };
  return (
    <div
      className={`px-2 py-2 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
};

export default CategoryLabel;

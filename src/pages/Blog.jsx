import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Blog = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('blog.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">{t('blog.post1.title')}</h3>
            <p className="text-gray-600 mb-4">{t('blog.post1.description')}</p>
            <a href="#" className="text-blue-700 hover:underline">{t('blog.readMore')} →</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">{t('blog.post2.title')}</h3>
            <p className="text-gray-600 mb-4">{t('blog.post2.description')}</p>
            <a href="#" className="text-blue-700 hover:underline">{t('blog.readMore')} →</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">{t('blog.post3.title')}</h3>
            <p className="text-gray-600 mb-4">{t('blog.post3.description')}</p>
            <a href="#" className="text-blue-700 hover:underline">{t('blog.readMore')} →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useContext(LanguageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.alertMessage'));
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder={t('contact.form.name')} required className="border p-3 rounded" />
            <input type="email" placeholder={t('contact.form.email')} required className="border p-3 rounded" />
          </div>
          <input type="tel" placeholder={t('contact.form.phone')} required className="border p-3 w-full mb-6 rounded" />
          <select required className="border p-3 w-full mb-6 rounded">
            <option value="">{t('contact.form.selectService')}</option>
            <option value="import">{t('contact.form.import')}</option>
            <option value="export">{t('contact.form.export')}</option>
            <option value="logistics">{t('contact.form.logistics')}</option>
          </select>
          <button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded">
            {t('contact.form.submit')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

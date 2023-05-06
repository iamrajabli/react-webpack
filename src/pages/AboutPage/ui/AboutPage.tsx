import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AboutPage.module.scss';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <div className={classNames(cls.AboutPage, {}, [])}>{t('about-page')}</div>;
};

export default AboutPage;

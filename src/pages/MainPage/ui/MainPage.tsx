import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <div className={classNames(cls.MainPage, {}, [])}>{t('main-page')}</div>;
};

export default MainPage;

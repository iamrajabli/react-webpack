import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFound.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div className={classNames(cls.NotFoundPage, {}, [])}>{t('not-found')}</div>;
};

export default NotFoundPage;

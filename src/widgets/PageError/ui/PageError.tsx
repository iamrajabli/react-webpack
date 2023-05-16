import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h4>{t('error-boundary-text')}</h4>
      <button onClick={reloadPage}>{t('error-boundary-btn-text')}</button>
    </div>
  );
};

import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation('');

  const onToggle = async () => await changeLanguage(i18n.language === 'en' ? 'az' : 'en');

  return (
    <>
      <Button onClick={onToggle} className={classNames(cls.LangSwitcher, {}, [className])}>
        {t('lang')}
      </Button>
    </>
  );
};

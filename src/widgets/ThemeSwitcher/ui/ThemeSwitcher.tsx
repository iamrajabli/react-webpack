import { FC } from 'react';

import { useTheme } from 'app/providers/ThemeProvider/ui';

import { Theme } from 'shared/config/theme';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui/Button';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
    </Button>
  );
};

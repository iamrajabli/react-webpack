import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';

import cls from './Navbar.module.scss';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/main' className={cls.MainLink}>
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
      </div>

    </div>
  );
};

import { FC } from 'react';

import { Loader } from 'shared/ui/Loader/ui/Loader';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);

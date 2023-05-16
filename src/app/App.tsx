import { Suspense } from 'react';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import { classNames } from 'shared/lib/classNames/classNames';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <ErrorBoundary>
        <Suspense fallback={<div>loading...</div>}>
          <Navbar />
          <div className='content-page'>
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

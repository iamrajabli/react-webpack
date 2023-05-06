import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

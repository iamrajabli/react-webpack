import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import AppRouter from 'app/providers/router/ui/AppRouter';

import { classNames } from 'shared/lib/classNames/classNames';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

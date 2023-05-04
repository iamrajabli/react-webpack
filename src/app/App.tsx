import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import AppRouter from 'app/providers/router/ui/AppRouter';

import { classNames } from 'shared/lib/classNames/classNames';

import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <ThemeSwitcher className='hikmat'/>
    </div>
  );
};

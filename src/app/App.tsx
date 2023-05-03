import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

import { classNames } from 'shared/lib/classNames/classNames';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <ul>
        <li>
          <Link to='/main'>Main</Link>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/main' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

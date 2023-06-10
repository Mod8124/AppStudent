import { Routes, Route, Navigate } from 'react-router-dom';
import ArticlesPage from '../pages/ArticlesPage';
import { AppLayout } from '../layout/AppLayout';
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
import { DictionaryPage } from '../pages/Dictionary';
import { TodoPage } from '../pages/TodoPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path='search?q=' element={<ArticlesPage />} />
        <Route path='dictionary' element={<DictionaryPage />} />
        <Route path='todo' element={<TodoPage />} />
        <Route path='search' element={<ArticlesPage />} />
        <Route path='profile' element={<ProfilePage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};

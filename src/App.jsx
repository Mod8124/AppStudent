import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';
import { I18nextProvider } from 'react-i18next';
import { i18nextConfig } from './config/I18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).init(i18nextConfig);

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <AppRouter />
        <Toaster />
      </Provider>
    </I18nextProvider>
  );
};

export default App;

import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ locales, navigation, settings, children }) {
  return (
    <div className="text-slate-800 bg-[#FFF6ED]">
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </div>
  );
}

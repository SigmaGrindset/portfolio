import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '@/lib/theme';
import { I18nProvider } from '@/i18n/i18n';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </I18nProvider>
    </ThemeProvider>
  );
}

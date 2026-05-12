import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/lib/theme';
import { I18nProvider } from '@/i18n/i18n';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { NotFound } from '@/components/NotFound';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
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
        <Analytics />
      </I18nProvider>
    </ThemeProvider>
  );
}

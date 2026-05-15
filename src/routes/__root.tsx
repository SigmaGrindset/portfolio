import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/lib/theme';
import { I18nProvider } from '@/i18n/i18n';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { NotFound } from '@/components/NotFound';
import { CustomCursor } from '@/components/fx/CustomCursor';
import { AmbientBlobs } from '@/components/fx/AmbientBlobs';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AmbientBlobs />
        <CustomCursor />
        <ScrollProgress />
        <Nav />
        <main id="main" tabIndex={-1} className="relative z-10">
          <Outlet />
        </main>
        <Footer />
        <Analytics />
      </I18nProvider>
    </ThemeProvider>
  );
}

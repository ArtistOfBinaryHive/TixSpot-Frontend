import "/src/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ReduxProvider } from "@/redux/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReduxProvider>
        <div className="relative flex flex-col min-h-screen">
          <SiteHeader />
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
        </div>
        <TailwindIndicator />
      </ReduxProvider>
    </ThemeProvider>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/shared/Navbar/Navbar";
import Footer from "./component/shared/Footer/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Providers/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>{children} </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/assets/styles/globals.css';
import { APP_DESCRIPTION, APP_NAME } from "./constants";
import { ThemeProvider } from "next-theme";

const inter = Inter({subsets:['latin']});

export const metadata: Metadata = {
  title:{
    template:`%s | Prostore`,
    default: APP_NAME,
  } ,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  antialiased`}>
          {/* <ThemeProvider 
           attribute='class'
           defaultTheme='light'
           enableSystem
           disableTransitionOnChange
          > */}
            {children}
          {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

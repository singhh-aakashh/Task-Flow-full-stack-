import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider"
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/providers/modal-provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons:"fuzzieLogo.png",
  title: "TaskFlow",
  description: "Automate Your Work With TaskFlow",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
            {children}
            </ModalProvider>
          </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}

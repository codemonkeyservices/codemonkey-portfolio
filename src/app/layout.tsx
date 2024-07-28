import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/customCursor";
import FloatingChatButton from "./components/floatingChatButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const global_font = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeMonkey - Innovative Tech Solutions",
  description: "CodeMonkey is a dynamic tech startup specializing in the development of websites, web applications, and mobile applications for both Android and iOS. Additionally, CodeMonkey provides automation solutions tailored to enhance organizational efficiency.",
  // viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="CodeMonkey, tech startup, web development, web applications, mobile applications, Android, iOS, automation solutions" />
        <meta name="author" content="CodeMonkey" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      </head>
      <body className={global_font.className}>
        <CustomCursor />
        <Navbar />
        <main className="flex justify-center bg-white">
          <div className="2xl:max-w-[1450px] flex flex-col items-center">
            {children}
              <Footer />
          </div>
        </main>
        <FloatingChatButton />
      </body>
    </html>
  );
}

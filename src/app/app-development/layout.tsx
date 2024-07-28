import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CodeMonkey | app development",
    description: "Expert mobile app development for Android and iOS platforms. Crafting seamless, high-performance apps tailored to your needs, ensuring a superior user experience and robust functionality.",
    robots: "index, follow",
  };

export default function ChatPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}

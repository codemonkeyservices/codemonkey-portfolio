import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CodeMonkey | app development",
    description: "Exceptional web development services, creating responsive, dynamic websites tailored to your business needs. Enhance your online presence with our innovative and user-friendly web solutions.",
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

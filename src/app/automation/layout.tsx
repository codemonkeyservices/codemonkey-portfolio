import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CodeMonkey | automation",
    description: "Pioneering in automation development with cutting-edge machine learning chatbots, CI/CD solutions, and Python-based manual task automation. Streamline your workflows and enhance productivity with our innovative automation tools.",
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

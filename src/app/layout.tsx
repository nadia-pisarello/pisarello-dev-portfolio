import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Nakama Developer",
  description: "Portfolio for Nakama Developers",
  icons: "/favicon.ico",
  keywords: ["Nakama", "Developer", "Frontend", "Portfolio", "Pisarello"],
  // authors: [{ name: "Nakama", url: "https://tusitio.dev" }],
  // openGraph: {
  //   title: "Nakama Developer",
  //   description: "Portfolio for Nakama Developers",
  //   url: "https://tusitio.dev",
  //   siteName: "Nakama Portfolio",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased w-full m-0 p-0  bg-white dark:bg-neutral-800">
        <main>{children}</main>
      </body>
    </html>
  );
}

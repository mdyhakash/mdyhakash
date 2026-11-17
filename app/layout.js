import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md Yasin Hossain Akash | Software Engineer",
  description: "Portfolio of Akash, a full-stack software engineer from Dhaka, Bangladesh.",
  openGraph: {
    title: "Md Yasin Hossain Akash | Software Engineer",
    description: "Full-stack projects, experience and skills.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-600 antialiased`}>
        {children}
      </body>
    </html>
  );
}

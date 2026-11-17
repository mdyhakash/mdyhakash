import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Md Yasin Hossain Akash | Software Engineer",
  description:
    "Portfolio of Akash, a full-stack software engineer from Dhaka, Bangladesh.",
  openGraph: {
    title: "Md Yasin Hossain Akash | Software Engineer",
    description: "Full-stack projects, experience and skills.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-gray-600 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

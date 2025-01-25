import "./globals.css";

export const metadata = {
  title: "Md Yasin Hossain Akash",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

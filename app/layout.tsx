import type { Metadata } from "next";
import "./globals.css";
import "modern-normalize";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Travel-Trucks",
  description: "Campers of your dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          <main>{children}</main>

          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}

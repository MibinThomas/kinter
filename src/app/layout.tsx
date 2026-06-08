import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinter - School Kindergarten HTML Template",
  description: "Kindergarten Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/uikit.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />
        <link rel="stylesheet" href="/assets/css/common.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <div className="body_wrap">
          <Preloader />
          <BackToTop />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        
        <Script src="/assets/js/bundle.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

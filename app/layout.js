import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/home/Nav";
import Footer from "./components/home/Footer";
import ScrollTop from "./components/Helper/ScrollTop";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClerkProvider } from "@clerk/nextjs";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Portal",
  description: "Your gateway to thousands of job opportunities. Discover your dream job, connect with top employers, and advance your career with our intuitive platform.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>


      <html lang="en">
        <head>

          <link rel="icon" href="https://res.cloudinary.com/dhyczd7jv/image/upload/v1724141722/Jobster_Logo_eghwyb.png" />
        </head>
        <body className={inter.className}>
          <header>

          </header>
          <ToastContainer />
          <Nav>
          </Nav>

          {children}
          <Footer></Footer>
          <ScrollTop></ScrollTop>
        </body>
      </html>
    </ClerkProvider>
  );
}

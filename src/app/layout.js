import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import './styles/global.scss';

export const metadata = {
  title: "Landing Page for test",
  description: "Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}

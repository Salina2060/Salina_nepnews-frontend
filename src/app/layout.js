import './globals.css';
import LayoutClientWrapper from './LayoutClientWrapper'; // 👇 Wraps the splash logic

export const metadata = {
  title: 'NepNews',
  description: 'Stay updated with the latest news.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">

        <Navbar />
        <ToastProvider /> {/* ✅ Now client-safe */}
        <main className="flex-grow">{children}</main>
        <Footer />
=======
        <LayoutClientWrapper>{children}</LayoutClientWrapper>

      </body>
    </html>
  );
}

import './globals.css';
import Nav from './nav';

export const metadata = {
  title: 'Beeker - Demo',
  description:
    'A demo app configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Nav />
        {children}
      </body>
    </html>
  );
}

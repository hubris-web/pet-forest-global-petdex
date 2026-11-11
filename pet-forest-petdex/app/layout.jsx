import './globals.css';

export const metadata = {
  title: 'Pet Forest Global | Petdex',
  description: 'A community pet encyclopedia for Pet Forest Global.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

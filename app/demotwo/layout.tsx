import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dentis – Elementor Template Kit",
  description: "Separate dental website demo built using the Dentis template kit.",
};

export default function DemotwoRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

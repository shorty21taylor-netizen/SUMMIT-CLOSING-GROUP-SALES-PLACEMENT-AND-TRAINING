import "./globals.css";

export const metadata = {
  title: "Summit Closing Group — Place Closers. Train Teams. Close More.",
  description:
    "Done-for-you sales talent + fractional sales management for 7-figure coaches, agencies, and info businesses. 90-day replacement guarantee.",
  openGraph: {
    title: "Summit Closing Group",
    description:
      "We place closers in your business. Or we train your whole damn team.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-scgblack text-scgwhite">{children}</body>
    </html>
  );
}

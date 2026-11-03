import type { ReactNode } from "react";
export const metadata = {
  title: { default: "Adnan's Portfolio", template: "%s · Adnan Yusuf" },
  description: "My portfolio site",
};

const themeScript = `try {
  var t = localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", t);
} catch (e) {}`;

export default function RootLayout({ children }: {
  children: ReactNode;
}) {
  return (
    // the theme script sets data-theme before hydration, so suppress that mismatch
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* apply the saved/system theme before first paint to avoid a light flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
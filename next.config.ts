import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /resume/download serves the same PDF as /Adnan_yusuf.pdf, but forces a download
  // (the `download` attribute is ignored by iOS and in-app browsers)
  async rewrites() {
    return [
      { source: "/resume/download", destination: "/Adnan_yusuf.pdf" },
      // static builds of old projects, copied from each repo's gh-pages branch.
      // adnanyu.github.io/<repo> redirects here because adnanbuilds.me is the
      // GitHub Pages custom domain, so these paths keep those links working.
      ...["calculator", "weather-app"].flatMap((app) => [
        { source: `/${app}`, destination: `/${app}/index.html` },
        { source: `/${app}/`, destination: `/${app}/index.html` },
      ]),
    ];
  },
  async headers() {
    return [
      {
        source: "/resume/download",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          { key: "Content-Disposition", value: 'attachment; filename="Adnan_Yusuf_Resume.pdf"' },
        ],
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',          // optional, leave empty
        pathname: '/images/**', // allow all paths under /images/
      },
    ],
  },
}
// const STUDIO_REWRITE = {
//   source: "/studio/:path*",
//   destination:
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3333/studio/:path*"
//       : "/studio/index.html",
// };

// module.exports = {
//   rewrites: () => [STUDIO_REWRITE],
// };
module.exports = nextConfig

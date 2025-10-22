/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "",
        hostname: "www.bigfootdigital.co.uk",
        port: "",
        pathname: "",
        search: "",
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

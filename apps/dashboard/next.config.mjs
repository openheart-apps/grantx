/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/auth/signin',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  
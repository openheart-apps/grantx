/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/auth/signin',
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  
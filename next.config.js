/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/gaza-children',
        destination:
          'https://medium.com/@dsalinetro/gazas-children-and-the-hunger-humanity-must-end-4b77320ad1ce',
        permanent: false, // easier to update later if you want
      },
    ];
  },
};

module.exports = nextConfig;

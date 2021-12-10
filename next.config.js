module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://pylamp-domain-realm.vercel.app/:path*',
        },
      ]
    },
};
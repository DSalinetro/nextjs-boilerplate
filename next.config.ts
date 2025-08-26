// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/empathy-audit-pdf',
        destination: 'https://static1.squarespace.com/static/6894d3a7da06e2603427241f/t/68a874bfd89bb174ca7998d4/1755870399633/Empathy_Audit_Framework_PrintFriendly_v2.pdf',
        permanent: true, // 308/301 is fine
      },
      {
        source: '/empathy-audit.pdf',
        destination: 'https://static1.squarespace.com/static/6894d3a7da06e2603427241f/t/68a874bfd89bb174ca7998d4/1755870399633/Empathy_Audit_Framework_PrintFriendly_v2.pdf',
        permanent: true,
      },
    ];
  },
};

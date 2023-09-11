/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_KEY: process.env.CTP_PROJECT_KEY,
    CLIENT_ID: process.env.NEXT_PUBLIC_CTP_CLIENT_ID,
    CLIENT_SECRET: process.env.CTP_CLIENT_SECRET,
    AUTH_URL: process.env.CTP_AUTH_URL,
    API_URL: process.env.CTP_API_URL,
    DEFAULT_CURRENCY: process.env.DEFAULT_CURRENCY,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.squarespace-cdn.com",
      "https://images.unsplash.com/",
      "images.unsplash.com",
      "res.cloudinary.com",
      "i3.ytimg.com",
      "lh3.googleusercontent.com",
      "i.ytimg.com",
      "https://i.ytimg.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

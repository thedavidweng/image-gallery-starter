module.exports = {
  images: {
    formats: ["image/avif", "image/webp", "image/png", "image/jpeg", "image/gif", "image/jpg"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/my-account/**",
      },
    ],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        domains: ['vendorze-bucket.s3.amazonaws.com'],
    },
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
        missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;

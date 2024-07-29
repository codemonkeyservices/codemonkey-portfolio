/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    productionBrowserSourceMaps: true,
    basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
    assetPrefix: process.env.URL ? process.env.URL : undefined,
  };
  
  export default nextConfig;
  


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export', // Uncommented this line for static export
//     productionBrowserSourceMaps: true,
//     basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
//     assetPrefix: process.env.URL ? process.env.URL : undefined,
//     images: {
//         loader: 'custom',
//         path: '', // Use an empty string to ensure the image paths are relative
//     },
// };

// module.exports = nextConfig;

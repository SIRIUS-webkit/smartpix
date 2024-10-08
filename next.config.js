/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    texttoimageAPI: process.env.TEXT_TO_IMAGE_API,
    texttoimageMODEL: process.env.TEXT_TO_IMAGE_MODEL,
    texttovideoAPI: process.env.TEXT_TO_VIDEO,
    objectdetectionMODEL: process.env.OBJECT_DETECTION_MODEL,
    imageclassificationMODEL: process.env.IMAGE_CLASSIFICATION_MODEL,
    huggingTOKEN: process.env.HUGGING_TOKEN,
  },
  images: {
    minimumCacheTTL: 60,
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;

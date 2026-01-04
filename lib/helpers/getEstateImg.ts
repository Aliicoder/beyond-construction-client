type StrapiImage = {
  url: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
};
export const getEstateImage = (image: StrapiImage) => {
  if (!image) return "/placeholder.jpg";
  let url =
    image.formats?.small?.url ||
    image.formats?.medium?.url ||
    image.formats?.thumbnail?.url ||
    image.url;
  return url || "/placeholder.jpg";
};

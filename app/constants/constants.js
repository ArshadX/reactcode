const images = require.context("../../public/images/Carousel", true);

export const imageList = images.keys().map((image) => images(image));

export const colors = {
  activeButton: "#E04F5F",
};

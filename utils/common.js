export function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    str = str.slice(0, maxLength) + "...";
  }
  return str;
}

export function randPrompts() {
  const prompts = [
    "A beautiful sunset over the mountains",
    "A cute kitten playing with a ball of yarn",
    "A serene beach with palm trees",
    "A cozy fireplace in a log cabin",
    "A vibrant city skyline at night",
  ];
  return prompts;
}

export function themeStyleImages() {
  const images = [
    {
      id: 1,
      url: "anime.png",
      text: "Anime",
    },
    {
      id: 2,
      url: "arcane.jpeg",
      text: "Arcane",
    },
    {
      id: 3,
      url: "cartoonist_v2.jpg",
      text: "Cartoonist V2",
    },
    {
      id: 4,
      url: "comic.png",
      text: "Comic",
    },
    {
      id: 5,
      url: "figure_v2.2.jpg",
      text: "Figure V2",
    },
    {
      id: 6,
      url: "hd.jpg",
      text: "HD",
    },
    {
      id: 7,
      url: "poster_art.jpg",
      text: "Poster Art",
    },
    {
      id: 8,
      url: "figure.jpeg",
      text: "Figure",
    },
    {
      id: 9,
      url: "softtouch.png",
      text: "Softtouch",
    },
    {
      id: 10,
      url: "fantastical.jpeg",
      text: "Fantastical",
    },
    {
      id: 11,
      url: "diorama.jpeg",
      text: "Diorama",
    },
  ];
  return images;
}

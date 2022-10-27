const musics = [
  {
    music: "Blueming",
    album: "Love poem",
  },
  {
    music: "Coin",
    album: "LILAC",
  },
  {
    music: "너랑 나",
    album: "Last Fantasy",
  },
  {
    music: "드라마",
    album: "조각집",
  },
  {
    music: "하루 끝",
    album: "스무 살의 봄",
  },
  {
    music: "스물셋",
    album: "Smash Hits",
  },
  {
    music: "이 지금",
    album: "Palette",
  },
  {
    music: "팔레트",
    album: "Palette",
  },
  {
    music: "좋은 날",
    album: "Real",
  },
  {
    music: "strawberry moon",
    album: "strawberry moon",
  },
];

const music = document.querySelector("#recommended-music span:first-child");
const album = document.querySelector("#recommended-music span:last-child");
const recommnededMusic = musics[Math.floor(Math.random() * musics.length)];

music.innerText = recommnededMusic.music;
album.innerText = recommnededMusic.album;

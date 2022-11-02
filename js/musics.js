const musics = [
  {
    music: "Blueming",
    album: "미니 5집: Love poem",
  },
  {
    music: "Coin",
    album: "정규 5집: LILAC",
  },
  {
    music: "너랑 나",
    album: "정규 2집: Last Fantasy",
  },
  {
    music: "드라마",
    album: "스페셜 미니: 조각집",
  },
  {
    music: "하루 끝",
    album: "싱글 2집: 스무 살의 봄",
  },
  {
    music: "스물셋",
    album: "미니 4집: CHAT-SHIRE",
  },
  {
    music: "이 지금",
    album: "정규 4집: Palette",
  },
  {
    music: "팔레트",
    album: "정규 4집: Palette",
  },
  {
    music: "좋은 날",
    album: "미니 3집: Real",
  },
  {
    music: "strawberry moon",
    album: "디지털 싱글: strawberry moon",
  },
];

const music = document.querySelector("#recommended-music span:first-child");
const album = document.querySelector("#recommended-music span:last-child");
const recommnededMusic = musics[Math.floor(Math.random() * musics.length)];

music.innerText = recommnededMusic.music;
album.innerText = recommnededMusic.album;

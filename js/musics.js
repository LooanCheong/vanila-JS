const musics = [
  {
    music: "늦었다고 생각할 때가 늦은 거다.",
    album: "test",
  },
  {
    music: "포기하면 편하다.",
    album: "test",
  },
  {
    music: "안되면 말고.",
    album: "test",
  },
  {
    music: "나까지 나설 필요 없다.",
    album: "test",
  },
  {
    music: "즐길 수 없으면 피하라.",
    album: "test",
  },
  {
    music: "어려운 길은 길이 아니다.",
    album: "test",
  },
  {
    music: "티끌 모아 티끌.",
    album: "test",
  },
  {
    music: "동정할 거면 돈으로 줘라.",
    album: "test",
  },
  {
    music: "인생은 한방이 아니다.",
    album: "test",
  },
  {
    music: "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다.",
    album: "test",
  },
];

const music = document.querySelector("#recommended-music span:first-child");
const album = document.querySelector("#recommended-music span:last-child");
const recommnededMusic = musics[Math.floor(Math.random() * musics.length)];

music.innerText = recommnededMusic.music;
album.innerText = recommnededMusic.album;

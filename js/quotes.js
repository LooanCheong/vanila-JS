const quotes = [
  {
    quote: "늦었다고 생각할 때가 늦은 거다.",
  },
  {
    quote: "포기하면 편하다.",
  },
  {
    quote: "안되면 말고.",
  },
  {
    quote: "나까지 나설 필요 없다.",
  },
  {
    quote: "즐길 수 없으면 피하라.",
  },
  {
    quote: "어려운 길은 길이 아니다.",
  },
  {
    quote: "티끌 모아 티끌.",
  },
  {
    quote: "동정할 거면 돈으로 줘라.",
  },
  {
    quote: "인생은 한방이 아니다.",
  },
  {
    quote: "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다.",
  },
];

const quote = document.querySelector("#quote span");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;

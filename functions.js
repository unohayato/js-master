function square(num) {
  return num * num;
}

const square = function(num) {
  return num * num;
}

const square = (num) => {
  return num * num;
}

const square = num  => num * num;

const interest = [
  {
    name: "soccer",
    emoji: "⚽️",
    score: 29,
  },
  {
    name: "筋トレ",
    emoji: "💪",
    score: 50,
  },
];

const a1 = interest.filter((x) => x.score >= 50);
const a2 = interest.map((x) => x.name.toUpperCase());
const a3 = interest.reduce((a, b) => a+b.score, 0);



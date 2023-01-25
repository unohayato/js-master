const person = {
  firstName: "Hayato",
  lastName: "Uno",
  age: 20,
  gender: 'male',
  interest: [
    {
      name: "soccer",
      emoji: "⚽️",
    },
    {
      name: "筋トレ",
      emoji: "💪",
    },
  ],
  greeting: function () {
    alert("Hi! I'm" + this.firstName + " " + this.lastName);
  },


};

const nums = [1, 2, 3, 4, 5];

const f = (num) => {

  return num + num;
}

nums.forEach((i) => {
  console.log(f(i));
});
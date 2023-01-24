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
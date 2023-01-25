fetch("https://jsonplaceholder.typicode.todos/1")
  .then(((res) => res.json()))
  .then((json) => console.log(json))
  .catch((error) => {
    console.log(error);
  });


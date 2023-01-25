fetch("https://jsonplaceholder.typicode.todos/1")
  .then(((res) => res.json()))
  .then((json) => console.log(json))
  .catch((error) => {
    console.log(error);
  });

async function main() {
  try{
    const res = await fetch("https://jsonplaceholder.typicode.todos/1");
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

main();

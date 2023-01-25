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


setTimeout(()=>{
  console.log("Hello");

}, 1000);


const asyncHello = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello!");
    resolve();
  }, 1000);
});

asyncHello()
  .then(() => asyncHello())
  .then(() => asyncHello())
  .then(() => asyncHello())
  .catch((error) => {
    console.log(error);
  });


const main = async () => {
  await asyncHello();
  await asyncHello();
  await asyncHello();
};

main();
import { component$, useStore } from "@builder.io/qwik";


export default component$(() => {

  const messages = [
    "Hello World",
    "Welcome to this Qwik Course",
    "Learn the Qwik Framework!"
  ];

  const store = useStore({
    index: 0
  });

  return (
    <>

      <h1>Qwik Stores: </h1>

      <h3>{messages[store.index]}</h3>

      <button onClick$={() => store.index++}>Next Message</button>
    </>
  );

});









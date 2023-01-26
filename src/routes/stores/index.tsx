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
      <h1>Qwik Stores: {new Date().getTime()} </h1>

      <Message message={messages[store.index]} />

      <button onClick$={() => store.index++}>Next Message</button>
    </>
  );

});

interface MessageProps {
  message:string
}

export const Message = component$((props:MessageProps) => {

  return (
    <h3>{props.message} {new Date().getTime()}</h3>
  );
});









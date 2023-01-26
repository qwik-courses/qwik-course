import { component$, useStore } from "@builder.io/qwik";

interface MessagesStore {
  messages: string[],
  index: number
}

export default component$(() => {

  const messages = [
    "Hello World",
    "Welcome to this Qwik Course",
    "Learn the Qwik Framework!"
  ];

  const store = useStore({
    messages,
    index: 0
  });

  return (
    <>
      <h1>Qwik Stores: {new Date().getTime()} </h1>

      <Message store={store} />

      <button onClick$={() => store.index++}>Next Message</button>
    </>
  );

});

interface MessageProps {
  store: MessagesStore
}

export const Message = component$((props:MessageProps) => {

  const {messages, index} = props.store;

  return (
    <h3>{messages[index]} {new Date().getTime()}</h3>
  );
});









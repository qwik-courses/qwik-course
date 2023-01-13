import { component$, $ } from "@builder.io/qwik";
import { HelloMessage } from "~/components/hello-message/hello-message";


export default component$(() => {

  console.log(`Initializing Hello World component.`);

  const sayHello = $(() => {
    alert("Hello World!");
  });

  return (
    <>
      <HelloMessage message="Hello World" courseVersion={1} />
      <HelloMessage message="Welcome to this Qwik Course" courseVersion={2} />
      <HelloMessage message="Learn the Qwik Framework!"  courseVersion={3}/>

      <button onClick$={sayHello}>Say Hello</button>

    </>
  );

});








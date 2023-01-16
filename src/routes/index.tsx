import { component$, $ } from "@builder.io/qwik";
import { HelloMessage } from "~/components/hello-message/hello-message";


export default component$(() => {

  console.log(`Initializing Hello World component.`);

  const sayHello = $(() => {
    alert("Hello World!");
  });

  const onShowMessageClicked = $((message:string) => alert(message));

  return (
    <>
      <HelloMessage message="Hello World" courseVersion={1} onShowMessage={onShowMessageClicked}/>
      <HelloMessage message="Welcome to this Qwik Course" courseVersion={2} onShowMessage={onShowMessageClicked}/>
      <HelloMessage message="Learn the Qwik Framework!"  courseVersion={3} onShowMessage={onShowMessageClicked}/>

      <button onClick$={sayHello}>Say Hello</button>

    </>
  );

});








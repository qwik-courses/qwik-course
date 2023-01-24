import { component$, $ } from "@builder.io/qwik";
import { HelloMessage } from "~/components/hello-message/hello-message";


export default component$(() => {

  console.log(`Initializing Hello World component.`);

  const sayHello = $(() => {
    alert("Hello World!");
  });

  const messages = [
    "Hello World",
    "Welcome to this Qwik Course",
    "Learn the Qwik Framework!"
  ];

  const onShowMessageClicked = $((message:string) => alert(message));

  return (
    <>

      { messages.map((message, index) => (
        <HelloMessage key={index} message={message} courseVersion={index}
                      showButton={true} onShowMessage={onShowMessageClicked} />
      ))

      }


      <button onClick$={sayHello}>Say Hello</button>

    </>
  );

});








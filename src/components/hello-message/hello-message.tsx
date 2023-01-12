import { component$ } from "@builder.io/qwik";

interface HelloMessageProps {
  message:string,
  courseVersion:number
}

export const HelloMessage = component$<HelloMessageProps>((props) => {

  return (
    <div class='container'>
      {
        <h1>{props.message}: version {props.courseVersion}</h1>
      }
    </div>
  );
});

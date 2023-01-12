import { component$ } from "@builder.io/qwik";

interface HelloMessageProps {
  message:string,
  courseVersion?:number
}

export const HelloMessage = component$<HelloMessageProps>((props) => {

  const {message, courseVersion} = props;

  return (
    <div class='container'>
      {
        <h1>{message}: version {courseVersion}</h1>
      }
    </div>
  );
});

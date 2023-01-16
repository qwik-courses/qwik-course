import { component$, PropFunction } from "@builder.io/qwik";

interface HelloMessageProps {
  message:string,
  courseVersion?:number
  onShowMessage: PropFunction<(message:string) => void>;
}

export const HelloMessage = component$<HelloMessageProps>((props) => {

  const {message, courseVersion, onShowMessage} = props;

  return (
    <div class='container'>
      {
        <>
        <h1>{message}: version {courseVersion}</h1>

        <button onClick$={() => onShowMessage(message)}>Show Message</button>
        </>
      }
    </div>
  );
});

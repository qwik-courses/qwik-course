import { component$, PropFunction } from "@builder.io/qwik";

interface HelloMessageProps {
  message:string,
  courseVersion?:number,
  showButton: boolean,
  onShowMessage: PropFunction<(message:string) => void>;
}

export const HelloMessage = component$<HelloMessageProps>((props) => {

  const {message, courseVersion, onShowMessage, showButton} = props;

  return (
    <div class='container'>
      {
        <>
        <h1>{message}: version {courseVersion}</h1>

          {showButton && (
            <button onClick$={() => onShowMessage(message)}>Show Message</button>
          )}

        </>
      }
    </div>
  );
});

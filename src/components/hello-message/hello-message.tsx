import { component$, PropFunction, useStylesScoped$ } from "@builder.io/qwik";

import styles from './hello-message.css?inline';

interface HelloMessageProps {
  message:string,
  courseVersion?:number,
  showButton: boolean,
  onShowMessage: PropFunction<(message:string) => void>;
}

export const HelloMessage = component$((props: HelloMessageProps) => {

  useStylesScoped$(styles);

  const {message, courseVersion, onShowMessage, showButton} = props;

  const cssClasses = ['hello-message'];

  if (courseVersion == 1) {
    cssClasses.push('highlighted');
  }

  const customStyles = (courseVersion == 2) ? {
    color: 'red',
    'text-decoration': 'underline'
  } : {};

  return (
    <div class='container'>
      {
        <>

        <div class={cssClasses} style={customStyles}>{message}: version {courseVersion}</div>

          {showButton && (
            <button onClick$={() => onShowMessage(message)}>Show Message</button>
          )}

        </>
      }
    </div>
  );
});

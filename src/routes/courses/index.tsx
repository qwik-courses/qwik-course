import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './courses.css?inline';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {

  useStylesScoped$(styles);

  return (
    <h1>Hello World Courses!</h1>
  );
});

export const head: DocumentHead = {
  title: 'Courses Page',
};

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <ul>

      </ul>
    </header>
  );
});

import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <ul>
        <li>
          <Link href="/courses">
            Courses
          </Link>
        </li>
      </ul>
    </header>
  );
});

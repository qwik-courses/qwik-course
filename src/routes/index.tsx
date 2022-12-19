import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { commonLinks } from "~/routes/head-links";

export default component$(() => {
  return (
    <div>
      <Link class="mindblow" href="/courses/">
        COURSES
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  links: commonLinks,
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

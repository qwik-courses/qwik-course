import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { commonLinks } from "~/routes/head-links";

export default component$(() => {
  return (
    <div>
      <h1>Welcome to this Qwik Course!</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik In Depth Course',
  links: commonLinks,
  meta: [
    {
      name: 'description'
    },
  ],
};

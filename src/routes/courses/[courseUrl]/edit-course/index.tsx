
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import styles from "./edit-course.css?inline";

export default component$(() => {

  useStylesScoped$(styles);

  const location = useLocation();

  return (
    <>
      <h1> Edit Course {location.params.courseUrl}</h1>
    </>
  );
});


import { component$, useStylesScoped$, Resource, useResource$ } from "@builder.io/qwik";
import styles from "./courses.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Course } from "~/models/course";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import CourseCardList from "~/components/course-card-list/course-card-list";
import { commonLinks } from "~/routes/head-links";


export default component$(() => {

  useStylesScoped$(styles);

  const resource = useResource$<Course[]>(async () => {
    return getCourses();
  });

  return (
    <Resource
      value={resource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(courses) => (
        <div class='courses-container'>
          <CourseCardList courses={courses} />
        </div>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Courses Page",
  links: commonLinks
};

export async function getCourses() {
  const response = await fetch(`http://localhost:9000/api/courses`);
  return response.json();
}

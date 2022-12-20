import { component$, useStylesScoped$, Resource } from "@builder.io/qwik";
import styles from "./courses.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Course } from "~/models/course";
import { RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import CourseCardList from "~/components/course-card-list/course-card-list";
import { commonLinks } from "~/routes/head-links";



export const onGet: RequestHandler<Course[]> = async () => {
  const response = await fetch(`http://localhost:9000/api/courses`);
  return response.json();
};


export default component$(() => {

  useStylesScoped$(styles);

  const courseData = useEndpoint<Course[]>();

  return (
    <Resource
      value={courseData}
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

import { component$, useStylesScoped$, Resource } from "@builder.io/qwik";
import styles from './courses.css?inline';
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { Course } from "~/models/course";
import { useEndpoint } from "@builder.io/qwik-city";

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
        <>
          <h1>Courses: {courses.length}</h1>
        </>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: 'Courses Page',
};

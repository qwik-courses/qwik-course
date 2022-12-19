import { component$, useStylesScoped$, Resource } from "@builder.io/qwik";
import styles from "./courses.css?inline";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { Course } from "~/models/course";
import { useEndpoint } from "@builder.io/qwik-city";
import CourseCard from "~/components/course-card/course-card";
import CourseCardList from "~/components/course-card-list/course-card-list";

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
          <CourseCardList courses={courses} />
        </>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Courses Page"
};

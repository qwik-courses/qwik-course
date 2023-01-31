import { component$, useResource$, Resource, $, useStore } from "@builder.io/qwik";
import { Course } from "~/models/course";

interface CoursesStore {
  courses: Course[];
}

export default component$(() => {

  const store = useStore<CoursesStore>({
    courses: []
  });

  const onLoadCourses = $(async () => {
    const courses = await getCourses();
    store.courses = courses;
  });

  return (
    <>
      <button onClick$={onLoadCourses}>Load Courses</button>

      {store.courses.map(course => (
        <h3>{course.description}</h3>
      ))}

    </>
  )
})

export async function getCourses() {
  const response = await fetch(`http://localhost:9000/api/courses`);
  return response.json();
}



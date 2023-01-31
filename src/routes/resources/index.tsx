import { component$, useResource$, Resource, $, useStore } from "@builder.io/qwik";
import { Course } from "~/models/course";

export default component$(() => {

  const store = useStore({
    reloadCounter: 0
  });

  const resource = useResource$<Course[]>((ctx) => {
    ctx.track(() => store.reloadCounter);
    return getCourses();
  });

  return (
    <>

      <button onClick$={() => store.reloadCounter++}>Reload Courses</button>

      <Resource
        value={resource}
        onPending={() => (
          <h1>Loading ...</h1>
        )}
        onRejected={() => (
          <h1>Request failed.</h1>
        )}
        onResolved={courses => (
          <>
            {
              courses.map(course => (
                <h3>{course.description}</h3>
              ))
            }
          </>
        )} />
    </>
  )
})

export async function getCourses() {
  const response = await fetch(`http://localhost:9000/api/courses`);
  return response.json();
}



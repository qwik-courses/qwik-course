import {
  component$,
  useStylesScoped$,
  Resource,
  useResource$,
  createContext,
  useStore,
  useContextProvider, useContext
} from "@builder.io/qwik";
import styles from "./courses.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Course } from "~/models/course";
import CourseCardList from "~/components/course-card-list/course-card-list";
import { commonLinks } from "~/routes/head-links";
import { appContext } from "~/root";


export default component$(() => {

  useStylesScoped$(styles);

  const appState = useContext(appContext);

  const resource = useResource$<Course[]>(async () => {
    return getCourses();
  });

  return (
    <Resource
      value={resource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(courses) => {

        appState.courses = courses;

        return (
          <div class="courses-container">
            <CourseCardList />
          </div>
        );
      }}
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

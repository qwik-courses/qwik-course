import {
  component$,
  useStylesScoped$,
  Resource,
  useResource$,
  createContext,
  useStore,
  useContextProvider
} from "@builder.io/qwik";
import styles from "./courses.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Course } from "~/models/course";
import CourseCardList from "~/components/course-card-list/course-card-list";
import { commonLinks } from "~/routes/head-links";

const APP_STATE_CONTEXT_ID = "AppState";

export interface AppState {
  courses: Course[];
}

export const appContext = createContext<AppState>(APP_STATE_CONTEXT_ID);

export default component$(() => {

  useStylesScoped$(styles);

  const store = useStore<AppState>({
      courses: []
    },
    {
      recursive: true
    });

  useContextProvider(
    appContext,
    store
  );

  const resource = useResource$<Course[]>(async () => {
    return getCourses();
  });

  return (
    <Resource
      value={resource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(courses) => {

        store.courses = courses;

        return (
          <div class="courses-container">
            <CourseCardList courses={store.courses} />
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

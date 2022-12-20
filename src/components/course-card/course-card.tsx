import { component$, useContext, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./course-card.css?inline";
import { Course } from "~/models/course";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { appContext, AppState } from "~/routes/courses";

interface CourseCardProps {
  course: Course;
}


export default component$((props: CourseCardProps) => {

  useStylesScoped$(styles);

  const nav = useNavigate();

  const store = useStore({ course: props.course }, { recursive: true });

  const appState = useContext(appContext);

  const { course } = store;

  return (
    <div class="course-card">
      <img class="card-image" src={course.iconUrl} />
      <div class="card-title">{course.description}</div>
      <div class="card-description">{course.longDescription}</div>
      <div class="card-actions">
        <button onClick$={() => nav.path = `/courses/${course.url}`}>
          View
        </button>
        <button onClick$={() => onCourseEdited(course)}>Edit</button>
        <button onClick$={() => onCourseDeleted(course, appState)}>Delete</button>
      </div>

    </div>
  );

});

export function onCourseEdited(course: Course) {
  course.description = `Edited: ${course.description}`;
}

export async function onCourseDeleted(deleted: Course, appState: AppState) {
  /*

  const response = await fetch(`/courses/${deleted.id}`,
    {
      method: "DELETE"
    }
  );

  */

  console.log(`Deleting course with id ${deleted?.id}`);

  const newCourses = [...appState.courses];

  const index = newCourses.findIndex(course => course.id == deleted.id);

  console.log(`Deleting course at index ${index}`);

  newCourses.splice(index, 1);

  appState.courses = newCourses;

  console.log(`new store courses `, appState.courses);

}

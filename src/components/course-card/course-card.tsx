import { component$, useContext, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./course-card.css?inline";
import { Course } from "~/models/course";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { appContext } from "~/root";
import { deleteCourse } from "~/store/delete-course";
import { AppState } from "~/store/app-state";


interface CourseCardProps {
  courseId: string;
}


export default component$((props: CourseCardProps) => {

  const {courseId} = props;

  useStylesScoped$(styles);

  const nav = useNavigate();

  const appState = useContext(appContext);

  const course = appState.courses.find(course => course.id == courseId) as Course;

  return (
    <div class="course-card">
      <img class="card-image" src={course?.iconUrl} />
      <div class="card-title">{course?.description}</div>
      <div class="card-description">{course?.longDescription}</div>
      <div class="card-actions">
        <button onClick$={() => nav.path = `/courses/${course?.url}`}>
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

  appState.courses = deleteCourse(deleted, appState.courses);

  console.log(`new store courses `, appState.courses);

}

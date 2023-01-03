import { component$, useContext, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./course-card.css?inline";
import { Course } from "~/models/course";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { appContext } from "~/root";
import { deleteCourse } from "~/store/delete-course";
import { AppState } from "~/store/app-state";
import { findCourseById } from "~/store/find-course-by-id";


interface CourseCardProps {
  courseId: string;
}


export default component$((props: CourseCardProps) => {

  const {courseId} = props;

  useStylesScoped$(styles);

  const nav = useNavigate();

  const appState = useContext(appContext);

  const course = findCourseById(courseId, appState.courses) as Course;

  return (
    <div class="course-card">
      <img class="card-image" src={course?.iconUrl} />
      <div class="card-title">{course?.description}</div>
      <div class="card-description">{course?.longDescription}</div>
      <div class="card-actions">
        <button onClick$={() => nav.path = `/courses/${course?.url}`}>
          View
        </button>
        <button onClick$={() => nav.path = `/courses/${course?.url}/edit-course` }>Edit</button>
        <button onClick$={() => onCourseDeleted(course.id, appState)}>Delete</button>
      </div>

    </div>
  );

});



export async function onCourseDeleted(courseId: string, appState: AppState) {

  try {

    await fetch(`http://localhost:9000/api/courses/${courseId}`, { method: "DELETE" });

    appState.courses = deleteCourse(courseId, appState.courses);

    console.log(`new store courses `, appState.courses);

  }
  catch(err) {
    console.log(`Error deleting course, reason:`, err);
    alert(`Could not delete course with id ${courseId}`);
  }

}

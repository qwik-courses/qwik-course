import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import styles from './course-card-list.css?inline';
import CourseCard from "~/components/course-card/course-card";
import { Course } from "~/models/course";
import { appContext } from "~/root";

interface CourseCardListProps {
  courses: Course[];
}

export default component$(() => {

  useStylesScoped$(styles);

  const appState = useContext(appContext);

  return (
    <div class="course-cards-list">
      <h2 class='title'>All Courses</h2>
      {
        appState.courses.map(course => (
            <div class="card-container">
              <CourseCard courseId={course.id} />
            </div>
          )
        )
      }
    </div>
  );
});

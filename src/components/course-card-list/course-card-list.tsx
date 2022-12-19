import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './course-card-list.css?inline';
import CourseCard from "~/components/course-card/course-card";
import { Course } from "~/models/course";

interface CourseCardListProps {
  courses: Course[];
}

export default component$((props: CourseCardListProps) => {

  useStylesScoped$(styles);

  return (
    <div class="course-cards-list">
      {
        props.courses.map(course => (
            <div class="card-container">
              <CourseCard course={course} />
            </div>
          )
        )
      }
    </div>
  );
});

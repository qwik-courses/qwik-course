import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from './course-card.css?inline';
import { Course } from "~/models/course";

interface CourseCardProps {
  course: Course;
}

export default component$( (props:CourseCardProps) => {

  useStylesScoped$(styles);

  const store = useStore({course: props.course}, {recursive: true});

  const {course} = store;

  return (
  <div class="course-card">
    <img class='card-image' src={course.iconUrl}/>
    <div class='card-title'>{course.description}</div>
    <div class='card-description'>{course.longDescription}</div>
    <div class='card-actions'>
        <button>View</button>
        <button onClick$={() => onCourseEdited(course)}>Edit</button>
    </div>

  </div>
  );

});

export function onCourseEdited(course: Course) {
  console.log(`Hello World`);
  course.description = `Edited: ${course.description}`;
}

import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './course-card.css?inline';
import { Course } from "~/models/course";

interface CourseCardProps {
  course: Course;
}

export default component$( (props:CourseCardProps) => {

  useStylesScoped$(styles);

  return (
  <div class="course-card">
    <img class='card-image' src={props.course.iconUrl}/>
    <div class='card-title'>{props.course.description}</div>
    <div class='card-description'>{props.course.longDescription}</div>
  </div>
  );

});

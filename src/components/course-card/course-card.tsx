import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './course-card.css?inline';
import { Course } from "~/models/course";

interface CourseCardProps {
  course: Course;
}

export default component$( (props:CourseCardProps) => {

  useStylesScoped$(styles);

  return (
    <h1>{props.course.description}</h1>
  );

});

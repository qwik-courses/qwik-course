import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./course-card.css?inline";
import { Course } from "~/models/course";
import { Link, useNavigate } from "@builder.io/qwik-city";

interface CourseCardProps {
  course: Course;
}


export default component$((props: CourseCardProps) => {

  useStylesScoped$(styles);

  const nav = useNavigate();

  const store = useStore({ course: props.course }, { recursive: true });

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
        <button>Delete</button>
      </div>

    </div>
  );

});

export function onCourseEdited(course: Course) {
  course.description = `Edited: ${course.description}`;
}


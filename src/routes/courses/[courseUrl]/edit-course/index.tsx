
import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import styles from "./edit-course.css?inline";
import { appContext } from "~/root";
import { Course } from "~/models/course";
import { findCourseByUrl } from "~/store/find-course-by-url";

export default component$(() => {

  useStylesScoped$(styles);

  const location = useLocation();

  const courseUrl = location.params.courseUrl;

  const appState = useContext(appContext);

  const course = findCourseByUrl(courseUrl, appState.courses) as Course;

  return (
    <div class='edit-course'>

      <h1> Edit Course</h1>

      <div class='edit-course-form'>

        <input value={course?.description} />

      </div>

    </div>
  );
});


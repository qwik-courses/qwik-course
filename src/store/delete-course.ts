import { Course } from "~/models/course";
import { AppState } from "~/store/app-state";


export function deleteCourse(deleted: Course, courses:Course[]) {

  console.log(`Deleting course with id ${deleted?.id}`);

  const newCourses = [...courses];

  const index = newCourses.findIndex(course => course.id == deleted.id);

  console.log(`Deleting course at index ${index}`);

  newCourses.splice(index, 1);

  console.log(`new store courses `, newCourses);

  return newCourses;

}

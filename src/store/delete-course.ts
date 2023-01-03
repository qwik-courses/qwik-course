import { Course } from "~/models/course";


export function deleteCourse(courseId: string, courses:Course[]) {

  console.log(`Deleting course with id ${courseId}`);

  const newCourses = [...courses];

  const index = newCourses.findIndex(course => course.id == courseId);

  console.log(`Deleting course at index ${index}`);

  newCourses.splice(index, 1);

  console.log(`new store courses `, newCourses);

  return newCourses;

}

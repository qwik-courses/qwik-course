import { Course } from "~/models/course";


export function findCourseById(courseId: string, courses:Course[]) {
  return courses.find(course => course.id == courseId);
}

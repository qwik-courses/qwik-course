import { Course } from "~/models/course";


export function findCourseByUrl(url: string, courses:Course[]) {
  return courses.find(course => course.url == url);
}

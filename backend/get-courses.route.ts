

import {Request, Response} from 'express';
import {COURSES} from "./db-data";



export function getAllCourses(req: Request, res: Response) {

  // throw "Error";

  setTimeout(() => {

    res.status(200).json(Object.values(COURSES).sort((c1:any, c2:any) => c1.seqNo - c2.seqNo));

  }, 2000);


}


export function getCourseById(req: Request, res: Response) {

  const courseId = req.params["id"];

  const courses:any = Object.values(COURSES);

  const course = courses.find(course => course.id == courseId);

  res.status(200).json(course);
}

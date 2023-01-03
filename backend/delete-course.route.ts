

import {Request, Response} from 'express';
import {COURSES} from "./db-data";




export function deleteCourseById(req: Request, res: Response) {

  const courseId = req.params["id"];

  console.log(`Deleting course with id ${courseId}`);

  delete COURSES[courseId];

  res.status(200).json({ status: "OK" });
}

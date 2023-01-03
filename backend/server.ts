import * as express from 'express';
import {Application} from "express";
import {getAllCourses, getCourseById} from "./get-courses.route";
import {searchLessons} from "./search.route";
import { deleteCourseById } from "./delete-course.route";


const app: Application = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.route('/').get((req, res) => {
  res.status(200).send(`<h1>Server is up and running.</h1>`);
});

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/courses/:id').delete(deleteCourseById);

app.route('/api/lessons').get(searchLessons);




const httpServer:any = app.listen(9000, () => {
  console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




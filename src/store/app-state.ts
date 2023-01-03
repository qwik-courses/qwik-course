import { Course } from "~/models/course";

export const APP_STATE_CONTEXT_ID = "AppState";

export interface AppState {
  courses: Course[];
}


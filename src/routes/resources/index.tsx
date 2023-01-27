import { component$, useResource$, Resource } from "@builder.io/qwik";
import { Course } from "~/models/course";


export default component$(() => {

  return (
    <>

    </>
  )
})

export async function getCourses() {
  const response = await fetch(`http://localhost:9000/api/courses`);
  return response.json();
}



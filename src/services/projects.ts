import { Project } from "../types/project";
import { getData } from "./httpClient";

export function getProjects() {
  return getData<Project[]>('api/projects.json')
}
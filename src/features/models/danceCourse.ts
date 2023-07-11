import { Image } from "../types/image";
import { Video } from "../types/video";

export type DanceCourse = {
  id: string,
  courseName: string,
  level: string,
  priceCourse: string,
  totalClasses: string,
  initialDescription: string,
  largeDescription: string,
  image: Image,
  video: Video,
}

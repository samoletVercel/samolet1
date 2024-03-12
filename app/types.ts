import { StaticImageData } from "next/image";

export interface Project {
  gridColumn?: string;
  gridRow?: string;
  img: StaticImageData;
  name: string;
  tags: Array<string>;
  year?: string;
  link?: string;
}

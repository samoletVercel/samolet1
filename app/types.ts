import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  cat: string;
  preview: {id: number, src: string, type: string};
  title: string;
  tags: Array<string>;
  year?: string;
  link?: string;
}

export interface PublishingProject {
  img: StaticImageData;
  name: string;
  tags: Array<string>;
  author: string;
  scan?: boolean;
}

export interface SpecialProject {
  img: StaticImageData;
  name: string;
  tags: Array<string>;
}

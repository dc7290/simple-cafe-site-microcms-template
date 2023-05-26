import type { MicroCMSImage } from "microcms-js-sdk";

export type News = {
  title: string;
  thumbnail: MicroCMSImage;
  body: string;
};

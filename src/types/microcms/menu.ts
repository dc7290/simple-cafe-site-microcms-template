import type { MicroCMSImage } from "microcms-js-sdk";

export type Menu = {
  name: string;
  price: number;
  description: string;
  image: MicroCMSImage;
  kind: ["ドリンク" | "フード" | "デザート"];
  times: ("モーニング" | "ランチ" | "ディナー")[];
};

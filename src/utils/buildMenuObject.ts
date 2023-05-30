import type { Menu } from "@type/microcms/menu";
import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type MenuObject = {
  morning: {
    drink: Pick<Menu, "name" | "price" | "description" | "image">[];
    food: Pick<Menu, "name" | "price" | "description" | "image">[];
    desert: Pick<Menu, "name" | "price" | "description" | "image">[];
  };
  lunch: {
    drink: Pick<Menu, "name" | "price" | "description" | "image">[];
    food: Pick<Menu, "name" | "price" | "description" | "image">[];
    desert: Pick<Menu, "name" | "price" | "description" | "image">[];
  };
  dinner: {
    drink: Pick<Menu, "name" | "price" | "description" | "image">[];
    food: Pick<Menu, "name" | "price" | "description" | "image">[];
    desert: Pick<Menu, "name" | "price" | "description" | "image">[];
  };
};

export const buildMenuObject = (
  menuList: (Menu & MicroCMSListContent)[]
): MenuObject => {
  const morningMenuList = menuList
    .filter((menu) => menu.times.includes("モーニング"))
    .sort((a, b) => a.times.length - b.times.length);
  const lunchMenuList = menuList
    .filter((menu) => menu.times.includes("ランチ"))
    .sort((a, b) => a.times.length - b.times.length);
  const dinnerMenuList = menuList
    .filter((menu) => menu.times.includes("ディナー"))
    .sort((a, b) => a.times.length - b.times.length);

  const pick = (array: (Menu & MicroCMSContentId & MicroCMSDate)[]) =>
    array.map(
      ({
        name,
        price,
        description,
        image,
      }): Pick<Menu, "name" | "price" | "description" | "image"> => ({
        name,
        price,
        description,
        image,
      })
    );

  const menuObject = {
    morning: {
      drink: pick(
        morningMenuList.filter((menu) => menu.kind.includes("ドリンク"))
      ),
      food: pick(
        morningMenuList.filter((menu) => menu.kind.includes("フード"))
      ),
      desert: pick(
        morningMenuList.filter((menu) => menu.kind.includes("デザート"))
      ),
    },
    lunch: {
      drink: pick(
        lunchMenuList.filter((menu) => menu.kind.includes("ドリンク"))
      ),
      food: pick(lunchMenuList.filter((menu) => menu.kind.includes("フード"))),
      desert: pick(
        lunchMenuList.filter((menu) => menu.kind.includes("デザート"))
      ),
    },
    dinner: {
      drink: pick(
        dinnerMenuList.filter((menu) => menu.kind.includes("ドリンク"))
      ),
      food: pick(dinnerMenuList.filter((menu) => menu.kind.includes("フード"))),
      desert: pick(
        dinnerMenuList.filter((menu) => menu.kind.includes("デザート"))
      ),
    },
  };

  return menuObject;
};

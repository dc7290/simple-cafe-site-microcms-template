import * as cheerio from "cheerio";

export const processContent = (content: string) => {
  const $ = cheerio.load(content, {}, false);

  $("h3").each((_, elem) => {
    $(elem).replaceWith(`<h4>${$(elem).html()}</h4>`);
  });

  $("h2").each((_, elem) => {
    $(elem).replaceWith(`<h3>${$(elem).html()}</h3>`);
  });

  $("h1").each((_, elem) => {
    $(elem).replaceWith(`<h2>${$(elem).html()}</h2>`);
  });

  $("img").each((_, elem) => {
    const originalSrc = $(elem).attr("src");
    $(elem).attr("src", `${originalSrc}?w=960`);
  });

  return $.html();
};

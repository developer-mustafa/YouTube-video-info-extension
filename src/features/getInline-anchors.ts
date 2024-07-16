import type { PlasmoGetInlineAnchorList } from "plasmo";

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const videoElements = document.querySelectorAll(
    "#contents .ytd-rich-grid-row .ytd-rich-item-renderer"
  );

  return Array.from(videoElements).map((element) => ({
    element,
    insertPosition: "afterend"
  }));
};

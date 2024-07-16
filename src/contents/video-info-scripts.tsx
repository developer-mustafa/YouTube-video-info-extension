import { convertDateToSeconds } from "../utility/date-utils";
import { updateVideoElements } from "../components/update-video-elements";
import type { PlasmoCSConfig, PlasmoGetInlineAnchorList } from "plasmo";
import { useEffect } from "react";

export const config: PlasmoCSConfig = {
  matches: ["https://*.youtube.com/*"]
};

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const anchors = document.querySelectorAll(
    "#contents ytd-rich-grid-row ytd-rich-item-renderer ytd-video-meta-block #byline-container"
  );
  return Array.from(anchors).map((element) => ({
    element,
    insertPosition: "afterend"
  }));
};

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = `
    .upload-date-count, .view-count {
      color:#a12ff5;
      font-weight: bold;
      font-size: 15px; 
      margin-top: 4px; 
      margin-left: 4px; 
    
    
    }
  `;
  return style;
};




const App = () => {
  useEffect(() => {
    const style = getStyle();
    document.head.appendChild(style);

    updateVideoElements();

    const observer = new MutationObserver(() => {
      updateVideoElements();
    });

    observer.observe(document.querySelector("#contents"), {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return <div className="p-4 bg-slate-600 text-white">

        </div>;
};

export default App;

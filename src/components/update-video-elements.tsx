import { convertDateToSeconds } from "@/utility/date-utils";

export const updateVideoElements = () => {
    const videoElements = document.querySelectorAll(
      "#contents .ytd-rich-grid-row .ytd-rich-item-renderer"
    );
  
    videoElements.forEach((videoElement) => {
      const metadataItems = videoElement.querySelectorAll(
        ".inline-metadata-item.style-scope.ytd-video-meta-block"
      );
  
      if (metadataItems.length >= 2) {
        const [viewCountElement, uploadDateElement] = metadataItems;
  
        if (viewCountElement && !viewCountElement.querySelector(".view-count")) {
          const viewCount = viewCountElement.textContent.trim();
          viewCountElement.textContent = "";
          const viewCountSpan = document.createElement("span");
          viewCountSpan.className = "view-count";
          viewCountSpan.innerText = `${viewCount}`;
          viewCountElement.appendChild(viewCountSpan);
        }
  
        if (uploadDateElement && !uploadDateElement.querySelector(".upload-date-count")) {
          const uploadDateText = uploadDateElement.textContent.trim();
          const secondsSinceUpload = convertDateToSeconds(uploadDateText);
          uploadDateElement.textContent = "";
          const uploadDateSpan = document.createElement("span");
          uploadDateSpan.className = "upload-date-count";
          uploadDateSpan.innerText = `Upload: ${secondsSinceUpload} s ago`;
          uploadDateElement.appendChild(uploadDateSpan);
        }
      }
    });
  };
  
export const convertDateToSeconds = (dateText: string): number => {
  const now = new Date();
  const dateParts = dateText.split(" ");
  let seconds = 0;

  if (dateParts.length === 2) {
    const value = parseInt(dateParts[0], 10);
    const unit = dateParts[1].toLowerCase();

    switch (unit) {
      case "second":
      case "seconds":
        seconds = value;
        break;
      case "minute":
      case "minutes":
        seconds = value * 60;
        break;
      case "hour":
      case "hours":
        seconds = value * 3600;
        break;
      case "day":
      case "days":
        seconds = value * 86400;
        break;
      case "week":
      case "weeks":
        seconds = value * 604800;
        break;
      case "month":
      case "months":
        seconds = value * 2592000; // Approximate month
        break;
      case "year":
      case "years":
        seconds = value * 31536000;
        break;
      default:
        break;
    }
  }

  return now.getTime() / 1000 - seconds;
};


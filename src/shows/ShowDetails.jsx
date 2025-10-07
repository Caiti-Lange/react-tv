import "./shows.css";
import "./data.js";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  if (!show) {
    throw Error("Please select a show to proceed!");
  }
  return <div className="show-details"></div>;
}

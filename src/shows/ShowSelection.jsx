import "./shows.css";
import "./data.js";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <div
          key={show.name}
          className="ShowTitle"
          onClick={(e) => {
            e.preventDefault();
            setSelectedShow(show);
          }}
        >
          {show.name}
        </div>
      ))}
    </nav>
  );
}

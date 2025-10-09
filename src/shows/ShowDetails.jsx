import "./shows.css";
import "./data.js";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";
import { useEffect, useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    setSelectedEpisode(null);
  }, [show]);

  if (!show) {
    return (
      <div>
        <p>Please select a show to proceed!</p>
      </div>
    );
  }

  return (
    <div className="show-details">
      <h1>{show.name}</h1>
      <p>Genre: {show.genre}</p>
      <EpisodeList
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}

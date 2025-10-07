/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import { shows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

export default function App() {
  const [showList] = useState(shows);
  const [selectedShow, setSelectedShow] = useState();

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection
          shows={shows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowList showList={showList} setSelectedShow={setSelectedShow} />
        <ShowDetails selectedShow={selectedShow} />
      </main>
    </>
  );
}

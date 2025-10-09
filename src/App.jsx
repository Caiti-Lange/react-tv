/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";

export default function App() {
  const [showList] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState();

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection shows={showList} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        {/* <ShowList showList={showList} setSelectedShow={setSelectedShow} /> */}
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}

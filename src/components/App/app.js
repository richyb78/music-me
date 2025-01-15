import React, { useState } from "react";
import SearchResults from "../SearchResults/Searchresults";
import styles from "./App.module.css";
import Playlist from '../Playlist/Playlist';

function App () {

  const [searchResults, setSearchResults] = useState([
    {
      name: 'love Blob',
      artist: 'blobber',
      album: 'the best of blobber',
      id: 1,
  },
    {
      name: 'baby tonight',
      artist: 'big geoff',
      album: 'the best of big ol geoff',
      id: 2,
    },
    {
      name: 'i wany a burger',
      artist: 'burger boy',
      album: 'the best of burger boy',
      id: 3,
    },
  ]);

  const [playlistName, setPlaylistName] = useState();
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name",
      artist: "Example Playlist Artist",
      album: 'Example Playlist Artist',
      id: 1,
    },
    {
      name: "Another Example Playlist Name",
      artist: "Another Example Playlist Artist",
      album: 'Another Example Playlist Artist',
      id: 2,
    },
  ]);

    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>

        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          
          
          <div className={styles['App-playlist']}>
            <SearchResults userSearchResults = {searchResults} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
          </div>
        </div>
      </div>
        );
}

export default App;
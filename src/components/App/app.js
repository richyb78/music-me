import React, { useState } from "react";
import SearchResults from "../SearchResults/Searchresults";
import styles from "./App.module.css";
import Playlist from '../Playlist/Playlist';
import Track from "../Track/Track";
import SearchBar from "../SearchBar/Searchbar";
import { Spotify } from "../../util/Spotify/Spotify";

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
      id: 4,
    },
    {
      name: "Another Example Playlist Name",
      artist: "Another Example Playlist Artist",
      album: 'Another Example Playlist Artist',
      id: 5,
    },
  ]);
    function addTrack(track) {
      const existingTrack = playlistTracks.find((t) => t.id === track.id);
      const newTrack = playlistTracks.concat(track);
      if (existingTrack) {
        console.log('Sorry, Track already exists in Playlist')
      } else {
        setPlaylistTracks(newTrack);
      }
    }

    function removeTrack(track) {
      const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
      setPlaylistTracks(existingTrack);
    }

    function updatePlaylistName(name) {
      setPlaylistName(name)
    }

    function savePlaylist() {
      const trackURIs = playlistTracks.map((t) => t.uri);
      Spotify.savePlaylist(playlistName, trackURIs).then(() => {
        updatePlaylistName("New Playlist");
        setPlaylistTracks([]);
      });
    }
  
    function search(term) {
      Spotify.search(term).then((result) => setSearchResults(result));
      console.log(term);
    }
    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>

        <div className={styles.App}>
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar onSearch={search} />
          
          
          <div className={styles['App-playlist']}>
            <SearchResults userSearchResults = {searchResults} onAdd={addTrack} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack} 
            onNameChange={updatePlaylistName}
            onSave={savePlaylist} />
          </div>
        </div>
      </div>
        );
}

export default App;
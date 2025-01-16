import React from "react";
import styles from "./Searchresults.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
        {/* <!-- Add a TrackList component --> */}
        <Tracklist
        userSearchResults={props.userSearchResults} 
        onAdd={props.onAdd} 
        onRemove={props.onRemove} 
        isRemoval={false} />
      </div>
        );
}

export default SearchResults;
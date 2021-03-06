import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track'

class TrackList extends Component{
  render() {
    return (
      <div className="TrackList">
    			{this.props.tracks.map(track => <Track
    				key={track.id}
    				track={track}
    				name={track.name}
    				artist={track.artist}
    				album={track.album}
    				onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
    			/>
    		)}
			</div>
    )
  }
};

export default TrackList;

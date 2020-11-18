import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class AppComponent extends React.Component {
  state = { videos: [], selectedVideo: null };

  handleVideoSearch = async (term) => {
    console.log(`Term: ${term}`);
    const videoResult = await youtube.get("/search", { params: { q: term } });
    console.log(videoResult.data.items);
    this.setState({ videos: videoResult.data.items, selectedVideo: videoResult.data.items[0] });
  };

  onVideoSelect = (video) => {
    console.log("From the app component", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <div>Videos App!</div>
        <SearchBar OnSearchSubmit={this.handleVideoSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppComponent;

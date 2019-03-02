import React,{Component} from 'react';
const YouTubeComponent = (props) => {
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/${props.youtubeId}`}
          frameBorder="0"
        />
      </div>
    );
  };
// class YouTubeComponent extends Component {
//     _onReady = (event) => {

//         event.target.pauseVideo();
//       }
//   render() {
//     const opts = {
//       height: '200',
//       width: '350',
//       playerVars: { // https://developers.google.com/youtube/player_parameters
//         autoplay: 1
//       }
//     };

//     return (
//       <YouTube
//         videoId={this.props.videoId}
//         opts={opts}
//         onReady={this._onReady}
//       />
//     );
//   }

 
// }
export default YouTubeComponent
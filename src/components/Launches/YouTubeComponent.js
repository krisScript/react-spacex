import React from 'react';
import PropTypes from 'prop-types';
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

  
YouTubeComponent.propTypes = {
  youtubeId: PropTypes.string.isRequired
};
export default YouTubeComponent
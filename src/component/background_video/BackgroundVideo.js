import React, { useRef } from 'react';

const BackgroundVideo = () => {
  const iframeRef = useRef(null);

  const restartVideo = () => {
    if (iframeRef.current) {
      // Reload the iframe to restart the video
      iframeRef.current.contentWindow.location.reload(true);
    }
  };

  return (
    <div style={{
      display:"flex",
      alignItems:'center',
      justifyContent:'center'
      ,marginTop:'100px'
    }}>
    <div style={{
      alignItems: "center",
      justifyContent: 'center',
      borderRadius: '15px',
      backgroundColor: 'black',
      padding: '10px',
      width: '90%',

      display: "flex"
    }}>

      <iframe
        ref={iframeRef}
        width="700px"
        height="300px"
        src="https://www.youtube.com/embed/XBofm9O1o5Q?autoplay=1&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onEnded={restartVideo}
      ></iframe>
    </div></div>
  );
}

export default BackgroundVideo;

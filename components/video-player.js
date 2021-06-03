import Hls from "hls.js";
import { useMemo, useRef, useEffect } from "react";

export default function VideoPlayer({ playbackId }) {
  const playbackUrl = useMemo(() => {
    return `https://stream.mux.com/${playbackId}.m3u8`;
  }, [playbackId]);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let hls;

    if (video) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = playbackUrl;
      } else if (Hls.isSupported) {
        hls = new Hls();
        hls.loadSource(playbackUrl);
        hls.attachMedia(video);
      } else {
        console.error("unable to play hls source");
      }
    }
  }, [playbackUrl, videoRef]);

  return (
    <div>
      <h1>{playbackId}</h1>
      <video ref={videoRef} />
    </div>
  );
}

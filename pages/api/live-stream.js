import Mux from "@mux/mux-node";

const LIVE_STREAM_ID = "Y4LwiBV01xOv2dN7013cshs02yMzoaWbRPuv8sOJbNtGyU";

export default async function LiveStreamHandler(req, res) {
  const { Video } = new Mux();

  const liveStream = await Video.LiveStreams.get(LIVE_STREAM_ID);

  res.json({
    status: liveStream.status,
    playbackId: liveStream.playback_ids[0].id
  });
}

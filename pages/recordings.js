import Nav from "../components/nav";
import Mux from "@mux/mux-node";
import VideoPlayer from "../components/video-player";

export async function getStaticProps() {
  const { Video } = new Mux();

  const assets = await Video.Assets.list();

  return {
    props: {
      assets: assets.map((asset) => ({
        playbackId: asset.playback_ids[0].id,
        duration: asset.duration
      }))
    }
  };
}

export default function Recordings({ assets }) {
  return (
    <div>
      <Nav />
      <pre>{JSON.stringify(assets, null, 2)}</pre>
      <h1>recordings</h1>
      {assets &&
        assets.map((asset) => {
          return (
            <div key={asset.playbackId}>
              <VideoPlayer playbackId={asset.playbackId} />
            </div>
          );
        })}
    </div>
  );
}

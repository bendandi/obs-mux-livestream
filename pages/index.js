import useSWR from "swr";
import Nav from "../components/nav";
import VideoPlayer from "../components/video-player";

const fetcher = (url) => fetch(url).then((resp) => resp.json());

export default function IndexPage() {
  const { data, error, isValidating } = useSWR("/api/live-stream", fetcher, {
    refreshInterval: 5000
  });

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error fetching live stream</div>;

  const { status, playbackId } = data;

  return (
    <>
      <Nav />
      <h1>OBS Mux livestream</h1>
      <div className="refresh-indicator">
        {isValidating && <div>refreshing...</div>}
      </div>
      {status === "idle" && <span>I'm not streaming right now</span>}
      {status === "active" && <span>We're live!</span>}
      {status === "active" && <VideoPlayer playbackId={playbackId} />}
      <style jsx>{`
        .refresh-indicator {
          height: 20px;
        }
      `}</style>
    </>
  );
}

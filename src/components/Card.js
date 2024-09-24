import { forwardRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Card = forwardRef(({ result }, ref) => {
  return (
    <li
      ref={ref}
      className="p-4 border rounded-lg bg-white shadow-md w-full max-w-5xl mx-20"
    >
      <div className="flex">
        <img
          className="rounded-md w-1/6 card-img-top"
          src={"https://picsum.photos/id/870/300/300?grayscale&blur=2"}
          data-src={result.artworkUrl100}
          alt={result.trackName}
          loading="lazy"
        />
        <div className="mx-6 flex flex-col justify-center items-center content-center w-5/6">
          <p className="font-bold">{result.trackName}</p>
          <p className="text-base">Album: {result.collectionName}</p>
          <p className="text-sm">Artist(s): {result.artistName}</p>
          <AudioPlayer
            className="mt-5"
            preload="metadata"
            autoPlay={false}
            autoPlayAfterSrcChange={false}
            src={result.previewUrl}
            volume={0.5}
          />
          {/* <audio controls="controls">
            <source src={result.previewUrl} type="audio/m4a" />
          </audio> */}
        </div>
      </div>
    </li>
  );
});

export default Card;

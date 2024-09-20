import { forwardRef } from "react";

const Card = forwardRef(({ result }, ref) => {
  return (
    <li
      ref={ref}
      className="p-4 border rounded-lg bg-white shadow-md max-w-4xl mx-20"
    >
      <div className="flex">
        <img
          className="rounded-md"
          src={result.artworkUrl100}
          alt={result.trackName}
        />
        <div className="mx-6 flex flex-col justify-center items-center content-center">
          <p className="font-bold">{result.trackName}</p>
          <p className="text-base">Album: {result.collectionName}</p>
          <p className="text-sm">Artist(s): {result.artistName}</p>
        </div>
      </div>
    </li>
  );
});

export default Card;

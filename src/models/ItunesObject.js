class ItunesItem {
  constructor(item) {
    this.trackId = item.trackId || null;
    this.trackName = item.trackName || "Unknown Track";
    this.trackName = item.artistName || "Unknown Artist";
    this.collectionName = item.collectionName || "Unknown Collection";
    this.imageUrl = item.artworkUrl100 || "default-image-url.png"; // Use a default image if null
  }
}

export default ItunesItem;

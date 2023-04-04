export const GOOGLE_API_KEY = "AIzaSyAMjatmBkAlepRo-00WjGDT0hrfPHXdq00";

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/comments?key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=YOURAPIKEY";

export const OFFSET_LIVE_CHAT = 10;

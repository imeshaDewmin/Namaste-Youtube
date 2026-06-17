export const MENU_ICON_URL = "https://static.thenounproject.com/png/547174-200.png";

export const YOUTUBE_LOGO_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png?utm_source=meta.wikimedia.org&utm_campaign=index&utm_content=thumbnail";

export const USER_ICON_URL = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";

const API_KEY = process.env.REACT_APP_YT_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`;
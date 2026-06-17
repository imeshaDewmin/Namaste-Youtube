const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  const { viewCount } = statistics;
  return (
    <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden border border-transparent hover:border-gray-200
    cursor-pointer hover:shadow-lg transition-shadow duration-300">

      <img
        src={thumbnails?.high?.url}
        alt={title}
        className="w-full h-44 object-cover"
      />

      <div className="p-3">

        <h2 className="text-sm font-semibold line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-500 text-xs mt-1">
          {channelTitle}
        </p>

        <p className="text-gray-400 text-xs mt-1">
          {viewCount?.toLocaleString()} views
        </p>
      </div>
    </div>
  )
}
export default VideoCard;
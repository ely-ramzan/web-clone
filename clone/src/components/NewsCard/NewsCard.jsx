const NewsCard = ({ image, title }) => {
  return (
    <div className="flex flex-col">
      <img 
        src={image} 
        alt={title}
        className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
      />
      <div className="relative pl-4">
        <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-300"></div>
        <h3 className="text-sm text-gray-700 font-medium">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;

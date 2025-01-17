const CardMenu = ({ image, title }) => {
  return (
    <div className="relative group">
      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
        {/* Image Container */}
        <div className="w-full aspect-square bg-[#E5F985] p-2">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain p-2"
          />
        </div>
        
        {/* Text Content Container */}
        <div className="p-3 relative">
          {/* Vertical Line */}
          <div className="absolute left-3 top-0 w-0.5 h-full bg-gray-300"></div>
          
          {/* Text Content with padding for line */}
          <div className="pl-4">
            <h3 className="text-sm font-medium text-gray-800">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu; 
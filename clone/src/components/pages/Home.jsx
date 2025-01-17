import { useState } from "react";

import banner1 from "../../assets/banner_1.jpeg";
import banner2 from "../../assets/banner_2.png";

import dlerLogo from "../../assets/DLER.jpg";

import thumbnail from "../../assets/thumbnail.jpg";

import boss2 from "../../assets/boss2.png";

import gif from "../../assets/gif.gif";

import CardMenu from "../CardMenu/CardMenu";

import card2 from "../../assets/card2.jpg";

import NewsCard from "../NewsCard/NewsCard";

import lastBanner from '../../assets/last_banner.jpg';

import uni from '../../assets/uni.png';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Array of 6 cards with same data
  const cards = Array(6).fill({
    image: gif,
    title: "Cicada Top 23 (Australia)",
  });

  const newsCards = [
    {
      image: card2,
      title: "DLE-R to surpass other DLE",
    },
    {
      image: card2,
      title: "Rio Tinto backed breakthrough to cut reliance on china",
    },
    {
      image: card2,
      title:
        "AFR BOSS Most Innovative Company in the Agriculture, Mining, Engineering and Utilities Sector",
    },
  ];

  return (
    <div className="w-full">
      {/* Banner Section - Full width */}
      <div className="relative h-[400px] w-full">
        <img
          src={banner1}
          alt="Sustainable Lithium Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay with text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-8xl  mb-4">Sustainable</h1>
          <h1 className="text-8xl ">Lithium</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col items-center">
        {/* DLE-R Logo and Description */}
        <div className="w-full max-w-7xl px-4 py-16 flex flex-col items-center">
          <img src={dlerLogo} alt="DLE-R Logo" className="h-28 mb-8" />
          <p className="text-2xl md:text-3xl text-center max-w-4xl mx-auto text-gray-700 font-bold mb-24">
            We're unlocking a green future with the cleanest, most versatile and
            most cost-efficient method of extracting and refining lithium, the
            fundamental element of a sustainable future
          </p>

          {/* Thumbnail Image */}
          <div
            className="relative w-full max-w-5xl mb-28 cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={thumbnail}
              alt="Process Thumbnail"
              className="w-full  shadow-lg"
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-blue-600 border-b-[15px] border-b-transparent ml-2"></div>
                </div>
              </div>
            )}
          </div>

          {/* BOSS Award Image with Link */}
          <a
            href="https://www.afr.com/work-and-careers/leaders/how-this-aussie-mining-tech-company-is-doing-its-bit-for-the-planet-20240919-p5kbx8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-3xl mb-16 cursor-pointer"
          >
            <img
              src={boss2}
              alt="AFR BOSS Most Innovative Companies Award"
              className="w-full  shadow-lg"
            />
          </a>

          {/* Cards Grid Section */}
          <div className="w-full max-w-7xl px-4 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {cards.map((card, index) => (
                <CardMenu key={index} image={card.image} title={card.title} />
              ))}
            </div>
          </div>

          {/* Horizontal Line */}
          <div className="w-full max-w-7xl border-b border-gray-300 mb-16"></div>

          {/* Banner 2 Section - Full width */}
          <div className="w-full mb-16">
            <img
              src={banner2}
              alt="ElectraLith Banner"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* News Cards Section */}
          <div className="w-full max-w-5xl px-4 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsCards.map((card, index) => (
                <NewsCard 
                  key={index}
                  image={card.image}
                  title={card.title}
                />
              ))}
            </div>
          </div>

          {/* Last Banner Section */}
          <div className="relative w-full mb-16">
            <img 
              src={lastBanner}
              alt="DLE-R Technology"
              className="w-full h-[600px] object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-blue-900/30">
              <div className="container mx-auto h-full flex flex-col justify-center px-8 md:px-16">
                <div className="max-w-4xl">
                  <h2 className="text-4xl md:text-6xl text-white font-light mb-8">
                    No water, no chemicals,<br />
                    renewably powered
                  </h2>
                  <p className="text-white text-lg md:text-xl font-light max-w-3xl italic">
                    Our cutting-edge DLE-R technology revolutionizes Direct Lithium Extraction (DLE) and Refining 
                    processes by extracting and producing battery-grade lithium hydroxide in a single, scalable and 
                    modular step that requires no water or chemicals, running entirely on renewable energy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* University Logos Section */}
          <div className="w-full max-w-7xl px-4 mb-16">
            {/* Heading */}
            <h2 className="text-center text-2xl text-gray-600 mb-12">
              Spun-out of Monash University, our backers are the visionary leaders of their field
            </h2>

            {/* Logos Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              {/* IP Group */}
              <div className="w-52">
                <img 
                  src={uni} 
                  alt="IP Group"
                  className="w-full h-auto"
                />
              </div>

            {/* Monash University */}
            <div className="w-52">
              <img 
                src={uni} 
                alt="Monash University"
                className="w-full h-auto"
              />
            </div>

              {/* Rio Tinto */}
              <div className="w-52">
                <img 
                  src={uni} 
                  alt="Rio Tinto"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import { set } from "mongoose";

const ImageGallery = () => {
  // Placeholder data for images (for demonstration purposes)
  const images = [
    {
      id: 0,
      url: "/images/reuben-mansell-nwOip8AOZz0-unsplash.jpg",
      score: 4,
      keywords: ["glossier", "cream", "pink"],
    },
    {
      id: 1,
      url: "/images/milad-shams-kEgH3e1Cdb4-unsplash.jpg",
      score: 3,
      keywords: ["gold", "hair"],
    },
    {
      id: 2,
      url: "/images/mathilde-langevin-FDRaYqiTY1k-unsplash.jpg",
      score: 2,
      keywords: ["blue", "liquid"],
    },
    {
      id: 3,
      url: "/images/lumin-1mp7rF7_j2I-unsplash.jpg",
      score: 5,
      keywords: ["black"],
    },
    {
      id: 4,
      url: "/images/jocelyn-morales-JiqTLjzEH18-unsplash.jpg",
      score: 5,
      keywords: ["white", "cream"],
    },
    {
      id: 5,
      url: "/images/joanna-kosinska-mVdzV_HTyH4-unsplash.jpg",
      score: 1,
      keywords: ["pink", "powder"],
    },
    {
      id: 6,
      url: "/images/jacinta-christos-4wO5GON3mg4-unsplash.jpg",
      score: 2,
      keywords: ["white"],
    },
    {
      id: 7,
      url: "/images/globencer-OlRckR3Cfxo-unsplash.jpg",
      score: 3,
      keywords: ["pink", "hand cream"],
    },
    {
      id: 8,
      url: "/images/curology-DGH1u80sZik-unsplash.jpg",
      score: 2,
      keywords: ["purple"],
    },
    {
      id: 9,
      url: "/images/christin-hume-0MoF-Fe0w0A-unsplash.jpg",
      score: 3,
      keywords: ["liquid"],
    },
    {
      id: 10,
      url: "/images/carlos-rodriguez-QhK3jcoPCxM-unsplash.jpg",
      score: 4,
      keywords: ["green"],
    },
    {
      id: 11,
      url: "/images/ashley-piszek-crSkE1CKQL0-unsplash.jpg",
      score: 3,
      keywords: ["pink", "red"],
    },
    {
      id: 12,
      url: "/images/anthony-tran-Sd9A6NVHsd4-unsplash.jpg",
      score: 2,
      keywords: ["orange", "fruit"],
    },
    {
      id: 13,
      url: "/images/amy-shamblen-xwM61TPMlYk-unsplash.jpg",
      score: 2,
      keywords: [],
    },
    {
      id: 14,
      url: "/images/amanda-dalbjorn-t7WrWaewbtw-unsplash.jpg",
      score: 3,
      keywords: ["lipstick", "red"],
    },
  ];

  // Sort images based on the score
  const sortedImages = images.sort((a, b) => b.score - a.score);

  // Filter image based on the keyword
  const [searchKeyword, setSearchKeyword] = useState("");

  const [filteredImages, setFilteredImages] = useState(sortedImages);

  // Function for searching images based on keyword
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };
  const handleSearchClick = () => {
    const lowerKeyword = searchKeyword.toLowerCase().trim();

    if (!lowerKeyword) {
      setFilteredImages(sortedImages);
    } else {
      const filtered = sortedImages.filter((image) =>
        image.keywords.some((kw) => kw.toLowerCase().includes(lowerKeyword))
      );
      setFilteredImages(filtered);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  // React Slick settings for the carousel
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(5, sortedImages.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(4, sortedImages.length), // Number of items to show at this breakpoint
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, sortedImages.length), // Number of items to show at this breakpoint
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1, sortedImages.length), // Number of items to show at this breakpoint
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-40 bg-orange-100">
      <h1 className="mb-14 text-6xl font-bold text-center text-orange-200">
        Product Search
      </h1>

      {/* Center the images horizontally with space between */}
      <div className="flex justify-center bg-orange-100">
        <div className="w-4/5">
          {/* React Slick carousel */}
          <Slider {...sliderSettings}>
            {filteredImages.map((image) => (
              <div key={image.id} className="p-4 mx-2 md:mx-4 lg:mx-8 xl:mx-12">
                {/* Card container for each image */}
                <div className="rounded-lg shadow-lg p-4">
                  <img
                    src={image.url}
                    alt={`Image ${image.id}`}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <div className="flex justify-center">
                    Score: {image.score}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="mt-8">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded"
          placeholder="Search images by keyword"
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="mt-4 bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;

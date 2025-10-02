"use client";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CustomerReviews() {
  const rating = 4.1;
  const totalRatings = 10606;

  const ratingDistribution = [
    { stars: 5, percent: 59 },
    { stars: 4, percent: 19 },
    { stars: 3, percent: 7 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 12 },
  ];

  const reviewImages = [
    "/review1.jpg",
    "/r2.jpg",
    "/r3.jpg",
    "/review1.jpg",
    "/r2.jpg",
    "/r3.jpg",
    "/r2.jpg",
    "/r3.jpg",
    
  ];

  const topReviews = [
    {
      name: "Siddharth",
      stars: 5,
      title: "Echo Dot 5 is good smart speaker of small size with some Pros and Cons",
      date: "16 October 2023",
      color: "Blue",
      configuration: "Echo Dot Only",
      verified: true,
      text: "Liked that Echo Dot 5 can be used as external bluetooth speaker even for 2nd generation Fire TV stick..."
    },
    {
      name: "Ananya",
      stars: 4,
      title: "Good value for money",
      date: "10 October 2023",
      color: "Black",
      configuration: "Echo Dot Only",
      verified: true,
      text: "Works well with my Fire TV and Alexa routines. Easy to set up."
    }
  ];

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center text-yellow-400">
        {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
        {halfStar && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} />)}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between mb-12 gap-8">
          {/* Rating Summary */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
            <div className="flex items-center mb-2">
              {renderStars(rating)}
              <span className="ml-2 text-gray-700 font-semibold">{rating} out of 5</span>
            </div>
            <p className="text-gray-500 mb-4">{totalRatings.toLocaleString()} global ratings</p>

            {/* Rating Bars */}
            <div className="space-y-2">
              {ratingDistribution.map((r) => (
                <div key={r.stars} className="flex items-center gap-2">
                  <span className="text-sm">{r.stars} star</span>
                  <div className="flex-1 bg-gray-300 h-2 rounded overflow-hidden">
                    <div className="bg-yellow-400 h-2" style={{ width: `${r.percent}%` }}></div>
                  </div>
                  <span className="text-sm w-10 text-right">{r.percent}%</span>
                </div>
              ))}
            </div>

            {/* Review Button */}
            <button className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition">
              Write a product review
            </button>
          </div>

          {/* Review Images Carousel */}
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold mb-4">Reviews with images</h3>
            <div className="flex items-center gap-2 overflow-x-auto">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"><FaChevronLeft /></button>
              {reviewImages.map((img, i) => (
                <img key={i} src={img} alt={`review ${i}`} className="h-24 w-24 object-cover rounded cursor-pointer" />
              ))}
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"><FaChevronRight /></button>
            </div>
          </div>
        </div>

        {/* Top Reviews */}
        <div className="space-y-8">
          <h3 className="text-xl font-bold mb-6">Top reviews from USA</h3>
          {topReviews.map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 font-semibold">{review.name}</div>
                {renderStars(review.stars)}
              </div>
              <h4 className="font-semibold mb-1">{review.title}</h4>
              <p className="text-gray-500 text-sm mb-2">
                Reviewed on {review.date} | Colour: {review.color} | Configuration: {review.configuration} {review.verified && <span className="text-green-500">Verified Purchase</span>}
              </p>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

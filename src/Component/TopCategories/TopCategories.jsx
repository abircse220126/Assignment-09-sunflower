import React from "react";

const TopCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Browse by Categories
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800">Programming</h3>
            <p className="text-gray-500 text-sm mt-2">
              Web dev, app dev, AI, ML
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800">Music</h3>
            <p className="text-gray-500 text-sm mt-2">
              Guitar, piano, vocal lessons
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
            <p className="text-gray-500 text-sm mt-2">
              English, Spanish, Japanese
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800">
              Fitness & Yoga
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Yoga, meditation, workouts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;

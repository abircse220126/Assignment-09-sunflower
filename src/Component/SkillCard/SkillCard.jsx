import React from "react";

const SkillCard = ({ skill }) => {
  console.log(skill);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img src={skill.image} alt="Skill" className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4">
        {/* Skill Name */}
        <h3 className="text-lg font-semibold text-gray-800">
          {skill.skillName}
        </h3>

        {/* Rating */}
        <p className="mt-2 text-yellow-500 font-medium">⭐ {skill.rating}</p>

        {/* Price */}
        <p className="mt-1 text-gray-700 font-semibold">${skill.price}</p>

        {/* View Details Button */}
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SkillCard;

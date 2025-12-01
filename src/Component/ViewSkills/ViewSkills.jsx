import React, { use } from "react";

const ViewSkills = ({ skillPromiss }) => {
  const viewSkills = use(skillPromiss);
  console.log(viewSkills);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-4">
      {viewSkills.map((viewSkill) => (
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ">
          {/* Image */}
          <img
            src={viewSkill.image}
            alt=""
            className="w-full h-40 object-cover"
          />

          {/* Content */}
          <div className="p-3">
            <p className="text-[10px] text-black mb-1">{viewSkill.skillId}</p>

            <div className="flex justify-between">
              <div>
                <h2 className="text-base font-bold leading-tight text-black">
                  {viewSkill.skillName}
                </h2>
              </div>

              <div>
                <span className="inline-block mt-1 bg-blue-100 text-blue-600 text-[10px] px-2 py-[2px] rounded-full">
                  {viewSkill.category}
                </span>
              </div>
            </div>

            {/* Provider */}
            <div className="mt-2 mb-1">
              <p className="font-semibold text-gray-700 text-sm">
                {viewSkill.providerName}
              </p>
              <p className="text-[11px] text-gray-500">
                {viewSkill.providerEmail}
              </p>
            </div>

            {/* Rating + Price */}
            <div className="flex items-center justify-between mb-1">
              <p className="text-yellow-500 text-xs font-semibold">
                ⭐ {viewSkill.rating}
              </p>
              <p className="text-base font-bold text-green-600">
                ${viewSkill.price}
              </p>
            </div>

            {/* Slots */}
            <p className="text-[11px] text-gray-600 mb-1">
              Slots Available:{" "}
              <span className="font-semibold text-gray-800">
                {viewSkill.slotsAvailable}
              </span>
            </p>

            {/* Description */}
            <p className="text-[11px] text-gray-700 mb-2">
              {viewSkill.description}
            </p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewSkills;

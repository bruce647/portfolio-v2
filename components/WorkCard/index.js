import React from "react";

const WorkCard = ({ img, name, description, details, tags }) => {
  return (
    <div className="flex desktop:flex-row mob:flex-col overflow-hidden rounded-2xl p-4 desktop:gap-24 mob:gap-8 max-w-7xl w-full">
      <div className="w-full md:w-1/2">
        <div className="relative h-64 mob:h-80  rounded-2xl overflow-hidden">
          <img
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-110"
            src={img}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h1 className="text-2xl font-medium">{name || "Project Name"}</h1>
          <p className="mt-2 text-base">{description || "Description"}</p>
          {details && details.length > 0 && (
            <ul className="mt-4 text-base list-disc pl-5 space-y-2">
              {details.map((item, index) => (
                <li key={index}>
                  <span className="font-medium">{item.title}:</span> {item.des}
                </li>
              ))}
            </ul>
          )}
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkCard;

import React from "react";

const WorkCard = ({ img, name, description, details, tags }) => {
  return (
    <div
      className="rounded-2xl flex overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link gap-24"
      style={{ width: "1400px" }}
    >
      <div
        className="relative  rounded-2xl overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto "
        style={{ height: "400px", width: "800px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <div className="flex flex-col justify-between p-4 w-2/3">
        <div>
          <h1 className="text-2xl font-[500]">{name || "Project Name"}</h1>
          <p className="mt-2 text-l">{description || "Description"}</p>
          <ul className="mt-2 text-l list-disc pl-5">
            {(details &&
              details.map((item, index) => (
                <li key={index}>
                  <div className="font-[500]">{item.title}:</div> {item.des}
                </li>
              ))) || <p></p>}
          </ul>
        </div>
        <div className="mt-4">
          <div className="mt-2 flex flex-wrap gap-2">
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

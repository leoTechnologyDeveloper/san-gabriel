import { useState } from "react";
import { Link } from "react-router-dom";

const Accordion = ({ datas }) => {
  const [item, setItem] = useState(datas);

  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };

  console.log(item.link);

  const preguntaConLink = (respuesta, link = "") => {
    return link.length > 0 ? (
      <div className="overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[250px] text-sm text-black text-left ">
        {respuesta}{" "}
        <div className="bg-purple-header hover:bg-green-400 text-gray-100 inline-block cursor-pointer rounded-cincuenta py-2 px-4 font-semibold text-sm">
          <Link to={link}>{link}</Link>
        </div>
      </div>
    ) : (
      <div className="overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[250px] text-sm text-black text-left">
        {respuesta}
      </div>
    );
  };

  return (
    <div
      className={`bg-white-white_figma px-6 py-3 border-2 mb-5 border-gray-gray_figma rounded-2xl w-full duration-500 group font-manrope cursor-pointer  ${
        item.active === 1
          ? "is-active py-3 border-2 bg-white-white_figma border-blue-400"
          : "border-2"
      } text-2xl `}
      onClick={handleToggleActive}
    >
      <div className="flex items-center py-2">
        <div className="w-full duration-500 border-b-2 border-transparent group-[.is-active]:border-b-2 group-[.is-active]:border-b-gray-light_gray py-1 text-lg font-semibold text-purple-titles text-left">
          {item.question}
        </div>
        <div
          className={`text-3xl origin-center duration-500 cursor-pointer group-[.is-active]:rotate-[-90deg] rounded-full text-purple-titles ml-5 `}
        >
          {item.active === 1 ? "x" : "+"}
        </div>
      </div>
      {preguntaConLink(item.answer, item.link)}
    </div>
  );
};
export default Accordion;

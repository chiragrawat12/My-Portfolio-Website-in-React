import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

function NavbarItem({ itemName, image, isActive, onClick }) {
  const [tooltipPlace, setTooltipPlace] = useState(
    window.innerWidth >= 768 ? "left" : "top"
  );

  useEffect(() => {
    const handleResize = () => {
      setTooltipPlace(window.innerWidth >= 768 ? "left" : "top");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <li>
        <button
          type="button"
          onClick={onClick}
          aria-label={itemName}
          data-tooltip-id={itemName}
          data-tooltip-content={itemName}
          className={
            "w-auto h-auto rounded-full p-1 md:p-2 transition ease-in-out outline-none focus:outline-none focus:ring-0 " +
            (isActive
              ? "bg-[#a4b0be] border border-[#ED4C67]"
              : "hover:scale-110 hover:-translate-y-1 hover:border hover:border-[#a4b0be] hover:bg-[#ced6e0]")
          }
        >
          <img width={28} height={28} src={image} alt={itemName} />
        </button>
      </li>

      <Tooltip
        id={itemName}
        place={tooltipPlace}
        offset={22}
        delayShow={150}
        delayHide={150}
        noArrow
        style={{
          color: "#ffffff",
          backgroundColor: "#EA2027",
          // boxShadow: "3px 3px 5px grey",
          borderRadius: "0.8rem",
        }}
      // border="1px solid #3742fa"
      />
    </>
  );
}

export default NavbarItem;
import { Tooltip } from 'react-tooltip';

function NavbarItem({ itemName, image, isActive, onClick }) {
  return (
    <>
      <li onClick={onClick} className={'w-auto h-auto transition ease-in-out rounded-full p-1 md:p-2 ' + (isActive ? 'bg-[#eccc68] border-[#ffa502] border-1' : 'hover:scale-110 hover:-translate-y-1 hover:border-[#a4b0be] hover:border-1 hover:bg-[#ced6e0]')}>
        <a data-tooltip-id={itemName} data-tooltip-content={itemName} href="">
          <img width={28} height={28} src={image} alt={itemName} />
        </a>
      </li>
      <Tooltip id={itemName} place="left" offset={22} delayShow={150} delayHide={150} noArrow={true} style={{ color: "#ffffff", backgroundColor: "#1e90ff", boxShadow: "3px 3px 5px grey", borderRadius: "0.8rem" }} border={"1px solid #3742fa"} />
    </>
  )
}

export default NavbarItem
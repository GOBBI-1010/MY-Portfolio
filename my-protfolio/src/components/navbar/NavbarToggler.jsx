import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();


  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className=" text-2xl p-3  max-sm:p-1 border bg-gradient-to-r  from-darkCyan to-orange border-orange bg-darkBrown rounded-full text-white "
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;

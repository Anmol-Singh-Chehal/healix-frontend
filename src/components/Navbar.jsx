import { HospitalIcon, MenuIcon, X} from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ToggleTheme } from "@/components/theme/ToggleTheme"
import { useRef, useEffect, useState } from "react"
import { useTheme } from "./theme/ThemeProvider"
import { NavLink } from "react-router-dom"
import UserOptions from "./UserOptions"
import { useLazyGetUserQuery } from "@/api/user/userApi"
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoggedIn } from "@/features/user.slice"

const Navbar = () => {
  const { theme } = useTheme();
  const menuRef = useRef();
  const toggleButtonRef = useRef();
  const [ getUser, { } ] = useLazyGetUserQuery();
  const [ userData, setUserData ] = useState({});
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        menuRef.current.style.left = '100vw';
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.left = '100vw';
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      const res = await getUser();
      setUserData(res?.data);
      if(res?.data){
        dispatch(setIsLoggedIn({ isLoggedIn: true }));
      } else {
        dispatch(setIsLoggedIn({ isLoggedIn: false }));
      }
    }

    fetchUserDetails();
  }, [location.pathname]);

  return (
    <>
      <div
      ref={menuRef}
      className={`fixed flex flex-col left-[100vw] top-0 h-screen w-[70vw] z-[100] border-l ease-in-out duration-300 backdrop-blur-[10px] min-laptop:hidden ${
        theme == "light" ? "border-gray-200" : "border-[#31353e]"
      }`}
      >
        <div className={`flex items-center justify-between w-full px-4 py-[9.8px] border-b-[1px] ${
          theme == "light" ? "border-gray-200" : "border-[#31353e]"
        }`}>
          <p className='font-semibold text-xl'>Menu</p>
          <button onClick={closeMenu}
            className='cursor-pointer'>
            <X className='w-6 h-6' />
          </button>
        </div>

        <div className='flex flex-col gap-4 py-4 px-4'>
          <NavLink to="/" className='font-medium text-sm' onClick={closeMenu}>Home</NavLink>
          <NavLink to="/how-it-works" className='font-medium text-sm' onClick={closeMenu}>How It Works?</NavLink>
          <NavLink to="/contact" className='font-medium text-sm' onClick={closeMenu}>Contact</NavLink>
        </div>
      </div>

      <nav className={`flex items-center justify-between px-4 py-2  border-b-[1px] sticky top-0 left-0 backdrop-blur-2xl z-10 ${
        theme==="light" ? "border-gray-200" : "border-[#31353e]"
      }`}>

        <div className="flex gap-2 items-center cursor-pointer">
          <HospitalIcon className="resp-icon"/>
          <h1 className="resp-text-2">Healix</h1>
        </div>
        
        <NavigationMenu viewport={false}>
        <NavigationMenuList className={"min-start:gap-2"}>
          
          <ToggleTheme/>

          <NavigationMenuItem className="cursor-pointer resp-text-3 min-tablet:hidden min-laptop:block min-start:hidden">
            <NavigationMenuTrigger className={"cursor-pointer"}>
              <NavLink to="/">Home</NavLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer resp-text-3 min-tablet:hidden min-laptop:block min-start:hidden">
            <NavigationMenuTrigger className={"cursor-pointer"}>
              <NavLink to="/how-it-works">How It Works?</NavLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem className="cursor-pointer resp-text-3 min-tablet:hidden min-laptop:block min-start:hidden">
            <NavigationMenuTrigger className={"cursor-pointer"}>
              <NavLink to="/contact">Contacts</NavLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          {
            isLoggedIn ? <UserOptions character={"A"}/> :
            <>
              <NavigationMenuItem>
                <Button className="resp-button bg-indigo-800 text-white hover:bg-indigo-900">
                  <NavLink to="/sign-in">Log In</NavLink>
                </Button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button className="resp-button">
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </Button>
              </NavigationMenuItem>
            </>
          }

          <NavigationMenuItem className={"min-laptop:hidden min-start:block"}>
            <button onClick={()=>{
              menuRef.current.style.left = '30vw'
            }} ref={toggleButtonRef} className="cursor-pointer flex justify-center items-center">
              <MenuIcon className="min-start:w-[26px] min-start:h-[26px] min-tablet:w-[30px] min-tablet:h-[30px]"/>
            </button>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      </nav>
    </>
  )
}

export default Navbar

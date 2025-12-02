import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import React, { useEffect, useState } from 'react'
import { useSignOutUserMutation } from '@/api/user/userApi'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoggedIn } from '@/features/user.slice'
import { useNavigate } from 'react-router-dom'

const UserOptions = ({ character }) => {
  const [ signOut, { } ] = useSignOutUserMutation();
  const [isSuccess, setIsSuccess] = useState({});
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const navigate = useNavigate();

  const signOutHandler = async () => {
    const res = await signOut();
    setIsSuccess(res?.data?.success);
    if(res?.data?.success){
      dispatch(setIsLoggedIn({ isLoggedIn: false }));
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='outline-0 ring-0 cursor-pointer hover:bg-indigo-400 rounded-full p-[2px]'>
        <div className='min-start:w-[28px] min-start:h-[28px] min-tablet:w-[34px] min-tablet:h-[34px] flex justify-center items-center rounded-full bg-indigo-800'>
          <h1 className='resp-text-2 text-white'>{character.charAt(0).toUpperCase()}</h1>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel className={"font-semibold text-indigo-600 text-[16px] cursor-default"}>User options</DropdownMenuLabel>


        <DropdownMenuSeparator/>

        <DropdownMenuGroup>
          <DropdownMenuItem className="font-semibold cursor-pointer data-[highlighted]:bg-red-500/30" onClick={()=>signOutHandler()}>
            Sign Out
          </DropdownMenuItem>

        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserOptions

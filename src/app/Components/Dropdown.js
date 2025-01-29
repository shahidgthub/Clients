import React from 'react'
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Arrow } from '../../../public/icons/icons'
import { IoIosArrowDown } from "react-icons/io";

  

const Dropdown = () => {
  return (
    <div>
        <DropdownMenu>
  <DropdownMenuTrigger><IoIosArrowDown className=''/></DropdownMenuTrigger>
  <DropdownMenuContent>
    
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href='/profile' className='dropdown-item'>Profile</Link></DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>
  
    Team
  
</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


    </div>
  )
}

export default Dropdown
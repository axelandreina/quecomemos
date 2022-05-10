import React from 'react'
import Logo from '../images/logo.png'
import Icon from '../icons/heart-icon.png'

export default function Navbar() {
    return (
        <div class="flex justify-between pr-8">
            <img class="max-w-[3.5rem]" alt="" src= {Logo}/>
            <div class="flex cursor-pointer items-center"><img class="h-5 pr-1" alt="" src={Icon}/>Tus Favoritos</div>
        </div>
    )
}

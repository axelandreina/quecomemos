import React from 'react'
import ImageHome from '../images/imageHome.png'
import StartButton from '../components/StartButton'
import Categories from '../components/Categories'

export default function Home() {
    return (
        <div class="columns-2">
            <div>
                <p class="font-light text-2xl pt-10 text-left pb-8">Qué quieres comer?</p>
                <p class="font-semibold text-7xl pb-3 text-left">Lo que sea!</p>
                <p class="text-base font-light text-left pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quod dolorum alias. Quisquam molestiae amet magnam, eos facere dolor. Aliquam expedita saepe inventore eaque amet perferendis quidem ea obcaecati. Vitae?</p>
                <p class="font-semibold text-2xl text-left pb-3">Qué se te antoja hoy?</p>
                <Categories class="pt-4"/>
                <StartButton />
            </div>
            <img class="max-w-[120%]" alt="" src={ImageHome} />
            
        </div>
    )
}


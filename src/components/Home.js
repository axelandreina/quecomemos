import React, {useState} from 'react'
import ImageHome from '../images/imageHome.png'
import Categories from '../components/Categories'

export default function Home() {
    const categories = ['Japonesa', 'Venezolana', 'Vegetariana', 'Vegana', 'Argentina', 'Italiana', 'China', 'Thai', 'Mexicana', 'Árabe'];
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');


    const generateCategory = () => {
        const random = Math.floor(Math.random() * categories.length);
        setSelectedCategory(categories[random])
        // console.log(random, categories[random]);
        setModalOpen(true)

    }

    return (
        <>
            <div class="grid grid-cols-3 gap-1">
                <div>
                    <p class="font-light text-2xl pt-10 text-left pb-8">Qué quieres comer?</p>
                    <p class="font-semibold text-7xl pb-3 text-left">Lo que sea!</p>
                    <p class="text-base font-light text-left pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quod dolorum alias. Quisquam molestiae amet magnam, eos facere dolor. Aliquam expedita saepe inventore eaque amet perferendis quidem ea obcaecati. Vitae?</p>
                    <p class="font-semibold text-2xl text-left pb-3">Qué se te antoja hoy?</p>
                    <Categories class="pt-4"/>
                    <button onClick={() => generateCategory()} class="bg-[#FF4040] font-medium text-2xl rounded-xl px-10 py-2 text-white">Empezar!</button>
                </div>
                <img class="fixed right-0 col-span-2" alt="" src={ImageHome} />
            </div>
            {isModalOpen ? (
                <div class="flex">
                    <div class='bg-[#FF4040] justify-center items-center flex fixed top-[150px] bottom-[150px] left-[200px] right-[200px] z-50 outline-none focus:outline-none rounded-lg shadow-green-400'>
                        <h1 class='font-regular text-2xl text-white'>Hoy te toca comer comida:</h1>
                        <span onClick={() => setModalOpen(false)} class='fixed top-[156px] right-[215px] text-xl text-white cursor-pointer'>x</span>
                        <div class='bg-white font-regular text-3xl rounded-lg pt-3 pb-3 pl-6 pr-6'>{selectedCategory}</div>
                    </div>
                </div>
            ) : ""}
        </>
    )
}


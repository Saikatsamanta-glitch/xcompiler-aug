import React, { useEffect, useState } from 'react'
const langauges = ["Python", "javascript", "Java", "C", "C++"]
const Dropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
        const toggleDropdown = () => {
                setIsOpen(!isOpen);
        };
        const closeDropdown = () => {
                setIsOpen(false);
        };
useEffect(()=>{
         document.body.addEventListener('click',(e)=>{
                console.log(e.target);
         })
})
        return (

                <div className="relative inline-block" id="dropdown">
                        <button
                                type="button"
                                className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                onClick={toggleDropdown}
                        >
                                Languages 🔥
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                        </button>

                        {isOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                {
                                                        langauges.map(v => {
                                                                return (
                                                                        <li key={v}>
                                                                                <a
                                                                                        href="#"
                                                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                                        onClick={closeDropdown}
                                                                                >
                                                                                        {v}
                                                                                </a>
                                                                        </li>
                                                                )
                                                        })
                                                }


                                        </ul>
                                </div>
                        )}
                </div>

        )
}

export default Dropdown;
import React from 'react'

const Header = () => {
    return (
        <nav className="bg-white shadow dark:bg-neutral-900 fixed z-10 w-full border-b border-indigo-800">
            <div className="container flex items-center justify-center p-6 mx-auto text-stone-600 capitalize dark:text-stone-300">
                <a href="#" className="text-stone-800 transition-colors duration-300 transform dark:text-stone-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>

                <a href="#" className="border-b-2 border-transparent hover:text-stone-800 transition-colors duration-300 transform dark:hover:text-stone-200 hover:border-blue-500 mx-1.5 sm:mx-6">features</a>

                <a href="#" className="border-b-2 border-transparent hover:text-stone-800 transition-colors duration-300 transform dark:hover:text-stone-200 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</a>

                <a href="#" className="border-b-2 border-transparent hover:text-stone-800 transition-colors duration-300 transform dark:hover:text-stone-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</a>
            </div>
        </nav>
    )
}

export default Header
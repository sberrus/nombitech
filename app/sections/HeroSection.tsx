import React from 'react'

const HeroSection = () => {
    return (
        <div className="w-full bg-center bg-cover h-screen relative"
            style={{
                backgroundImage: "URL('/img/bg_decoration.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex items-center justify-center w-full h-full bg-neutral-900/40">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-white lg:text-4xl">Nombitech <span className="text-yellow-100">Technology</span> Solutions</h1>
                    <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-md lg:w-auto hover:bg-yellow-700 focus:outline-none focus:bg-yellow-800">Start project</button>
                </div>
            </div>
        </div >
    )
}

export default HeroSection
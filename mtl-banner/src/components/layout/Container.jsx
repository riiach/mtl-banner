import React from 'react'
import FlipCard from '../cards/FlipCard'

const Container = () => {
    return (
        <div className="w-full h-full bg-white flex flex-col gap-2">
            <h1 className="hidden font-mulish font-bold lg:text-4xl text-black md:block">
                mtl
            </h1>
            <FlipCard />
        </div>
    )
}
export default Container

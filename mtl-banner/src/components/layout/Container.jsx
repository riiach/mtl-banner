import React from 'react'
import CardStack from '../cards/CardStack'

const Container = () => {
    return (
        <div className="w-full h-full bg-white flex flex-col gap-2">
            <h1 className="hidden font-mulish font-bold lg:text-4xl text-black md:block">
                mtl
            </h1>
            <CardStack />
        </div>
    )
}
export default Container

import React from 'react'

const Image = (props) => {
    return (
        <div>
            <a href={props.link} target='_blank'>
                <div className='w-full rounded-2xl shadow-lg border-gray-300 border overflow-hidden'>
                <img src={props.imageUrl} alt="Image" 
                className="w-full h-auto object-cover md:h-64"/>
                </div>
                <h1 className='mb-3 ml-2 font-bold'> {props.index}. {props.author}</h1>
            </a>
            
        </div>
    
    )
}

export default Image
import React from 'react'

export default function card() {

    const card = ({title: string, content: string}) => {
        return (
            <div className="bg-white rounded shadow p-4 m-4">
                <h2 className='text-x1 font-bold'>{title}</h2>
                <p>{content}</p>
            </div>
          )
    }

}

import React from 'react'


interface ButtonProps {
    className?: string;
    onClick: () => void;
}

export default function DeleteBtn(props: ButtonProps) {
  return (
    <button  className={`absolute top-12 right-0 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md ${props.className}`} onClick={() => props.onClick()}>Delete</button>
  )
}

import React from 'react'

interface ButtonProps {
    className?: string;
    href: string;
}

export default function EditBtn(props: ButtonProps) {
  return (
    <a className={`absolute top-0 right-0 px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-md ${props.className}`} href={props.href}>Edit</a>
  )
}

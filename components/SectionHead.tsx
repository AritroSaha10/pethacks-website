import React from 'react';

export default function SectionHead({title, subtitle}:{title:string, subtitle:string}) {
    return (
        <div className="h-40 bg-pet-turquoise text-center text-white grid place-content-center">
        <h1 className="font-bold text-6xl p-3">{title}</h1>
        <p>C{subtitle}</p>
      </div>
    )
}
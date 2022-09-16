import React from 'react';


export default function Card ({title, valuation, info}: {title: string, valuation: string, info: string}) {
    
    return (
        <div className="col-span-1 min-h-min p-6 m-5 pb-6 bg-pet-teal rounded-xl  text-white" >
            <div className="text-center">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="pb-3">Valued at {valuation}</p>
            </div>
            <div className="">
                Each member of the winning team will receive:
                <p>
                {info} 
                </p>
            </div>
        </div>
    )
}
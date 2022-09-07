import React from 'react'
import Accordion from "@components/Accordion"

export interface FrequentlyAskedQuestion {
    title: string,
    content: string
};

export default function FAQ({ faq: faqRaw } : { faq: any }) {
    // Reformat to work with Accordion
    const faq: FrequentlyAskedQuestion[] = faqRaw.map(({ question, answer }: { question: string, answer: string }) => ({ title: question, content: answer }))

    return (
        <section className="flex flex-col p-10 items-center md:p-20 md:py-16 lg:px-32 lg:py-24 xl:px-40 items-left bg-orange-300 z-10 relative" id="FAQ">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-gray-700 font-bold">Frequently Asked Questions</h1>
            </div>

            <div className='flex flex-col lg:flex-row lg:gap-x-4 bg-black/20 p-6 lg:px-8 w-full'>
                <div className='flex flex-col gap-x-4 rounded-xl lg:w-1/2'>
                    {faq.slice(0, faq.length / 2).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} />
                        </React.Fragment>
                    )}
                </div>

                <div className='flex flex-col gap-x-4 rounded-xl lg:w-1/2'>
                    {faq.slice(faq.length / 2).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} />
                        </React.Fragment>
                    )}
                </div>
            </div>
        </section>
    )
}
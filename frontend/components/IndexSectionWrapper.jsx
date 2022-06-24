import React from 'react'

export default function IndexSectionWrapper({bgColour="", headingColour="text-black", heading="", subHeading="", children}) {
  return (
    <section className={`w-full pb-16 pt-12 sm:px-32 px-4 gap-y-8 flex flex-col justify-center items-center overflow-visible ${bgColour}`}>
      <div className={`${headingColour} text-center`}>
        <h2 className='font-medium text-3xl sm:text-5xl cursor-default'>{heading}</h2>
        <h4 className='font-light text-2xl sm:text-2xl opacity-70 mt-2 cursor-default max-w-prose'>{subHeading}</h4>
      </div>
      <div className='w-full flex justify-center items-center'>
        {children}
      </div>
    </section>
  )
}

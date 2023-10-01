import React from 'react'


export default function IbcFeatures() {

  const boxeslistarray = [
    {
      paragraph:"Core HR solutions."
    },
    {
      paragraph:"Quality screening and recruitment."
    },
    {
      paragraph:"Quality Training & Development."
    },
    {
      paragraph:"Corporate Training (Technical and Non Technical)."
    },
    {
      paragraph:"Periodical feedbacks from clients about candidate performance."
    },
    {
      paragraph:"Availing compatible candidates according to requirements."
    }
  ]

  const arrayboxescard = boxeslistarray.map( (c_value, i) => {
    return <div className="bg-gray-300  h-13 w-80 p-4 shadow-lg shadow-indigo-500/40 ..."><p id='p1' className=' hover:text-blue-600'>{boxeslistarray[i].paragraph}</p></div>
  })

  return (
    <>
      <h1 id="whyibc" className="text-4xl font-bold mb-4 mt-3 border-b-4 border-black">WHY IBC</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-8 mt-3  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  items-center">
                                {arrayboxescard}
      </div>
    </>
  )
}

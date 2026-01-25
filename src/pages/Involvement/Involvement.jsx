import React from 'react'
import InvolvementCard from '../../Components/InvolvementCard/InvolvementCard'
import LeadImg from '../../assets/involvement/lead.jpg'
import InChargeImg from '../../assets/involvement/incharge.jpg'    

const involvementData = [
  {
    role: "Lead CoOrdinator",
    team: "Website & Membership Development",
    org: "-IEEE NSU IAS Student Branch Chapter",
    year: "2025",
    img: LeadImg,
  },
  {
    role: "In-charge",
    team: "Graphics & Media Team",
    org: "-IEEE NSU IAS Student Branch Chapter",
    year: "2024",
    img: InChargeImg,
  },
  {
    role: "Volunteer",
    team: "Activities & Events",
    org: "-IEEE NSU IAS Student Branch Chapter",
    year: "2023",
    img: null,
  },
]

const Involvement = () => {
  return (
     <section id="involvement" className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 
        className="text-3xl md:text-4xl font-bold text-center text-white mb-8 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
        // className="text-3xl md:text-4xl font-bold text-center text-white mb-14"
        >
          Involvement
        </h2>
        {/* <div className="w-24 h-1 bg-purple-500 mx-auto mb-16 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {involvementData.map((item, i) => (
            <InvolvementCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Involvement

import React, { useState } from 'react'
import Modal from "react-modal"


const InvolvementCard = ({ role, team, org, year, img }) => {
      const [open, setOpen] = useState(false)

  return (
 <>
      {/* 3D wrapper */}
      <div className="hover-3d cursor-pointer">

        {/* Card */}
        <div className="card w-80 h-[400px] bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300">

          {/* Image Section */}
          <figure
            className="h-44 bg-base-200 overflow-hidden"
            onClick={() => setOpen(true)}
          >
            <img
              src={img}
              alt={role}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>
          {/* Content */}
          <div className="card-body p-5 ">
            <h3 className="text-lg font-semibold leading-snug mt-auto flex justify-center ">
              {role}
            </h3>

            <p className="text-base opacity-80 mt-1 mt-auto flex justify-center">
              {team}
            </p>
           
            <small  className="mt-auto flex justify-center">
              {org}
            </small>
            
            <div className="mt-auto flex justify-center">
              <span className="badge badge-outline badge-neutral">
                {year}
              </span>
            </div>
          </div>
        </div>
         {/* 3D required empty divs */}
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </div>

      {/* Image Modal (same as certificate) */}
      {open && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-5xl p-0 bg-transparent shadow-none">
            <img
              src={img}
              alt="preview"
              className="w-full rounded-xl"
            />

 {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-red-500 text-3xl font-bold hover:text-purple-400 z-50"
            >
              ✕
            </button>
          </div>

          {/* click outside to close */}
          <div
            className="modal-backdrop"
            onClick={() => setOpen(false)}
          />
        </dialog>
      )}
    </>



  )
}

export default InvolvementCard

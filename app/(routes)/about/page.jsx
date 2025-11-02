import React, { Suspense } from 'react';
import About from "./../../_components/about/About"; 

const page = () => {
  return (
    <div>
      <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>}>
        <About />
      </Suspense>
    </div>
  )
}

export default page
import React from 'react';

import stylesheet from '../styles/styles.css';

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="flex flex-col">
      <div className="min-h-screen bg-pattern bg-center bg-smoke-light border-t-6 border-tailwind-teal flex items-center justify-center leading-tight p-6 pb-16">
        <p className="mt-12 font-light text-3xl text-center">
          Hello Next.js with Tailwind CSS
        </p>
      </div>
    </div>
  </div>
)

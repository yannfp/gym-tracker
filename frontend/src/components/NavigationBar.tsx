import { useState } from 'react';

import { Pages } from '../constants/data.ts'

export default function NavigationBar() {

  const [currentPage, setCurrentPage] = useState("home");

  const activeIndex = Pages.findIndex((p) => p.id === currentPage);

  return (
    <div className="fixed bottom-4 left-4 right-4 flex flex-row justify-around py-3 rounded-3xl bg-primary/5">

      <div
        className='absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent/90 glow-accent transition-all duration-300'
        style={{ left: `calc(${activeIndex} * (100% / ${Pages.length}) + (100% / ${Pages.length} / 2) - 20px)` }}
      />

      {Pages.map((item) => (
        <button
          key={item.id}
          onClick={() => setCurrentPage(item.id)}
          className='z-10'
        >
          <item.icon
            className={`
              ${currentPage === item.id ? "text-text" : "text-text/30"}
            `}
          />
        </button>
      ))
      }
    </div >
  );
}

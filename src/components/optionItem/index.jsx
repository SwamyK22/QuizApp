import clsx from 'clsx';
import React, { useState } from 'react';

function OptItem({val, activeItem, index}) { 
    // const [flag, setFlag] = useState(false);
    
  return (
    <button 
    className={clsx("p-3 bg-white lg:w-1/3 md:w-1/3 rounded-xl flex items-center justify-around", {
        'bg-green-500': false
    })} onClick={activeItem}>
      <p
        type="button"
        className="bg-slate-200 px-3 py-1 rounded-full font-bold text-xl md:text-0.5xl"
      >
        {val}
      </p>
      <p className="lg:text-2xl md:text-xl">
        <span className="font-bold">NIFTY50 </span> $17,356,{' '}
        <span className="text-red-500">-0.315%</span>
      </p>
    </button>
  );
}

export default OptItem;

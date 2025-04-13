'use client';

import { useEffect, useRef } from 'react';

export default function Home() {

  // Create a ref for the name input
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Create a useEffect to focus the name input
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
      <h1 className='text-4xl font-bold mb-8'>Focus Input Demo</h1>

      <form className='flex flex-col gap-4 items-center justify-center bg-neutral-900 p-8 rounded-lg'>
        <label htmlFor="name">Your Name</label>
        <input className='w-full p-2 rounded-md bg-neutral-800 text-white' placeholder='Enter your name' type="text" id="name" ref={nameInputRef} />
        <button className='p-2 rounded-md bg-blue-500 w-fit text-white cursor-pointer hover:bg-blue-600 transition-colors' type="submit">Submit</button>
      </form>

    </div>
  );
}

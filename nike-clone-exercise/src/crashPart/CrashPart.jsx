
import { useState } from 'react';
import { useEffect } from 'react';

function CrashPart() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkMode = () => {
    setIsDarkMode(!isDarkMode);      
  }
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <h1 className="text-lg text-center font-bold text-blue-400">
        Hello world!
      </h1>

      <div className="w-full h-10 bg-purple-200 rounded-md border-t border-violet-600 my-4 py-2">
        <p className="text-center font-mono font-extrabold text-[13px]">A div</p>
      </div>

      {/* layout */}
      <div className="fixed w-10 h-10 bg-red-500 top-0"></div>

      <div className="flex justify-center space-x-10">
        <div className="h-16 w-16 rounded-full bg-blue-500"></div>
        <div className="h-16 w-16 rounded-full bg-orange-500"></div>
        <div className="h-16 w-16 rounded-full bg-purple-500"></div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
        <div className="bg-violet-500 h-12"></div>
      </div>

      {/* media */}
      <div className="md:block hidden">
        <p>I will appear for device resolution &gt; 768px</p>
      </div>
      <div className="max-md:block hidden">
        <p>I will appear for device resolution &lt; 768px</p>
      </div>

      <button
        className="my-2 rounded-lg px-4 py-2 text-white bg-purple-300 hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-700 active:bg-purple-800"
      >
        Click Me
      </button>

      <ul className="my-2 space-y-2">
        <li className="bg-white p2 first:bg-yellow-100">Item 1</li>
        <li className="bg-white p2 odd:bg-green-200 even:bg-blue-200">Item 2</li>
        <li className="bg-white p2 odd:bg-green-200 even:bg-blue-200">Item 3</li>
        <li className="bg-white p2 odd:bg-green-200 even:bg-blue-200">Item 4</li>
        <li className="bg-white p2 odd:bg-green-200 even:bg-blue-200">Item 5</li>
      </ul>

      {/* theme dark: */}
      <div className="card">
        <h3 className="text-base font-medium tracking-light text-slate-900 dark:text-white">
          Lorem ipsum dolor
        </h3>
        <p className="mt-2 text-small text-slate-500 mb-2 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          qui alias eaque veniam beatae dolorum, quae accusamus voluptatibus reprehenderit doloribus?
        </p>
        <button
          onClick={() => darkMode()}
          className="text-purple-900 text-sm font-medium bg-purple-300 px-4 py-2 rounded-md hover:bg-purple-200 "
        >
          Toggle dark mode
        </button>
      </div>

      <p className="text-[24px] text-chestnut bg-stone-100 p-[16px] text-center">Chestnut Color</p>

    </>
  )
}

export default CrashPart

import { useState } from "react";

const DarkMode = () => {
    const darkModeHandler = () => {       
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        darkModeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark')) {
                document.body.classList.remove('dark');
            } else {
                document.body.classList.add('dark');
            }
        });
    }
    return (
        <div
            id="dark-mode-toggle"
            onClick={darkModeHandler}
            className={`fixed top-24 right-0 w-12 inline-block cursor-pointer z-10 rounded-l-lg bg-zinc-900 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-900 p-2 text-3xl`}
        >
            <i className="fa fa-sun-o dark:hidden"></i>
            <i className="fa fa-moon-o hidden dark:inline"></i>
        </div>
    )
}
export default DarkMode;
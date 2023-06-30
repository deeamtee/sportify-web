import { useEffect, useState } from "react";
import { Switcher } from "../../shared/ui/switcher";

const ThemeSwitcher = () => {
    const darkMode = localStorage.getItem('darkMode')
    const boolDark = JSON.parse(darkMode || 'false')
    const [isDarkMode, setIsDarkMode] = useState(boolDark);

    useEffect(() => { 
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true')
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false')
        }
    }, [isDarkMode])

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
        
    };

    return <div className='ml-2'><Switcher checked={isDarkMode} onChange={handleThemeToggle} /></div>
}

export default ThemeSwitcher;
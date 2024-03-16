import { useEffect, useState } from 'react'
import './App.css'

import useTheme, { ThemeProvider } from './context/themeContext'
import Card from './components/Card'
import Button from './components/Button'

function App() {

  const [theme,setTheme_use] = useState("light");

  const setTheme = (x) => {
    setTheme_use(x);
  } 

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <ThemeProvider value={{theme,setTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
               <Button/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App

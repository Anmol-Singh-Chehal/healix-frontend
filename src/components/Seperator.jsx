import React from 'react'
import { useTheme } from './theme/ThemeProvider'

const Seperator = () => {
  const { theme } = useTheme();

  return (
    <div className={`border-b-[1px] border-[#31353e] w-full min-start:my-6 min-tablet:my-4 ${
        theme == "light" ? "border-gray-200" : "border-[#31353e]"
      }`}>
    </div>
  )
}

export default Seperator

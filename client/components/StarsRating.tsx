import { useState } from 'react'

const StarsRating = () => {
  const [value, setValue] = useState(0)

  const handleClick = (newValue: number) => {
    setValue(newValue)
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((number) => (
        <span
          key={number}
          className={`cursor-pointer font-bold text-3xl ${
            number <= value ? 'text-teal' : 'text-gray-400'
          }`}
          onClick={() => handleClick(number)}
        >
          ★
        </span>
      ))}
    </div>
  )
}
export default StarsRating

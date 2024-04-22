import { EventHandler, MouseEventHandler, useState } from 'react'

const StarsRating = ({ onRate }: { onRate: any }) => {
  const [value, setValue] = useState(0)

  const handleClick = (newValue: number) => {
    setValue(newValue)
    onRate(newValue)
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

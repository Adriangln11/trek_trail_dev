const StarStats = () => {
  return (
    <div>
      <ul>
        <li className='flex items-center'>
          5 <span className='text-teal'>★</span>
          <span className='w-40 h-2 bg-teal rounded-full flex mx-10'></span>
        </li>
        <li className='flex items-center'>
          4 <span className='text-teal'>★</span>
          <span className='w-32 h-2 bg-teal rounded-full flex mx-10'></span>
        </li>
        <li className='flex items-center'>
          3 <span className='text-teal'>★</span>
          <span className='w-24 h-2 bg-teal rounded-full flex mx-10'></span>
        </li>
        <li className='flex items-center'>
          4 <span className='text-teal'>★</span>
          <span className='w-16 h-2 bg-teal rounded-full flex mx-10'></span>
        </li>
        <li className='flex items-center'>
          1 <span className='text-teal'>★</span>
          <span className='w-10 h-2 bg-teal rounded-full flex mx-10'></span>
        </li>
      </ul>
    </div>
  )
}

export default StarStats

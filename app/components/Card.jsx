
const Card = ({user}) => {
  return (
    <div className=' bg-gray-700 flex flex-col sm:w-1/2 py-8 px-6 w-full h-fit m-2 rounded-xl '>
        <h1 className="text-2xl py-3">Hello </h1>
        <p className='text-xs'>
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Iusto ea ad fugiat sit
              cupiditate sapiente 
        </p>
        <h2>
          {user?.name}
        </h2>
        
    </div>
  )
}

export default Card
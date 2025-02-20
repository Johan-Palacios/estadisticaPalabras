const ReducedStadisticList = () => {
  return (
    <div className='min-h-76 max-h-76 max-w-sm rounded overflow-hidden shadow-lg flex flex-col mx-auto mt-20'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Resumen de estadisticas</div>
        <p className='text-gray-700 text-base'>
          viva peru
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <button
          type='button' className='text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-1
          focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5
          text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-600
          dark:focus:ring-indigo-600'
        >
          Ver Estadística Completa
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </button>
      </div>
    </div>

  )
}

export default ReducedStadisticList

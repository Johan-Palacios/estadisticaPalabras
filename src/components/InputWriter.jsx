const InputWriter = () => {
  return (
    <div className='flex flex-col-reverse mx-auto max-w-7xl px-6 lg:px-8'>
      <input
        placeholder='Había una vez un perro peruano ...'
        className='peer outline-none ring-0 px-4 py-1 h-12 border-1 border-gray-200
           rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-400
           duration-500 relative placeholder:duration-500
           placeholder:absolute focus:placeholder:pt-10 text-xl
           shadow-xl shadow-base-400/10 focus:shadow-none focus:rounded-md
           placeholder:text-base-500'
      />
      <span
        className='duration-500 opacity-0 mb-2 peer-focus:opacity-100
        text-base-500 text-sm -translate-y-12 peer-focus:translate-y-0'
      >Escribe :)
      </span
          >
    </div>
  )
}

export default InputWriter

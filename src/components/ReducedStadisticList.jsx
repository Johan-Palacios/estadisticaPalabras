import { useContext } from 'react'
import StadisticContext from '../context/StadisticContext'

const ReducedStadisticList = () => {
  const { stadisticValues } = useContext(StadisticContext)

  return (
    <div className='min-h-90 max-h-76 max-w-sm rounded-xl overflow-hidden shadow-xl flex flex-col mx-auto mt-20 justify-between border-r-gray-300'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Vista Resumida</div>

        <div
          className='relative flex flex-col w-full h-full text-gray-700 bg-white shadow-sm rounded-xl bg-clip-border'
        >
          <table className='w-full text-left table-auto min-w-max shadow-lg'>
            <thead>
              <tr>
                <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                    Característica
                  </p>
                </th>
                <th className='p-4 border-b border-blue-gray-100 bg-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                    Cantidad
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    Espacios
                  </p>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    {stadisticValues.spaces}
                  </p>
                </td>
              </tr>
              <tr>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    Número de Palabras
                  </p>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    {stadisticValues.words}
                  </p>
                </td>
              </tr>
              <tr>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    Letras
                  </p>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                    {stadisticValues.letters}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='px-6 pt-4 pb-2 flex justify-end'>

        <button
          type='button' className='mb-2.5 text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-1
          focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5
          text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-600
          dark:focus:ring-indigo-600 cursor-pointer'
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

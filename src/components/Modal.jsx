'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { PropTypes } from 'prop-types'
import { useState } from 'react'

const Modal = ({ open, setOpen, title, data }) => {
  const [openSubModal, setOpenSubModal] = useState(false)

  return (
    <Dialog open={open} onClose={setOpen} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95'
          >
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:size-10'>
                  <InformationCircleIcon aria-hidden='true' className='size-6 text-indigo-600' />
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <DialogTitle as='h3' className='text-base font-semibold text-gray-900'>
                    {title}
                  </DialogTitle>
                  <div className='mt-2 grid grid-cols-3 gap-4'>
                    {Object.entries(data).map(([nombre, valor], index) => (
                      <div key={index} className='flex flex-col items-center'>
                        <h3 className='text-5xl font-extrabold leading-tight text-center text-dark-grey-900'>
                          {typeof valor === 'object'
                            ? (
                              <button
                                onClick={() => setOpenSubModal(true)}
                                type='button' className='mb-2.5 text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-1
          focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5
          text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-600
          dark:focus:ring-indigo-600 cursor-pointer'
                              >
                                Expandir Información
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
                              )
                            : (
                                valor
                              )}
                        </h3>
                        <p className='text-base font-medium leading-7 text-center text-dark-grey-600'>
                          {nombre}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='button'
                data-autofocus
                onClick={() => setOpen(false)}
                className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto'
              >
                Cerrar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default Modal

import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/solid'
import { formatMoney } from 'lib/helpers'
import { Dispatch, Fragment, SetStateAction } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Donation } from 'types'

const DonationsPopup = ({
  donations,
  popupState,
}: {
  donations: Donation[]
  popupState: {
    donationsOpen: boolean
    setDonationsOpen: Dispatch<SetStateAction<boolean>>
  }
}) => {
  const { donationsOpen, setDonationsOpen } = popupState
  return (
    <Transition.Root show={donationsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setDonationsOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        {' '}
                        Donations ({donations.length}){' '}
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-blue-500"
                          onClick={() => setDonationsOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <a
                      href="https://www.paypal.com/donate/?hosted_button_id=PJNGWRVDL624E"
                      target={`_blank`}
                      className="relative my-4 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <HeartIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>Donate now</span>
                    </a>
                  </div>
                  <ul
                    role="list"
                    className="flex-1 divide-y divide-gray-200 overflow-y-auto"
                  >
                    {donations.map((donation) => (
                      <li key={donation.ipn_track_id}>
                        <div className="group relative flex items-center py-6 px-5">
                          <span className="-m-1 block flex-1 p-1">
                            <div
                              className="absolute inset-0 group-hover:bg-gray-50"
                              aria-hidden="true"
                            />
                            <div className="relative flex min-w-0 flex-1 items-center">
                              <span className="relative inline-block flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="/avatar.svg"
                                  alt=""
                                />
                              </span>
                              <div className="ml-4 truncate">
                                <p className="truncate text-sm font-medium text-gray-900">
                                  {donation.name}
                                </p>
                                <p className="truncate text-sm text-gray-500">
                                  {formatMoney(donation.mc_gross)} •{' '}
                                  {donation.date}
                                </p>
                              </div>
                            </div>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default DonationsPopup

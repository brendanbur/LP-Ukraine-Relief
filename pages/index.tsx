import { Dialog, Transition } from '@headlessui/react'
import { ClipboardCheckIcon, XIcon } from '@heroicons/react/outline'
import { HeartIcon, PlusSmIcon, ShareIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const updates = [
  {
    id: '81614',
    author: {
      name: 'Gretchen Seth',
      imageUrl: '/gs.jpg',
      title: 'Sr. VP, International at Logistics Plus',
    },
    date: 'Sat, Feb 26, 9:06 AM',
    title: 'Gretchen’s Saturday update',
    body: `
    <p className="text-base">
    Hello all,

    </p>
    <p className="text-base">
    We are overwhelmed by the outpouring of support for our Ukraine team! Thank you to all of you all over the world who have offered money, accommodations and prayers.  I know it means the world to them!  If needed, as things develop, we will set up a fund where people can contribute. Thank you. Right now, though, we’re ok. We’ve got  it covered so far. But thank you.

    </p>
    <p className="text-base">
    Three of the girls are in line at the Polish border,
    expecting to cross within the next 12 hours, when they
    will be met by Pawel and Ola and taken to Ola’s family’s
    home. Once they are settled, they will move into an
    apartment where they will have food and other necessary
    items. Thank you again to our Poland team for their
    24/7support!
  </p>
  <p className="text-base leading-7">
    We have called upon several of our friends and
    colleagues in Poland, the Czech Republic, Bulgaria,
    Germany, and Hungary who have all agreed to take our
    folks in and find them temporary homes (thank you—Ola,
    Pawel, Michal, Emile, Heiko, Ivan, Zig) Several are
    already on their way. (Please get there safely). Vova is
    coordinating with us from Ivano-Frankivsk.
  </p>
  <p className="text-base leading-7">
    Another one of the ladies is traveling toward the border
    today hoping to cross at a different point. Lines at all
    the borders are very long and slow. Nothing anyone can
    do about that.
  </p>
  <p className="text-base leading-7">
    We will continue to update you as we get more
    information on the various members of our team. Thank
    you again for your continued prayers and concern!
  </p>
  <p className="text-base leading-7">
  G  
  </p>
    `,
  },
  {
    id: '81614',
    author: {
      name: 'Jim Berlin',
      imageUrl: '/jb.jpg',
      title: 'CEO, Logistics Plus',
    },
    date: 'Fri, Feb 25, 2022, 1:34 PM',
    title: 'Brief Update',
    body: `
    <p className="text-base">
    All,
  </p>
  <p className="text-base leading-7">
  In light of the deteriorating situation in Ukraine, LP has set up a fund and a network to help any of our colleagues who want to (and can) get out of the country to safety. 
  </p>
  <p className="text-base leading-7">
  We have called upon several of our friends and colleagues in Poland, Czech Republic, Bulgaria, Germany and Hungary who have all agreed to take our folks in and find them temporary homes (thank you—Ola, Pawel, Michal, Emile, Heiko, Ivan, Zig) Several are already on their way.  (Please get there safely).  Vova is coordinating with us from Ivanofrankivsk.  
  </p>
  <p className="text-base leading-7">
  Since this will be a very “fluid” situation, I’ve asked Gretchen to oversee this effort. I know she will be all over the necessary communication and coordination.
  </p>
  <p className="text-base leading-7">
  Thanks, everyone, for your quick and loving support. I will keep everyone apprised of things as they develop. 
  </p>
  <p className="text-base leading-7">
  LP Ukraine colleagues—please know you are in our thoughts and prayers, and that we will do whatever is needed to help out. You are all valued members of the LP family. And we are with you.
  </p>
  <p className="text-base leading-7">
  Stay strong!
  </p>
  <p className="text-base leading-7">
  JB  
  </p>
    `,
  },
]
const whoToFollow = [
  {
    name: 'Moustafa Elhadary',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl: '/avatar.svg',
  },
  // More people...
]

const donations = [
  {
    name: 'Moustafa Elhadary',
    amount: '$1,000',
    time: '1 hour ago',
    imageUrl: '/avatar.svg',
  },
]

const URL = 'Https://LPUkraineRelief.com'

export default function Example() {
  const [open, setOpen] = useState(false)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const notify = () => toast.success('Copied!')

  function updateProgressBar() {
    const progressBar = progressBarRef.current // corresponding DOM node
    if (progressBar) {
      progressBar.classList.remove('w-0')
      progressBar.classList.add('w-[77%]')
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(URL)
    notify()
    setOpen(false)
  }

  useEffect(() => {
    setTimeout(() => {
      updateProgressBar()
    }, 500)
  }, [])
  return (
    <>
      <ToastContainer />

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-200 sm:mx-0 sm:h-10 sm:w-10">
                    <ClipboardCheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Help by sharing
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Fundraisers shared on social networks raise up to 5x
                        more
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleCopy}
                  >
                    Copy
                  </button>
                  <div className="relative w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <label
                      htmlFor="name"
                      className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                    >
                      Copy Link
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                      placeholder={URL}
                      value={URL}
                      readOnly
                      onClick={handleCopy}
                    />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Head>
        <title>Fundraiser by Logistics Plus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div className="min-h-full bg-stone-50">
        <nav className="bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/logo.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/logo.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=PJNGWRVDL624E"
                    target={`_blank`}
                    className="relative inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <HeartIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>Donate now</span>
                  </a>
                  <button
                    type="button"
                    className="relative ml-4 hidden sm:inline-flex items-center rounded-md border border-transparent border-blue-600 px-4 py-2 text-sm font-medium text-blue-600  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={() => setOpen(true)}
                  >
                    <ShareIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="py-10">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            {/*  */}
            <main className="px-2 lg:col-span-12 xl:col-span-8">
              <div className="mt-4">
                <div className="space-y-8">
                  <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      LP Ukraine Family Relief
                    </h2>
                    <p className="text-lg text-gray-500">
                      The LP Ukraine team at the holiday party in Ivano
                      Frankivsk, Ukraine in December 2021
                    </p>
                  </div>
                  <h1></h1>
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      src="/team.jpg"
                      className="rounded-lg object-cover shadow-lg"
                      alt="LP Ukraine Family Relief"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-lg font-bold tracking-tight text-gray-900 ">
                      A few words from Logistics Plus
                    </h2>
                    <div className="mt-6 space-y-6 text-gray-500">
                      <p className="text-base">
                        Logistics Plus employs about 50 people in Ukraine. Most
                        of them are under the age of 35.
                      </p>
                      <p className="text-base leading-7">
                        For a while many thought the invasion wouldn't happen,
                        and then they thought it would happen mostly in the
                        eastern part of the country.
                      </p>
                      <p className="text-base leading-7">
                        But now with Kiev being bombarded, the feeling has
                        changed. Logistics Plus employees could hear explosions
                        from their offices since Wednesday night.
                      </p>
                      <p className="text-base leading-7">
                        This fund will provide our colleagues in Ukraine support
                        for any of their needs during this time of war.
                      </p>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold tracking-tight text-gray-900 ">
                    Updates ({updates.length})
                  </h2>
                  <ul role="list" className="space-y-4">
                    {updates.map((update) => (
                      <li
                        key={update.id}
                        className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                      >
                        <article aria-labelledby={'update-title-' + update.id}>
                          <div>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={update.author.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <span className="">{update.author.name}</span>{' '}
                                  <span className="text-xs text-gray-400">
                                    {update.author.title}
                                  </span>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <span className="">
                                    <time>{update.date}</time>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <h2
                              id={'update-title-' + update.id}
                              className="mt-4 text-base font-medium text-gray-900"
                            >
                              {update.title}
                            </h2>
                          </div>
                          <div
                            className="mt-2 space-y-4 text-sm text-gray-700"
                            dangerouslySetInnerHTML={{ __html: update.body }}
                          />
                          <div className="mt-6 flex justify-between space-x-8">
                            <div className="flex space-x-6"></div>
                            <div className="flex text-sm">
                              <span className="inline-flex items-center text-sm">
                                <a
                                  href="https://www.paypal.com/donate/?hosted_button_id=PJNGWRVDL624E"
                                  target={`_blank`}
                                  className="inline-flex space-x-2 text-blue-400 hover:text-blue-500"
                                >
                                  <HeartIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                  <span className="font-medium text-blue-900">
                                    Donate Now
                                  </span>
                                </a>
                              </span>
                            </div>
                          </div>
                        </article>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </main>
            <aside className="hidden xl:col-span-4 xl:block">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        id="who-to-follow-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        $58,095 raised of $65,000 goal
                      </h2>
                      <div className="relative h-2 max-w-xl overflow-hidden rounded-full">
                        <div className="absolute h-full w-full bg-gray-200"></div>
                        <div
                          ref={progressBarRef}
                          id="bar"
                          className="relative h-full w-0 bg-blue-500 transition-all duration-1000 ease-out"
                        ></div>
                      </div>
                      <div>596 donations</div>
                      <div className="flex flex-col items-center space-y-4">
                        <a
                          href="https://www.paypal.com/donate/?hosted_button_id=PJNGWRVDL624E"
                          target={`_blank`}
                          className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <HeartIcon
                            className="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          <span>Donate now</span>
                        </a>
                        <button
                          type="button"
                          className="inline-flex w-full items-center justify-center rounded-md  border  border-transparent border-blue-600 px-4 py-4 text-sm font-medium text-blue-600  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          onClick={() => setOpen(true)}
                        >
                          <ShareIcon
                            className="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          <span>Share</span>
                        </button>
                      </div>

                      <div>
                        <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100">
                          <PlusSmIcon
                            className="h-5 w-5 text-blue-400"
                            aria-hidden="true"
                          />
                        </div>
                        <span>274 people just donated</span>
                      </div>

                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {whoToFollow.map((user) => (
                            <li
                              key={user.handle}
                              className="flex items-center space-x-3 py-4"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a href={user.href}>{user.name}</a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href={user.href}>{'@' + user.handle}</a>
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image
              src="/logo.png"
              alt="Logistics Plus"
              width={102}
              height={24}
            />
          </a>
        </footer>
      </div>
    </>
  )
}

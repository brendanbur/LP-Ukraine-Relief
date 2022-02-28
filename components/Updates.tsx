import { HeartIcon } from '@heroicons/react/solid'
import React from 'react'

const updates = [
  {
    id: '18161',
    author: {
      name: 'Gretchen Seth',
      imageUrl: '/gs.jpg',
      title: 'Sr. VP, International at Logistics Plus',
    },
    date: 'Sun, Feb 26, 4:23 AM',
    title: 'Gretchen’s Sunday update',
    body: `
      <p className="text-base">
      Hi everyone,
      </p>
      <p className="text-base">
      We have had an incredible outpouring of support, not only from LP employees but also from many of our partners, customers, vendors and friends all over the world.  (Thank you, all) People all want to “do something” to help, so we have set up this website:
      </p>
      <p className="text-base">
      <a className="text-blue-900 underline" href="https://lpukrainerelief.com/">https://lpukrainerelief.com/</a>
    </p>
    <p className="text-base leading-7">
    We will continue to report on the situation, and appreciate all the positive energy being generated as we stand in solidarity with our Ukrainian family. It truly means the world to us!
    </p>
    <p className="text-base leading-7">
    Thanks to all,
    </p>
    <p className="text-base leading-7">
    G  
    </p>
      `,
  },
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
    id: '81615',
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
function Updates() {
  return (
    <>
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
                      <HeartIcon className="h-5 w-5" aria-hidden="true" />
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
    </>
  )
}

export default Updates

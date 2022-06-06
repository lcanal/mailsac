import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';

const navigation = [
    // { name: 'API', href: '' },
    // { name: 'Support', href: '' },
    // { name: 'Community', href: ''},
    // { name: 'Pricing', href: '/pricing' },
    { name: 'Log In', href: 'https://app.pressblox.com/users/sign_in' },
  ]

  
export default function Nav(params){
    return (
        <Popover>
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-0"
            aria-label="Global"
          >
            <div className="flex flex-1">
              <div className="flex w-full justify-between md:w-auto">
              <Link href="/">
                  <img src='/images/banner.svg' alt='Pressblox' className='mr-24 hover:cursor-pointer' />
              </Link>
                <div className="flex items-center md:hidden">
                  <Popover.Button className="mr-5 bg-orange-500 rounded-md p-2 inline-flex items-center justify-center text-neutral-50 hover:bg-orange-600 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-10 md:flex md:ml-10">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="font-medium block text-slate-800 hover:text-orange-700 hover:underline underline-offset-4 hover:decoration-2">
                      {item.name}
                    </a>
                    
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex">
              <a
                href="https://app.pressblox.com/users/sign_up"
                className="inline-flex items-center ml-10 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-slate-100 bg-orange-500 hover:bg-orange-700"
              >
                Sign Up
              </a>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1 block">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                    >
                      <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <a
                  href="https://app.pressblox.com/users/sign_up"
                  className="block w-full px-5 py-3 text-center font-medium text-orange-600 bg-gray-50 hover:bg-gray-100"
                >
                  Register
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
    );
}
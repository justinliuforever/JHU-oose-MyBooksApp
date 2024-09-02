// NavBar.jsx

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for current path detection

import { Fragment } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar({ title, userEmail }) { // Receive userEmail as a prop
  const location = useLocation(); // Hook to get the current path

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              {/* Left section with dynamic title */}
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900">{title}</span> {/* Dynamic title */}
              </div>

              {/* Center section with navigation links */}
              <div className="hidden sm:flex sm:space-x-8 sm:ml-auto sm:mr-auto">
                {/* Updated Navigation Links with dynamic underline */}
                <Link
                  to="/"
                  className={classNames(
                    location.pathname === '/' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                  )}
                >
                  Home
                </Link>
                <Link
                  to="/submit"
                  className={classNames(
                    location.pathname === '/submit' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                  )}
                >
                  Submit
                </Link>
              </div>

              {/* Right section with profile dropdown */}
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <span className="text-gray-700">{userEmail}</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            onClick={() => {
                              localStorage.removeItem('userEmail'); // Clear email from localStorage
                              window.location.href = '/login'; // Redirect to login page
                            }}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Updated Mobile Navigation Links with dynamic underline */}
              <Disclosure.Button
                as={Link}
                to="/"
                className={classNames(
                  location.pathname === '/' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                )}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/submit"
                className={classNames(
                  location.pathname === '/submit' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700',
                  'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                )}
              >
                Submit
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <span className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-700">
                    {userEmail}
                  </span>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

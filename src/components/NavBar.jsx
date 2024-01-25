import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/church_logo.jpeg'

const navigation = [
  { name: '교회소개', href: '#', current: true, dropdown: ['양문교회', '섬기는 사람들', '오시는 길'] },
  { name: '예배', href: '#', current: false, dropdown: ['예배안내', '주일예배', '수요예배', '특별예배', '가정예배', '가정예배 나눔'] },
  { name: '사역', href: '#', current: false, dropdown: ['영유아부 (Hishow)','어와나 (AWANA)', '아동청소년년 (Teens)', '청년부 (여호수아)', '목장모임', '주일세미나', 'with북카페'] },
  { name: '커뮤니티', href: '#', current: false, dropdown: ['주간소식', '새가족', '교회갤러리', '교회동영상', '교회소식지', '선교지 소식', 'CBS칼럼', 'CBS 반가운 오늘', '교회행정서류'] },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src= {logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-white text-yellow-600 outline' : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-600',
                          'rounded-md px-3 py-2 text-sm font-med'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <Menu as="div" className="relative">
                          <div>
                            <Menu.Button className="relative flex rounded-full text-sm">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              {item.name}
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                              <Menu.Items className="absolute left-1/2 transform -translate-x-1/2 top-full z-10 mt-3 w-40 origin-top-right bg-white py-1 shadow-lg ring-1 ring-yellow-800 ring-opacity-5 focus:outline-none">
                              {item.dropdown.map((dropdownMenu, index) => (
                                <Menu.Item key={index}>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(active ? 'bg-yellow-50' : '', 'block px-4 py-2 text-sm text-yellow-700')}
                                    >
                                      {dropdownMenu}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

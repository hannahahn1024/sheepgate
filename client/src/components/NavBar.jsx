import { Fragment, useEffect, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"
import logo from '../assets/church_logo.jpeg'
import { UserContext } from '../page/UserContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  // const [username, setUsername] = useState(null);
  const {setUserInfo, userInfo} = useContext(UserContext);


  const navigation = [
    { name: '교회소개', href: '/sheepgate', current: true, dropdown: [{name: '양문교회', link: '/sheepgate'}, {name: '섬기는 사람들', link: '/sheepgate'}, {name: '후원단채', link: '/sheepgate'}, {name: '오시는 길', link: '/sheepgate'}] },
    { name: '예배', href: '/introduction', current: false, dropdown: [{name: '예배안내', link: '/introduction'}, {name: '주일예배', link: '/sundayservice'}, {name: '수요예배', link: '/wednesdayservice'}, {name: '특별예배', link: '/specialservice'}, {name: '가정예배', link: '/familyservice'}, {name: '가정예배 나눔', link: '/familysharing'}] },
    { name: '사역', href: '/hishow', current: false, dropdown: [{name: '영유아부 (Hishow)', link: '/hishow'},{name: '어와나 (AWANA)', link: '/awana'}, {name: '아동청소년 (Teens)', link: '/teens'}, {name: '청년부 (여호수아)', link: '/youngadults'}, {name: '목장모임', link: '/smallgroup'}, {name: '주일세미나', link: '/sundayseminar'}, {name: 'with북카페', link: '/bookcafe'}] },
    { name: '커뮤니티', href: '/weeklynews', current: false, dropdown: [{name: '주간소식', link: '/weeklynews'}, {name: '새가족', link: '/newfamily'}, {name: '교회갤러리', link: '/gallery'}, {name: '교회동영상', link: '/videos'}, {name: '교회소식지', link: '/churchnews'}, {name: '선교지 소식', link: '/missionnews'}, {name: 'CBS칼럼', link: '/cbscolumn'}, {name: 'CBS 반가운 오늘', link: '/cbstoday'}, {name: '교회행정서류', link: ''}] },
    // { name: 'Account', href: '/login', current: false, dropdown: [{name: 'Login', link: '/login'}, {name: 'Register', link: '/register'}]},
    // { name: 'zz', href: '/accountsetting', current: false, dropdown: [{name: 'Account Setting', link: '/accountsetting'}]}
  ]

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        console.log(userInfo?.username);
        // setUsername(userInfo.username);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);
  }

  const username = userInfo?.username;
  // console.log(username);
 
  if (username == null) {
    navigation.push({ name: 'Account', href: '/login', current: false, dropdown: [{name: 'Login', link: '/login'}, {name: 'Register', link: '/register'}]});
  }
  else {
    navigation.push({ name: username, href: '', current: false, dropdown: [{name: 'Account Setting', link: '/accountsetting'}]});
  }
 

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-3xl px-4 sm:px-8 lg:px-12">
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
                <Link to ="/">
                  <img
                    className="h-8 w-auto"
                    src= {logo}
                    alt="sheepgate image"
                  />
                </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <a
                          key={item.name}
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
                                  <Link to={dropdownMenu.link} className={classNames(active ? 'bg-yellow-50' : '', 'block px-4 py-2 text-sm text-yellow-700')}>
                                    {dropdownMenu.name}
                                  </Link>
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

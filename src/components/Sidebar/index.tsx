import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../../images/logo/logo.svg';
import Home from '../../images/sidebar/home.svg';
import Player from '../../images/sidebar/player.svg';
import Upload from '../../images/sidebar/upload.svg';
import settings from '../../images/sidebar/Setting.svg';
import youraudiobook from '../../images/sidebar/your audiobooks.svg';
import sub from '../../images/sidebar/subscriptions.svg';
import auth from '../../images/sidebar/Logout.svg';

import Google from '../../images/Google Play.svg';
import Apple from '../../images/App Store.svg';
import useLogout from '../../hooks/auth';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const logout = useLogout();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 font-poppins top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#FFFBEE] duration-300 ease-linear  lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between font-poppins gap-0 ml-2 px-2 py-5.5 lg:py-6.5">
        {/* <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink> */}
        <h1 className="text-[#170F49] font-extrabold text-2xl px-4 mr-4">
          <span className="text-black">Vya</span>
          <span className="text-yellow-500">par</span>{' '}
          <span className="text-black">Launch</span>
          <span className="text-yellow-500">pad</span>
        </h1>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-[#7C8DB5]">
              MENU
            </h3>

            <ul className="mb-0 flex flex-col gap-0.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="/"
                        className={`group relative text-sm flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-[#2E3271] duration-300 ease-in-out hover:text-[#865DFF] ${
                          (pathname === '/' ||
                            pathname.includes('dashboard')) &&
                          'text-[#865DFF]'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <img src={Home} />
                        Home
                      </NavLink>

                      {/* <!-- Dropdown Menu Start --> */}

                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/"
                  className={`group relative text-sm flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-[#2E3271] duration-300 ease-in-out hover:text-[#865DFF] ${
                    pathname.includes('calendar') && 'hover:text-[#865DFF]'
                  }`}
                >
                  <img src={Player} />
                  Product
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className={`group relative flex text-sm items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-[#2E3271] duration-300 ease-in-out hover:text-[#865DFF] ${
                    pathname.includes('profile') && 'text-[#865DFF]'
                  }`}
                >
                  <img src={Upload} />
                  Product Checklist
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className={`group relative flex text-sm items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-[#2E3271] duration-300 ease-in-out hover:text-[#865DFF] ${
                    pathname.includes('tables') && 'text-[#865DFF]'
                  }`}
                >
                  <img src={youraudiobook} />
                  Integration
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <!-- General Group --> */}
          <div>
            <h3 className="mb-4  mt-6 ml-4 text-sm font-semibold text-[#7C8DB5]">
              GENERAL
            </h3>

            <ul className="mb-6 text-sm flex flex-col gap-0.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <NavLink
                  to="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-[#2E3271] duration-300 ease-in-out  ${pathname.includes(
                    'settings',
                  )}`}
                >
                  <img src={settings} />
                  Settings
                </NavLink>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Subscription --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-[#2E3271] duration-300 ease-in-out ${
                          pathname === '/ui' || pathname.includes('ui')
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <img src={sub} />
                        Subscription
                      </NavLink>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-[#2E3271] duration-300 ease-in-out ${
                          pathname === '/auth' || pathname.includes('auth')
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          logout();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <img src={auth} />
                        Authentication
                        {/* <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg> */}
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      {/* <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/auth/signin"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out  ' +
                                (isActive && '!text-gray')
                              }
                            >
                              Sign In
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/auth/signup"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out ' +
                                (isActive && '!text-gray')
                              }
                            >
                              Sign Up
                            </NavLink>
                          </li>
                        </ul>
                      </div> */}
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}
            </ul>
          </div>
          {/* GO MOBILE  */}

          <div>
            <h3 className="mb-4 mt-24 ml-4 text-sm font-semibold text-[#FFFBEE]">
              GO MOBIL
            </h3>

            <ul className="mb-6  flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <div className="ml-4 py-5 px-[-2] flex flex-row">
                <a target="_blank" href="#">
                  <img
                    alt="Google Store"
                    loading="lazy"
                    width={108}
                    height={80}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: 'transparent' }}
                    src={Google}
                    className="mr-8 gap-8"
                  />
                </a>
                <a target="_blank" href="#">
                  <img
                    alt="Apple Store"
                    loading="lazy"
                    width={119}
                    height={40}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: 'transparent' }}
                    src={Apple}
                    className="mr-2"
                  />
                </a>
              </div>
              <div className="mt-0 ml-3">
                <p className="text-xs text-[#7C8DB5]">
                  Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie
                </p>
                <p className="text-xs text-[#7C8DB5]">
                  Blog Manage ⁃ Imprint Resource Chart
                </p>
                <p className="text-xs text-[#7C8DB5]">
                  <span className="text-blue-400">Language : </span> English
                  (US)
                </p>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

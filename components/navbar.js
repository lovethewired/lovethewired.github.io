import { useEffect, useState } from 'react';
import { useDimensions, useScroll } from '../hooks';

import cn from 'classnames';
import { Icon, Link, WalletButton } from '../lib';
import { config } from '../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import GithubIcon from '../images/github.svg';
import TwitterIcon from '../images/twitter.svg';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const { windowWidth } = useDimensions();

  const small = windowWidth && windowWidth < 640;

  const { scrollY } = useScroll();
  const [scrollTimeout, setScrollTimeout] = useState();

  // navbar dropdown
  useEffect(() => {
    if (navOpen && windowWidth && windowWidth > 640) setNavOpen(false);
  }, [windowWidth]);

  // scrollbar
  useEffect(() => {
    if (!document.documentElement.classList.contains('scrollbarVisible')) {
      document.documentElement.classList.remove('scrollbarInvisible');
      document.documentElement.classList.add('scrollbarVisible');
    }
    if (scrollTimeout) clearTimeout(scrollTimeout);
    setScrollTimeout(
      setTimeout(() => {
        document.documentElement.classList.remove('scrollbarVisible');
        document.documentElement.classList.add('scrollbarInvisible');
      }, 1000)
    );
    return () => clearTimeout(scrollTimeout);
  }, [scrollY]);

  return (
    <header
      className={cn(
        'font-serif mx-auto px-4 sm:px-8 md:px-12 max-w-5xl flex flex-col sm:flex-row justify-between items-center border-white/20',
        'overflow-hidden border-b p-4',
        small && 'transition-height duration-500 ease-in-out',
        navOpen ? 'h-[160px]' : 'h-16'
      )}
    >
      <div className="w-full h-full flex flex-col sm:flex-row justify-start sm:justify-between items-center gap-y-4 overflow-hidden sm:overflow-visible">
        <div
          className={cn(
            'flex w-full sm:w-fit items-center' // figure out this margin mt-1 mess
            // small && ' transition-margin duration-700'
            // small && !navOpen ? 'mb-8 ease-out' : 'mb-0 ease-in'
          )}
        >
          <div className="mx-auto mt-1 -pt-1">
            <h1 className="text-xl">
              <a href="/" className="text-white hover:text-primary-500">
                Solidity Sec
              </a>
            </h1>
          </div>

          <div className="my-auto -ml-6 w-6 sm:hidden">
            <Icon className="w-4 h-4" onClick={() => setNavOpen(!navOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </Icon>
          </div>
        </div>

        <div className={cn('flex flex-col sm:flex-row gap-x-8 md:gap-x-10 gap-y-4')}>
          <div className="flex gap-x-2 sm:gap-x-5 items-center justify-evenly">
            {/* <Link className="" href={config.links.github}>
              <Icon>
                <GithubIcon className="h-4" />
              </Icon>
            </Link>
            <Link className="" href={config.links.twitter}>
              <Icon>
                <TwitterIcon className="h-4" />
              </Icon>
            </Link> */}
          </div>

          <WalletButton className="w-36" chainId={4} />
        </div>
      </div>
    </header>
  );
}

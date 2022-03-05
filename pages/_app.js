import '../styles/index.css';
import 'animate.css/animate.css';

import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
faConfig.autoAddCss = false;

import { AlertMessages } from '../hooks';
import { RecoilRoot } from 'recoil';

import cn from 'classnames';

import { SolDisc } from '../components/soldisc';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Navbar />
      <main className="p-4 sm:px-8 md:px-12 max-w-4xl mx-auto min-h-screen">
        <Component {...pageProps} />
        <SolDisc />
      </main>
      {/* {pathname.includes('blog') && (
        <div className="p-4 sm:px-8 md:px-12 max-w-4xl mx-auto">
          <SolDisc />
        </div>
      )} */}
      <footer className="p-4 my-4 sm:px-8 md:px-12 bg-gradient-to-br from-secondary-400 to-[#df7375] via-secondary-500 ">
        © {new Date().getFullYear()} phaze
      </footer>
      <AlertMessages />
    </RecoilRoot>
  );
}

export default MyApp;

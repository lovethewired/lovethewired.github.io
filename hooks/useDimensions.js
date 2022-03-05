import { useCallback, useEffect } from 'react';

import { atom, useRecoilState } from 'recoil';

const fetchDimensions = () => ({
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
  bodyScrollWidth: document.body.scrollWidth,
  bodyScrollHeight: document.body.scrollHeight,
  clientWidth: document.body.clientWidth,
  clientHeight: document.body.clientHeight,
});

const DimensionsAtom = atom({
  key: 'Dimensions',
  default: {},
});

// const TestAtom = atom({
//   key: 'Tests',
//   default: 'ABC',
// });

export function useDimensions() {
  const [dimensions, setDimensions] = useRecoilState(DimensionsAtom);
  // const [test, setTest] = useRecoilState(TestAtom);

  const updateDimensions = useCallback(() => {
    setDimensions(fetchDimensions());
  });

  useEffect(() => {
    updateDimensions();
    window.addEventListener('DOMContentLoaded', updateDimensions);
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
}

const ScrollAtom = atom({
  key: 'Scroll',
  default: {},
});

export function useScroll() {
  const [scroll, setScroll] = useRecoilState(ScrollAtom);

  function updateScroll() {
    setScroll({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return scroll;
}

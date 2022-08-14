import { useEffect, useState } from 'react';
import { throttle } from 'lodash-es';

const useScroll = () => {
  const [top, setTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = throttle(() => setTop(window.scrollY), 300);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return top;
};

export default useScroll;

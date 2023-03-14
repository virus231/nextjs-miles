import { useInView } from 'react-intersection-observer';

const StickyHeader = () => {
  const { ref, inView: myElementIsVisible } = useInView();

  return {
    ref,
    myElementIsVisible,
  };
};

export default StickyHeader;
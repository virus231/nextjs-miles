import dynamic from 'next/dynamic';


const Scroll = dynamic(
    () => import('../app/components/ScrollMagic'),
    { ssr: false }
  );

export default function TestPage() {

    return (
        <Scroll/>
    );
}

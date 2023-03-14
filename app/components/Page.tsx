import { forwardRef, ReactNode } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';

interface Props {
    children: ReactNode;
    meta?: ReactNode;
    title: string;
}

// eslint-disable-next-line react/display-name
const Page = forwardRef<HTMLDivElement, Props>(({ children, meta, title = '', ...other }, ref) => (
    <>
        <Head>
            <title>{title}</title>
            {meta}
        </Head>
        <div className={styles.wrapper} ref={ref} {...other}>
            {children}
        </div>
    </>
));

export default Page;

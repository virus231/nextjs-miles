import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react';
import Link from 'next/link';

export const BaseNextLink = ({ href, ...rest }: ComponentPropsWithoutRef<typeof Link>, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
        <Link href={href} passHref {...rest}>
            <a {...rest} ref={ref} />
        </Link>
    );
};

export const NextLink = forwardRef(BaseNextLink);

import { useEffect, useState } from 'react';

export const activeLink = (pathname: string, link: string) => {
    return pathname === link;
};

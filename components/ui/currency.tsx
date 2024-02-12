"use client";

import {useEffect, useState} from "react";

export const formatter = new Intl.NumberFormat("en-Us", {
    style: 'currency',
    currency: "USD"
})

interface CurrencyProps {
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = (
    {
        value
    }
) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency;
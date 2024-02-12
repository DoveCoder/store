"use client";
import {socialLinks} from "@/constants";
import {useEffect, useState} from "react";
import Image from "next/image";

const Footer = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <footer className="bg-white border-t">
            <div className="mx-auto py-10">
                <p className="p-1 text-start text-xs text-black lg:text-center">
                    &copy; StoreName, Inc. All rights reserved.
                    {socialLinks.map((link) => (
                        <div key={link.iconUrl} className="float-end h-10 w-10">
                            <a href={link.link} target="_blank" className="flex flex-col justify-between gap-1 mx-2">
                                <Image src={link.iconUrl} alt="social link" />
                            </a>
                        </div>
                    ))}
                </p>
            </div>
        </footer>
    )
}

export default Footer;
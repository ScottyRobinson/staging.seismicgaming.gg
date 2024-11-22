import NavLink from '@/Components/NavLink';
import Logo from '@/Components/Logo';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Sidebar({}: PropsWithChildren<{ header?: ReactNode }>) {
    const renderMainLinks = () => {
        const mainLinks = [
            { label: 'Home', href: 'dashboard', icon: 'home' },
            { label: 'Join Us', href: '/join', icon: 'join'},
            { label: 'Games', href: '/games', icon: 'games'},
            { label: 'News', href: '/news', icon: 'news'},
            { label: 'Events', href: '/events', icon: 'events'},
            { label: 'Shop', href: '/shop', icon: 'shopping' },
        ]

        return mainLinks.map(link => {
            return (
                <li key={link.href}>
                    <NavLink
                        href={link.href}
                        active={route().current(link.href)}
                        label={link.label}
                        icon={link.icon}
                    />
                </li>
            );
        });
    };

    return (
        <nav className="z-10 overflow-x-hidden px-5 pb-16 md:block md:w-[100px] xl:w-[250px]">
            <a className="flex items-center justify-center mt-3" href="">
                <Logo className="w-64" />
            </a>

            <div className="my-6 w-full h-[1px] z-10 relative border-divider border-t border-opacity-30" />

            <ul>
                { renderMainLinks() }
            </ul>

            <div className="my-6 w-full h-[1px] z-10 relative border-divider border-t border-opacity-30"></div>

            <ul>
                { renderMainLinks() }
            </ul>
        </nav>
    );
}

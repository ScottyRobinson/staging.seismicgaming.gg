import ApplicationLogo from '@/Components/Logo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Sidebar from './Sidebar';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Layout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    function renderSidebar() {
        return (
            <nav className="">
                nav bar
            </nav>
        );
    };

    function renderContent() {
        return (
            <main className="rounded-[30px] md:rounded-[35px/50px_0px_0px_0px] min-w-0 min-h-screen max-w-full md:max-w-none bg-slate-100 flex-1 pb-10 px-4 md:px-6 relative md:ml-4 dark:bg-darkmode-700 before:content-[''] before:w-full before:h-px before:block after:content-[''] after:z-[-1] after:rounded-[40px_0px_0px_0px] after:w-full after:inset-y-0 after:absolute after:left-0 after:bg-white/10 after:mt-8 after:-ml-4 after:dark:bg-darkmode-400/50 after:hidden md:after:block">
                main content
            </main>
        );
    };

    return (
        <div className="relative py-5 px-5 md:py-0 sm:px-8 md:px-0 after:content-[''] after:bg-gradient-to-b after:from-primary after:to-primary after:fixed after:inset-0 after:z-[-2]">
            <div className="mt-[4.7rem] flex overflow-hidden md:mt-0">
                <Sidebar />
                { renderContent() }
            </div>
        </div>
    );
}

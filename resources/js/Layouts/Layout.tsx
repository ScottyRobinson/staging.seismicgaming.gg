import Sidebar from './Sidebar';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { Menu } from "@/Components/Headless";
import Lucide from "@/Components/Lucide";

export default function Layout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <div className="relative py-5 px-5 md:py-0 sm:px-8 md:px-0 after:content-[''] after:bg-gradient-to-b after:from-primary after:to-primary after:fixed after:inset-0 after:z-[-2]">
            <div className="mt-[4.7rem] flex overflow-hidden md:mt-0">
                {/* Sidebar */}
                <Sidebar />

                <main className="rounded-[30px] md:rounded-[35px/50px_0px_0px_0px] min-w-0 min-h-screen max-w-full md:max-w-none bg-dark-gray flex-1 pb-10 px-4 md:px-6 relative md:ml-4 before:content-[''] before:w-full before:h-px before:block after:content-[''] after:z-[-1] after:rounded-[40px_0px_0px_0px] after:w-full after:inset-y-0 after:absolute after:left-0 after:mt-8 after:-ml-4 after:bg-divider/50 after:hidden md:after:block">
                    {/* Top Bar */}
                    <div className="relative z-[51] flex h-[67px] items-center border-b border-divider">
                        {/* Breadcrumbs */}
                        <nav aria-label="breadcrumb" className="flex mr-auto -intro-x sm:flex">
                            <ol className="flex items-center text-theme-1 text-slate-300">
                                <li>
                                    <div>Seismic Gaming</div>
                                </li>
                                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 before:bg-chevron-white cursor-text text-slate-400">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                        {/* END: Breadcrumbs */}

                        {/* Search */}
                            {/* @TODO: Implement Search */}
                        {/* END: Search */}

                        {/* User Menu */}
                        <Menu>
                            <Menu.Button className="block w-8 h-8 overflow-hidden rounded-full shadow-lg image-fit zoom-in intro-x">
                                <img src="https://picsum.photos/id/237/200/300" />
                            </Menu.Button>
                            <Menu.Items className="w-56 mt-2 text-white bg-dark">
                                <Menu.Header className="font-normal">
                                    <div className="font-medium">
                                        {user.name}
                                    </div>
                                    <div className="text-xs text-white/40 mt-0.5">
                                        Clan Leader
                                    </div>
                                </Menu.Header>
                                <Menu.Divider className="bg-white/[0.08]" />
                                <Menu.Item className="hover:bg-white/5">
                                    <Lucide icon="User" className="w-4 h-4 mr-2" />{" "}
                                    Profile
                                </Menu.Item>
                                <Menu.Item className="hover:bg-white/5">
                                    <Lucide
                                        icon="FilePenLine"
                                        className="w-4 h-4 mr-2"
                                    />{" "}
                                    Add Account
                                </Menu.Item>
                                <Menu.Item className="hover:bg-white/5">
                                    <Lucide icon="Lock" className="w-4 h-4 mr-2" />{" "}
                                    Reset Password
                                </Menu.Item>
                                <Menu.Divider className="bg-white/[0.08]" />
                                <Menu.Item className="hover:bg-white/5">
                                    <Lucide
                                        icon="ToggleRight"
                                        className="w-4 h-4 mr-2"
                                    />{" "}
                                    Logout
                                </Menu.Item>
                            </Menu.Items>
                        </Menu>
                        {/* END: User Menu */}
                    </div>
                    {/* END: Top Bar */}

                    {/* Main Content */}
                    <div className="grid grid-cols-12 gap-6">

                    </div>
                    {children}
                </main>
            </div>
        </div>
    );
}

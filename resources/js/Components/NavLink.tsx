// import { HomeIcon } from '@heroicons/react/16/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { InertiaLinkProps, Link } from '@inertiajs/react';
import { twMerge } from "tailwind-merge";

export default function NavLink({
    active = false,
    className = '',
    label,
    icon = '',
    ...props
}: InertiaLinkProps & {active: boolean, label: string, icon: string}) {
    return (
        <Link
            {...props}
            className={twMerge([
                "h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-lg",
                active ?
                "before:bg-dark-gray before:content-normal before:block before:inset-0 before:rounded-lg before:absolute" :
                "text-neutral-300 hover:before:bg-dark-gray hover:before:content-normal hover:before:block hover:before:inset-0 hover:before:rounded-lg hover:before:absolute",
                className,
            ])}
            aria-describedby={label}
        >
            <div className="z-10 flex items-center">
                <HomeIcon className="size-5 stroke-1.5" />
                {/* {icon && <span className="mr-3">{icon}</span>} */}
            </div>
            <div className={
                twMerge([
                    'z-10 items-center hidden ml-3',
                    'xl:flex'
                ])
            }>
                {label}
            </div>
        </Link>
    );
}

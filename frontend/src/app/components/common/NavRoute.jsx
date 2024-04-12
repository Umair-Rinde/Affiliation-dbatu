
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

const NavRoute = ({routes}) => {
    return (
        <nav className="w-full flex items-center gap-2 p-2 bg-blue-200">
        {
            routes.map((route) => (
                <span className="flex gap-2 items-center text-sm">
                    <FaAngleRight />
                    <Link href={route.path}>{route.title}</Link>
                </span>
            ))
        }
        </nav>
    )
}

export default NavRoute;
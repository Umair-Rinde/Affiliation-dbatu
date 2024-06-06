
import Link from 'next/link';
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleLeft } from "react-icons/fa6";
import { CiSearch} from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";

const AdminSideNavbar = ({current}) => {
    return (
        <nav className="flex flex-col h-full w-1/6">
            <h2 className="flex items-center gap-2 p-3">
                <RiMenu2Fill />
                <span className="text-blue-600">Navigation</span>
            </h2>
            <NavItem
                title="View Annexure"
                path="/"
                icon={<AiOutlineHome />}
                current={current}
            />
            <NavItem
                title="Create User"
                path="/admin/createuser"
                icon={<FaAngleLeft />}
                current={current}
            />
            <NavItem
                title="Help"
                path="/help"
                icon={<CiSearch />}
                current={current}
            />
        </nav>
    )
}

const NavItem = ({title,path,current,icon}) => {
    return(
        <Link href={path}
            className={`flex items-center gap-2 p-3 ${current==title ? 'bg-blue-300':'bg-white'}`}
        >
            {icon}
            <span>{title}</span>
        </Link>
    )
}

export default AdminSideNavbar;
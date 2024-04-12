
import dbatuLogo from '@/assets/logo.png';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="w-full flex items-center justify-center gap-8 bg-blue-200 py-2">
            <Image src={dbatuLogo} alt="dbatu-logo" className="h-14 w-auto" />
            <div className="flex flex-col gap-1 italic">
                <h1 className="text-lg font-bold text-blue-900">Dr. Babasaheb Ambedkar Technological University</h1>
                <span className="text-sm">Lonere - 402103 Tal - Mangaon Dist - Raigad (M.S.) India</span>
            </div>
        </header>
    )
}

export default Header;
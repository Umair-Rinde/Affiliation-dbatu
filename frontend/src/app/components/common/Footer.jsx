
import { PiCopyright } from "react-icons/pi";
import rightToInfo from "@/assets/right-to-info.jpg";
import Image from 'next/image';
import dbatuQR from '@/assets/qr-code.jpg';

const Footer = () => {
    return (
        <footer className="w-full flex flex-col gap-6 items-center bg-blue-200 p-5 text-sm mt-10 ">
            <section className="w-full flex justify-evenly">
                <Image src={rightToInfo} alt="right-to-information" 
                    className="w-20 h-full rounded-lg"
                />
                <div className="flex flex-col gap-1 max-w-44">
                    <span>
                        Longitude & Lattitude: <br/>
                        18<sup>o</sup>10'11" N and
                        73<sup>o</sup>20'21" E
                    </span>
                    <span>
                        Nearest Railway Station: <br/>
                        Veer Railway Station (5.1Km),
                        Mangaon Railway Station (11Km)
                    </span>
                    <span>
                        Nearest Airport:
                        Chatrapati Shivaji International Airport (158.4Km)
                    </span>
                </div>
                <DividerY />
                <div className="flex flex-col gap-1 max-w-44">
                    <h3 className="font-semibold">Declaration</h3>
                    <span>
                        Trade marks used in this domain [dbatu.ac.in] 
                        (Except Dr. Babasaheb Ambedkar Technological University)
                        belong to the respective owners.
                        This domain(dbatu.ac.in) is the official web portal of 
                        Dr. Babasaheb Ambedkar Technological University
                    </span>
                </div>
                <DividerY />
                <div className="flex flex-col gap-1 max-w-44">
                    <h3 className="font-semibold">Contact us</h3>
                    <span>
                        The Registrar <br/>
                        Dr. Babasaheb Ambedkar Technological University, <br/>
                        Lonere, Tal - Mangaon, Dist - Raigad, <br/>
                        Maharashtra (India). 402103
                    </span>
                    <span>
                        <span className="font-semibold">Email: </span> 
                        registrar@dbatu.ac.in
                    </span>
                </div>
                <DividerY />
                <div className="flex flex-col gap-5 items-center">
                    <Image src={dbatuQR} alt="dbatu-qr" 
                        className="w-20 h-auto"
                    />
                    <span>Our website is best viewed in</span>
                </div>
            </section>
            <DividerX />
            <span className="flex items-center gap-1 font-light">
                copyright <PiCopyright /> 2023-24. All rights reserved.
            </span>
        </footer>
    )
}

const DividerY = () => (<div className="w-[1px] bg-black rounded h-40 opacity-45"></div>);

const DividerX = () => (<div className="h-[1px] w-1/3 opacity-45 bg-black rounded"></div>);

export default Footer;
import Image from "next/image";

import Icon from "@/app/assets/icon.svg";
import UserImage from "@/app/assets/userImage.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <div className="bg-white py-4 px-4 md:px-12 flex justify-between items-center">
            <div className="h-12 object-contain">
                <Image alt="logo" src={Icon} className="h-full w-auto" />
            </div>

            <div className="md:flex font-normal text-[#5B5B5B] items-center hidden">
                <Link href="/" className="px-8 cursor-pointer">Home</Link>
                <Link href="/" className="px-8 cursor-pointer">Courses</Link>
                <Link href="/" className="px-8 cursor-pointer">Careers</Link>
                <Link href="/" className="px-8 cursor-pointer">Blog</Link>
                <Link href="/" className="px-8 cursor-pointer">About Us</Link>
                <div className="flex items-center pl-5">
                    <div className="bg-[#D9D9D9] rounded-full mx-2">
                        <Image alt="user icon" src={UserImage} className="h-10 w-auto" />
                    </div>
                    <div className="flex items-center">
                        <span className="font-medium">Lina</span>
                        <div className="ml-2 w-4 h-4">
                            <FontAwesomeIcon icon={"fas fa-chevron-down"} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
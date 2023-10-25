import Image from "next/image";

import Icon from "@/app/assets/icon.svg";
import UserImage from "@/app/assets/userImage.svg";

export default function Header() {
    return (
        <div className="bg-white py-4 px-12 flex justify-between items-center">
            <div className="h-12 object-contain">
                <Image alt="logo" src={Icon} className="h-full w-auto" />
            </div>

            <div className="flex font-normal text-[#5B5B5B] items-center">
                <a href="/" className="px-8 cursor-pointer">Home</a>
                <a href="/" className="px-8 cursor-pointer">Courses</a>
                <a href="/" className="px-8 cursor-pointer">Careers</a>
                <a href="/" className="px-8 cursor-pointer">Blog</a>
                <a href="/" className="px-8 cursor-pointer">About Us</a>
                <div className="flex items-center pl-5">
                    <div className="bg-[#D9D9D9] rounded-full mx-2">
                        <Image alt="user icon" src={UserImage} className="h-10 w-auto" />
                    </div>
                    <div className="">
                        <span className="font-medium">Lina</span>
                        <span className="rotate-180 -translate-y-0.5 inline-block text-sm font-semibold ml-2">^</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
import Image from "next/image";
import Icon from "@/app/assets/iconDark.svg";

export default function Footer() {
    return (
        <div className="bg-[#252641] flex flex-col items-center py-10 px-5">
            <div className="flex items-center">
                <div className="border-white/30 border-r-2 pr-10">
                    <Image src={Icon} alt="icon" className="h-16 w-auto" />
                </div>
                <div className="text-white flex flex-col font-semibold pl-6">
                    <span>Virtual Class</span>
                    <span>for Zoom</span>
                </div>
            </div>


            <div className="flex flex-col items-center mt-20 text-center">
                <label htmlFor="user-email" className="text-[#B2B3CF] font-medium text-xl mb-4">Subscribe to get our Newsletter</label>
                <div className="flex flex-col items-center md:flex-row w-full md:w-auto">
                    <input id="user-email" type="email" placeholder="Your Email" className="mx-0 md:mx-2 w-4/5 md:w-80 text-gray-400 bg-transparent border-2 border-gray-400 focus-within:outline-none rounded-full py-2 px-4"></input>
                    <button type="button" className="mt-5 w-fit md:mt-0 mx-2 text-white bg-[#49BBBD] px-6 py-2 rounded-full">Subscribe</button>
                </div>
            </div>

            <div className="flex flex-col items-center text-[#B2B3CF] mt-20">
                <div className="my-2 flex flex-wrap justify-center">
                    <a href="/">Careers</a>
                    <span className="mx-4 opacity-20">|</span>
                    <a href="/">Privacy Policy</a>
                    <span className="mx-4 opacity-20">|</span>
                    <a href="/">Terms & Conditions</a>
                </div>

                <span>&copy; 2021 Class Technologies Inc.</span>
            </div>
        </div>
    );
};
import Image from "next/image";
import MenuIcon from "@/app/assets/menuIcon.svg";
import UserImage from "@/app/assets/userImage.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export function CourseCard({ data }) {
    return (
        <Link href={"/course/123456"} >
            <div className="bg-white flex flex-col p-4 rounded-xl drop-shadow-xl">
                <Image src={`/CourseThumbnails/${data.courseImg}`} alt="course image thumbnail" width={400} height={400} className="w-auto h-auto rounded-xl" />

                <div className="flex justify-between text-[#696984] text-xs font-medium my-4">
                    <div className="flex items-center">
                        <Image src={MenuIcon} className="w-4 h-auto" alt="menu icon" />
                        <span className="ml-2">{data.category}</span>
                    </div>

                    <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 text-[#838398]">
                            <FontAwesomeIcon icon={"fa-regular fa-clock"} />
                        </div>
                        <span className="">{data.duration}</span>
                    </div>
                </div>

                <span className="font-semibold text-lg">{data.title}</span>

                <p className="text-sm text-[#696984] mt-4 mb-6">{data.desc}</p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="bg-[#D9D9D9] rounded-full mx-2">
                            <Image alt="user icon" src={UserImage} className="w-9 h-9" />
                        </div>
                        <span className="font-medium text-sm">{data.authorName}</span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-sm text-[#696984] line-through mr-2">${data.orgPrice}</span>
                        <span className="text-lg font-semibold text-[#49BBBD]">${data.currPrice}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
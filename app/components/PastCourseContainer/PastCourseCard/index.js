import Image from "next/image";
import UserIcon from "@/app/assets/userImage.svg";

export default function PastCourseCard({ course }) {
    return (
        <div className="flex flex-col rounded-xl bg-slate-50 p-4 drop-shadow-2xl">
            <Image src={`/PastCourseThumbnails/${course.imgName}`} className="" alt="Past Course Thumbnail" width={400} height={200} />

            <span className="font-medium text-xl my-2">{course.title}</span>

            <div className="flex items-center my-2">
                <div className="bg-[#D9D9D9] rounded-full mr-2">
                    <Image src={UserIcon} alt="user icon" className="h-10 w-auto" />
                </div>
                <span className="font-semibold">{course.authorName}</span>
            </div>

            <div className="w-full bg-gray-300 h-2 my-2 rounded-md overflow-hidden">
                <div className="bg-[#49BBBD] w-4/6 h-2"></div>
            </div>
            <span className="text-sm text-right">Lesson 5 of 7</span>
        </div >
    );
};
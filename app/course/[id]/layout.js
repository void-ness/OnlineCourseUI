import { CardContainer, SectionContainer, SectionHeading } from "@/app/components";
import OfferCard from "@/app/components/CoursePage/OfferCard";
import { courseData, offerDetails } from "@/app/constants";
import Image from "next/image";

import TeacherTeaching from "@/app/assets/TeacherTeaching.png";

export default function CourseLayout({ children }) {
    return (
        <div>
            {children}

            <SectionContainer bgColor={"#eaf4ff"}>
                <SectionHeading link={"See all"}>Marketing Articles</SectionHeading>
                <CardContainer data={courseData} />
            </SectionContainer>

            <SectionContainer bgColor={"#FFFFFF"}>
                <div className="flex items-center">
                    <div className="w-1/2 px-10 py-10">
                        <div className="relative">
                            <span className="text-2xl font-medium z-10 relative">
                                Everything you can do in a physical classroom, <span className="text-[#00CBB8]">you can do with TOTC</span>
                            </span>
                            <div className="bg-green-300 w-12 h-12 rounded-full absolute -top-3 -left-5 z-0"></div>
                        </div>

                        <div className="relative">
                            <p className="text-[#696984] my-8 leading-7 relative z-10">
                                TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
                            </p>

                            <div className="absolute w-6 h-6 bg-green-300 rounded-full right-0 top-1/2"></div>
                        </div>

                        <a href="/" className="underline text-[#696984]">Learn more</a>

                    </div>

                    <div className="px-10 w-1/2">
                        <div className="relative">
                            <Image src={TeacherTeaching} className="w-auto h-auto rounded-3xl z-10 relative" alt="A teacher teaching" />
                            <div className="w-44 h-44 absolute bg-green-300 -bottom-3 -right-3 z-0 rounded-lg" />
                            <div className="w-24 h-24 absolute bg-blue-400 -top-3 -left-3 z-0 rounded-lg" />
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <SectionContainer bgColor={"#FFFFFF"}>
                <SectionHeading link={"See all"}>Top Education offers and deals are listed here</SectionHeading>
                <div className="grid grid-cols-3 gap-24 mb-5">
                    {offerDetails.map((offer, ind) => {
                        return (<OfferCard key={ind} offer={offer} />)
                    })}
                </div>
            </SectionContainer>
        </div>
    );
};
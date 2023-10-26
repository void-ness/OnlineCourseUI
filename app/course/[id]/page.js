import { library } from "@fortawesome/fontawesome-svg-core";

import { faPaintBrush, faDesktop, faBriefcase, faBook, faFilm, faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faSlideshare } from "@fortawesome/free-brands-svg-icons";
import { SectionContainer } from "@/app/components";
import Image from "next/image";

import CourseDetailsHeader from "@/app/assets/CourseDetailsHeader.jpeg";
import CourseReviewContainer from "@/app/components/CoursePage/CourseReviewContainer";

library.add(faPaintBrush, faDesktop, faClock, faBriefcase, faSlideshare, faBook, faFilm, faStar);

export default function CoursePageDetails() {
    return (
        <div>
            <div className="relative">
                <Image src={CourseDetailsHeader} alt="Course Details" className="w-full h-[35rem] object-cover object-center" />
                <div className="w-full h-[35rem] bg-black/25 absolute top-0 left-0" />
            </div>

            <SectionContainer bgColor={"#FFFFFF"}>
                <div className="w-3/5">
                    <CourseReviewContainer />
                </div>
            </SectionContainer>
        </div>
    );
};
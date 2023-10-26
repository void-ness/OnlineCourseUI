import { library } from "@fortawesome/fontawesome-svg-core";

import { faPaintBrush, faDesktop, faBriefcase, faBook, faFilm, faStar, faCertificate, faCamera, faFile, faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faSlideshare, faXTwitter, faFacebook, faYoutube, faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { SectionContainer } from "@/app/components";
import Image from "next/image";

import CourseDetailsHeader from "@/app/assets/CourseDetailsHeader.jpeg";
import CourseReviewContainer from "@/app/components/CoursePage/CourseReviewContainer";
import CourseDetailsContainer from "@/app/components/CoursePage/CourseDetailsContainer";

library.add(faPaintBrush, faDesktop, faClock, faBriefcase, faSlideshare, faBook, faFilm, faStar, faCertificate, faCamera, faFile, faChartColumn, faXTwitter, faFacebook, faYoutube, faInstagram, faTelegram, faWhatsapp);

export default function CoursePageDetails() {
    return (
        <div>
            <div className="relative">
                <Image src={CourseDetailsHeader} alt="Course Details" className="w-full h-[35rem] object-cover object-center" />
                <div className="w-full h-[35rem] bg-black/25 absolute top-0 left-0" />
            </div>

            <SectionContainer bgColor={"#FFFFFF"}>
                <div className="flex justify-between relative">
                    <div className="w-3/5">
                        <CourseReviewContainer />
                    </div>

                    <div className="w-2/5 absolute right-0 -top-72">
                        <CourseDetailsContainer />
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
};
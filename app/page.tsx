import { CardContainer, CourseBanner, SectionContainer, SectionFooter, SectionHeading, CourseCategoryCard } from "@/app/components";
import PastCourseContainer from "./components/LandingPage/PastCourseContainer";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faPaintBrush, faDesktop, faBriefcase, faBook, faFilm } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faSlideshare } from "@fortawesome/free-brands-svg-icons";

import { courseData } from "./constants/courseData";
import { courseCatDetails } from "./constants/courseCatData";

library.add(faPaintBrush, faDesktop, faClock, faBriefcase, faSlideshare, faBook, faFilm);

export default function Home() {
  return (
    <div>
      <PastCourseContainer />

      <SectionContainer bgColor={"#FFFFFF"}>
        <SectionHeading link="">Choose favourite course from top category</SectionHeading>
        <div className="grid grid-cols-4 gap-20">
          {courseCatDetails.map((course, ind) => {
            return (<CourseCategoryCard course={course} key={ind} />)
          })}
        </div>
      </SectionContainer>

      <SectionContainer bgColor={"#eaf4ff"}>
        <SectionHeading link="See all">Recommended for you</SectionHeading>
        <CardContainer data={courseData} />
        <SectionFooter />
      </SectionContainer>

      <SectionContainer bgColor={"#FFFFFF"}>
        <SectionHeading link="See all">Get choice of your course</SectionHeading>
        <CardContainer data={courseData} />
      </SectionContainer>

      <SectionContainer bgColor={"#FFFFFF"}>
        <CourseBanner />
      </SectionContainer>

      <SectionContainer bgColor={"#FFFFFF"}>
        <SectionHeading link="See all">The course in personal development</SectionHeading>
        <CardContainer data={courseData} />
      </SectionContainer>

      <SectionContainer bgColor={"#eaf4ff"}>
        <SectionHeading link="See all">Student are viewing</SectionHeading>
        <CardContainer data={courseData} />
      </SectionContainer>
    </div>
  )
}

import { SectionContainer, SectionFooter, SectionHeading } from "../..";
import PastCourseCard from "./PastCourseCard/index";

const PastCourseContainer = () => {
    const courseDetails = [
        {
            title: "AWS Certified Solutions Architect",
            authorName: "Lina",
            imgName: "course-1.png"
        },
        {
            title: "AWS Certified Solutions Architect",
            authorName: "Lina",
            imgName: "course-1.png"
        }, {
            title: "AWS Certified Solutions Architect",
            authorName: "Lina",
            imgName: "course-1.png"
        },
    ]
    return (
        <SectionContainer bgColor={"#eaf4ff"}>
            <SectionHeading link={"View History"}>
                Welcome back, ready for your next lesson?
            </SectionHeading>

            <div className="flex md:flex-row flex-col justify-between">
                {courseDetails.map((course, ind) => {
                    return (<PastCourseCard key={ind} course={course} />)
                })}
            </div>

            <SectionFooter />
        </SectionContainer>
    );
};

export default PastCourseContainer;
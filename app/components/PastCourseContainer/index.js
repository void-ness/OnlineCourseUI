import { SectionHeading } from "..";
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
        <div className="bg-[#eaf4ff]">
            <div className="w-11/12 mx-auto">
                <SectionHeading link={"View History"}>
                    Welcome back, ready for your next lesson?
                </SectionHeading>

                <div className="flex justify-between">
                    {courseDetails.map((course, ind) => {
                        return (<PastCourseCard key={ind} course={course} />)
                    })}
                </div>

                <div className="flex justify-end py-8">
                    <div className="cursor-pointer text-white bg-[#49BBBD]/50 py-1 px-3 font-semibold rounded-sm">
                        &lt;
                    </div>
                    <div className="cursor-pointer text-white bg-[#49BBBD] py-1 px-3 ml-3 font-semibold rounded-sm">
                        &gt;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastCourseContainer;
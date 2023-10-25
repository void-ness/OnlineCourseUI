import { SectionHeading } from "..";
import { CourseCategoryCard } from "./CourseCategoryCard";
import { courseCatDetails } from "@/app/constants/courseCatData";

export default function CourseCategoryContainer() {

    return (
        <div className="my-10 mb-16">
            <div className="w-11/12 mx-auto">
                <SectionHeading>Choose favourite course from top category</SectionHeading>
                <div className="grid grid-cols-4 gap-20">
                    {courseCatDetails.map((course, ind) => {
                        return (<CourseCategoryCard course={course} key={ind} />)
                    })}
                </div>
            </div>
        </div>
    );
};
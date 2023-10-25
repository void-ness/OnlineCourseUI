import { CourseCard } from "@/app/components/common/CourseCard";

export function CardContainer({ data }) {
    return (
        <div className="grid grid-cols-4 gap-14">
            {data.map((course, ind) => {
                return (<CourseCard data={course} key={ind} />)
            })}
        </div>
    );
};
import { CourseCard } from "@/app/components/common/CourseCard";

export function CardContainer({ data }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
            {data.map((course, ind) => {
                return (<CourseCard data={course} key={ind} />)
            })}
        </div>
    );
};
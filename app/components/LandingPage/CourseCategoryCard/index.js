import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function CourseCategoryCard({ course }) {
    return (
        <div className="flex flex-col items-center px-8 py-12 drop-shadow-xl bg-white rounded-lg">
            <div className="p-4 w-16 h-16 rounded-sm relative">
                <div className='w-16 h-16 absolute top-0 left-0 rounded-sm' style={{ backgroundColor: course.color, opacity: 0.3 }}></div>
                <FontAwesomeIcon icon={course.icon} color={course.color} />
            </div>
            <span className='font-semibold text-xl my-4'>
                {course.name}
            </span>
            <p className='text-center text-[#696984]'>
                {course.desc}
            </p>
        </div>
    );
};
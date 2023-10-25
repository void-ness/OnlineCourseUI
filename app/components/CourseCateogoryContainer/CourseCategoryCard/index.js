import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export function CourseCategoryCard({ course }) {
    return (
        <div className="flex flex-col items-center px-8 py-12 drop-shadow-xl bg-white rounded-lg">
            <div className={`bg-[${course.color}] bg-opacity-30 p-4 w-16 h-16 rounded-sm`}>
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
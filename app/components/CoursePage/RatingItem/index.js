export default function RatingItem({ value }) {
    return (
        <div className="flex items-center text-gray-500 my-1">
            <span className="w-2/6 md:w-1/6">{value} stars</span>
            <div className="w-5/6 h-2 bg-gray-300 rounded-md overflow-hidden">
                <div className="w-4/5 h-2 bg-[#49BBBD]" />
            </div>
        </div>
    );
};
import RatingBox from "../RatingBox";
import RatingItem from "../RatingItem";
import UserReviewCard from "../UserReviewCard";

export default function CourseReviewContainer() {
    return (
        <div className="mt-10 md:mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
                <button className="bg-black/10 px-6 py-2 rounded-lg" type="button">Overview</button>
                <button className="bg-black/10 px-6 py-2 rounded-lg" type="button">Overview</button>
                <button className="bg-black/10 px-6 py-2 rounded-lg" type="button">Overview</button>
                <button className="bg-[#49BBBD] px-6 py-2 rounded-lg" type="button">Overview</button>
            </div>

            <div className="bg-[#9DCCFF4D] p-10 mt-14 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 md:pr-10">
                        <RatingBox />
                    </div>

                    <div className="md:w-2/3 flex flex-col mt-5 md:mt-0">
                        <RatingItem value={5} />
                        <RatingItem value={4} />
                        <RatingItem value={3} />
                        <RatingItem value={2} />
                        <RatingItem value={1} />
                    </div>
                </div>

                <div className="mt-6">
                    <UserReviewCard />
                    <div className="h-0.5 bg-gray-300 my-7"></div>
                    <UserReviewCard />
                </div>
            </div>

        </div>
    );
};
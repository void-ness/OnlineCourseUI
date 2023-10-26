import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RatingBox() {
    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-xl">
            <span className="font-medium text-2xl text-black/70">4 out of 5</span>
            <div className="flex w-28 text-yellow-400 my-4">
                <FontAwesomeIcon icon={"fas fa-star"} />
                <FontAwesomeIcon icon={"fas fa-star"} />
                <FontAwesomeIcon icon={"fas fa-star"} />
                <FontAwesomeIcon icon={"fas fa-star"} />
                <FontAwesomeIcon icon={"fas fa-star"} />
            </div>
            <span className="text-black/50">Top Rating</span>
        </div>
    );
};
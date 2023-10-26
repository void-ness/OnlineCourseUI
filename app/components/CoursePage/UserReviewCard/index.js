import Image from "next/image";
import UserIcon from "@/app/assets/userImage.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserReviewCard() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-end">
                <div className="flex items-center">
                    <div className="bg-[#D9D9D9] rounded-full mr-4">
                        <Image alt="user icon" src={UserIcon} className="w-12 h-12" />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-medium text-sm">Lina</span>
                        <div className="flex text-yellow-400 w-24 mt-1">
                            <FontAwesomeIcon icon={"fas fa-star"} />
                            <FontAwesomeIcon icon={"fas fa-star"} />
                            <FontAwesomeIcon icon={"fas fa-star"} />
                            <FontAwesomeIcon icon={"fas fa-star"} />
                            <FontAwesomeIcon icon={"fas fa-star"} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="w-4 h-4 text-gray-400 mr-2">
                        <FontAwesomeIcon icon={"far fa-clock"} />
                    </div>
                    <span className="text-xs">3 Month</span>
                </div>
            </div>

            <p className="text-gray-500 mt-4">
                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
            </p>
        </div>
    );
};
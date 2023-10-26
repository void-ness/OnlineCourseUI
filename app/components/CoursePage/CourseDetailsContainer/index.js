import Image from "next/image";
import CourseDetailsHeader from "@/app/assets/CourseDetailsHeader.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CourseDetailsContainer() {
    return (
        <div className="p-5 md:w-2/3 mx-auto flex flex-col bg-white rounded-xl">
            <div className="relative hidden md:block">
                <Image src={CourseDetailsHeader} alt="Course Details Header" className="w-full h-48" />
                <div className="bg-black/30 w-full h-48 absolute top-0 left-0"></div>
            </div>
            <div className="flex items-center font-medium justify-between my-4">
                <span className="text-3xl font-semibold">$49.99</span>
                <span className="text-xl text-gray-500 line-through">$99.99</span>
                <span className="text-xl text-gray-600">50% Off</span>
            </div>

            <span className="text-[#49BBBD] text-center font-semibold">11 hour left at this price</span>

            <button type="button" className="bg-[#49BBBD] py-2 text-white rounded-lg my-5">
                Buy Now
            </button>

            <div className="h-0.5 bg-gray-300 my-4"></div>

            <div>
                <span className="font-semibold text-xl">This Course included</span>
                <div className="flex items-center my-2">
                    <div className="w-4 h-4 mr-2">
                        <FontAwesomeIcon className="text-[#49BBBD]" icon={"fas fa-certificate"} />
                    </div>
                    <span className="font-medium text-gray-500">Money Back Guarantee</span>
                </div>

                <div className="flex items-center my-2">
                    <div className="w-4 h-4 mr-2">
                        <FontAwesomeIcon className="text-[#49BBBD]" icon={"fas fa-camera"} />
                    </div>
                    <span className="font-medium text-gray-500">Access on all devices</span>
                </div>

                <div className="flex items-center my-2">
                    <div className="w-4 h-4 mr-2">
                        <FontAwesomeIcon className="text-[#49BBBD]" icon={"fas fa-file"} />
                    </div>
                    <span className="font-medium text-gray-500">Certification of completion</span>
                </div>

                <div className="flex items-center my-2">
                    <div className="w-4 h-4 mr-2">
                        <FontAwesomeIcon className="text-[#49BBBD]" icon={"fas fa-chart-column"} />
                    </div>
                    <span className="font-medium text-gray-500">32 Modules</span>
                </div>
            </div>

            <div className="h-0.5 bg-gray-300 my-4"></div>

            <div>
                <span className="font-semibold text-xl">Training 5 or more people</span>
                <p className="my-2 text-gray-500">
                    Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>
            </div>

            <div className="h-0.5 bg-gray-300 my-4"></div>

            <div>
                <span className="font-semibold text-xl">Share this course</span>

                <div className="flex justify-between mt-5">
                    <div className="w-8 h-8 rounded-full text-white bg-gray-500 p-2 cursor-pointer">
                        <FontAwesomeIcon icon={"fa-brands fa-x-twitter"} />
                    </div>

                    <div className="w-8 h-8 rounded-full text-white bg-gray-500 p-2 cursor-pointer">
                        <FontAwesomeIcon icon={"fa-brands fa-facebook"} />
                    </div>

                    <div className="w-8 h-8 rounded-full text-white bg-red-500 p-2 cursor-pointer">
                        <FontAwesomeIcon icon={"fa-brands fa-youtube"} />
                    </div>

                    <div className="w-8 h-8 rounded-full text-white bg-gray-500 p-2 cursor-pointer">
                        <FontAwesomeIcon icon={"fa-brands fa-instagram"} />
                    </div>

                    <div className="w-8 h-8 rounded-full text-white bg-gray-500 p-2 cursor-pointer">
                        <FontAwesomeIcon icon={"fa-brands fa-telegram"} />
                    </div>

                    <div className="w-8 h-8 rounded-full text-white bg-gray-500 p-2 cursor-pointer">
                        <FontAwesomeIcon icon={"fa-brands fa-whatsapp"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
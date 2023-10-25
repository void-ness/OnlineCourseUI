import { CardContainer, SectionContainer, SectionHeading } from "@/app/components";
import OfferCard from "@/app/components/CoursePage/OfferCard";
import { courseData, offerDetails } from "@/app/constants";

export default function CourseLayout({ children }) {
    return (
        <div>
            {children}

            <SectionContainer bgColor={"#eaf4ff"}>
                <SectionHeading link={"See all"}>Marketing Articles</SectionHeading>
                <CardContainer data={courseData} />
            </SectionContainer>

            <SectionContainer bgColor={"#FFFFFF"}>
                <SectionHeading link={"See all"}>Top Education offers and deals are listed here</SectionHeading>
                <div className="grid grid-cols-3 gap-24 mb-5">
                    {offerDetails.map((offer, ind) => {
                        return (<OfferCard key={ind} offer={offer} />)
                    })}
                </div>
            </SectionContainer>
        </div>
    );
};
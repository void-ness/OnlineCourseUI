export default function OfferCard({ offer }) {
    return (
        <div className="bg-[url('/Misc/offer-1.png')] bg-no-repeat bg-cover bg-center flex flex-col  text-white rounded-lg p-10 relative">
            <div className="absolute w-full h-full bg-black/25 content-[''] top-0 left-0 rounded-lg z-0">
            </div>

            <div className="z-10">
                <div className="bg-red-500 rounded-md w-min px-3 py-4">
                    {offer.discount}
                </div>

                <span className="font-medium text-2xl my-5 block">{offer.category}</span>

                <p className="text-lg">{offer.desc}</p>
            </div>
        </div>
    );
};
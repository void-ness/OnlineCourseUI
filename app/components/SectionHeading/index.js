export function SectionHeading({ children, link }) {
    return (
        <div className="flex justify-between items-center my-8">
            <span className="font-semibold text-2xl">{children}</span>

            {link && (
                <a href="/" className="text-[#49BBBD] text-sm font-semibold">{link}</a>
            )}
        </div>
    )
};
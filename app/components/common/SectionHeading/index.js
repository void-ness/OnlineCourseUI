export function SectionHeading({ children, link }) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <span className="font-semibold text-2xl">{children}</span>

            {link && (
                <a href="/" className="text-[#49BBBD] text-sm font-semibold mt-4 md:mt-0">{link}</a>
            )}
        </div>
    )
};
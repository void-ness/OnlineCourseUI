export function SectionContainer({ children, bgColor }) {
    return (
        <div className={`py-16`} style={{ backgroundColor: bgColor }}>
            <div className="w-11/12 mx-auto">
                {children}
            </div>
        </div>
    );
};
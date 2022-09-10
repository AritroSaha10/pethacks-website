import classArrayToString from "@util/styles/classNames";

export default function PageContainer({ className, children } : { className?: string, children: React.ReactNode }) {
    return (
        <div className={classArrayToString([
            "flex flex-col items-center gap-8",
            "text-center",
            "px-10 pt-6 pb-2",
            "lg:px-20 lg:pt-12 lg:pb-4",
            "xl:px-60",
            className ?? ""
        ])}>
            {children}
        </div>
    )
}
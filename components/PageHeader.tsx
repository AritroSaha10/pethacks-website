export default function PageHeader({ title, topSubtitle } : { title: string, topSubtitle?: string } ) {
    return (
        <header className="h-44 relative">
            <div className="flex items-center justify-center relative z-1 h-full bg-pet-turquoise">
                <div className="mx-2 text-center">
                <span className="text-xl text-pet-teal font-semibold">{topSubtitle}</span>

                    <h1 className="text-white font-bold text-5xl lg:text-6xl">
                        {title}
                    </h1>
                </div>
            </div>
        </header>
    )
}
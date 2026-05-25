const Mobile = () => {
    return (
        <section className="lg:hidden font-mulish w-full h-full rounded-[22px] border border-black bg-white text-black overflow-hidden">
            <div className="relative h-full w-full border border-black/20">
                {/* Grid */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-6">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="border border-black/10" />
                    ))}
                </div>

                {/* Title */}
                <h1 className="absolute left-0 top-2 text-[72px] leading-[0.9] font-black tracking-[-0.08em]">
                    THIS
                    <br />
                    SITE
                </h1>

                {/* Side text */}
                <p className="absolute right-1 top-64 rotate-90 origin-right text-xs font-black">
                    Hosted by Ria CHoi
                </p>

                {/* Date label */}
                <p className="absolute left-1 top-[36%] text-xs font-black">
                    Go Use Desktop
                </p>

                {/* Date */}
                <div className="absolute left-0 top-[40%] text-[72px] leading-[0.82] font-black tracking-[-0.08em]">
                    IS NOT
                    <br />
                    SUPPOR-
                    <br />
                    TED ON
                </div>

                {/* Location label */}
                <p className="absolute left-1 bottom-[12%] text-xs font-black">
                    @riiiach
                </p>

                {/* Location */}
                <h2 className="absolute left-0 bottom-0 text-[76px] leading-none font-black tracking-[-0.08em]">
                    MOBILE
                </h2>
            </div>
        </section>
    );
};

export default Mobile;
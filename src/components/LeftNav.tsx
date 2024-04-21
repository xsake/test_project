'use client'
interface LeftNavProps {
    open: boolean;
    setOPen: ( value: boolean) => void
}

const LeftNav: React.FC<LeftNavProps> = ({
    open,
    setOPen
}) => {

    return (
        <div className={`flex-col z-30 justify-center items-center  2xl:w-[520px] xl:w-[520px] xl:h-[641px] lg:w-[520px] lg:h-full md:h-full sm:w-full sm:h-[530px] mr-[20px] ${open ? "block" : "lg:block hidden"} bg-black text-white fixed`}>
            <div  className="cursor-pointer z-50 ml-16 flex items-center justify-start sm:mt-[14px] md:mt-[24px]">
                <img
                    alt="top_man"
                    className="w-[75px] h-[50px]"
                    onClick={() =>setOPen(false)}
                    src="./Logo1.png"
                />
                <h1>DaoLabs Ecosystem</h1>
            </div>
            <div className="flex sm:gap-5 items-center justify-center sm:text-[20px] lg:text-[20px] md:text-[24px] sm:mt-[15px] xl:mt-[15px] lg:mt-[10px] md:mt-[30px] md:gap-10">
                <a href="#">HOME</a>
                <a href="#">ECOSYSTEM</a>
                <a href="#">TEAM</a>
            </div>
            <div className="flex items-center justify-center gap-4 sm:mt-4 md:mt-6 lg:mt-6 xl:mt-6">
                <img
                    alt="top_man"
                    className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
                    src="./group1.png"
                />
                <div className="relative sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]">
                    <img
                        alt="top_man"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                        src="./group2.png"
                    />
                </div>

                <img
                    alt="top_man"
                    className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
                    src="./group3.png"
                />
                <img
                    alt="top_man"
                    className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
                    src="./group4.png"
                />
                <img
                    alt="top_man"
                    className="sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
                    src="./group1.png"
                />
            </div>
            <div className="text-center sm:text-[34px] md:text-[40px] lg:text-[66px] xl:text-[40px] sm:mt-4 md:mt-5 lg:mt-4 xl:mt-5">
                <p className="sm:leading-[40px] md:leading-[35px] lg:leading-[60px] xl:leading-[35px]">MULTIDAO<br />X MUTANT</p>
            </div>
            <div className="flex flex-col items-center justify-center xl:mx-10 lg:mx-14 md:mx-[200px] sm:mx-[20px]  mx-4  sm:mt-2 md:mt-6 lg:mt-6 xl:mt-4 leading-5">
                <p className="sm:text-[12px] md:text-[18px] xl:text-[18px]">MultiDao X Mutant is a collection of 5,555 unique and rare NFTs, that are designed to offer their owners a range of benefits and advantages within DaoLabs ecosystem. such as:</p>
                <div className="flex sm:text-[12px] md:text-[15px] xl:text-[15px]">
                    <div>&nbsp;1.</div>
                    <div>&nbsp;Staking: Mutant X NFTs can be staked to earn passive income in $EGLD.</div>
                </div>
                <div className="flex sm:text-[12px] md:text-[15px] xl:text-[15px]">
                    <div>&nbsp;2.</div>
                    <div>&nbsp;Royalty Sharing: Mutant X NFT Holders are entitled to a 2.5% (of 5%) royalty share from the sale of any Mutant X NFT on the secondary market.</div>
                </div>
                <div className="flex sm:text-[12px] md:text-[15px] xl:text-[15px]">
                    <div>&nbsp;3.</div>
                    <div>&nbsp;Game P2e: Mutant X NFTs can be used in main game and other activities within the daolabs ecosystem, providing their owners with a range of benefits and rewards.</div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 sm:mt-3 xl:mt-8">
                <div className="relative w-[12px] h-[12px]">
                    <div className="relative w-[12px] h-[12px]">
                        <img
                            alt="top_man"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                            src="./gitbook.png"
                        />
                    </div>
                </div>
                <div className="relative w-[12px] h-[12px]">
                    <img
                        alt="top_man"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                        src="./discord.png"
                    />
                </div>

                <div className="relative w-[12px] h-[12px]">
                    <img
                        alt="top_man"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                        src="./twitter.png"
                    />
                </div>
                <div className="relative w-[12px] h-[4px]">
                    <img
                        alt="top_man"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[177%]"
                        src="./Medium.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftNav;
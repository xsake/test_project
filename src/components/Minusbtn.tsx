interface MinusBtn {
    onClick:()=>void;
}

const MinusBtn:React.FC<MinusBtn> = ({
    onClick
}) => {
    return (
        <>
            <div onClick={onClick} className="cursor-pointer flex items-center justify-center z-10 w-[52px] h-[52px] bg-contain bg-no-repeat text-white text-base" style={{ backgroundImage: "url(./minus.png)" }}>
                <span className="-mt-4">-</span>
            </div>
        </>
    )
}

export default MinusBtn;
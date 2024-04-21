interface PlusBtnProps {
    onClick: ()=>void
}


const PlusBtn:React.FC<PlusBtnProps> = ({
    onClick
}) => {
    return (
        <>
            <div onClick={onClick} className="cursor-pointer flex items-center justify-center z-10 w-[52px] h-[52px] bg-contain bg-no-repeat text-white text-base" style={{ backgroundImage: "url(./plus.png)" }}>
                <span>+</span>
            </div>
        </>
    )
}

export default PlusBtn;
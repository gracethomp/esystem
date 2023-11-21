export const Button = ({text, onClick}) => {
    return (
        <button className="text-xl text-white bg-violet-500 py-2 px-6 w-full rounded-xl" onClick={onClick}>{text}</button>
    )
}
const Card = ({children}) => {
    return (
        <div className={"p-8 bg-white shadow-sm shadow-emerald-700 rounded"}>
            {children}
        </div>
    )
}

export default Card;

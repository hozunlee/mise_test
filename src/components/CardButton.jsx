const CardButton = ({ button }) => {
    return (
        <div>
            <button className="w-full h-full">{button.title}</button>
        </div>
    );
};

export default CardButton;

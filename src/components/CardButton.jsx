const CardButton = ({ button, onClick }) => {
    return (
        <div>
            <button
                onClick={() => onClick(button.target)}
                className="w-full h-full"
            >
                {button.title}
            </button>
        </div>
    );
};

export default CardButton;

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    type?: string;
    className?: string;
}

const Button = ({
    text,
    onClick,
    disabled = false,
    type = "primary",
    className = "",
}: ButtonProps) => {
    let buttonClassName =
        "p-2.5 w-full h-full rounded-sm font-medium border border-black" +
        className;

    switch (type) {
        case "primary":
            buttonClassName += " bg-green-500 text-white hover:bg-green-400";
            break;
        case "danger":
            buttonClassName += " bg-red-500 text-white hover:bg-red-400";
            break;
        case "no-bg":
            buttonClassName += " text-black";
            break;
    }

    return (
        <button
            className={buttonClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;

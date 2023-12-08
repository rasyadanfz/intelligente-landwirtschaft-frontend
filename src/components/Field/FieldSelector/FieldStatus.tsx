interface FieldStatusProps {
    fieldName: string;
    isPlanted: boolean;
    fieldNumber: number;
    onClick: (fieldNumber: number) => void;
    isSelected: boolean;
}

const FieldStatus = ({
    fieldName,
    isPlanted,
    fieldNumber,
    onClick,
    isSelected,
}: FieldStatusProps) => {
    const handleClick = () => {
        onClick(fieldNumber);
    };
    let statusClassName = "";
    let className = "";
    if (!isPlanted) {
        statusClassName =
            "text-red-500 font-bold bg-red-200 p-1 rounded-md min-w-[100px] text-center text-body";
        if (isSelected) {
            className += "bg-red-400/50";
        }
    } else {
        statusClassName =
            "text-green-500 font-bold bg-green-200 p-1 rounded-md min-w-[100px] text-center text-body";
        if (isSelected) {
            className += "bg-green-400/50";
        }
    }

    return (
        <div
            className={`flex justify-between p-2 gap-x-6 items-center min-w-[220px] ${className} rounded-md`}
            onClick={handleClick}
        >
            <div className="font-medium text-body">{fieldName}</div>
            <div className={statusClassName}>
                {isPlanted ? "Planted" : "Not Planted"}
            </div>
        </div>
    );
};

export default FieldStatus;

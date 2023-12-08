import Button from "../../Button";

interface FieldButtonProps {
    fieldNumber: number;
    isPlanted: boolean;
    isSelected: boolean;
    onButtonClick: () => void;
}

const FieldButton = ({
    fieldNumber,
    isPlanted = false,
    isSelected = false,
    onButtonClick,
}: FieldButtonProps) => {
    const handleButtonClick = () => {
        onButtonClick();
    };

    return (
        <div>
            <Button
                text={(fieldNumber + 1).toString()}
                onClick={handleButtonClick}
                type={
                    isSelected ? "selected" : isPlanted ? "primary" : "danger"
                }
                className=" grow-0"
            />
        </div>
    );
};

export default FieldButton;

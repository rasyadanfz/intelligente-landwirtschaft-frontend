import Button from "../../Button";

interface FieldButtonProps {
    fieldNumber: number;
    isSelected: boolean;
    onButtonClick: () => void;
}

const FieldButton = ({
    fieldNumber,
    isSelected = false,
    onButtonClick,
}: FieldButtonProps) => {
    const handleButtonClick = () => {
        onButtonClick();
    };

    return (
        <div>
            <Button
                text={fieldNumber.toString()}
                onClick={handleButtonClick}
                type={isSelected ? "primary" : "no-bg"}
            />
        </div>
    );
};

export default FieldButton;

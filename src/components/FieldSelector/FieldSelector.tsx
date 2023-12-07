import { useEffect, useState } from "react";
import FieldButton from "./FieldButton";

interface FieldData {
    fieldNumber: number;
}

const mockFieldData: FieldData[] = [
    { fieldNumber: 1 },
    { fieldNumber: 2 },
    { fieldNumber: 3 },
    { fieldNumber: 4 },
    { fieldNumber: 5 },
    { fieldNumber: 6 },
    { fieldNumber: 7 },
    { fieldNumber: 8 },
    { fieldNumber: 9 },
    { fieldNumber: 10 },
];

const FieldSelector = () => {
    const [selectedField, setSelectedField] = useState(0);
    const [fieldData, setFieldData] = useState<FieldData[]>();

    useEffect(() => {
        // Fetch Data
        const data = mockFieldData; // use mock data temporarily
        setFieldData(data);
        setSelectedField(data[0].fieldNumber);
    }, []);

    const fieldList = fieldData?.map((field: FieldData) => {
        return (
            <FieldButton
                fieldNumber={field.fieldNumber}
                isSelected={field.fieldNumber === selectedField}
                onButtonClick={() => {
                    setSelectedField(field.fieldNumber);
                }}
            />
        );
    });

    return <div className="grid grid-cols-5 gap-x-3 gap-y-3">{fieldList}</div>;
};

export default FieldSelector;

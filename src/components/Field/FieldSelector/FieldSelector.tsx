import { useEffect, useState } from "react";
import FieldStatus from "./FieldStatus";

export interface FieldData {
    name: string;
    numberId: number;
    isPlanted: boolean;
    currentSeedId?: number;
    id: string;
}

interface FieldSelectorProps {
    data: FieldData[];
    onClick: (fieldNumber: number) => void;
}

const FieldSelector = ({ data, onClick }: FieldSelectorProps) => {
    const [selectedField, setSelectedField] = useState(0);
    const [fieldData, setFieldData] = useState<FieldData[]>([]);
    const handleClick = (fieldNumber: number) => {
        onClick(fieldNumber);
        setSelectedField(fieldNumber);
    };

    useEffect(() => {
        setFieldData(data);
    }, [data]);

    const fieldList = fieldData.map((field: FieldData, _idx: number) => {
        return (
            <FieldStatus
                fieldName={field.name}
                isPlanted={field.isPlanted}
                fieldNumber={field.numberId}
                onClick={handleClick}
                isSelected={field.numberId === selectedField}
                key={_idx}
            />
        );
    });

    return (
        <div className="flex flex-col shrink-0 gap-x-3 gap-y-3">
            {fieldList}
        </div>
    );
};

export default FieldSelector;

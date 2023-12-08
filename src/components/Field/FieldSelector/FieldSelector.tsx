import { useEffect, useState } from "react";
import FieldButton from "./FieldButton";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fieldData, setFieldData] = useState<FieldData[]>([]);

    useEffect(() => {
        setFieldData(data);
    }, [data]);

    const fieldList = fieldData.map((field: FieldData, _idx: number) => {
        return (
            <div key={_idx} className="min-w-[45px] min-h-[45px]">
                <FieldButton
                    fieldNumber={field.numberId}
                    isPlanted={field.isPlanted}
                    isSelected={field.numberId === selectedField}
                    onButtonClick={() => {
                        setSelectedField(field.numberId);
                        onClick(field.numberId);
                    }}
                />
            </div>
        );
    });

    return (
        <div className="flex flex-wrap shrink-0 gap-x-3 gap-y-3">
            {fieldList}
        </div>
    );
};

export default FieldSelector;

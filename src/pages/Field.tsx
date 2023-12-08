import FieldSelector from "../components/Field/FieldSelector/FieldSelector";
import ReportCard from "../components/Field/ReportCard";

const Field = () => {
    return (
        <div>
            <h1>This is field page</h1>
            <div className="flex gap-x-10">
                <FieldSelector />
                <ReportCard type="temperature" value={20} />
            </div>
        </div>
    );
};

export default Field;

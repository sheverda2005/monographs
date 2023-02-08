import "./plannedMonographsTable.css"
import PlannedMonographName from "./PlannedMonographName";
const PlannedMonographsTable = () => {
    return (
        <div className={"planned-monographs-table"} >
            <div className="row row-planned-monographs-table">
                <div className="planned-monographs-table-name-monographs">
                    <div className="planned-monographs-table-name-monographs-title">
                       <b>Назва</b>
                    </div>
                    <PlannedMonographName name={"Modern teaching methods in pedagogy and philology"}/>
                    <PlannedMonographName name={"Prospective directions of scientific research in engineering and agriculture"}/>
                    <PlannedMonographName name={"Methods of improving the economy, tourism and management"}/>
                </div>
                <div className="planned-monographs-table-date-publication-monographs">
                    <div className="planned-monographs-table-date-publication-monographs-title">
                        <b>Дата видання</b>
                    </div>
                    <div className="planned-monographs-table-date-publication-monographs-text">
                        Дата видання - 12 березня 2023 року.
                        Прийом матеріалів до 2 березня (включно).
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlannedMonographsTable;
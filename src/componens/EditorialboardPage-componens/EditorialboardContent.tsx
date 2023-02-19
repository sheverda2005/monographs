import React from 'react';
import "./editorialboardContent.css"
const EditorialboardContent = () => {
    return (
        <div className={"editorial-board-content"}>
            <div className="container">
                <table width={"80%"} >
                    <tbody>
                    <tr>
                        <td className={"td-person-name"} >Плужнік Олена Іванівна</td>
                        <td className={"td-person-name-information"} >кандидат юридичних наук, професор кафедри кримінального права та кримінології, Одеський державний університет внутрішніх справ, Одеса, Україна</td>
                    </tr>
                    <tr>
                        <td width={"40%"}>Поливана Людмила Анатоліївна</td>
                        <td width={"60%"} >кандидат економічних наук, кафедра бухгалтерського обліку та аудиту, Харківський національний технічний університет сільського господарства імені Петра Василенка, Харків, Україна</td>
                    </tr>
                    <tr>
                        <td width={"40%"}>Мушеник Ірина Миколаївна</td>
                        <td width={"60%"} >кандидат економічних наук, доцент кафедри математичних дисциплін, інформатики і моделювання Подільського державного аграрно-технічного університету, м. Кам'янець-Подільський, Україна</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EditorialboardContent;
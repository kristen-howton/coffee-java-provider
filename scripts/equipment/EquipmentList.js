import { equipment }  from "./Equipment.js"
import { useEquipment } from "./equipmentDataProvider.js"


const contentTarget = document.querySelector(".EquipmentInformationDisplay")

export const equipmentList = () => {
    const equipmentObjectArray = useEquipment()

    for (const equipmentObject of equipmentObjectArray) {
        const HTMLRepresentationEquipment = equipment(equipmentObject)

        contentTarget.innerHTML += HTMLRepresentationEquipment
    }
}


import { employee }  from "./Employee.js"
import { useEmployee } from "./employeeDataProvider.js"


const contentTarget = document.querySelector(".EmployeeInformationDisplay")

export const employeeList = () => {
    const employeeObjectArray = useEmployee()

    for (const employeeObject of employeeObjectArray) {
        const HTMLRepresentationEmployee = employee(employeeObject)

        contentTarget.innerHTML += HTMLRepresentationEmployee
    }
}



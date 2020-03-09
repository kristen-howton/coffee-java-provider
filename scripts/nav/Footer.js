import { YearEstablished } from "./YearEstablished.js";
import BusinessName  from "./BusinessName.js"
import { ContactList } from "./contact/ContactList.js"

const contentTarget = document.querySelector("#java__footer")

export const Footer = () => {
    const businessHTML = BusinessName()
    const yearEstablishedHTML = YearEstablished()
    const contactListHTML = ContactList()

    contentTarget.innerHTML = `
        ${contactListHTML}
        ${businessHTML}
        ${yearEstablishedHTML}
    `
}


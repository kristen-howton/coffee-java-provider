import { useContactInfo } from "./contactDataProvider.js"
import { Contact } from "./Contact.js"

export const ContactList = () => {
    const contacts = useContactInfo()

    let allContactsHTML = ""

    for (const contact of contacts) {
        allContactsHTML += Contact(contact)
    }

    return allContactsHTML
}
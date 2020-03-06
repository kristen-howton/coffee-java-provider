export const equipment = (equipmentObject) => {
    return `
    <article class="equipment">
        <section id="equipment--id">ID: ${equipmentObject.id}</section>
        <p class="equipment--model">Model: ${equipmentObject.model} (${equipmentObject.serialNumber})</p> 
        <section class="equipment--functionality">Does it work? ${equipmentObject.isFunctional}</section>
        <section class="equipment--warrenty">Under Warrenty? ${equipmentObject.isUnderWarranty}</section>
    </article>
    
    `
    
}




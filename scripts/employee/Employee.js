export const employee = (employeeObject) => {
    return `
    <article class="employee">
        <section id="employee--id">ID: ${employeeObject.id}</section>
        <section class="employee--name">${employeeObject.firstName} ${employeeObject.lastName}: ${employeeObject.jobTitle}</section>
        <section class="hour--scheduled">Hours Scheduled: ${employeeObject.hoursScheduled}</section>
    </article>
    
    `
    
}

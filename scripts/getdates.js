const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth()+1;
const day = currentDate.getDate();
document.getElementById("dateDisplay").textContent = `©${month}-${day}-${year}`

const editableContent = document.getElementById("editableContent");
const lastEditedSpan = doscument.getElementById("lastEdited");

editableContent.addEventListener("input",function(){
    const currentDate =new Date();
    const formattedDate = currentDate.toLocaleDateString();
    lastEditedSpan.textContent = formattedDate;
});
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth()+1;
const day = currentDate.getDate();
document.getElementById("dateDisplay").textContent = `©${month}-${day}-${year}`


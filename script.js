let total = 0;
let totalAmount = 0;
let userInfo=[]
const seatInformation = []
const seatSection = document.getElementById("seat-section")
seatSection.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
        const accesButton = event.target
        const seatPosition = accesButton.innerText
        const parentTable = document.getElementById("table")
        const appendBefore = document.getElementById("total-price-tr")
        const createTr = document.createElement("tr")
        createTr.classList.add("my-3")
        createTr.innerHTML = `<td class="text-gray-600 py-4">${seatPosition}</td>
                            <td class="text-gray-600 py-4">Economy</td>
                            <td class="text-gray-600 py-4 text-center">550</td>
        `
        parentTable.insertBefore(createTr, appendBefore);
        accesButton.classList.add("bg-primary")
        total++
        changeInnerText("total-seats", total);
        totalAmount += 550
        changeInnerText("total-amount", totalAmount);
        changeInnerText("grand-price", totalAmount);
        accesButton.setAttribute('disabled', true);
        const leftSeat=getElementByIdText("left-seat");
        let left=Math.max(0,leftSeat-1)

        changeInnerText("left-seat", left);

    }
});
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", event => {
    // const grandTotal=
    const accessBtn = document.getElementById("cuppon-apply").value;
    if (accessBtn === "NEW15") {
        const grandPrice = getElementByIdText("grand-price");
        let lastGrandPrice = grandPrice - grandPrice * 15 / 100;
        changeInnerText("grand-price", lastGrandPrice);
        applyBtn.setAttribute('disabled', true);
    }
    else {
        alert("Plese inter a valid cupon code")
    }
});
document.getElementById("close-card")
    .addEventListener("click",()=> {
        const succesCard=document.getElementById("succes-card")
        succesCard.classList.add("hidden")
    })
document.getElementById("submit-btn")
.addEventListener("submit",(event)=>{
    event.preventDefault();
 const passengerName=document.getElementById("passengerName").value;
 const phoneNumber=document.getElementById("phoneNumber").value;
 const emailId=document.getElementById("emailId").value;
 userInfo.push({
    name:`${passengerName}`,
    number:`${phoneNumber}`,
    email:`${emailId}`
 })
    

    const succesCard=document.getElementById("succes-card")
    succesCard.classList.remove("hidden")
    console.log(userInfo);
    console.log(userInfo[0].name);
})

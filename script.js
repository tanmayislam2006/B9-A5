let total = 0;
let totalAmount = 0;
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
        changeInnerText("total-amount", totalAmount)
        changeInnerText("grand-price", totalAmount)
    }
});
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", event => {
    // const grandTotal=
    const accessBtn = document.getElementById("cuppon-apply").value;
    if (accessBtn === "NEW15") {
        const grandPrice = getElementByIdText("grand-price");
        let lastGrandPrice = grandPrice * 15 / 100;
        changeInnerText("grand-price", lastGrandPrice)
    }
})

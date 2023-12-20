const openModal = document.querySelector("#newTripBtn");
const closeModal = document.querySelector("#closeTripCreator");
const modal = document.querySelector("#tripCreator");

const removeInputBtn = document.querySelector(".removeBtn");
const addFlightInputBtn = document.querySelector(".addFlightBtn");

const flightFormContain = document.querySelector(".flightFormContain")

openModal.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
})

function removeInput() {
    this.parentElement.remove();
}

function addFlightInput() {
    event.preventDefault();

    const flightContain = document.createElement("div");
    flightContain.className = "createdFlight";

    const removeFlight = document.createElement("button");
    removeFlight.class = "removeBtn";
    removeFlight.innerHTML = "-";
    removeFlight.addEventListener("click", removeInput);

    const flightInputContain = document.createElement("div")
    flightInputContain.innerHTML = `
    <label for="flightDate">Flight Date: </label>
    <input type="date" name="flightDate" placeholder="Flight Date"/>
    <label for="flightTime">Flight Time: </label>
    <input type="time" name="flightTime" placeholder="Flight Time"/>
    <label for="origin">Origin: </label>
    <input id="flight-name" type="text" name="origin" placeholder="Origin (ex: MSP)"/>
    <label for="destination">Destination: </label>
    <input type="text" name="destination" placeholder="Destination (ex: MSP)"/>
    <label for="price">Price: </label>
    <input type="text" name="price" placeholder="Price"/>`;

    flightFormContain.appendChild(flightContain);
    flightContain.appendChild(removeFlight);
    flightContain.appendChild(flightInputContain);
}

addFlightInputBtn.addEventListener("click", addFlightInput)

const tripFormHandler = async (event) => {
    event.preventDefault();
    console.log("This function is working")

    const name = document.querySelector('#trip-name').value.trim();
    const flight = document.querySelector('#flight-name').value.trim();
    const activity = document.querySelector('#activity-name').value.trim();
    const hotel = document.querySelector('#hotel-name').value.trim();
    console.log(name);

    if ( name && flight && activity && hotel) {

        const response = await fetch('/api/trips', {
            method: 'POST',
            body: JSON.stringify({name, flight, activity, hotel}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {

            document.location.replace('/triplayout');
        } else {
            alert(response.statusText);
        }
    }
};

const tripForm = document.querySelector('#trip-form');

modal.addEventListener('submit', tripFormHandler);


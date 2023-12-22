//Modal Selectors
const openModal = document.querySelector("#newTripBtn");
const closeModal = document.querySelector("#closeTripCreator");
const modal = document.querySelector("#tripCreator");
const modalForm = modal.querySelector("#trip-form");



//Modal Open
openModal.addEventListener("click", () => {
    modal.showModal();
});

//Modal Close
closeModal.addEventListener("click", () => {
    modal.close();
})

//Modal Form Handler
const tripFormHandler = async (event) => {
    event.preventDefault();
    
    //Flight Data Selectors
    const flightDate = document.querySelector('#flight-date').value.trim();
    const flightTime = document.querySelector('#flight-time').value.trim();
    const flightOrigin = document.querySelector('#flight-origin').value.trim();
    const flightDest = document.querySelector('#flight-dest').value.trim();
    const flightNum = document.querySelector('#flight-num').value.trim();
    const flightGate = document.querySelector('#flight-gate').value.trim();

    //Hotel Data Selectors
    const hotelName = document.querySelector('#hotel-name').value.trim();
    const hotelCheckInD = document.querySelector('#hotel-checkInD').value.trim();
    const hotelCheckInT = document.querySelector('#hotel-checkInT').value.trim();
    const hotelCheckOutD = document.querySelector('#hotel-checkOutD').value.trim();
    const hotelCheckOutT = document.querySelector('#hotel-checkOutT').value.trim();

    //Activity Data Selectors
    const actName = document.querySelector('#act-name').value.trim();
    const actDate = document.querySelector('#act-date').value.trim();
    const actTime = document.querySelector('#act-time').value.trim();
    const actLoc = document.querySelector('#act-loc').value.trim();

    const tripName = document.querySelector("#trip-name").value.trim();

    console.log({tripName, flightNum, actName, hotelName})


        try {
            const newData = await Promise.all([
                fetch('/api/trips', {
                    method: 'POST',
                    body: JSON.stringify({name: tripName, flight: flightNum, activity: actName, hotel: hotelName, date: flightDate, flight_num: flightNum, time: flightTime, gate: flightGate, origin: flightOrigin, destination: flightDest, name: hotelName, checkIn_date: hotelCheckInD, checkIn_time: hotelCheckInT, checkOut_date: hotelCheckOutD, checkOut_time: hotelCheckOutT, name: actName, date: actDate, location: actLoc, time: actTime}),
                    headers: { 'Content-Type': 'application/json'},
                })
                // fetch('/api/flights', {
                //     method: 'POST',
                //     body: JSON.stringify({date: flightDate, flight_num: flightNum, time: flightTime, gate: flightGate, origin: flightOrigin, destination: flightDest}),
                //     headers: { 'Content-Type': 'application/json'},
                // }),
                // fetch('/api/hotels', {
                //     method: 'POST',
                //     body: JSON.stringify({name: hotelName, checkIn_date: hotelCheckInD, checkIn_time: hotelCheckInT, checkOut_date: hotelCheckOutD, checkOut_time: hotelCheckOutT}),
                //     headers: { 'Content-Type': 'application/json'},
                // }),
                // fetch('/api/activities', {
                //     method: 'POST',
                //     body: JSON.stringify({name: actName, date: actDate, location: actLoc, time: actTime}),
                //     headers: { 'Content-Type': 'application/json'},
                // })
            ]);
            if(newData) {
                console.log(newData);   
                document.location.replace('/triplayout');
            } else {
                alert(response.statusText);
            }
            console.log(tripData);
        } catch (err) {
            console.err('One or more requests failed:', err);

            if(err instanceof TypeError) {
                console.error("Error is of TypeError", err);
            } 
        }
};

//Modal Submit
modalForm.addEventListener('submit', tripFormHandler);
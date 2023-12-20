const tripFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#trip-name').value.trim();
    const flight = document.querySelector('#flight-name').value.trim();
    const activity = document.querySelector('#activity-name').value.trim();
    const hotel = document.querySelector('#hotel-name').value.trim();

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

document
    .querySelector('#trip-form')
    .addEventListener('click', tripFormHandler);
// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })





let deck_id = null;

const testButton = document.getElementById("test");
const newCarta = document.getElementById("nueva_carta")
const revolverBaraja = document.getElementById("revolver_baraja")

testButton.onclick = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        Swal.fire({
    title: 'Éxito!',
    text: 'Nueva baraja creada',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
  console.log(data);
  deck_id = data.deck_id;
    })
    .catch((error) => {
        Swal.fire({
            title: "Error",
            text: "Error al crear la baraja",
            icon: "error",
            confirmButtonText: "Cerrrar",
        })
        console.log(error);
    });
};

newCarta.onclick = () => {
    fetch("https://deckofcardsapi.com/api/deck/" + deck_id + "/draw/?count=1")
    .then ((response) => {
        return response.json();
    })
    .then ((data) => {
        Swal.fire({
            title: "carta obtenida",
            text: data.cards[0].code,
        });
    });
};


revolverBaraja.onclick = () => {
    fetch("https://deckofcardsapi.com/api/deck/" + deck_id +"/shuffle/?remaining=true")
    .then((response) => {
        return response.json();
    })
    .then ((data) => {
        Swal.fire({
            title: "Baraja revolvida",
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    })
};
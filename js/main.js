//selezionare container html
const container = document.getElementById("container");

//creare ciclo di operazioni
for (let i = 0; i <=1000; i++) {
    
    //creazione nuovo elemento
    const quadrato = document.createElement("span");

    //aggiungiamo una classe per gli span
    quadrato.classList.add("square");

    //inserimento valore nell'elemento
    quadrato.append(i);

    //inseriamo nel continer il nuovo elemento
    container.append(quadrato);


}


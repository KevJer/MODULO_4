//const IP = "192.168.1.5";
const IP = "192.168.1.3";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllLaptops = (fnRefreshList) => {
    console.log("getAllLaptops..");
    fetch(
        URL + "laptos"
    ).then(
        (response) => { return response.json() }
    ).then(
        (body) => {
            console.log(body);
            fnRefreshList(body);
        }
    )
}


export const saveLaptopRest = (laptop, fnShowMessage) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        URL + "laptos", config
    )
        .then(response => response.json())
        .then(body => {
            fnShowMessage("Se ha creado la laptop");
            console.log(body)
        })
}


export const updateLaptopRest = (laptop, fnShowMessage) => {
    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            id:laptop.id,
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        URL + "laptos/"+laptop.id, config
    )
        .then(response => response.json())
        .then(body => {
            fnShowMessage("Latop actualizada");
            console.log(body)
        })
}

export const deleteLaptopRest = (laptop, fnShowMessage) => {
    const config = {
        method: "DELETE",
       /*  headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            id:laptop.id,
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        }) */
    }
    fetch(
        URL + "laptos/"+laptop.id, config
    )
        .then(response => response.json())
        .then(body => {
            fnShowMessage("Se ha eliminado la laptop");
            console.log(body)
        })
}
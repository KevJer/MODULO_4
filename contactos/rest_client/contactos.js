//const IP = "192.168.1.5";
const IP = "192.168.1.3";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllContacts = (fnRefreshList) => {
    console.log("getAllContacts..");
    fetch(
        URL + "contactos"
    ).then(
        (response) => { return response.json() }
    ).then(
        (body) => {
            console.log(body);
            fnRefreshList(body);
        }
    )
}


export const saveContactRest = (contac, fnShowMessage) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            nombre: contac.name,
            apellido: contac.surname,
            celular: contac.phoneNumber

        })
    }
    fetch(
        URL + "contactos", config
    )
        .then(repsonse => repsonse.json())
        .then(body => {
            fnShowMessage("Se ha creado el contacto!");
            console.log(body)
        })
}


export const updateContactRest = (contac, fnShowMessage) => {
    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            id:contac.id,
            nombre: contac.name,
            apellido: contac.surname,
            celular: contac.phoneNumber

        })
    }
    fetch(
        URL + "contactos/"+contac.id, config
    )
        .then(repsonse => repsonse.json())
        .then(body => {
            fnShowMessage("Contacto actualizado");
            console.log(body)
        })
}

export const deleteContactRest = (contac, fnShowMessage) => {
    const config = {
        method: "DELETE",
        /* headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            id:contac.id,
            nombre: contac.name,
            apellido: contac.surname,
            celular: contac.phoneNumber

        }) */
    }
    fetch(
        URL + "contactos/"+contac.id, config
    )
        .then(repsonse => repsonse.json())
        .then(body => {
            fnShowMessage("Se ha eliminado el contacto");
            console.log(body)
        })
}
import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button } from '@rneui/base';
import { useState } from "react";
import { saveContactRest, updateContactRest, deleteContactRest } from '../rest_client/contactos.js';


export const ContacsForm = ({ navigation, route }) => {
    // Variable para guardar elcontac que viene del otro lada
    let contactRetrived = route.params.contacParam;
    let isNew = true;

    if (contactRetrived != null) {
        isNew = false;
    }
    console.log("isNew:", isNew);
    console.log("contacRetrived:", contactRetrived);;



    // Variable de estado
    const [name, setName] = useState(isNew ? null : contactRetrived.nombre);
    const [surname, setSurname] = useState(isNew ? null : contactRetrived.apellido);
    const [phoneNumber, setPhoneNumber] = useState(isNew ? null : contactRetrived.celular);

    // Imprimir el valor para actualizar
    // console.log(route.params.contacParam);

    // Funcion para refewscar mensajes
    const showMessage = (message) => {
        Alert.alert("CONFIRMACION", message);
        navigation.goBack();
    }

    const createContact = () => {
        console.log("SaveContact");

        saveContactRest(
            {
                name: name,
                surname: surname,
                phoneNumber: phoneNumber
            },
            showMessage
        );
    }

    const updateContact = () => {
        console.log("Actualizando.... ");
        updateContactRest(
            {
                id: contactRetrived.id,
                name: name,
                surname: surname,
                phoneNumber: phoneNumber
            },
            showMessage)
    }


    const confirmDelete = () => {
        Alert.alert("CONFIRMACION",
            "Estas seguro que quieres eliminar?",
            [
                {
                    text: "SI",
                    onPress: deleteContact
                },
                {
                    text: "CANCELAR"
                }
            ]);
    }

    const deleteContact = () => {
        console.log("INVOCA AL REST DE BORRAR");
        deleteContactRest({
            id: contactRetrived.id
        },
            showMessage
        )
    }


    return <View style={styles.container}>
        <Input
            value={name}
            placeholder="NOMBRE"
            onChangeText={(value) => {
                setName(value);
            }}
        />
        <Input
            value={surname}
            placeholder="APELLIDO"
            onChangeText={(value) => {
                setSurname(value);
            }}
        />
        <Input
            value={phoneNumber}
            placeholder="TELEFONO"
            onChangeText={(value) => {
                setPhoneNumber(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={isNew ? createContact : updateContact}
        />

        {
            isNew ? <View></View> : <Button
                title="ELIMINAR"
                onPress={confirmDelete}
            />
        }


    </View>
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
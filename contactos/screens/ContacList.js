// Importar el View
import { View, Text, StyleSheet, FlatList ,TouchableHighlight } from "react-native";
import { Button, ListItem, FAB } from "@rneui/base"
import { getAllContacts } from "../rest_client/contactos.js";
import { useState, useEffect } from "react";


// DEfinicion del componente
export const ContactList = ({ navigation }) => {

    // Es una variable de estado
    // Se cre aun objeto para ver que tal
    const [contactsList, setContactList] = useState([]);

    // Funcion para cada vez que refresca la pagina
    useEffect(() => {
        //console.log("Ejecuto la funcion de useEffect");
        getAllContacts(fnRefreshList);
    },[]);
    
    
    // Funcion que retorne un dir
    const ContacItem = ({ contac }) => {
        return <TouchableHighlight onPress={() => {
            navigation.navigate("ContactsFormNav", {contacParam:contac});
        }}>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{contac.nombre} {contac.apellido}</ListItem.Title>
                    <ListItem.Subtitle>{contac.celular}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableHighlight>
    }


    fnRefreshList = (contacts) => {
        console.log("Refrescar lista!!", contacts)
        setContactList(contacts);
    }


    return <View style={styles.container}>
    
    
        <FlatList
            data={contactsList}
            renderItem={({ item }) => {
                return <ContacItem contac={item} />
            }}
        />

        <FAB
            title="+"
            // Le paso como atributo de objeto
            onPress={() => { navigation.navigate("ContactsFormNav", {}) }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column', // Principal eje vertical
        alignItems: 'stretch', // eje secundario
        justifyContent: 'flex-start', // JP
    },
});
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Linking, TextInput, Button, TouchableOpacity } from 'react-native';
import SearchBar from './SearchBar';

function MealScreen(props) {

const [data, setData] = useState([]);
const [isLoading, setLoading] = useState(true);

const getFruitsData = async (searchBarResearch) => { // de manière asynchrone : 
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; // url de l'API
    const newUrl = url + searchBarResearch; // nouvelle url, ajout des mots-clés pour la recherche (= "research")
    if (searchBarResearch) { // si la recherche contient une valeur, fetch et récupération des données
        try {
            const response = await fetch(newUrl);
            const json = await response.json();
            setData(json.meals);
         } catch(error) {
             console.error(error);
         } finally {
             setLoading(false);
         }
    }
    
}

useEffect(() => { // je sais pas à quoi ça sert
    getFruitsData();
  }, []);

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>PICK MEAL SCREEN</Text>
                    
            <SearchBar 
                getFruitsData={getFruitsData} // récupère la valeur de l'input, puis fetch sur l'API
            />
            
            <View style={styles.ingredientsContainers}>

                <Text>FRUITS</Text>

                <FlatList // affichage des données sous forme d'une liste
                    justifyContent="center" 
                    alignItems="center"
                    style={styles.datas}

                    data={data}
                    key='1' // je sais pas ce que c'est
                    keyExtractor={({ id }, index) => id} // je sais pas ce que c'est
                    renderItem={({ item }) => ( // affichage rendu
                            <TouchableOpacity>
                                <Text>
                                    {item.strMeal}, {item.strCategory} {/* données choisies de l'API */} 
                                </Text>
                            </TouchableOpacity>
                    )}
                />
                
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        /*
        borderWidth: 1,
        borderColor: 'red',
        */
        justifyContent: 'center',
        alignItems: 'center'      
    },
    ingredientsContainers: {
        flex: 1,
        width: '100%',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center', 
        /*
        borderWidth: 1,
        borderColor: 'orange'
        */
    },
    datas: {
        /*
        borderWidth: 1,
        borderColor: 'blue',
        */ 
        padding: 10,
        width: '90%'
    },
});

export default MealScreen;
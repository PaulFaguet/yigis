import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ResearchItem = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.separator} /> {/* séparateur horizontal entre les éléments de l'historique des recherches */}

            <TouchableWithoutFeedback
                onPress={props.handleResearch} // au toucher : la valeur de l'input est la valeur de CETTE recherche
                onLongPress={props.deleteResearch} // au toucher long : suppression de l'historique des recherches
            >

            <View style={styles.taskContainer}>

                <Text style={styles.text}>{props.text}</Text> {/* affiche la valeur de la recherche */}

            </View>

            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        borderTopWidth: 1,
        borderTopColor: 'grey',
        width: '50%',
        marginTop: 12,
        marginBottom: 4,
        opacity: 0.4
        
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        paddingVertical: 5
    },
    text: {
        width: '70%',
        fontSize: 16,
        paddingLeft: 35,
        fontWeight: '500'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 8
    },
    itemDelete: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    itemUseAgain: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 5
        
    },
});

export default ResearchItem;
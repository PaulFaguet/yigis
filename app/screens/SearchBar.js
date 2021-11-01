import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native';
import ResearchItem from './ResearchItem';

export default function SearchBar({getFruitsData}) {

const [research, setResearch] = useState('');
const [researchItem, setResearchItem] = useState([]);

// Fonction pour ajouter une recherche présente dans l'historique des recherches
const handleReasearch = () => {
  if (research) {
    Keyboard.dismiss();
    setResearchItem([...researchItem, research]);
    setResearch(null);
  } 
}

// Fonction pour supprimer une recherche présente dans l'historique des recherches
const deleteResearchItem = (index) => {
    let itemsCopy = [...researchItem];
    itemsCopy.splice(index, 1);
    setResearchItem(itemsCopy);
}

return (
    <SafeAreaView style={styles.container}>
      
      <KeyboardAvoidingView // View prenant en compte le clavier numérique
        style={styles.writeTaskWrapper}
        behavior={Platform.OS === 'ios' ? 'padding': 'height'}
      >
        <TextInput 
          style={styles.input}
          placeholder="Recherchez un ingrédient..."
          placeholderTextColor='orange'
          onChangeText={(inputValue) => { 
            // au changement de valeur de l'input : 
            setResearch(inputValue); // met à jour la valeur de "research",
            getFruitsData(research); // puis fetch sur l'API avec cette valeur
          }}
        />
        
        <View style={styles.addWrapper}>

          <TouchableOpacity
            onPress={() => handleReasearch()} // rajoute un item dans l'historique des recherches
          >
              <Text style={styles.buttonDoResearch}>🔎</Text> 
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

      <View style={styles.tasksWrapper}> 

        <Text style={styles.sectionTitle}>HISTORIQUE DE RECHERCHES</Text>

        <View style={styles.items}>
          {
            researchItem.map((item, index) => {
              return (
                  <ResearchItem 
                    text={item}
                    handleResearch={() => setResearch(item)} // props, action de toucher : réutilisation de la valeur d'une recherche précédente
                    deleteResearch={() => deleteResearchItem(index)} // props, action de toucher long : suppression
                  />
              )
            })
          }

        </View>

        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    height: 40,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 0,
    fontWeight: '400',
    opacity: 0.9
  },
  buttonDoResearch: {
    color: 'orange'
  },
  addWrapper: {
    justifyContent: 'center', 
    alignItems: 'center',
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    height: 40,
    width: 40,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    },
  writeTaskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20
  },
  tasksWrapper: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 10,
    width: 290,
    minHeight: 50
  },
  sectionTitle: {
    fontWeight: 'bold',
    paddingLeft: 15,
    marginTop: 10
  },
});
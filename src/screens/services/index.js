import React from 'react';
import { StatusBar, FlatList, View, KeyboardAvoidingView, Platform } from 'react-native';
import Item from './item';
import globalStyles from '../../styles/global';

const ServicesData = [
    {
        id: 1,
        name: "Banho",
        price: 79.9,
        description: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos!"
    },
    {
        id: 2,
        name: "Vacina V4",
        price: 89.9,
        description: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        name: "Vacina Antirrábica",
        price: 99.9,
        description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano."
    },
]

export default function Services(){
    return (
        // KeyboardAvoingView serve para que o conteúdo se adeque ao teclado quando ele é expandido, nele devemos passar as configs segundo a plataforma desenvolvida, e deve estar no topo da arvore de renderização***
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globalStyles.preencher}
        >
            {/* View é a "div do react-native" */}
            <View styles={globalStyles.preencher}>
                {/* StatusBar é um componente auxiliar do device Android para garantir que o contéudo seja renderizado na tela sem sofrer com o notch ou com telas diferentes */}
                <StatusBar/>
                    {/** FlatList é o componente que lista os items no react-native */}
                    <FlatList 
                        data={ServicesData}
                        renderItem={({item})=><Item {...item}/>}
                        removeClippedSubviews={true} // para evitar que o teclado tenha algum comportamento errado
                        keyExtractor={({id}) => String(id)}
                    />
                
        </View>
       </KeyboardAvoidingView>
    )
}
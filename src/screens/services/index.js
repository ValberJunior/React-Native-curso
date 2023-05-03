import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';
import { DefaultPage } from '../../components';

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

export default function Services() {
    return (
        <DefaultPage>
            {/** FlatList é o componente que lista os items no react-native */}
            <FlatList
                data={ServicesData}
                renderItem={({ item }) => <Item {...item} />}
                removeClippedSubviews={true} // para evitar que o teclado tenha algum comportamento errado
                keyExtractor={({ id }) => String(id)}
            />
        </DefaultPage>
    )
}
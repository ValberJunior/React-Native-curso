import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';
import { DefaultPage, StatusCart } from '../../components';

const ServicesData = [
    {
        id: 1,
        name: "Banho",
        price: 79.9,
        description: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos!",
        amount: 1
    },
    {
        id: 2,
        name: "Vacina V4",
        price: 89.9,
        description: "Uma dose da vacina V4. Seu gato precisa de duas.",
        amount: 2
    },
    {
        id: 3,
        name: "Vacina Antirrábica",
        price: 99.9,
        description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
        amount: 1
    },
]

export default function Cart() {
    // Nesse caso iremos fazer um reduce com o nosso objeto desconstruído
    // no reduce teremos uma função que será oq vai acontecer em cada laço da repetição e o argumento de valor inicial, que iremos começar com 0.
    // sum é a variável que será acrescida durante o loop
    const totalValue = ServicesData.reduce((sum,{price, amount})=> sum + (price * amount),0)

    return (
        <DefaultPage>
            <StatusCart total={totalValue}/>
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
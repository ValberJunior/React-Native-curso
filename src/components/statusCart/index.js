import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/styleCart';
import ButtonComponent from '../buttonComponent';

export default function StatusCart ({total}){
    return(
        <View style={styles.details}>
            <View style={styles.total}>
                <Text style={styles.description}>Total do Carrinho:</Text>
                <Text style={styles.value}>{
                    Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(total)
                }</Text>
            </View>
            <View style={styles.button}>
                <ButtonComponent value='Concluir pedido' reverse/>
            </View>
        </View>
    )
}
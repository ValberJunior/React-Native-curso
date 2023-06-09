import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ButtonComponent, FieldComponent } from '../../../components';

export default function Item({ name, price, description, amount: initialAmount }) {

    const [amount, setAmount] = useState(initialAmount);
    const [ total, setTotal] = useState(price * initialAmount);

    // método para receber uma nova quantidade e atualizar a tela de quantidades
    const updateTotalQuantity = (newAmount) => {
        setAmount(newAmount);
        calcTotal(newAmount);
    }
    // método para atualizar o estado do valor total
    const calcTotal = (newAmount) => {
        setTotal(newAmount * price)
    }

    return <>
        <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>
              {Intl.NumberFormat('ptbr',{
                style: 'currency',
                currency: 'BRL'
              }).format(price)}
            </Text>
        </View>
        <View style={styles.cart}>
            <View>
                <View style={styles.price}>
                    <Text style={styles.description}>Quantidade:</Text>
                    <FieldComponent
                        value={amount}
                        addCart={updateTotalQuantity}
                        styles={styles.amount}
                    />
                </View>
                <View style={styles.price}>
                    <Text style={styles.description}>Total:</Text>
                    <Text style={styles.price}>
                        {Intl.NumberFormat('ptbr',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(total)}
                    </Text>
                </View>
            </View>
            <ButtonComponent
                value="Remover do Carrinho"
                action={() => { }}
            />
        </View>
        <View style={styles.divider} />
    </>
}
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ButtonComponent, FieldComponent } from '../../../components';

export default function Item({ name, price, description }) {

    const [amount, setAmount] = useState(1);
    const [ total, setTotal] = useState(price);

    const updateTotalQuantity = (newAmount) => {
        setAmount(newAmount);
        calcTotal(newAmount);
    }

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
                value="Add"
                action={() => { }}
            />
        </View>
        <View style={styles.divider} />
    </>
}
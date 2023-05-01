import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ButtonComponent, FieldComponent } from '../../../components';

export default function Item({ name, price, description }) {

    const [amount, setAmount] = useState(1)

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
                        addCart={setAmount}
                        styles={styles.amount}
                    />
                </View>
                <View style={styles.price}>
                    <Text style={styles.description}>Preço:</Text>
                    <Text style={styles.price}>0</Text>
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
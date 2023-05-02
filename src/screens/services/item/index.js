import React, { useState } from 'react';
import { TouchableOpacity , Text, View } from 'react-native';
import styles from './styles';
import { ButtonComponent, FieldComponent } from '../../../components';

export default function Item({ name, price, description }) {

    const [amount, setAmount] = useState(1);
    const [ total, setTotal] = useState(price);
    const [expand, setExpand] = useState(false);

    // método para receber uma nova quantidade e atualizar a tela de quantidades
    const updateTotalQuantity = (newAmount) => {
        setAmount(newAmount);
        calcTotal(newAmount);
    }
    // método para atualizar o estado do valor total
    const calcTotal = (newAmount) => {
        setTotal(newAmount * price)
    }
    // inverter o estado de expandir o elemento
    const reverseExpand = () => {
        setExpand(!expand);  // toggle para expandir ou não expandir;
        updateTotalQuantity(1); // resetar o valor do estado;
    }

    return <>
        <TouchableOpacity style={styles.info} onPress={reverseExpand}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>
              {Intl.NumberFormat('ptbr',{
                style: 'currency',
                currency: 'BRL'
              }).format(price)}
            </Text>
        </TouchableOpacity>
        { expand && <View style={styles.cart}>
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
                value="Adicionar ao Carrinho"
                action={() => { }}
            />
        </View>}
        <View style={styles.divider} />
    </>
}
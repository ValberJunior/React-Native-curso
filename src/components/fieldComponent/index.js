import React from 'react';
import { TextInput } from 'react-native';
import stylesDefault from './styles';

export default function FieldComponent ({ value, styles, addCart }) {

    const refresh = (newValue, callback) => {
        // checar se o dado informado é número inteiro
        const checkInt = newValue.match(/^[0-9]*$/);
        // Se não for ele não atualiza o estado.
        if(!checkInt) return;
        // Se o novo valor iniciar com zero e outro número, eliminar o zero, e permanecer com o segundo número em diante
        const removeZeroFromLeft = newValue.replace(/^(0)(.+)/, '$2');
        // naessa parte, tudo validado, ele chamará o callback com o argumento já formatado, e renderizará o estado na tela.
        callback(removeZeroFromLeft); 
    }

    return  <TextInput  
                style={[stylesDefault.field, styles]}
                keyboardType='number-pad'
                selectTextOnFocus
                onChangeText={(newValue)=> { refresh(newValue, addCart)} }
                value={value.toString()}  // pq o textInput só aceita string
                />
};
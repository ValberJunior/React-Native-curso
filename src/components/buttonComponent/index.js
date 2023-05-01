import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import defaultStylesFC from '../../styles/styleButton'

export default function ButtonComponent({ small = false, reverse = false, value, action, styles }) {
    const defaultStyles = defaultStylesFC(small, reverse);

    return <TouchableOpacity onPress={action} style={[defaultStyles.button, styles]}>
        <Text style={defaultStyles.value}>{value}</Text>
    </TouchableOpacity>
}

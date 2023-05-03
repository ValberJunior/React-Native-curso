import React from "react";
import { KeyboardAvoidingView, Platform, View, StatusBar } from "react-native";
import globalStyles from '../../styles/global';

export default function DefaultPage ({children}){
    return (
        // KeyboardAvoingView serve para que o conteúdo se adeque ao teclado quando ele é expandido, nele devemos passar as configs segundo a plataforma desenvolvida, e deve estar no topo da arvore de renderização***
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={globalStyles.preencher}
        >
            {/* View é a "div do react-native" */}
            <View styles={globalStyles.preencher}>
                {/* StatusBar é um componente auxiliar do device Android para garantir que o contéudo seja renderizado na tela sem sofrer com o notch ou com telas diferentes */}
                <StatusBar/>
                {children}
            </View>
        </KeyboardAvoidingView>
    )
}
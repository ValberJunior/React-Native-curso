# React Native

**DOC OFICIAL** :arrow_right: https://reactnative.dev/



## Configurando o ambiente de desenvolvimento

:arrow_right: https://reactnative.dev/docs/environment-setup



:information_source: Para facilitar o desenvolvimento usaremos o **EXPO**.

Pré requisitos:

> - NodeJS
> - Expo
> - Android Studio instalado, conforme doc
> - Java (OpenJDK)
> - Ativar a Virtualização Intel na BIOS
> - Configurar as variáveis de ambiente do Android Studio e configurar o Emulador dentro do Android Studio

Para instalar o Expo:

~~~bash
npm install -g expo-cli
~~~



### Criando um projeto com Expo

~~~bash
expo init $nome_do_projeto

#ou

npx create-expo-app $nome_do_projeto

#Após isso o Expo vai perguntar qual template será utilizado, basta selecionar e esperar o projeto inicial ser gerado
~~~

> Ao gerar o projeto daremos então o comando **yarn start** (ou **npm start**) e aparecerá informações do projeto, tal como codigo QR para rodar no celular.
>
> No Android precisamos baixar o app **Expo** , abrir o mesmo e apontar o código QR, no IOS basta abrir a câmera e apontar para o código QR.



### O que o Expo Cria?

- Estrutura de pastas:

![image-20230430111933861](/home/tec/snap/typora/78/.config/Typora/typora-user-images/image-20230430111933861.png)

Assim como o **React native puro**, o **Expo**  cria o arquivo `App.js`:

~~~javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {  // função principal
  return (
      <!-->Tag <view> é o wrapper do conteúdo, e ela recebe a props "style" que receberá o estilo para o componente, essa variável é criada como um objeto e então instanciada de acordo com a classe desejada <!-->
    <View style={styles.container}>
      <!-->Tag <text> suporta os textos<!-->
      <Text>Hello World</Text> 
      <StatusBar style="auto" />
    </View>
  );
}

<!-->Variável de estilo, uma const que receberá as propriedades e o estilo de cada uma, respeitando a sintaxe do JS, ela é criada através da função nativa "StyleSheet" e sua instância "create"<!-->
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

~~~

No **Expo** temos a criação de um arquivo diferente, o `app.json`:

```json
{
  "expo": {
    "name": "nome_do_projeto",
    "slug": "nome_do_projeto",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}

```

Para rodar o exemplo, basta ir no terminal do projeto:

~~~bash
yarn start
# Após rodar:
a # para abrir o emulador Android
~~~

![image-20230430112755184](/home/tec/snap/typora/78/.config/Typora/typora-user-images/image-20230430112755184.png)



> Em casos de alterações simples como na tag <Text> , ele atualiza automaticamente o view, mas em caso de alterações com adição de componentes e/ou bibliotecas a mais, precisamos dar o reload no emulador.
>
> ~~~bash
> # No terminal do processo já aberto, basta digitar a tecla r
> r
> ~~~
>
> 



### Estrutura das pastas

:heavy_plus_sign: Criar uma pasta chamada `src` e nela criar pastas para o projeto, como por exemplo, `screens` :

![image-20230430120654614](/home/tec/snap/typora/78/.config/Typora/typora-user-images/image-20230430120654614.png)



### Tags

`<SafeAreaView>`  :arrow_right: Dessa forma vamos englobar o conteúdo das telas criadas e automaticamente o **React Native** checa a tela do device e organiza corretamente o conteúdo, isso impede que o conteúdo seja  quebrado em telas com "**notch**", para IOS. 

Para android usamos a tag `<StatusBar/>` no início do código, auto-fechada.

`<View>` são as divs do **react-native**.



#### FlatList

Tag própria para listar itens no react-native.

Ela precisa de um objeto para ser listado na propriedade **data**, e setar o **keyExtractor** para gerenciar os **ids** dos itens listados:

~~~jsx
            <FlatList 
                data={ServicesData}
                renderItem={({item : { name }})=>
                   <Text>{name}</Text>
                }
                keyExtractor={({id}) => String(id)}
            />
~~~



#### TouchableOpacity

Componente clicável que recebe uma função através da propriedade **onPress**, mas pode ter outras propriedades de ações e também de **style**.

~~~jsx
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
~~~



.... 



### Lib INTL

Biblioteca para trabalhar com números.

~~~bash
npm install intl
#or
yarn add intl
~~~

:heavy_plus_sign: No arquivo `App.js` deveremos importar a **lib**, desta forma:

~~~~javascript
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

...
~~~~

:heavy_plus_sign: No elemento que queremos utilizar, chamamos a **lib** e formataremos o dado, nesse exemplo iremos transformar o número em **BRL**.

```jsx
            <Text style={styles.price}>
              {Intl.NumberFormat('ptbr',{
                style: 'currency',
                currency: 'BRL'
              }).format(price)}
            </Text>

// Não precisamos importar novamente a lib, pois já foi importada no App.js
```



### KeyboardAvoidingView

Permite que a tela de adeque a quando o teclado é acionado, sem que o conteúdo seja comprometido.

~~~~jsx
// KeyboardAvoingView serve para que o conteúdo se adeque ao teclado quando ele é expandido, nele devemos passar as configs segundo a plataforma desenvolvida, e deve estar no topo da arvore de renderização***

        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={globalStyles.preencher}
        >
    	... 
    		conteudo
    	...
		</KeyboardAvoidingView>
~~~~



<hr>




## Navegação com menus

Na navegação do **react-native**, fazemos uso do **react-navigation**:



~~~bash
npm install @react-navigation/native 
#ou
yarn add @react-navigation/native

npm install @react-navigation/bottom-tabs
#ou
yarn add @react-navigation/bottom-tabs
~~~

:book: Documentação :arrow_right: https://reactnavigation.org/docs/getting-started/



:heavy_plus_sign: Além disso devemos adicionar dependências ao nosso projeto:

- Projetos que utilizam **Expo**.

  ~~~bash
  npx expo install react-native-screens react-native-safe-area-context
  ~~~

- Projetos que utilizam somente o **React-native**.

  ~~~bash
  npm install react-native-screens react-native-safe-area-context
  #ou
  yarn add react-native-screens react-native-safe-area-context
  ~~~

  

### Navegação Básica

Basicamente devemos criar o arquivo `Rotas.js` dentro do nosso `src` para declarar as rotas e o tipo de navegação, então substituímos no `App.js` a chamada da tela pela chamada do componente `Rotas`, desta forma:

![image-20230505200556140](/home/tec/snap/typora/78/.config/Typora/typora-user-images/image-20230505200556140.png)

**routes.js**

````jsx
import React from 'react';
// importamos o NavigationContainer e o createBottomTabNavigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Services, Cart } from './screens';
import { cores } from './styles/global'

const Tab = createBottomTabNavigator();

export default function Routes () {
    <!-- O NavigationContainer irá englobar todo o conteúdo -->
    return <NavigationContainer>
        <!-- o elemento Tab, em sua propriedade Navigator é o responsável pelo comportamento e pelo estilo, e também engloba as rotas -->
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveTintColor: cores.claro,
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveBackgroundColor: cores.laranja,
                tabBarStyle:{
                    height: 70
                },
                tabBarLabelStyle:{
                    width: '100%',
                    flex: 1,
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 10, 
                    paddingTop: 21,
                    backgroundColor: cores.laranja
                },
                tabBarHideOnKeyboard: true
            }}
            >
            <!-- As rotas são de responsabilidade das Tab.Screen, elas recebem o título de cada elemento, e o componente -->
            <Tab.Screen name='Serviços' component={Services}/>
            <Tab.Screen name='Carrinho' component={Cart}/>
        </Tab.Navigator>
        <!-- Sendo assim, declaramos o roteamento das páginas do nosso app, lembrando que para esse exemplo foi utilizada o tab que fica no bottom, mas poderia ser outro -->
    </NavigationContainer>
}
````

No arquivo **app.js**

`````jsx
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Routes from './src/routes';

export default function App() {
    <!-- aqui importamos a rota -->
  return <Routes/>
}
`````



<hr>

## Ferramenta de debug

#### Reactotron

1- Instalar o Reactotron atraves do github oficial.

https://github.com/infinitered/reactotron

2- Instalar a dependencia no projeto.

~~~bash
npm install --save-dev reactotron-react-native
#ou
yarn add -D reactotron-react-native
~~~

Para configurar o codigo, prrecisamos ir no arquivo `app.js` e importar a lib.

````jsx
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Routes from './src/routes';
//importar o reactotron
import Reactotron from 'reactotron-react-native';
//Iniciar
Reactotron.configure().useReactNative().connect();

export default function App() {
   // usando o Reactotron
    Reactotron.log({curso: "alura"})
  return <Routes/>
}
````

:heavy_check_mark: Com o Reactotron consigo analisar mais facilmente logs com objetos grandes.

:heavy_check_mark: Com Reactotron podemos visualizar os logs da nossa aplicação de forma cronológica.


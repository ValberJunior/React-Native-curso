import { StyleSheet } from 'react-native';
import { cores } from '../../../styles/global';

export default StyleSheet.create({
info:{
    padding: 24
},
name:{
    color: cores.laranja,
    fontWeight: 'bold',
    fontSize: 16
},
calc:{
    color: cores.escuro,
    fontSize: 14,
    marginVertical: 8
},
price:{
    color: cores.roxo,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right'
},
divider:{
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza
},
cart:{
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
},
value:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
},
description:{
    color: cores.escuro,
    fontSize: 16,
    marginRight: 8,
},
amount:{
    width: 42,
}
});
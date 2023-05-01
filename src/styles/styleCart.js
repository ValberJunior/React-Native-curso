import { StyleSheet } from 'react-native';
import { cores } from './global';

export default StyleSheet.create({
  details: {
    backgroundColor: cores.roxo,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: cores.claro,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: cores.laranja,
  },
  button: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});
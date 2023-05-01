import { StyleSheet } from 'react-native';
import { cores } from './global';

export default (small, reverse) => StyleSheet.create({
  button: {
    width: 140,
    paddingVertical: small ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: reverse ? cores.laranja : cores.roxo,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  value: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: reverse ? cores.roxo : cores.laranja,
  }
});
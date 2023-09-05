import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#192A49',
    paddingTop:60,
    paddingLeft: 15,
    paddingRight: 15,
    height: '100%',
},
titleContainer:
{
  fontSize:36,
  fontWeight:600,
  paddingBottom:30,
},
whiteText:
{
  color:'white',
},
rowContent:
{
  flexDirection:'row',
  gap:40,
  paddingTop:20,
},
  textInput: {
    borderColor: 'black',
  },
  touchableStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginTop: 100,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#47475D',
    borderColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowRadius:10,
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      margin: 8,
      fontSize:18,
    }
  });
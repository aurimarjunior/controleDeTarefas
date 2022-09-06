import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#1A1A1A',
      padding: 24
    },

    viewBackground: {
      position: 'absolute',
      height: 173,
      left: 0,
      right: 0,
      top: 0,
      backgroundColor: '#0D0D0D',
    },

    imageLogo: {
      position: 'absolute',
      width: 110.34,
      height: 32,
      left: 140,
      top: 70,
    },
    
    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      padding: 0,
      height: 54,
      left: 24,
      right: 24,
      top: 142,
      gap: 4,
    },

    inputNovaTarefa: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      height: 54,
      width: 271,
      right: 5,
      backgroundColor: '#262626',
      color: '#FFFFFF',
      borderRadius: 6
    },

    buttonNovaTarefa: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 18,
      gap: 8,
      height: 52,
      width: 52,
      backgroundColor: '#1E6F9F',
      borderRadius: 6
    },

    viewTarefas: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'absolute',
      padding: 0,
      gap: 20,
      height: 247,
      left: 40,
      right: 24,
      top: 228,
    },

    viewCriadasConcluidas: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      padding: 0,
      gap: 561,
      width: 347,
      height: 19
    },

    textCriadas: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      gap: 8,
      width: 87,
      height: 19
    },

    textConcluidas: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 0,
      gap: 8,
      width: 111,
      height: 19
    },

    counter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      width: 25,
      height: 19,
      background: '#333333',
      borderRadius: 999,
    },

    viewListaTarefas: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      top: 18,
      width: 327,
      height: 208,
      borderTopWidth: 1,
      borderTopColor: '#333333',  
      paddingTop: 48,
      paddingRight: 20,
      paddingBottom: 48,
      paddingLeft: 20
          
    },

    imageClipboard: {
      width: 56,
      height: 56,
    }

  });
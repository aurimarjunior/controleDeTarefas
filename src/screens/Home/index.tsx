import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

export function Home() {
    const [countCriada, setCountCriada] = useState(0);
    const [countConcluida, setCountConcluida] = useState(0);

  return (
    <View style={styles.container}>
        <View style={styles.viewBackground}>
            <Image 
                source={require('./../../../assets/Logo.png')}
                style={styles.imageLogo} />
        </View>
        <View style={styles.form}>
            <TextInput style={styles.inputNovaTarefa}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
            />
            <TouchableOpacity>
                <Image source={require('./../../../assets/Button.png')} /> 
            </TouchableOpacity>
        </View>
        <View style={styles.viewTarefas}>
            <View style={styles.viewCriadasConcluidas}>
                <View style={styles.textCriadas}>
                    <Text style={{color: '#4EA8DE'}}> Criadas </Text>
                    <View style={styles.counter}>
                        <Text style={{color: '#D9D9D9'}}> {countCriada} </Text>
                    </View>
                </View>
                <View style={styles.textConcluidas}>
                    <Text style={{color: '#8284FA'}}> Concluídas </Text>
                    <View style={styles.counter}>
                        <Text style={{color: '#D9D9D9'}}> {countConcluida} </Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewListaTarefas}>
                <Image 
                    source={require('./../../../assets/Clipboard.png')}
                    style={styles.imageClipboard} />
                <Text style={{color: '#454545', paddingTop: 20, fontWeight: 'bold'}}>
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={{color: '#454545'}}>
                    Crie tarefas e organize seus itens a fazer
                </Text>
            </View>
        </View>
    </View>
  );
}
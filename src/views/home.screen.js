import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ufcLogo from '../../assets/ufc-logo.png'

export default function HomeScreen({navigation}) {
return (
    <View style={styles.container}>
        <StatusBar style="auto" />   
        <Text style={styles.text}>
            Bem vindos a rede CuidAVC! Nós somos uma iniciativa
            da Universidade Federal do Ceará e buscamos promover
            conhecimento e consciência sobre saúde cardiovascular.
        </Text>

        <Text style={styles.title}>O que você deseja fazer?</Text>
        <View style={styles.options}>
            <TouchableHighlight style={styles.listTouch} activeOpacity={0.6} underlayColor={'#edfffe'} onPress={()=>{navigation.push('QuestionsInitial')}}>
                <View style={styles.list}>
                    <Text style={styles.listText}>Avalie sua saúde aqui</Text>
                    <AntDesign name="plussquareo" size={30} color="#2EC2B3" style={{ marginLeft: 20 }} />
                </View> 
            </TouchableHighlight>

            <TouchableHighlight style={styles.listTouch} activeOpacity={0.6} underlayColor={'#edfffe'} onPress={()=>{navigation.push('QuestionsInitial')}}>
                <View style={styles.list}>
                    <Text style={styles.listText}>Agendar uma consulta</Text>
                    <AntDesign name="phone" size={30} color="#2EC2B3" style={{ marginLeft: 20 }} />
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.listTouch} activeOpacity={0.6} underlayColor={'#edfffe'} onPress={()=>{navigation.push('QuestionsInitial')}}>
                <View style={styles.list}>
                    <Text style={styles.listText}>Realizar cadastro</Text>
                    <AntDesign name="filetext1" size={30} color="#2EC2B3" style={{ marginLeft: 20 }} />
                </View>           
            </TouchableHighlight>
        </View>        
    </View>
);
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f0fcfb',
    alignItems: 'center',
    justifyContent: 'space-around'
},
text: {
    fontSize: 18,
    textAlign: 'justify',
    color: '#196960',
    margin: 20,
    padding: 10,
    borderLeftColor: '#2EC2B3',
    borderLeftWidth: 3,
},
title: {
    textAlign: 'center',
    color: '#196960',
    fontWeight: 'bold',
    fontSize: 23,
    margin: 10
},
list: {
    flex:1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent:'space-between',
    margin: 20,
    padding: 10,
    borderLeftColor: '#2EC2B3',
    borderLeftWidth: 3
},
listTouch: {
    flexDirection: 'row',
    alignSelf: 'stretch'
},
listText: {
    fontSize: 20,
    color: '#2EC2B3'
},
options:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
}
});
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>   
            <Text style={styles.title}>Precisamos saber o que pode levar você a ter um AVC</Text>
        
            <Text style={styles.text}>
                Responda a esse breve questionário. Nele saberemos os seus fatores de risco biológicos (relacionados ao 
                funcionamento do seu corpo) e fatores comportamentais (relacionados aos seus hábitos e estilo de vida.) 
            </Text>

            <Text style={styles.textWarning}>
                É muito importante que você seja o mais sincero possível no preenchimento das perguntas!
                
            </Text>


            <Button title='Próximo' color='#2EC2B3' />               
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0fcfb',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    text: {
        fontSize: 20,
        textAlign: 'justify',
        textAlignVertical: 'center',
        color: '#196960',
        padding: 10,
        
    },
    textWarning:{
        fontSize: 18,
        textAlign: 'justify',
        textAlignVertical: 'center',
        color: '#196960',
        backgroundColor: '#72f2e5',
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 10,
    },
    title: {
        textAlign: 'center',
        color: '#196960',
        fontWeight: 'bold',
        fontSize: 23,
        borderBottomWidth: 3,
        borderBottomColor: '#2EC2B3',
    },
    button: {
        margin: 20,
    },
    listTouch: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    listText: {
        fontSize: 20,
        color: '#2EC2B3'
    }
});
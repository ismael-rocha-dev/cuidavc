import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>   
            <Text style={styles.title}>Precisamos saber o que pode levar você a ter um AVC</Text>
        
            <Text style={styles.text}>
                Responda a esse breve questionário. Nele saberemos os seus fatores de risco biológicos (relacionados ao 
                funcionamento do seu corpo) e comportamentais (relacionados aos seus hábitos e estilo de vida.) 
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
        marginVertical: 10,
        margin: 20,
        padding: 10,
        
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
    }
});
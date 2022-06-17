import { StyleSheet, Text, View} from 'react-native';
import { GreenButton } from '../components/buttons';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>   
            <Text style={styles.title}>Vamos conversar sobre sua alimentação</Text>
        
            <Text style={styles.text}>
                Em quantos dias da semana você costuma comer feijão? 
            </Text>

            <View style={styles.itemsView}>
                <Text style={styles.text}>_______</Text>
                <Text style={styles.text}>Nunca</Text>
            </View>     

            <GreenButton title='Próximo' onPress={()=>{navigation.push('Questions')}}/>               
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
        fontSize: 24,
        textAlign: 'justify',
        textAlignVertical: 'center',
        color: '#196960',
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
    itemsView:{
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-around'
    }
});
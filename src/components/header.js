import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import logo from '../../assets/heart-icon-white.png';
import {FontAwesome} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';



export default function Header() {
    const navigation = useNavigation();

    const leftButtonAction = () => {
        if(navigation.canGoBack){
            navigation.goBack()
        }
    }
  
    return (
        <View style={styles.headerContainer}>            
           <FontAwesome name="bars" size={35} color="white" style={styles.bars} onPress={leftButtonAction}/>
            <View style={styles.header}>
                <Image source={logo} style={{ width: 60, height: 60 }} />
                <View>
                    <Text style={styles.headerText}>rede</Text>
                    <Text style={styles.headerTitle}>CuidAVC</Text>
                </View>
            </View>
        </View>
    );
}

export function Logo(){
    return (
        <View style={styles.header}>
                <Image source={logo} style={{ width: 60, height: 60 }} />
                <View>
                    <Text style={styles.headerText}>rede</Text>
                    <Text style={styles.headerTitle}>CuidAVC</Text>
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#2EC2B3',
        alignItens: 'center',
        paddingHorizontal:10,     
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: Dimensions.get('window').width*0.7,
        
    },   
    headerText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'justify',
        marginBottom: -4
    },
    headerTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    bars: {
        alignSelf: 'center'
    }

});
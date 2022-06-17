import { TouchableHighlight, Text } from "react-native";
import { StyleSheet } from "react-native";

export function GreenButton({title,onPress}){
    return(    
        <TouchableHighlight onPress={onPress} style={styles.greenButtonTouchable}><Text style={styles.greenButtonText}>{title}</Text></TouchableHighlight>        
    )
}


const styles = StyleSheet.create({
    greenButtonText:{
        backgroundColor: '#2EC2B3',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 22
    },
    greenButtonTouchable:{
        borderRadius: 10,
    }
})
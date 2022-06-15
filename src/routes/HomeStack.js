import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/home'
import QuestionsScreen from '../views/questions';
import { Logo } from '../components/header';
import leftArrowImg from '../../assets/left-white-arrow.png'
import {FontAwesome} from '@expo/vector-icons'





const HomeStack = createNativeStackNavigator();

export default function (){
    return(
        <HomeStack.Navigator initialRouteName='Home'>
            <HomeStack.Group 
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#2EC2B3'
                },
                headerTitle: () => <Logo/>,
                headerTitleAlign:'center',
                headerBackImageSource: leftArrowImg,     
       
                headerTintColor: '#effffd'
              }}
            >          
                <HomeStack.Screen 
                  name='Home' 
                  component={HomeScreen}    
                  options={{
                    headerLeft: () => <FontAwesome name="bars" size={35} color="white"/>,
                  }}              
                />
                <HomeStack.Screen 
                  name='Questions' 
                  component={QuestionsScreen}    
                                                 
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}

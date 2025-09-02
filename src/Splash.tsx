import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { RootParamList } from "../App";

type SplashNavigationProps = NativeStackNavigationProp<RootParamList,"Splash">;

export function SplashScreen(){
    const navigator = useNavigation<SplashNavigationProps>();
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
            <Button title="Go to Home"  onPress={()=>{navigator.navigate("Home")}}/>
        </View>
    );
}
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import { RootParamList } from "../../App";

type HomeNavigationProps = NativeStackNavigationProp<RootParamList, "Home">;

export function HomeScreen() {
    const navigator = useNavigation<HomeNavigationProps>();

    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <Button
                title="Go to Splash"
                onPress={() => { navigator.goBack() }}
            />
            <View style={{ marginVertical: 10 }}></View>
            <Button
                title="Go to Profile"
                onPress={() => { navigator.navigate("Profile",{userId:1,name:"Anjana"}) }}
            />
        </View>

    );
}
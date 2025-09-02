
import { Button, Text, View } from "react-native";
import { RootParamList } from "../../App";
import { RouteProp, useNavigation } from "@react-navigation/native";

type ProfileNavigationProps = RouteProp<RootParamList,"Profile">;
type Props = {
    route: ProfileNavigationProps;
}

export function ProfileScreen({ route }: Props) {

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />

            <View>
                <Text>User Id:{route.params?.userId}</Text>
                <Text>User Name:{route.params?.name}</Text>
            </View>
        </View>
    );
}
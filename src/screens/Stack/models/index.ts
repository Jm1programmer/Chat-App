import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    SignIn: undefined;
    SignUp:undefined;
    Home: undefined;
    Onboarding: undefined;
    Chat: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
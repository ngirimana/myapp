import React from 'react';
import { Text,StyleSheet} from 'react-native';

const ComponentsScreen =()=>{
    return <Text style={style.testStyle}>This is the component Screen</Text>
};

const style=StyleSheet.create({
    testStyle:{
        fontSize:30,
    }
});
export default ComponentsScreen;
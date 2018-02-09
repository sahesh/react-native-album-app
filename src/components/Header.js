import React from 'React'
import {Text , View} from 'react-native';

const Header =(props) =>{
    const {textStyles , viewStyles} = styles;
    return (
    <View style = {viewStyles} >
       <Text style = {textStyles}>{props.headerText}</Text>
    </View>
    )
}

const styles={ 
    viewStyles:{
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 	'#F8F8F8',
        shadowColor : '#000',
        paddingTop : 15,
        height : 60,
        shadowOffset : {width : 0  , height : 2},
        shadowOpacity : 0.2,
        elevation : 2,
        position : 'relative'
    },

    textStyles:{
        fontSize :20
    }
};


export default Header
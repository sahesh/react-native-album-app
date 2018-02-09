import React from 'react';
import {View, Text , Image , Linking} from 'react-native';
import Card from './Card';
import CardSelection from './CardSelection';
import Button from './Button';

const AlbumDetail =({album})=>{

    const {title, artist, thumbnail_image , image ,url} = album;
    const {thumbnailStyle , headerContentStyle,albumCover,thumbnailContainerStyle} = styles;

    return(
        <Card>
            <CardSelection>
            <View style = {thumbnailContainerStyle}>
                <Image 
                style= {thumbnailStyle}
                source = {{uri : thumbnail_image}}/>
            </View>
            <View style= {headerContentStyle}>
                <Text>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSelection>
            <CardSelection >
                <Image 
                style = {albumCover}
                source = {{uri : image}}/>   
            </CardSelection>
            <CardSelection >
            <Button onPress = {()=> Linking.openURL(url).catch(err => console.error('An error occurred', err))}>
                Buy Now !
            </Button>
            </CardSelection >
        </Card> 
    );
};

const styles = {
    headerContentStyle :{
        flexDirection : 'column',
        justifyContent : 'space-around'
    },
    thumbnailStyle :{
        height : 50,
        width : 50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems : 'center',
        marginLeft : 10,
        marginRight :10 
    },
    albumCover:{
        flex :1,
        height : 300,
        width : null
    }
};

export default AlbumDetail
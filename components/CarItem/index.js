import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton'
const  CarItem = (props) => {

    const {name, tagline, image, taglineCTA} = props.car.item;

    
    return (
        <View style={styles.carContainer}>

        <ImageBackground 
          source={image}
          style={styles.img}
        />

          <View style={styles.titles}>
            <Text style={styles.title}>
              {name}
            </Text>
            <Text style={styles.subtitles}>
              {tagline} {' '}
              <Text style={styles.tagLine}>{taglineCTA}</Text>
            </Text>
          </View>

          <View style={styles.buttonContainer}>
              <StyledButton 
                type="primary" 
                content="custom order" 
                onPress={()=>{
                  console.warn('Custom order was  pressed')
                }}
              />
              <StyledButton 
                type="secondary" 
                content="Existing inventory" 
                onPress={()=>{
                  console.warn('Existing inventory was  pressed')
                }}
              />
          </View>


      </View>
    )
}


export default CarItem
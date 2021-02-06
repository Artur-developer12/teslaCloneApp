import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles'
import StyledButton from '../StyledButton'
const  CarItem = () => {
    return (
        <View style={styles.carContainer}>

        <ImageBackground 
          source={require('../../assets/images/ModelS.jpeg')}
          style={styles.img}
        />

          <View style={styles.titles}>
            <Text style={styles.title}>Model s</Text>
            <Text style={styles.subtitles}>Starting as $69,428</Text>
          </View>
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
    )
}


export default CarItem
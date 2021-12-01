
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Square = ({children}) => {
    return (
        <View style={styles.square}>
            {children}
        </View>
    )
}

export default Square

const styles = StyleSheet.create({
    square: {
        marginVertical: "15%",
        height: "60%",
        justifyContent: "space-around",
        alignItems: "center",
      }
})

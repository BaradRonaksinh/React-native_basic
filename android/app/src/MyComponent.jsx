import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyComponent = () => {
    // const viewStyle = {
    //     container: {
    //         backgroundColor: "#555",
    //         width: "100%",
    //         height: "100%"
    //     }
    // }
    return (
        // In IOS we have use <SafeAreaView></SafeAreaView> btw <View></View>
        <SafeAreaView style={styles.container}>

            <Text style={{
                fontSize: 30,
                fontFamily: 'sans-serif-medium',
                textAlign: 'center'
            }}
            >
                Hello friends
            </Text>
            <Image
                style={styles.mainImg}
                source={{ uri: 'https://images.unsplash.com/photo-1731412924028-204b15ca8f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            />

            {/* //just simple button */}
            <Button title='Click me' ></Button>

            {/* //let make more beauty */}

            <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert("Pressed.. :)")}>
                <Text style={styles.btnTxt}>Button</Text>
            </TouchableOpacity>

            {/* Most off uses are Pressable */}

            <Pressable
                style={
                    {
                        padding: '10',
                        backgroundColor: "yellow",
                        marginTop: "20"
                    }}
            >
                <Text>Pressable Button</Text>
            </Pressable>


        </SafeAreaView>
    )
}

export default MyComponent

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#444444",
        alignItems: "center",
        gap: 20,

    },
    mainImg: {
        alignContent: "center",
        width: "300",
        height: "400",

    },

    button: {
        textAlign: "center",
        alignItems: "center",
        color: "#666d",
        justifyContent: "center",
        width: 120,
        height: 40,
        fontSize: 30,
        borderRadius: 5,
        backgroundColor: "#666",
    },
    btnTxt: {
        fontSize: 20,
        color: "#fff"
    }

})
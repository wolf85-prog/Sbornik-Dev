import { Modal, SafeAreaView, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import React, { useState } from "react";

const PopupMenu = (options) => {
    const [visible, setVisible] = useState(false)

    
    return (
        <>
            <TouchableOpacity
                onPress={()=>setVisible(true)}
                style={{marginRight: 10}}
            >
                <Entypo name="dots-three-vertical" size={22} color="white" />
            </TouchableOpacity>

            <Modal transparent visible={visible}>
                <SafeAreaView style={{flex: 1}} onTouchStart={()=> setVisible(false)}>
                    <View style={[styles.popup, {padding: 10}]}>
                        {options.options.map((op, i)=> (
                            <TouchableOpacity style={[styles.option]} key={i} onPress={()=>op.action}>
                                <Text style={styles.text}>{op.title}</Text>
                                {/* <Icon name="" size="" color="" /> */}
                            </TouchableOpacity>
                        ))}
                    </View>
                </SafeAreaView>
            </Modal>
        </>
        
    );
};

const styles = StyleSheet.create({
    popup: {
        borderRadius: 8,
        borderColor: '#333',
        borderWidth: 0.2,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        position: 'absolute',
        top: 15,
        right: 15,
        width: 220
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 16
    }
})

export default PopupMenu;
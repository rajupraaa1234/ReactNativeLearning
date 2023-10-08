import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet , Button } from 'react-native';
import PropTypes from 'prop-types'


const CustomModal = (props) => {
    const { visible, onClose, modalText } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => { console.log(`onRequestClose call`) }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                <View style={{ height: 300, width: 300, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center', elevation: 5 }}>
                    <Text>{modalText}</Text>
                    <Button title='Close' onPress={onClose}/>
                </View>
            </View>
        </Modal>
    );
};

CustomModal.defaultProps = {
    visible : false,
    onClose : ()=>{console.log("default")},
    modalText : 'Raju kumar ds'
}
CustomModal.propTypes={
    visible : PropTypes.bool
}


export default CustomModal;

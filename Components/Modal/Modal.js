import React from "react"
import {StyleSheet,Button,Text,View,Modal} from 'react-native';

function ModalItem({handleConfirmDelete,modalVisible,handleCloseModal,itemSelected}) {
    return(
    <Modal animationType='slide' visible={modalVisible} transparent={true} > 
        <View style={styles.modal}>
          <View>
            <Text style={styles.textwhite}>¿Está seguro de que desea eliminar?</Text>
            <Text style={styles.textwhite}>{itemSelected.value}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{marginHorizontal:5}}>
              <Button onPress={handleCloseModal} title="Cancelar" />
            </View>
            <View style={{marginHorizontal:5}}>
              <Button onPress={handleConfirmDelete} title="Confirmar" />
            </View>
          </View>
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "darkred",
        padding: 10,
        alignItems: "center",
        alignContent: "center",
        borderColor: "black",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 30,
      },
      textwhite: {
        fontSize: 20,
        color: "white",
        alignItems: "center",
        marginVertical: 10,
      }
})

export default ModalItem
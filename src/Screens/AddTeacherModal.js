import React from 'react';
import { View, StyleSheet, Text, Image, Modal,ScrollView } from 'react-native';
import { HP, colors, WP, RF, fonts } from '../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Button from '../components/button';
import SearchableDropdown from './react-native-searchable-dropdown';

const _AddTeacherModal = (props) => {
    return (
        <Modal animationType={"fade"} transparent={true}
            visible={props.isModalVisible}
            onRequestClose={props.toggleModal}>
            <View style={styles.backDrop}>
                
                <View style={[styles.modalBody]}>
                    <View
                        
                        style={styles.headingModalView}>
                        <Animatable.Text
                            animation={"bounceIn"}
                            style={styles.reserveText}>
                            Select Time
                        </Animatable.Text>
                    </View>
                    <View style={[styles.modalBody,{paddingTop:HP(2),minHeight:HP(20)}]}>
                        <SearchableDropdown
                            multi={true}
                            selectedItems={props.selectedUsers}
                            onItemSelect={props.onItemSelect}
                            containerStyle={{ padding: 5,width:WP(85),alignSelf:'center'}}
                            onRemoveItem={props.onRemoveItem}
                            itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#fff',
                                borderColor:"darkgrey",
                                borderBottomWidth: 0.4,
                                borderRadius: 5,
                            }}
                            itemTextStyle={{ color: '#222',fontFamily:fonts.reg }}
                            itemsContainerStyle={{ maxHeight: 200}}
                            items={props.users}
                            defaultIndex={2}
                            chip={true}
                            resetValue={false}
                            textInputProps={
                                {
                                    placeholder: "Select Time",
                                    underlineColorAndroid: "transparent",
                                    style: {
                                        padding: 12,
                                        width:WP(60),
                                        shadowColor:"grey",
                                        borderColor: '#ccc',
                                        borderRadius: 8,
                                        backgroundColor:"#f2f2f2",
                                        height:HP(7),
                                        fontFamily:fonts.reg,
                                        fontSize:RF(16),
                                    },
                                    // onTextChange: text => console.warn(text)
                                }
                            }
                            listProps={
                                {
                                    nestedScrollEnabled: true,
                                }
                            }
                        />

                    </View>
                    
                    <Button
                        name={"Done!"}
                        animation={"bounceIn"}
                        onScreenChange={props.toggleModal}
                    />

                </View>
            </View>
        </Modal>

    );
}
const styles = StyleSheet.create({
    backDrop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.50)',
        // zIndex:0,
    },
    modalBody: {
        minHeight: HP(40),
        maxHeight: "auto",
        width: WP(93),
        backgroundColor: '#fff',
        borderRadius: WP(3),
        paddingBottom: HP(4),
        // zIndex: 99999999,
    },
    headingModalView: {
        // flex:1,
        height: HP(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: WP(3),
        borderTopRightRadius: WP(3),
        backgroundColor:"rgb(43,157,179)"


    },
    bodyModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    reserveView: {
        width: WP(100),
        height: HP(7),
        justifyContent: 'center',
        alignItems: 'center'

    },
    mainResView: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0
    },
    reserveText: {
        fontSize: RF(17),
        fontFamily: fonts.bold,
        color: "#fff",
        textTransform: "uppercase"
    },
})
export default _AddTeacherModal;
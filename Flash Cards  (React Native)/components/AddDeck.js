import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { connect } from 'react-redux'
import { white, black, grey, purple } from '../helpers/colors'
import { handleAddDeck } from '../actions'
import { Ionicons } from '@expo/vector-icons'

class AddDeck extends React.Component {
    state = {
        title: ''
    }
    handleChange = (text) => this.setState(() => ({ title: text }))
    handleSubmit = () => {
        const { title } = this.state
        const { handleAddDeck, navigation } = this.props
        this.setState(() => ({ title: '' }))
        handleAddDeck(title)
            .then(() => navigation.navigate('Deck', { title }))
    }
    render() {
        const { title } = this.state
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.form}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Add Deck</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Enter the title of new deck"
                            onChangeText={text => this.handleChange(text)}
                            value={title}
                        />
                    </View>
                </View>
                <TouchableOpacity 
                    style={[styles.button, !title && { opacity: .4 } ]}
                    onPress={this.handleSubmit}
                    disabled={!title}
                >
                    <Ionicons 
                        style={{ marginRight: 5 }}
                        name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} 
                        size={32} 
                        color={white} 
                    />
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        marginVertical: 15,
        padding: 5,
        paddingVertical: 25,
        alignItems: 'stretch',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: white,
        shadowColor: grey,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 3,
        backgroundColor: white,
    },
    header: {
        alignSelf: 'center',
        paddingBottom: 25,
    },
    headerText: {
        fontSize: 22
    },
    textInput: {
        fontSize: 18,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: grey,
        backgroundColor: '#efeefe',
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    button: {
        padding: 25,
        paddingHorizontal: 60,
        marginVertical: 10,
        backgroundColor: white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: white,
        shadowColor: grey,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 3,
        backgroundColor: purple,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: white,
        textTransform: 'uppercase'
    },
})

export default connect(null, { handleAddDeck })(AddDeck)
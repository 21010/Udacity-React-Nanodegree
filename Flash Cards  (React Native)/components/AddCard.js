import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions'
import { black, white, grey, purple } from '../helpers/colors'
import { Ionicons } from '@expo/vector-icons'


class AddCard extends React.Component {
    state = {
        question: '',
        answer: '',
    }
    handleChange = (text, name) => {
        this.setState(() => ({ [name]: text }))
    }
    handleSubmit = () => {
        const { title } = this.props.route.params
        const { question, answer } = this.state
        const { navigation, handleAddCardToDeck } = this.props

        handleAddCardToDeck(title, { question, answer })
        navigation.navigate('Deck', { title })
    }
    render() {
        const { question, answer } = this.state
        return (
            <View>
                <View style={styles.form}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Add Card</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textInputLabel}>
                            Question
                        </Text>
                        <TextInput
                            name='question'
                            style={styles.textInput}
                            placeholder="Enter the question"
                            onChangeText={(text) => this.handleChange(text, 'question')}
                            value={question}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.textInputLabel}>
                            Answer
                        </Text>
                        <TextInput
                            name='answer'
                            style={styles.textInput}
                            placeholder="Enter the answer"
                            onChangeText={(text) => this.handleChange(text, 'answer')}
                            value={answer}
                        />
                    </View>
                </View>
                <TouchableOpacity 
                    style={[styles.button, (!question || !answer) && { opacity: .4 } ]}
                    onPress={this.handleSubmit}
                    disabled={!question || !answer}
                >
                    <Ionicons 
                        style={{ marginRight: 5 }}
                        name={Platform.OS === 'ios' ? 'ios-create' : 'md-create'} 
                        size={32} 
                        color={white} 
                    />
                    <Text style={styles.buttonText}>Add</Text>
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
    textInputLabel: {
        textAlign: 'center',
        paddingVertical: 5,
        fontSize: 16,
        textTransform: 'uppercase',
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

export default connect(null, { handleAddCardToDeck })(AddCard)
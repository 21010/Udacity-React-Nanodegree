import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, grey, black, purple } from '../helpers/colors'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

function Deck ({ navigation, route, decks }) {
    const { title } = route.params
    const { navigate } = navigation
    const questions = decks[title].questions
    
    return (
        <View style={styles.deck}>
            <View style={styles.caption}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.counter}>{questions.length} {questions.length === 1 ? 'card' : 'cards'}</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.button} onPress={() => navigate('AddCard', { title })}>
                    <MaterialCommunityIcons name='plus' color={black} size={32} />
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: purple }, questions.length === 0 && { opacity: .4, }]} 
                    onPress={() => navigate('Quiz', { title, questions })}
                    disabled={questions.length === 0}
                >
                    <MaterialCommunityIcons name='play' color={white} size={32} />
                    <Text style={[ styles.btnText, { color: white } ]}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Decks')} >
                    <Entypo name='home' size={32} color={black} />
                    <Text style={styles.btnText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    deck: {
        flex: 1,
        alignItems: 'center',
    },
    caption: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5,
        borderColor: white,
        shadowColor: grey,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: white,

    },
    title: {
        fontSize: 26,
        color: black
    },
    counter: {
        fontSize: 18,
        color: grey
    },
    actions: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        marginBottom: 68,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderWidth: 1,
        padding: 25,
        paddingHorizontal: 60,
        marginVertical: 10,
        borderRadius: 5,
        borderColor: white,
        shadowColor: grey,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: white,
    },
    btnText: {
        marginLeft: 3,
        textTransform: 'uppercase',
    },
})

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Deck)
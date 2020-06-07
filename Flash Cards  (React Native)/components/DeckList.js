import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { grey, black, white } from '../helpers/colors'


const renderDeckCard = ({ item }, { navigation }) => {
    const { title, questions } = item
    return (
        <TouchableOpacity style={styles.deck} onPress={() => navigation.navigate('Deck', { ...item })}>
            <Text style={styles.deckTitle}>{title}</Text>
            <Text style={styles.deckCounter}>{questions.length} {questions.length == 1 ? 'card' : 'cards'}</Text>
        </TouchableOpacity>
    )
}

function DeckList ({ decks, navigation }) {
    return (
        <View style={styles.decks}>
            <FlatList 
                data={Object.values(decks)} 
                renderItem={({item}) => renderDeckCard({item}, {navigation})} 
                keyExtractor={(item) => item.title}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    decks: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 5,
    },
    deck: {
        margin: 5,
        marginTop: 2,
        marginBottom: 2,
        padding: 5,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
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
    deckTitle: {
        fontSize: 24,
        paddingBottom: 5,
        textAlign: 'center',
        color: black,
    },
    deckCounter: {
        fontSize: 16,
        textAlign: 'center',
        color: grey,
        textTransform: 'uppercase',
    },
})

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, grey, red, green, black, purple } from '../helpers/colors'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

class Question extends React.Component {
    state = {
        answerVisible: false,
    }
    
    toggleAnswer = (value) => this.setState(() => ({ answerVisible: value }))
    
    handleAnswer = (answer) => {
        const { markCorrect, markIncorrect, nextQuestion } = this.props
        if (answer === 'correct') markCorrect()
        if (answer === 'incorrect') markIncorrect()
        this.toggleAnswer(false)
        nextQuestion()
    }
    render() {
        const { card } = this.props
        const { answerVisible } = this.state
        return (
            <View style={styles.card}>
                <View style={styles.question}>
                    <Text style={styles.questionText}>{card.question}</Text>
                    {!answerVisible 
                        && <TouchableOpacity 
                                style={styles.showAnswerBtn} 
                                onPress={() => this.toggleAnswer(true)}
                            >
                                <MaterialIcons name='question-answer' size={32} color={purple} />
                                <Text style={styles.showAnswerBtnText}>Answer</Text>
                        </TouchableOpacity>
                    }
                    {answerVisible && <Text style={styles.answer}>{card.answer}</Text>}
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity 
                        style={[styles.actionBtn, { backgroundColor: green }]} 
                        onPress={() => this.handleAnswer('correct')}
                    >
                        <Entypo name='check' color={white} size={32} />
                        <Text style={styles.actionBtnText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[ styles.actionBtn, { backgroundColor: red, }, answerVisible && { opacity: .4, } ]} 
                        onPress={() => this.handleAnswer('incorrect')}
                    >
                        <Entypo name='cross' color={white} size={32} />
                        <Text style={styles.actionBtnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'stretch',
    },
    question: {
        flex: 1,
        marginVertical: 5,
        padding: 5,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: white,
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
    questionText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 15,
    },
    answer: {
        fontSize: 18,
        textAlign: 'left',
        padding: 20,
    },
    showAnswerBtn: {
        alignSelf: 'stretch',
        marginVertical: 10,
        alignItems: 'center',
        padding: 5,
    },
    showAnswerBtnText: {
        fontSize: 18,
        color: purple,
    },
    actions: {
        alignItems: 'stretch',
        marginBottom: 48,
    },
    actionBtn: {
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
    },
    actionBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: white,
        textTransform: 'uppercase'
    },
})

export default Question
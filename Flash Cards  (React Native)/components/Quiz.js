import React, { version } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { clearNotification, setLocalNotification } from '../helpers/notifications'
import { white, grey, red, green, black, purple } from '../helpers/colors'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import Question from './Question'

class Quiz extends React.Component {
    state = {
        current: 0,
        total: 0,
        correct: 0,
        incorrect: 0,
        completed: false,
    }

    isLastQuestion = () => this.state.current + 1 === this.state.total
    
    nextQuestion = () => {
        if (this.isLastQuestion()) {
            this.setState(() => ({ completed: true }))
            clearNotification().then(setLocalNotification('keep it up!'))
        } 
        else {
            this.setState(state => ({ ...state, current: state.current + 1 }))
        }
    }
    resetQuiz = () => this.setState(() => ({
        current: 0,
        correct: 0,
        incorrect: 0,
        completed: false,
    }))

    markCorrect = () => this.setState(state => ({ ...state, correct: state.correct + 1 }))
    
    markIncorrect = () => this.setState(state => ({ ...state, incorrect: state.incorrect + 1 }))
    
    componentDidMount() {
        const { questions } = this.props.route.params
        this.setState(() => ({ total: questions.length }))
    }
    render() {
        const { questions } = this.props.route.params
        const { current, total, correct, incorrect, completed } = this.state
        const { navigation } = this.props
        const card = questions[current]
        if (completed) return (
            <View>
                <View style={styles.summary}>
                    <Text style={styles.questionText}>{card.question}</Text>
                    <View style={styles.summaryStats}>
                        <View style={styles.summaryStatsItem}>
                            <MaterialCommunityIcons name='counter' size={48} color={black} />
                            <Text style={styles.summaryStatsText}>
                                {current + 1}/{total}
                            </Text>
                        </View>
                        <View style={styles.summaryStatsItem}>
                            <MaterialCommunityIcons name='percent' size={48} color={black} />
                            <Text style={styles.summaryStatsText}>
                                { ((correct / total) * 100).toFixed(0) }
                            </Text>
                        </View>
                        <View style={styles.summaryStatsItem}>
                            <Entypo name='emoji-happy' size={48} color={green} />
                            <Text style={styles.summaryStatsText}>
                                {correct}
                            </Text>
                        </View>
                        <View style={styles.summaryStatsItem}>
                            <Entypo name='emoji-sad' size={48} color={red} />
                            <Text style={styles.summaryStatsText}>
                                {incorrect}
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[styles.btn, { backgroundColor: purple }]} onPress={this.resetQuiz}>
                    <Entypo name='back-in-time' size={32} color={white} />
                    <Text style={[styles.btnText, { color: white }]}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
                    <Entypo name='arrow-left' size={32} color={black} />
                    <Text style={styles.btnText}>Back to Deck</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Decks')} >
                    <Entypo name='home' size={32} color={black} />
                    <Text style={styles.btnText}>Home</Text>
                </TouchableOpacity>
            </View>
        )

        return (
            <View style={styles.quiz}>
                <View style={styles.stats}>
                    <View style={styles.statsItem}>
                        <MaterialCommunityIcons name='counter' size={32} color={black} />
                        <Text style={styles.statsText}>{current + 1}/{total}</Text>
                    </View>
                    <View style={styles.statsItem}>
                        <Entypo name='emoji-happy' size={32} color={green} />
                        <Text style={styles.statsText}>{correct}</Text>
                    </View>
                    <View style={styles.statsItem}>
                        <Entypo name='emoji-sad' size={32} color={red} />
                        <Text style={styles.statsText}>{incorrect}</Text>
                    </View>
                </View>
                <View style={styles.question}>
                    <Question 
                        card={card} 
                        nextQuestion={this.nextQuestion}
                        markCorrect={this.markCorrect}
                        markIncorrect={this.markIncorrect}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quiz: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    stats: {
        backgroundColor: white,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingVertical: 10,
        marginBottom: 5,
    },
    statsItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    statsText: {
        fontSize: 20,
        marginLeft: 5,
        textAlign: 'center',
    },
    counter: {},
    correct: {},
    incorrect: {},
    question: {
        flex: 1,
    },
    summary: {
        margin: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    summaryStats: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    summaryStatsItem: {
        padding: 5,
        paddingVertical: 10,
    },
    summaryStatsText: {
        textAlign: 'center',
        fontSize: 18,
    },
    questionText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: 15,
    },
    btn: {
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

export default Quiz
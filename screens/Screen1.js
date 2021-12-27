import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Post from '../components/Post/post'

const Screen1 = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<View>
					<Post />
				</View>
			</ScrollView>
		</SafeAreaView>

	)
}

export default Screen1

const styles = StyleSheet.create({
	myText: {
		fontSize: 30,
		color: 'tomato',
		textAlign: 'center'
	}
})

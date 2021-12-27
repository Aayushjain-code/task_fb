import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

const Post = () => {
	return (
		<View style={styles.container}>
			<Header />
			<Body />
			<Footer />
		</View>
	)
}

export default Post

const styles = StyleSheet.create({
	container: {
		margin: 10,
		padding: 10,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: 'black',
	},
})

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Body = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Heading</Text>
			<Text style={styles.description} >FaceBook Post by Aishwarya: saadsdasd adasdsc</Text>
			{/* <Image style={styles.image} source={{ uri: "https://picsum.photos/200/200" }} /> */}
		</View>
	)
}

export default Body

const styles = StyleSheet.create({
	description: {
		fontSize: 15,
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'black',
		textAlign: 'center'
	},
	container: {
		marginTop: 8,
		marginBottom: 6,
		paddingBottom: 10,
		padding: 2,
		height: 200,
		borderWidth: 1,
		borderRadius: 10,
		alignItems: 'center',
	},
	image: {
		width: 250,
		height: 100,
		marginTop: 10,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: 'black',
	}
})

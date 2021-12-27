import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Profilepicture from '../others/Profilepicture'

const Header = () => {
	return (
		<View style={styles.container}>
			{/* Profile */}
			<Profilepicture />
			{/* Name */}
			<Text style={styles.myText}>
				Name
			</Text>
			{/* date */}
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderWidth: 1,
		borderRadius: 10,
	},
	myText: {
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: 'black',
		fontSize: 20,
		marginTop: 20,
		marginLeft: 10,
	},
})

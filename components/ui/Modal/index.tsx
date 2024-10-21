import React, { useState } from "react";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";
import Colors from "../../../style/Colors";
import Header from "./Header";
import { AddFormProps } from "../../RecentExpenses/Forms/AddForm";
import Button from "../Button";
type Props = {
	button: React.ReactNode;
	title: string;
	FormComponent: React.ComponentType<AddFormProps>;
};

const ModalComponent: React.FC<Props> = ({ button, title, FormComponent }) => {
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const showModal = () => {
		setModalVisible(true);
	};

	const hideModal = () => {
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<Button onPress={showModal}>{button}</Button>

			<Modal
				animationType="slide"
				transparent={false}
				visible={modalVisible}
				onRequestClose={hideModal}
			>
				<View style={styles.modalContainer}>
					<Header title={title} />

					<FormComponent hideModal={hideModal} />
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	triggerButton: {},
	modalContainer: {
		flex: 1,
		backgroundColor: Colors.primaryForeground,
	},
	modalContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 20,
	},
	modalText: {
		fontSize: 18,
		textAlign: "center",
		color: Colors.textPrimary,
	},
});

export default ModalComponent;

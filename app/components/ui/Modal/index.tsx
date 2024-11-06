import React, { useState } from "react";
import { Modal, StyleSheet, View, ViewStyle } from "react-native";
import Colors from "../../../style/Colors";
import Header from "./Header";
import { AddFormProps } from "../../Home/Forms/AddForm";
import Button from "../Button";
type Props = {
	button: React.ReactNode;
	title: string;
	FormComponent: React.ComponentType<AddFormProps & any>;
	defaultValues?: any;
	buttonStyle?: ViewStyle;
};

const ModalComponent: React.FC<Props> = ({
	button,
	title,
	FormComponent,
	buttonStyle,
	...rest
}) => {
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const showModal = () => {
		setModalVisible(true);
	};

	const hideModal = () => {
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<Button style={buttonStyle} onPress={showModal}>
				{button}
			</Button>

			<Modal
				animationType="slide"
				transparent={false}
				visible={modalVisible}
				onRequestClose={hideModal}
			>
				<View style={styles.modalContainer}>
					<Header title={title} />

					<FormComponent hideModal={hideModal} {...rest} />
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
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

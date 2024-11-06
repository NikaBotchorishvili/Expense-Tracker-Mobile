import React from "react";
import { Item } from "../../../store/types";
import ModalComponent from "../../ui/Modal";
import Card from "./Card";
import EditForm from "../Forms/EditForm";
import Colors from "../../../style/Colors";

type Props = {
	item: Item;
};

const CardModal: React.FC<Props> = ({ item }) => {
	return (
		<ModalComponent
			title="edit"
			FormComponent={EditForm}
			button={<Card item={item} />}
			defaultValues={item}
			buttonStyle={{ backgroundColor: Colors.primaryForeground }}
		/>
	);
};

export default CardModal;

import React from "react";
import { Item } from "../../../store/types";
import ModalComponent from "../../ui/Modal";
import Card from "./Card";
import EditForm from "../Forms/EditForm";

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
		/>
	);
};

export default CardModal;

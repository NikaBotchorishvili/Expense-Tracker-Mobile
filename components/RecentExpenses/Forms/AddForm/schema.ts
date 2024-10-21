import { number, object, string, InferType } from "yup";

export const schema = object().shape({
	title: string().required("Title is required"),
	amount: number().required("Amount is required"),
	category: string().required("Category is required"),
	date: string().required("Date is required"),
	description: string().required("Description is required"),
});

export type FormType = InferType<typeof schema>;

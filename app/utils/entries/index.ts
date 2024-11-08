import { Item } from "../../store/types";

type returnData<T> = {
	data: T;
	count?: number;
	statusCode: number;
};

export const addEntry = async (
	data: Omit<Item, "id" | "createdAt">
): Promise<returnData<Item>> => {
	const apiUrl = process.env.EXPO_PUBLIC_API_URL;
	try {
		const res = await fetch(`${apiUrl}/entries`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...data }),
		});

		if (![201, 200].includes(res.status)) {
			throw await res.json();
		}
		const json: returnData<Item> = await res.json();
		return json;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to add entry");
	}
};
export const getEntries = async (): Promise<returnData<Item[]>> => {
	const apiUrl = process.env.EXPO_PUBLIC_API_URL;
	try {
		const res = await fetch(`${apiUrl}/entries`, {
			method: "GET",
		});
		const json: returnData<Item[]> = await res.json();
		return json;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to add entry");
	}
};

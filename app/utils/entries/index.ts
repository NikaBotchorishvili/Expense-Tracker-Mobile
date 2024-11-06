import { Item } from "../../store/types";

export const addEntry = async ({
	data,
}: {
	data: Omit<Item, "id" | "createdAt">;
}) => {
	const apiUrl = process.env.EXPO_PUBLIC_API_URL;
	try {
		const res = await fetch(`${apiUrl}/items.json`, {
			method: "POST",
			body: JSON.stringify(data),
		});
		const json = await res.json();
		return json;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to add entry");
	}
};
export const getEntries = async (): Promise<Item[]> => {
	const apiUrl = process.env.EXPO_PUBLIC_API_URL;
	try {
		const res = await fetch(`${apiUrl}/items.json`, {
			method: "GET",
		});
		const json = await res.json();
		const items: Item[] = Object.keys(json).map((key) => ({
			id: key,
			...json[key],
		}));
		return items;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to add entry");
	}
};

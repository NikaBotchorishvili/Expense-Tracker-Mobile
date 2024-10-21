import { create } from "zustand";
import { Item } from "./types";

type State = {
	items: Item[];
};

type Actions = {
	addItem: (item: Item) => void;
	deleteItem: (id: string) => void;
	editItem: (id: string, updatedItem: Partial<Item>) => void;
};

const useStore = create<State & Actions>((set) => ({
	items: [],
	addItem: (item) =>
		set((state) => ({
			items: [...state.items, item],
		})),
	deleteItem: (id) =>
		set((state) => ({
			items: state.items.filter((item) => item.id !== id),
		})),
	editItem: (id, updatedItem) =>
		set((state) => ({
			items: state.items.map((item) =>
				item.id === id ? { ...item, ...updatedItem } : item
			),
		})),
}));

export default useStore;

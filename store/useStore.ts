import { create } from "zustand";
import { Item } from "./types";

type State = {
	items: Item[];
};

type Actions = {
	addItem: (item: Item) => void;
};

const useStore = create<State & Actions>((set) => ({
	items: [],
	addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));

export default useStore;

import { create } from "zustand";

interface SelectedTypes {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

const useSelectedPropertyStore = create<SelectedTypes>((set) => ({
  selectedId: null,
  setSelectedId: (id) => set((state) => ({ selectedId: id })),
}));

export default useSelectedPropertyStore;

import { create } from "zustand";

interface ExpandSearchTypes {
  expandSearch: boolean;
  setExpandSearch: (expanded: boolean) => void;
}

const useExandSearchStore = create<ExpandSearchTypes>((set) => ({
  expandSearch: false,
  setExpandSearch: (expanded) => set((state) => ({ expandSearch: expanded })),
}));

export default useExandSearchStore;

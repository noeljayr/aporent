import { IconSearch } from "@tabler/icons-react";
import useExandSearchStore from "@/context/expandSearch";

function Input() {
    const { expandSearch } = useExandSearchStore();
  return (
    <div className={`search-input-box items-center gap-1 p-1 ${expandSearch ? "grid" : "hidden"}`}>    
      <IconSearch />
      <input type="text" placeholder="Have anything specific in mind?" />
    </div>
  );
}

export default Input;

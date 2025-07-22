import type { BudgetSortControlsProps } from "../../types/types";

export default function BudgetSortControls({ onSortByName, onSortByTotal, onReset }: BudgetSortControlsProps){
    return (
    <div className="flex absolute top-[150px] left-[800px] gap-4 mb-8">
      <button
        onClick={onSortByName}
        className="text-white border-b px-4 py-1 hover:border-red-500 transition-colors"
      >
        Sort by Name
      </button>
      <button
        onClick={onSortByTotal}
        className="text-white border-b px-4 py-1 hover:border-red-500 transition-colors"
      >
        Sort by Total
      </button>
      <button
        onClick={onReset}
        className="text-white border-b px-4 py-1 hover:border-red-500 transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
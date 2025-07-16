import type { CounterProps } from "../../types/types";

export default function Counter({ label, value, onChange }: CounterProps) {
    const decrease = () => {
        if (value > 0) onChange(value - 1);
    };

    const increase = () => {
        onChange(value + 1);
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <label className="text-lg font-[DotGothic16]">{label}</label>
            <div className="flex items-center gap-2">
                <button
                onClick={decrease}
                className="w-6 h-6 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 hover:text-red-500 transition"
                >
                -
                </button>
                <span className="text-lg font-[DotGothic16] w-4 text-center">{value}</span>
                <button
                onClick={increase}
                className="w-6 h-6 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 hover:text-red-500 transition"
                >
                +
                </button>
            </div>
        </div>
  );
}

"use client";
import { increment, decrement, reset } from "./features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "./hooks";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div>
        <button
          className="rounded-lg text-black bg-white p-1.5 font-semibold"
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span className="font-black text-2xl m-5 p-1.5">{count}</span>
        <button
          className="rounded-lg text-black bg-white p-1.5 font-semibold"
          aria-label="Decrement value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <div>
      <button
          className="rounded-lg text-black bg-white p-1.5 font-semibold"
          aria-label="Decrement value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </main>
  );
}

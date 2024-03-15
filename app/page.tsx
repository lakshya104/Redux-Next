"use client";
import { useState } from "react";
import { reverseStr, setStr, reset } from "./features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "./hooks";

export default function Home() {
  const str = useAppSelector((state) => state.counter.value);
  const [string, setString] = useState("");
  const dispatch = useAppDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-16 p-24 ">
      <span className="font-black text-2xl m-5 py-2 px-4">
        {str}
      </span>
      <div>
        <button
          className="rounded-lg text-black bg-gray-200 py-2 px-4 font-semibold"
          aria-label="Decrement value"
          onClick={() => dispatch(reverseStr(str))}
        >
          Reverse String
        </button>
        <span className="font-semibold text-md m-5 py-2 px-4">
          <input type="text" onChange={(e) => setString(e.target.value)} />
        </span>
        <button
          className="rounded-lg text-black bg-gray-200 py-2 px-4 font-semibold"
          aria-label="Increment value"
          onClick={() => {
            dispatch(setStr(string));
          }}
        >
          Set String
        </button>
      </div>
      <div>
        <button
          className="rounded-lg text-black bg-gray-200 py-2 px-4 font-semibold"
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </main>
  );
}

import React from "react";
import { observer } from "mobx-react-lite";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { themeStore } from "../stores/themeStore";

const AFTER_LIGHT_CLASS = "after:left-[3px]";
const AFTER_DARK_CLASS = "after:left-[calc(3px+18px+3px)]";

export const ThemeToggle = observer(() => {
  return (
    <button
      onClick={() => themeStore.toggle()}
      className={`
        flex 
        items-center
        gap-[3px]
        text-[18px]
        bg-red-500
        text-white
        rounded-full
        p-[3px]
        relative
        after:content-['']
        after:absolute
        after:bg-white
        after:h-[18px]
        after:w-[18px]
        after:rounded-full
        after:ease-in-out
        after:duration-300
        ${themeStore.mode === "light" ? AFTER_LIGHT_CLASS : AFTER_DARK_CLASS}
      `}
    >
      <IoIosMoon />
      <IoIosSunny />
    </button>
  );
});

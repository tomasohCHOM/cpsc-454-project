import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto p-8 bg-slate-100 flex italic text-sm justify-between items-center">
      <span>@ 2025 Awesome Team.</span>
      <a
        href="https://github.com/tomasohCHOM/cpsc-454-project"
        target="_blank"
        className="underline underline-offset-2"
      >
        GitHub Link
      </a>
    </footer>
  );
}

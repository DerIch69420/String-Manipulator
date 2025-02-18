import { invoke } from "@tauri-apps/api/core";

let inputEl: HTMLInputElement | null;
let reversedEl: HTMLElement | null;
let uppercaseEl: HTMLElement | null;
let lowercaseEl: HTMLElement | null;
let swapcaseEl: HTMLElement | null;
let count_charsEl: HTMLElement | null;
let leetspeakEl: HTMLElement | null;
let remove_duplicatesEl: HTMLElement | null;
let shuffleEl: HTMLElement | null;
let remove_whitespacesEl: HTMLElement | null;

async function manipulate() {
    if (
        !inputEl ||
        !reversedEl ||
        !uppercaseEl ||
        !lowercaseEl ||
        !swapcaseEl ||
        !count_charsEl ||
        !leetspeakEl ||
        !remove_duplicatesEl ||
        !shuffleEl ||
        !remove_whitespacesEl
    )
        return;

    try {
        const text = inputEl.value.trim();

        reversedEl.textContent = await invoke("reverse", { text });
        uppercaseEl.textContent = await invoke("uppercase", { text });
        lowercaseEl.textContent = await invoke("lowercase", { text });
        swapcaseEl.textContent = await invoke("swapcase", { text });
        count_charsEl.textContent = await invoke("count_chars", { text });
        leetspeakEl.textContent = await invoke("leetspeak", { text });
        remove_duplicatesEl.textContent = await invoke("remove_duplicates", {
            text,
        });
        shuffleEl.textContent = await invoke("shuffle", { text });
        remove_whitespacesEl.textContent = await invoke("remove_whitespaces", {
            text,
        });
    } catch (error) {
        console.error("Error manipulating string:", error);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    inputEl = document.querySelector("#input");
    reversedEl = document.querySelector("#reversed");
    uppercaseEl = document.querySelector("#uppercase");
    lowercaseEl = document.querySelector("#lowercase");
    swapcaseEl = document.querySelector("#swapcase");
    count_charsEl = document.querySelector("#count_chars");
    leetspeakEl = document.querySelector("#leetspeak");
    remove_duplicatesEl = document.querySelector("#remove_duplicates");
    shuffleEl = document.querySelector("#shuffle");
    remove_whitespacesEl = document.querySelector("#remove_whitespaces");

    document.querySelector("#inputForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        manipulate();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const targetId = (event.target as HTMLButtonElement).dataset.target;
        if (targetId) {
          const textElement = document.getElementById(targetId);
          if (textElement) {
            const textToCopy = textElement.textContent || "";
            navigator.clipboard.writeText(textToCopy).then(() => {
              // alert("Copied to clipboard!");
            }).catch(err => console.error("Failed to copy: ", err));
          }
        }
      });
    });
  });
  
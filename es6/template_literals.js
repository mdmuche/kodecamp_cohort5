function highlight(strings, ...values) {
  return strings
    .map((string, i) => {
      const value = values[i] ? `<marks>${values[i]}</marks>` : "";
      return string + value;
    })
    .join("");
}

const term = "nodejs";
const term2 = "kodecamp";
const text = highlight`learn ${term} programming with ${term2}`;
console.log(text);

// string raw
const escaped = String.raw`my name\nyour name`;
console.log(escaped);

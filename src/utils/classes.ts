type ClassToggles = { [key: string]: boolean };

export default function classes(...data: (string | ClassToggles)[]) {
  return data
    .map(item => {
      if (typeof item === "string") {
        return item;
      }

      return Object.entries(item)
        .filter(item => item[1])
        .map(item => item[0])
        .join(" ");
    })
    .join(" ")
    .trim();
}

export function delay(ms: number) {
  console.log(`delay - ${ms / 1000 / 60} min or ${ms / 1000}s`);

  return new Promise((resolve) => setTimeout(resolve, ms));
}

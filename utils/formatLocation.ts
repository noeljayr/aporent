export function formatLocation(input: string): string {
  const locationToRemove = "Malawi";
  const locations = input.split(",");

  // Trim each word and filter out the unwanted word
  const filteredLocations = locations
    .map((location) => location.trim())
    .filter((location) => location !== locationToRemove);

  // Join the words back together using ', ' as the separator
  return filteredLocations.join(", ");
}

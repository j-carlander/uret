/**
 * Util for formating the date to swedish standard.
 */

export function formatDateTimeSwe(timestamp) {
  const datetime = new Date(timestamp);

  const date = new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(datetime);

  const time = new Intl.DateTimeFormat("sv-SE", {
    hour: "numeric",
    minute: "numeric",
  }).format(datetime);

  return { date, time };
}

export  function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diff = (now - past) / 1000; // seconds

  if (diff < 60) return "just now";

  const minutes = diff / 60;
  if (minutes < 60) return `${Math.floor(minutes)} min ago`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)} hours ago`;

  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)} days ago`;

  const weeks = days / 7;
  if (weeks < 4) return `${Math.floor(weeks)} weeks ago`;

  const months = days / 30;
  if (months < 12) return `${Math.floor(months)} months ago`;

  const years = days / 365;
  return `${Math.floor(years)} years ago`;
}

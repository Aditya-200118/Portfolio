const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDateRange(start: Date, end?: Date): string {
  const startLabel = monthYearFormatter.format(start);
  const endLabel = end ? monthYearFormatter.format(end) : 'Present';
  return `${startLabel} - ${endLabel}`;
}

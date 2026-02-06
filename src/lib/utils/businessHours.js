/**
 * Checks if the current time is within business hours.
 * Hours: Monday - Friday, 7:30 AM - 6:00 PM.
 * 
 * @returns {boolean} True if open, false if closed.
 */
export const isBusinessOpen = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Monday to Friday
  if (day >= 1 && day <= 5) {
    const currentTimeInMinutes = hours * 60 + minutes;
    const openTimeInMinutes = 7 * 60 + 30; // 7:30 AM
    const closeTimeInMinutes = 18 * 60;    // 6:00 PM

    return currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes;
  }

  return false;
};

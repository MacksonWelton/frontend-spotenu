export const alert = (type, message, open) => ({
  type: "ALERT",
  payload: {
    type,
    message,
    open
  }
});
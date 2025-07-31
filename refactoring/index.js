// function determineArrLength(arr) {
//   const len = arr.length;
//   return len;
// }

// to optimize for memory function re-written as:
function determineArrLength(arr) {
  return arr.length;
}

// technical debt
function processPayment(amount) {
  // TODO add proper validation
  // TODO implement proper logging
  // TODO add txn rollback capability
  return Payment.charge(amount);
}

function refundPayment(
  paymentId,
  reason,
  metaData,
  user,
  userName,
  userEmail,
  userAge
) {
  // TODO add proper validation
  // TODO implement proper logging
  // TODO add txn rollback capability
  const res = cancelPayment(paymentId, "Refund", metaData, user);
  if (!res) {
    return Payment.refund(paymentId, reason, metaData, user);
  }
}

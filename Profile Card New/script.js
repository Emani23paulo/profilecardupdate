function updateMilliseconds() {
  const now = Date.now();
  document.querySelector('[data-testid="test-user-time"]').textContent = now;
}
setInterval(updateMilliseconds, 1000);
updateMilliseconds();

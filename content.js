// Send a message containing the page details back to the event page
chrome.runtime.sendMessage({
    'username': document.username || '',
    'password': document.password || ''
});

if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/robofriends-practice/sw.js', { scope: '/robofriends-practice/' })})}
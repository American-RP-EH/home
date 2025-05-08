
function handleLinkClick(e) {
  setTimeout(() => {
    document.getElementById('popup').classList.remove('hidden');
  }, 500);
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

function joinGame() {
  window.open('https://www.roblox.com/games/start?placeId=7711635737&launchData=joinCode%3Dvtsp1fu9', '_blank');
  handleLinkClick();
}

document.getElementById('themeSwitcher').addEventListener('change', function() {
  document.body.classList.toggle('dark', this.checked);
});

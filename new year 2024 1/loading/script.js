// script.js

document.addEventListener('DOMContentLoaded', function () {
  const currentPartyStatus = document.querySelector('.js-status'),
    bigButton = document.querySelector('.js-big-button'),
    partyScreen = document.querySelector('.js-party-screen');
  const partyMusic = new Audio('happy new year.mp3');

  const party = () => {
    const marqueeLine = document.querySelector('.marquee-line');

    if (bigButton.classList.contains('is-active')) {
      bigButton.classList.remove('is-active');
      partyScreen.classList.remove('is-active');
      currentPartyStatus.innerHTML = '😢 Not Partying, you should be! 😢';
      clearDiscoLights();
      stopMusic();
      if (marqueeLine) {
        marqueeLine.remove();
      }
    } else {
      bigButton.classList.add('is-active');
      partyScreen.classList.add('is-active');
      currentPartyStatus.innerHTML = '🎉 🍻 🕺 Partying 💃 🍻 🎉';
      createDiscoLights();
      playMusic();
      addMarqueeLine();

      showMessage(`𝚘𝚔𝚊𝚝𝚒 𝚌𝚑𝚎𝚙𝚙𝚊𝚗𝚊...💌
      𝚎𝚎 𝚢𝚎𝚊𝚛 𝚗𝚞𝚟𝚟𝚞 𝚎𝚍𝚌𝚑𝚊𝚟😭,𝚋𝚊𝚍𝚑𝚊 𝚙𝚊𝚍𝚍𝚊𝚟😖,
      𝚍𝚎𝚙𝚛𝚎𝚜𝚜𝚒𝚘𝚗 𝚗𝚒 𝚏𝚊𝚌𝚎 𝚌𝚑𝚎𝚜𝚊𝚟😫,𝚔𝚊𝚜𝚝𝚊𝚙𝚊𝚍𝚍𝚊𝚟💪
      𝚋𝚞𝚝 𝚕𝚊𝚜𝚝 𝚕𝚘 𝚏𝚊𝚒𝚕 𝚊𝚢𝚢𝚊𝚟...😪
      𝚔𝚊𝚗𝚒 𝚊𝚗𝚗𝚒 𝚗𝚎𝚛𝚌𝚑𝚞𝚔𝚞𝚗𝚗𝚊𝚟🤩,
      𝚒𝚙𝚊𝚝𝚝𝚒𝚔𝚊𝚢𝚗𝚊 𝚛𝚎𝚊𝚕𝚒𝚜𝚎 𝚊𝚢𝚢𝚒 𝚗𝚎𝚎 𝚕𝚒𝚏𝚎 𝚗𝚞𝚟𝚞 𝚍𝚎𝚜𝚒𝚐𝚗 𝚌𝚑𝚎𝚜𝚔𝚘👾`);
    }
  };

  const addMarqueeLine = () => {
    const marquee = document.createElement('marquee');
    marquee.innerHTML = '𝘖𝘭𝘥 𝘚𝘰𝘯𝘨 𝘈𝘯𝘪 𝘊𝘩𝘶𝘴𝘵𝘶𝘯𝘯𝘢𝘷𝘢🧐? 𝘖𝘭𝘥 𝘪𝘴 𝘎𝘰𝘭𝘥 𝘭𝘦 🥱...💃 𝘊𝘰𝘯𝘵𝘪𝘯𝘶𝘦 𝘗𝘢𝘳𝘵𝘺𝘪𝘯𝘨 🕺';
    marquee.classList.add('marquee-line');
    const wishesContainer = document.querySelector('.js-status');
    wishesContainer.parentNode.insertBefore(marquee, wishesContainer.nextSibling);
  };

  const createDiscoLights = () => {
    const discoContainer = document.createElement('div');
    discoContainer.classList.add('disco-container');

    for (let i = 0; i < 5; i++) {
      const discoLight = document.createElement('div');
      discoLight.classList.add('disco-light');
      discoContainer.appendChild(discoLight);
    }

    document.body.appendChild(discoContainer);
  };

  const clearDiscoLights = () => {
    const discoContainer = document.querySelector('.disco-container');
    if (discoContainer) {
      discoContainer.remove();
    }
  };

  const playMusic = () => {
    partyMusic.play().catch(error => {
      console.error('Unable to play music:', error.message);
    });
  };

  const stopMusic = () => {
    partyMusic.pause();
    partyMusic.currentTime = 0;
  };

  function showMessage(message) {
    const partyMessage = document.createElement('div');
    partyMessage.innerHTML = message.replace(/\n/g, '<br>');
    partyMessage.classList.add('party-message');
    partyMessage.style.position = 'fixed';
    partyMessage.style.right = '10px';
    partyMessage.style.bottom = '10px';
    partyMessage.style.zIndex = '999';

    // Create Visit button
    const visitButton = document.createElement('button');
    visitButton.textContent = ' Also Visit';
    visitButton.style.marginTop = '10px'; // Adjust the margin as needed
    visitButton.style.display = 'block';
    visitButton.style.backgroundColor = '#84F00A';

    // Add event listener to open the link when the button is clicked
    visitButton.addEventListener('click', function () {
      window.open('https://arjun12898.github.io/arjunarshamportfolio/', '_blank');
    });

    partyMessage.appendChild(visitButton);
    document.body.appendChild(partyMessage);
  }

  bigButton.addEventListener('click', party);

  setTimeout(() => {
    const years = document.querySelectorAll('.year');
    years.forEach(year => year.style.display = 'none');

    const searchBar = document.querySelector('.search-bar');
    searchBar.style.display = 'none';

    const inputContainer = document.querySelector('.input-container');
    inputContainer.style.display = 'flex';
  }, 4000);

  var createdByArjunDiv = document.createElement('div');
  createdByArjunDiv.innerHTML = 'Created by Arjun';
  createdByArjunDiv.style.textAlign = 'center';
  createdByArjunDiv.style.marginTop = '900px';
  createdByArjunDiv.style.color = '#555';
  createdByArjunDiv.style.fontStyle = 'italic';
  createdByArjunDiv.style.position = 'fixed';
  document.body.appendChild(createdByArjunDiv);
});

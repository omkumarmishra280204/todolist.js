function handleAddFriend(button) {
    button.disabled = true;
    button.textContent = "Sending Request...";
  
    setTimeout(() => {
      const card = button.parentElement;
      const nameEl = card.querySelector(".name");
      const statusEl = card.querySelector(".status");
  
      nameEl.textContent = "Friend";
      statusEl.textContent = "You're now friends";
  
      button.textContent = "Friend";
  
      setTimeout(() => {
        button.remove();
      }, 2000);
    }, 2000);
  }
  
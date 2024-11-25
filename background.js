  let clicked = false;

      // Loop through all buttons and click the ones with "CLAIM" in the text
      for (let i = 0; i < btn.length; i++) {
        if (btn[i].innerText.indexOf('CLAIM') > -1) {
          btn[i].click();
          console.log('Claimed free coins');
          clicked = true;
        }
      }

      // If any button was clicked, pause for 1 second before resetting the observation
      if (clicked) {
        hasClicked = true;
        console.log('Waiting for 1 second before resuming observation...');
        
        setTimeout(() => {
          hasClicked = false;
          observer.observe(document.body, { childList: true, subtree: true });
          console.log('Resuming observation');
        }, 15); // 1-second pause after clicking buttons
      }
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

console.log('Script started');

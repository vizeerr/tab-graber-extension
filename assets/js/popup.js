document.getElementById('grab-title').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      let currentTab = tabs[0];
      console.log(tabs[0].title);
      document.getElementById('title-display').textContent = "Current Tab : " + currentTab.title;
    });
    
  });
  
// document.getElementById("myButton").addEventListener("click", function () {
//   let newURL = "https://www.google.com";
//   chrome.tabs.create({ url: newURL });
// });


chrome.webNavigation.onDOMContentLoaded.addListener(async ({ tabId, url }) => {
  if (url !== 'https://example.com/#inject-programmatic') return;
  const { options } = await chrome.storage.local.get('options');
  chrome.scripting.executeScript({
    target: { tabId },
    files: ['https://fastly.jsdelivr.net/gh/INTMIN/live2d-widget@latest/live2d.min.js'],
    ...options
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: initWidget({
      waifuPath: live2d_path + "waifu-tips.json",
      //apiPath: "https://live2d.fghrsh.net/api/",
      cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
      tools: [
        "hitokoto",
        "asteroids",
        "switch-model",
        "switch-texture",
        "photo",
        "info",
        "quit",
      ],
    })
  });
  
});

chrome.runtime.onMessage.addListener(async ({ name, options }) => {
  if (name === 'inject-programmatic') {
    await chrome.storage.local.set({ options });
    await chrome.tabs.create({
      url: 'https://example.com/#inject-programmatic'
    });
  }
});
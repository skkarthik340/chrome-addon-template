chrome.contextMenus.create({
  title: "Search: ", 
  contexts:["selection"], 
  onclick: function() {
        alert('first');
      },

});

var options = {
    type: "basic",
    title: "Study Time",
    message: "time for a break:)",
    eventTime: Date.now(),
    iconUrl: "caticon.png"
    };
    
    
    chrome.notifications.create(options, callback);
    
    function callback(){
        console.log('Popup done!')
    }

    
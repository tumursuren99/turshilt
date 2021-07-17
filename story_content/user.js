function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5k0jbB0lTTc":
        Script1();
        break;
  }
}

function Script1()
{
  let player = GetPlayer();

fetch('https://spreadsheets.google.com/feeds/cells/1805el5HxDvw6NXsqkloG-l9Xx0nhX8k8e7KSW1SFHrA/edit#gid=0/public/full?alt=json')
.then(response => response.json())
.then(json => {
      let title = json.feed.entry[0].content.$t;
      player.SetVar('title', title);
      player.SetVar('text', json.feed.entry[1].content.$t)
   });
}


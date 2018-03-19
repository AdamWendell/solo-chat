export const slashCommands = (string, callbackText, disableSend) => {
  if (string.startsWith("/time")) {
    callbackText(new Date().toString());
  } else if (string.startsWith("/goodbye")) {
    disableSend();
  } else if (string.startsWith("/starwars")) {
    fetch(
      `https://swapi.co/api/people/?search=${encodeURIComponent(
        string.substring("/starwars".length)
      )}`
    )
      .then(res => res.json())
      .then(
        json =>
          json.results.length > 0
            ? callbackText(JSON.stringify(json.results[0], null, 2))
            : callbackText("The force not find character could")
      );
  } else if (string.startsWith("/")) {
    callbackText("invalid slash command");
  } else {
    callbackText(string);
  }
};

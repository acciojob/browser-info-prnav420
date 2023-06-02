//your JS code here. If required.

function clcik() {
  let fd = document.createElement("div");
  fd.id = "browser-info";
  fd.innerText = `You are using ${navigator.appName} version ${navigator.appVersion}`;

  document.body.append(fd);
}

clcik();


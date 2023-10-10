async function main() {
  const canvas = document.getElementById("canvas");

  if (!(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const ctx = canvas.getContext("2d");
}

document.addEventListener("DOMContentLoaded", main);

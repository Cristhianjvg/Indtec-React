// server.js
// Forzar que undici no use WASM en este hosting
process.env.UNDICI_NO_WASM = "1";

const { spawn } = require("child_process");

// lanzamos "next start"
const child = spawn("next", ["start"], {
  stdio: "inherit",
  shell: true, // importante para que encuentre el bin de next
});

child.on("close", (code) => {
  console.log("Next.js exited with code", code);
});

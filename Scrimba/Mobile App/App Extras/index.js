// code won't work here due to CORS policy but works on SCRIMBA (it has server)

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-987e5-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const moviesInDB = ref(database, "movies");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;

  push(moviesInDB, inputValue);

  console.log(`${inputValue} added to database`);
});

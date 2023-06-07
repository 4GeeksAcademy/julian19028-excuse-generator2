/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["My child ", "My wife ", "My turtle ", "My dog "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "the keys ", "the car "];
  let when = [
    "before going out",
    "yesterday",
    "during my breakfast",
    "while I was sleeping"
  ];
  document.querySelector("#excuses").innerHTML =
    excusegenerator1(who) +
    excusegenerator2(action) +
    excusegenerator3(what) +
    excusegenerator4(when);

  function excusegenerator1(who) {
    let randomWho = Math.floor(Math.random() * who.length);
    console.log(who[randomWho]);
    return who[randomWho];
  }
  function excusegenerator2(action) {
    let randomAction = Math.floor(Math.random() * action.length);
    console.log(action[randomAction]);
    return action[randomAction];
  }
  function excusegenerator3(what) {
    let randomWhat = Math.floor(Math.random() * what.length);
    console.log(what[randomWhat]);
    return what[randomWhat];
  }
  function excusegenerator4(when) {
    let randomWhen = Math.floor(Math.random() * when.length);
    console.log(when[randomWhen]);
    return when[randomWhen];
  }
};

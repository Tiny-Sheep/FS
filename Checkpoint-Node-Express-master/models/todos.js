'use strict';

let tasks = {}; // a place to store tasks by person
// some random text
module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    // returns an array of all people for whom tasks exist
  },
  add: function (name, task) {
    // saves a task for a given person
  }
  // etc.
};

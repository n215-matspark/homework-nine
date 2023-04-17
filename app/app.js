import { getRoute } from "../model/model.js";

function urlListener() {
  $(window).on("hashchange", getRoute);
  getRoute();
}

$(document).ready(function () {
  urlListener();
});

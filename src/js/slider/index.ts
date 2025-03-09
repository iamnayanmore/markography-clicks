import Splide from "@splidejs/splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import $ from "jquery";

if ($(".banner-slider")) {
  new Splide(".banner-slider", {
    perMove: 1,
    perPage: 1,
    type: "loop",
    pagination: false,
    arrows: false,
  }).mount();
}

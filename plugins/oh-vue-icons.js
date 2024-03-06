import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiMenu } from "oh-vue-icons/icons";
import { HiArrowSmUp } from "oh-vue-icons/icons";

addIcons(HiMenu);
addIcons(HiArrowSmUp);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});

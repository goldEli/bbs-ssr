import { defineStore } from "pinia";
import { DESIGN_WIDTH} from "@/constants";

export default defineStore({
  id: "global",
  state: () => ({
    isScreenChecked: false,
    isBigScreen: false,
  }),
  actions: {
    checkScreen() {
      if (!this.isScreenChecked) {
        this.isScreenChecked = true;
      }
      this.isBigScreen = window.innerWidth > DESIGN_WIDTH;
    },
  },
});

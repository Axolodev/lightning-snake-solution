import { Button as LngButton, withStyles } from "@lightningjs/ui-components";
import { hexColors } from "../lib/colors";

class Button extends LngButton {
  onEnter() {
    this.signal("buttonPressed");
  }
}

export default withStyles(Button, {
  focused: {
    background: {
      color: hexColors.olive,
    },
    text: {
      color: hexColors.lime,
    },
  },

  background: {
    color: hexColors.silver,
  },
  text: {
    color: hexColors.black,
  },
  radius: 4,
});

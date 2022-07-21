import { Button as LngButton } from "@lightningjs/ui-components";

class Button extends LngButton {
  onEnter() {
    this.signal("buttonPressed");
  }
}

export default Button;

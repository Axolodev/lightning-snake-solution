/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Router, Utils } from "@lightningjs/sdk";
import routes from "./routes";

export default class App extends Router.App {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  _setup() {
    Router.startRouter(routes);
  }

  static colors() {
    return {
      aqua: "#7fdbff",
      blue: "#0074d9",
      lime: "#01ff70",
      navy: "#001f3f",
      teal: "#39cccc",
      olive: "#3d9970",
      green: "#2ecc40",
      red: "#ff4136",
      maroon: "#85144b",
      orange: "#ff851b",
      purple: "#b10dc9",
      yellow: "#ffdc00",
      fuchsia: "#f012be",
      gray: "#aaaaaa",
      white: "#ffffff",
      black: "#111111",
      silver: "#dddddd",
    };
  }

  static _template() {
    return {
      ...super._template(),
      w: 1920,
      h: 1080,

      color: 0xff333333,
      rect: true,
    };
  }
}

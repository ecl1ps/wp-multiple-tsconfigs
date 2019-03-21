import { createElement } from "../shared/uiutils";

// can't use DOM functions (event imported) without "lib": [ "dom" ] in tsconfig
createElement();

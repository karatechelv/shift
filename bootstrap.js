import { loadConfig } from "./config.js";
import { initRouter } from "./router.js";
import { initEvents } from "./eventBus.js";

export async function bootstrap() {

    await loadConfig();

    initEvents();

    initRouter();

}

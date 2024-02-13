import {
	createSSRApp
} from "vue";
import App from "./App.vue";
export function createApp() {
	/* 根组件选项 */
	const app = createSSRApp(App);
	return {
		app,
	};
}
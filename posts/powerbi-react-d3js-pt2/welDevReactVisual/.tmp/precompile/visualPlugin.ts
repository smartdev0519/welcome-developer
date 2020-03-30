import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var welDevReactVisual1A4B9C17E6914119B3E74B5F3EC46009: IVisualPlugin = {
    name: 'welDevReactVisual1A4B9C17E6914119B3E74B5F3EC46009',
    displayName: 'Awesome React Visual',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["welDevReactVisual1A4B9C17E6914119B3E74B5F3EC46009"] = welDevReactVisual1A4B9C17E6914119B3E74B5F3EC46009;
}

export default welDevReactVisual1A4B9C17E6914119B3E74B5F3EC46009;
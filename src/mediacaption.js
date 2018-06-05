import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import MediaCaptionEditing from "./mediacaption/mediacaptionediting";

export default class MediaCaption extends Plugin {
    static get requires() {
        return [MediaCaptionEditing];
    }

    static get pluginName() {
        return 'MediaCaption';
    }
}
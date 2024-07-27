import Quill from 'quill';
import { sanitize } from '../config/editor.utils';


const Embed = Quill.imports['blots/embed'];
const VIDEO_ATTRIBUTES = ['id', 'title', 'src'];

class Video extends Embed {
  static blotName: string;
  static tagName: string;
  static SANITIZED_URL: string;
  static PROTOCOL_WHITELIST: string[];
  static className: string;
  statics: any;
  domNode: any;

  static sanitize(url) {
    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;
  }

  static create(value) {
    const node = super.create(value);
    node.setAttribute('contenteditable', false);
    node.setAttribute('controls', 'controls');
    VIDEO_ATTRIBUTES.forEach(key => {
      if (value[key]) {
        switch (key) {
        case 'src':
        {    const src = Video.sanitize(value[key]);
          node.setAttribute(key, src);
          break;}
        case 'title':
          node.setAttribute(key, value[key]);
          break;
        default:
          node.dataset[key] = value[key];
        }
      }
    });
    return node;
  }

  static value(domNode) {
    const formats: any = {};
    VIDEO_ATTRIBUTES.forEach(key => {
      const value = domNode.getAttribute(key) || domNode.dataset[key];
      if (value) {
        formats[key] = value;
      }
    });
    return formats;
  }

  static formats(domNode) {
    const formats: any = {};
    VIDEO_ATTRIBUTES.forEach(key => {
      const value = domNode.getAttribute(key) || domNode.dataset[key];
      if (value) {
        formats[key] = value;
      }
    });
    return formats;
  }
}
Video.blotName = 'video';
Video.tagName = 'VIDEO';
Video.SANITIZED_URL = 'about:blank';
Video.PROTOCOL_WHITELIST = ['http', 'https'];
Video.className = 'ql-video-item';

export default Video;

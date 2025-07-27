"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useImageLabeler = useImageLabeler;
var _react = require("react");
var _reactNativeVisionCamera = require("react-native-vision-camera");
/**
 * Create a new instance of image labeler plugin
 *
 * @returns {ImageLabelerPlugin} Plugin instance
 */
function createImageLabelerPlugin() {
  const plugin = _reactNativeVisionCamera.VisionCameraProxy.initFrameProcessorPlugin('imageLabeler', {});
  if (!plugin) {
    throw new Error('Failed to load Frame Processor Plugin "imageLabeler"!');
  }
  return {
    labelImage: frame => {
      'worklet';

      // @ts-ignore
      return plugin.call(frame);
    }
  };
}
/**
 * Use an instance of image labeler plugin.
 *
 * @returns {ImageLabelerPlugin} Memoized plugin instance that will be
 * destroyed once the component using `useFaceDetector()` unmounts.
 */
function useImageLabeler() {
  return (0, _react.useMemo)(() => createImageLabelerPlugin(), []);
}
//# sourceMappingURL=index.js.map
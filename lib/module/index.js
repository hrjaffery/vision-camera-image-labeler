import { useMemo } from 'react';
import { VisionCameraProxy } from 'react-native-vision-camera';
/**
 * Create a new instance of image labeler plugin
 *
 * @returns {ImageLabelerPlugin} Plugin instance
 */
function createImageLabelerPlugin() {
  const plugin = VisionCameraProxy.initFrameProcessorPlugin('imageLabeler', {});
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
export function useImageLabeler() {
  return useMemo(() => createImageLabelerPlugin(), []);
}
//# sourceMappingURL=index.js.map
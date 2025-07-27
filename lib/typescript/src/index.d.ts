import { type Frame } from 'react-native-vision-camera';
interface ImageLabel {
    /**
     * A label describing the image, in english.
     */
    label: string;
    /**
     * A floating point number from 0 to 1, describing the confidence (percentage).
     */
    confidence: number;
}
type ImageLabelerPlugin = {
    /**
     * Generates labels for an image
     *
     * @param {Frame} frame Frame to generate labels
     */
    labelImage: (frame: Frame) => ImageLabel[];
};
/**
 * Use an instance of image labeler plugin.
 *
 * @returns {ImageLabelerPlugin} Memoized plugin instance that will be
 * destroyed once the component using `useFaceDetector()` unmounts.
 */
export declare function useImageLabeler(): ImageLabelerPlugin;
export {};

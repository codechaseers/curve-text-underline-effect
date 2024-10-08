import '../styles/underline.css';

/**
 * Apply underline effect to text element
 * @param {HTMLElement} element - The target element
 * @param {Object} options - Configuration for the underline
 * @param {string} options.color - The color of the underline
 * @param {string} options.borderRadius - The border-radius of the underline
 * @param {string} options.bottomOffset - The distance of the underline from the text
 */
export function applyUnderlineEffect(element, options = {}) {
    // Set custom CSS properties based on user input
    const { color = 'rgb(0, 136, 255)', borderRadius = '50%', bottomOffset = '-15px' } = options;

    // Apply the underline class and inline styles
    element.classList.add('underline-effect');
    element.style.setProperty('--underline-color', color);
    element.style.setProperty('--border-radius', borderRadius);
    element.style.setProperty('--bottom-offset', bottomOffset);
}

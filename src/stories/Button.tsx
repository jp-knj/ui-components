import { buttonPrimary, buttonSecondary, buttonSmall, buttonMedium, buttonLarge } from './button.css'

export type Props = {
    isPrimary: boolean
    backgroundColor: string
    size: 'small'| 'medium' | 'large'
    label: string
    onClick: () => void
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ isPrimary = false, backgroundColor, size = 'medium', label = 'button', ...props }:Props) => {
  const variantStyle = isPrimary ? buttonPrimary : buttonSecondary;
    const sizeStyle =
        size === 'small'
            ? buttonSmall
            : size === 'medium'
                ? buttonMedium
                : size === 'large'
                    ? buttonLarge
                    : ''
  return (
    <button
      type="button"
      className={`${variantStyle} ${sizeStyle}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};


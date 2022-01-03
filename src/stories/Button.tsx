import './button.css';

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
  const mode = isPrimary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};


import { style } from '@vanilla-extract/css';

 const buttonBase = style({
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: '700',
    border: '0',
    borderRadius: '3em',
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: '1',
});

export const buttonPrimary = style([
    buttonBase,
    {
        color: '#fdfdfd',
        background: '#1ea7fd'
    }
])

export const buttonSecondary = style([
    buttonBase,
    {
        color: '#333',
        background: 'transparent',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'
    }
]);

export const buttonSmall = style({
    fontSize: '12px',
    padding: '10px 16px',
})

export const buttonMedium = style({
    fontSize: '14px',
    padding: '11px 20px',
})

export const buttonLarge = style({
    fontSize: '16px',
    padding: '12px 24px',
})
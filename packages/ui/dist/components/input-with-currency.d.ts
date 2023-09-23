import { InputHTMLAttributes } from 'react';

type InputWithCurrencyProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    currency: string;
};
declare function InputWithCurrency(props: InputWithCurrencyProps): JSX.Element;

export { InputWithCurrency };

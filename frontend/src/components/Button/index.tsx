import { ButtonHTMLAttributes } from 'react'
import { Container } from './style'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string
};

export function Button({ ...rest }: ButtonProps) {
  return (
    <Container {...rest} />
  );
}
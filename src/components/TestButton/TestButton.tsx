import * as React from 'react';
import { Button } from './TestButton.styles';

type Props = {
  text: string;
}

const TestButton = ({ text }: Props) => <Button>{text}</Button>;

export default TestButton;

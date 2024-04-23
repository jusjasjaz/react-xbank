import { View } from 'react-native';
import styled from 'styled-components/native'

export const CodeInputSection = styled.View`
 
`;

export const HiddenTextInput = styled.TextInput `
position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
`;

export const CodeInputContainer = styled.Pressable `
  flex-direction: row;
  justify-content: space-between;
`

export const CodeInput = styled.View `
  border-color: #cfcfcf;
  min-width: 15%;
  border-width: 1px;
  border-radius: 5px;
  padding: 16px;
`;

export const CodeInputText = styled.Text `
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const CodeInputFocused = styled(CodeInput)`
  border-color: #000000;
`
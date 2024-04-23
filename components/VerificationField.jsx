import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useRef} from 'react'
import { CodeInputSection, HiddenTextInput, CodeInputContainer, CodeInput, CodeInputText, CodeInputFocused } from './styles'
const VerificationField = ({ setPinReady, code, setCode, maxLength, placeholder }) => {
  const codeDigitsArray = new Array(maxLength).fill(0);
  //ref for text input
  const textInputRef = useRef();
  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  }
  //monitoring input focus
  const [ inputContainerIsFocused,
    setInputContainerIsFocused] = useState(false);
  
  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  }

  const toCodeDigitInput =(_value, index) => {
    const emptyInputChar=' ';
    const digit=code[index] || emptyInputChar;

    //formatting 
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitiFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const StyledCodeInput = inputContainerIsFocused && isDigitiFocused ? CodeInputFocused : CodeInput;
    return(
      <StyledCodeInput key={index}>
        <CodeInputText>{digit}</CodeInputText>
      </StyledCodeInput>
    )
  };
  return (
    <View>
      <CodeInputSection>
        <CodeInputContainer onPress={handleOnPress}>
          {codeDigitsArray.map(toCodeDigitInput)}
        </CodeInputContainer>
        <HiddenTextInput 
        ref={textInputRef}
        value={code}
        onChangeText={setCode}
        // onSubmitEditing={handleOnBlur}
        keyboardType="number-pad"
        returnKeyType="done"
        // textContentType="oneTimeCode" 
        maxLength={maxLength}
        />
      </CodeInputSection>
    </View>

  )
}

export default VerificationField

const styles = StyleSheet.create({})
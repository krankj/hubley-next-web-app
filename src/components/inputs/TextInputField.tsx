import { Input, VStack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface TextInputFieldProps {
  label: string;
  onChange: (event: any) => void;
  value: string;
  inputType?: string;
  labelProps?: any;
  inputBoxProps?: any;
  error?: string;
  [x: string]: any;
}

const TextInputField: FC<TextInputFieldProps> = ({
  label,
  inputType = "text",
  onChange,
  value,
  error,
  labelProps,
  inputBoxProps,
  ...rest
}) => {
  return (
    <VStack w="100%" spacing={2} align="flex-start" mt={24} {...rest}>
      <Text fontWeight="extrabold" {...labelProps}>
        {label}
      </Text>
      <Input
        type={inputType}
        size="lg"
        value={value}
        onChange={onChange}
        {...inputBoxProps}
      />
      <Text fontWeight="extrabold" color="red.500">
        {error}
      </Text>
    </VStack>
  );
};

export default TextInputField;

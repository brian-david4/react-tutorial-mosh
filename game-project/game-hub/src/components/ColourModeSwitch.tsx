import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColourModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack padding={10}>
      <Switch color="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      <Text whiteSpace={'nowrap'}>Darkmode</Text>
    </HStack>
  );
};

export default ColourModeSwitch;

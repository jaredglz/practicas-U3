import React from "react";
import {
  Box,
  Heading,
  Input,
  VStack,
  FormControl,
  Radio,
  Center,
  Divider,
  Button,
  ScrollView,
} from "native-base";

function Registro() {
  const [value, setValue] = React.useState("Hombre");

  return (
    <ScrollView w="100%">
      <Center flex={1}>
        <Box safeArea w="90%" maxW="290" py="8">
          <VStack space={3} mt="5">
            <Heading size="lg" fontWeight="600" color="coolGray.800">
              Register
            </Heading>

            <FormControl isRequired>
              <VStack space={4}>
                <Input variant="outline" placeholder="Nombre" />
                <Input variant="outline" placeholder="Apellido" />
              </VStack>
            </FormControl>
            <Divider />

            <FormControl isRequired mt="4">
              <FormControl.Label>Género</FormControl.Label>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="Seleccionar género"
                value={value}
                onChange={(nextValue) => setValue(nextValue)}
              >
                <VStack space={2}>
                  <Radio value="Hombre">Hombre</Radio>
                  <Radio value="Mujer">Mujer</Radio>
                  <Radio value="Tanque">Tanque Sovietico T90</Radio>
                </VStack>
              </Radio.Group>
            </FormControl>

            <Button
              mt="5"
              mb="5"
              colorScheme="indigo"
              onPress={() => console.log("Valor seleccionado:", value)}
            >
              Register
            </Button>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
}

export default Registro;

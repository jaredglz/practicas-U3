import React from 'react';
import { Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon, Badge, ScrollView } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const PerfilScreens = () => {
  const { colorMode } = useColorMode();

  return (
    <ScrollView flex={1} bg={colorMode === 'light' ? 'coolGray.100' : 'coolGray.800'}>
      <Center flex={1} p={4}>
        <Box
          bg={colorMode === 'light' ? 'white' : 'coolGray.700'}
          rounded="lg"
          shadow={6}
          width="90%"
          maxWidth="400px"
          p={6}
        >
          <VStack space={4} alignItems="center">
            <Avatar
              size="2xl"
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDyMe5CIk86B4cEY1L_gpvJZa7j3vWcJp8w&s',
              }}
            />
            <Text fontSize="2xl" fontWeight="bold">
              Nombre: Ruben Ortiz
            </Text>
            <Text fontSize="md" color="gray.500">
              Domicilio: Eduardo si hay 762, Frac. Soverano convencion, Aguascalientes, 20216</Text>
          </VStack>

          <Divider my={4} />

          {/* Sección de biografía */}
          <VStack space={2}>
          <Badge colorScheme="success" variant="solid" rounded="full" mt={2}>
              Editar informacion
            </Badge>
          </VStack>

          <Divider my={4} />

          {/* Sección de habilidades */}
          <VStack space={2}>
            <Text fontSize="md" fontWeight="medium">
              Habilidades
            </Text>
            <HStack space={2} flexWrap="wrap">
              <Badge colorScheme="info" variant="outline">
                React Native
              </Badge>
              <Badge colorScheme="info" variant="outline">
                JavaScript
              </Badge>
              <Badge colorScheme="info" variant="outline">
                UI/UX Design
              </Badge>
              <Badge colorScheme="info" variant="outline">
                Firebase
              </Badge>
            </HStack>
          </VStack>

          <Divider my={4} />

          {/* Redes sociales y medios de contacto */}
          <HStack space={4} justifyContent="center" alignItems="center">
            <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-linkedin" size="sm" />} colorScheme="blue">
              LinkedIn
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="logo-github" size="sm" />} colorScheme="dark">
              GitHub
            </Button>
            <Button variant="ghost" leftIcon={<Icon as={Ionicons} name="mail-outline" size="sm" />} colorScheme="red">
              Email
            </Button>
          </HStack>

          <Divider my={4} />

          {/* Sección de detalles adicionales */}
          <VStack space={2} alignItems="flex-start">
            <Text fontSize="md" fontWeight="medium">
              Detalles adicionales
            </Text>
            <HStack justifyContent="space-between" width="100%">
              <Text fontSize="sm" color="gray.500">
                Ubicación:
              </Text>
              <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                Ciudad de México, México
              </Text>
            </HStack>
            <HStack justifyContent="space-between" width="100%">
              <Text fontSize="sm" color="gray.500">
                Idiomas:
              </Text>
              <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                Español, Inglés
              </Text>
            </HStack>
            <HStack justifyContent="space-between" width="100%">
              <Text fontSize="sm" color="gray.500">
                Experiencia:
              </Text>
              <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                5 años
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default PerfilScreens;
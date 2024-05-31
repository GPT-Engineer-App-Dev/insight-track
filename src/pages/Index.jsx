import { Container, VStack, Heading, SimpleGrid, Box, Text, Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Business Dashboard
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Stat>
              <StatLabel>Total Sales</StatLabel>
              <StatNumber>$50,000</StatNumber>
              <StatHelpText>Jan 1 - Apr 1</StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Stat>
              <StatLabel>Revenue</StatLabel>
              <StatNumber>$120,000</StatNumber>
              <StatHelpText>Jan 1 - Apr 1</StatHelpText>
            </Stat>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Stat>
              <StatLabel>New Customers</StatLabel>
              <StatNumber>1,200</StatNumber>
              <StatHelpText>Jan 1 - Apr 1</StatHelpText>
            </Stat>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Monthly Sales</Heading>
            <Text>Chart Placeholder</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Revenue Breakdown</Heading>
            <Text>Chart Placeholder</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
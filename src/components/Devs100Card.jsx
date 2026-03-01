import { Container, Box, Card, Stack, Badge, Text } from '@mantine/core'
import { IconShieldCheck } from '@tabler/icons-react'
import './Devs100Card.css'

/**
 * DEVS100 Card Component
 * Displays DEVS100 membership card
 */
function Devs100Card() {
  return (
    <Box className="devs100-section" id="devs100">
      <Container size="lg" py={{ base: 60, md: 80 }} px="md">
        <Stack align="center" gap="xl">
          {/* Header */}
          <Stack align="center" gap="sm">
            <Badge 
              size="lg" 
              variant="gradient" 
              gradient={{ from: 'indigo', to: 'violet' }} 
              radius="md"
              leftSection={<IconShieldCheck size={16} />}
              style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              Verified Member
            </Badge>
            <Text size="xl" fw={600} c="dimmed" ta="center">
              Part of the DEVS100 Community
            </Text>
          </Stack>

          {/* Card */}
          <Card className="devs100-card-wrapper" padding="xl" radius="xl">
            <iframe 
              src="https://www.devs100.com/access-card/embed?name=Carl%20Kelvin%20Manahan" 
              width="260" 
              height="420" 
              style={{ border: 0, borderRadius: '16px', overflow: 'hidden', display: 'block' }} 
              title="DEVS100 Access Card"
            />
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}

export default Devs100Card

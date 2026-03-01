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
      <Container size="lg" py={{ base: 40, md: 60 }} px="md">
        <Stack align="center" gap="xl">
          {/* Header */}
          <Stack align="center" gap="md">
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
            <div>
              <Text size="xl" fw={700} mb="xs" ta="center" style={{ 
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                DEVS100 Community
              </Text>
              <Text size="md" c="dimmed" lh={1.7} ta="center" maw={600} mx="auto">
                Part of an elite community of 100 developers building the future of technology. 
                Recognized for technical excellence and innovation.
              </Text>
            </div>
          </Stack>

          {/* Card */}
          <Stack align="center" gap="md">
            <Card className="devs100-card-wrapper" padding={0} radius="xl">
              <iframe 
                src="https://www.devs100.com/access-card/embed?name=Carl%20Kelvin%20Manahan" 
                width="260" 
                height="420" 
                style={{ border: 0, borderRadius: '20px', overflow: 'hidden', display: 'block', background: 'transparent' }} 
                title="DEVS100 Access Card"
              />
            </Card>
            <Text size="xs" c="dimmed" ta="center" maw={260}>
              Official member identification card
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Devs100Card

import { Container, Box, Card, Stack, Badge, Text, Group, SimpleGrid, ThemeIcon } from '@mantine/core'
import { IconShieldCheck, IconUsers, IconCode, IconTrophy, IconStar } from '@tabler/icons-react'
import './Devs100Card.css'

/**
 * DEVS100 Card Component
 * Displays DEVS100 membership card
 */
function Devs100Card() {
  return (
    <Box className="devs100-section" id="devs100">
      <Container size="lg" py={{ base: 40, md: 60 }} px="md">
        <Group align="flex-start" gap="xl" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Left Side - Info */}
          <Stack gap="xl" style={{ flex: '1 1 400px', maxWidth: '500px' }}>
            {/* Header */}
            <Stack gap="md">
              <Badge 
                size="lg" 
                variant="gradient" 
                gradient={{ from: 'indigo', to: 'violet' }} 
                radius="md"
                leftSection={<IconShieldCheck size={16} />}
                style={{ textTransform: 'uppercase', letterSpacing: '0.05em', width: 'fit-content' }}
              >
                Verified Member
              </Badge>
              <div>
                <Text size="xl" fw={700} mb="xs" style={{ 
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                }}>
                  DEVS100 Community
                </Text>
                <Text size="md" c="dimmed" lh={1.7}>
                  Part of an elite community of 100 developers building the future of technology. 
                  Recognized for technical excellence and innovation.
                </Text>
              </div>
            </Stack>

            {/* Benefits */}
            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md">
              <Group gap="sm" wrap="nowrap">
                <ThemeIcon size={40} radius="md" variant="light" color="indigo">
                  <IconUsers size={20} />
                </ThemeIcon>
                <div>
                  <Text size="sm" fw={600}>Elite Network</Text>
                  <Text size="xs" c="dimmed">Top 100 Developers</Text>
                </div>
              </Group>

              <Group gap="sm" wrap="nowrap">
                <ThemeIcon size={40} radius="md" variant="light" color="violet">
                  <IconCode size={20} />
                </ThemeIcon>
                <div>
                  <Text size="sm" fw={600}>Innovation</Text>
                  <Text size="xs" c="dimmed">Cutting-edge Tech</Text>
                </div>
              </Group>

              <Group gap="sm" wrap="nowrap">
                <ThemeIcon size={40} radius="md" variant="light" color="grape">
                  <IconTrophy size={20} />
                </ThemeIcon>
                <div>
                  <Text size="sm" fw={600}>Excellence</Text>
                  <Text size="xs" c="dimmed">Quality Standards</Text>
                </div>
              </Group>

              <Group gap="sm" wrap="nowrap">
                <ThemeIcon size={40} radius="md" variant="light" color="pink">
                  <IconStar size={20} />
                </ThemeIcon>
                <div>
                  <Text size="sm" fw={600}>Recognition</Text>
                  <Text size="xs" c="dimmed">Industry Verified</Text>
                </div>
              </Group>
            </SimpleGrid>
          </Stack>

          {/* Right Side - Card */}
          <Stack align="center" gap="md" style={{ flex: '0 0 auto' }}>
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
        </Group>
      </Container>
    </Box>
  )
}

export default Devs100Card

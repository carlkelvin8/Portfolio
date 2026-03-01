import { Container, Box, Stack, Badge, Text, Group, ThemeIcon } from '@mantine/core'
import { IconShieldCheck, IconUsers, IconCode, IconTrophy, IconStar } from '@tabler/icons-react'
import './Devs100Card.css'

/**
 * DEVS100 Card Component
 * Displays DEVS100 membership card
 */
function Devs100Card() {
  return (
    <Box className="devs100-section" id="devs100">
      <Container size="lg" py={{ base: 30, md: 50 }} px="md">
        <Group align="center" gap="xl" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Left Side - Info */}
          <Stack gap="lg" style={{ flex: '1 1 350px', maxWidth: '450px' }}>
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

            {/* Icons */}
            <Group gap="md">
              <ThemeIcon size={44} radius="md" variant="light" color="indigo" className="devs100-icon">
                <IconUsers size={22} />
              </ThemeIcon>
              <ThemeIcon size={44} radius="md" variant="light" color="violet" className="devs100-icon">
                <IconCode size={22} />
              </ThemeIcon>
              <ThemeIcon size={44} radius="md" variant="light" color="grape" className="devs100-icon">
                <IconTrophy size={22} />
              </ThemeIcon>
              <ThemeIcon size={44} radius="md" variant="light" color="pink" className="devs100-icon">
                <IconStar size={22} />
              </ThemeIcon>
            </Group>
          </Stack>

          {/* Right Side - Card */}
          <Stack align="center" gap="sm" style={{ flex: '0 0 auto' }}>
            <div className="devs100-card-wrapper">
              <iframe 
                src="https://www.devs100.com/access-card/embed?name=Carl%20Kelvin%20Manahan" 
                width="260" 
                height="420" 
                style={{ border: 0, borderRadius: '20px', overflow: 'hidden', display: 'block', background: 'transparent' }} 
                title="DEVS100 Access Card"
              />
            </div>
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

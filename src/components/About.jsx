import { Container, Title, Text, Grid, Card, Group, Stack, SimpleGrid, ThemeIcon, Badge, Box } from '@mantine/core'
import {
  IconTrophy,
  IconCode,
  IconServer,
  IconBrain,
  IconCreditCard,
  IconUsers,
  IconCheck,
  IconBriefcase,
  IconSchool,
  IconCloud,
  IconRocket,
  IconSparkles
} from '@tabler/icons-react'
import { portfolioData } from '../data/portfolio'
import './About.css'

/**
 * About Component
 * Professional summary, key strengths, and timeline
 */
function About() {
  const { about, personal } = portfolioData

  const iconMap = {
    leadership: IconTrophy,
    code: IconCode,
    architecture: IconServer,
    ai: IconBrain,
    payment: IconCreditCard,
    business: IconUsers,
    cloud: IconCloud,
    team: IconUsers,
    delivery: IconRocket,
    database: IconServer
  }

  return (
    <section className="about" id="about">
      <Container size="lg" py={{ base: 80, md: 100 }} px="md">
        {/* Section Header */}
        <div className="section-header">
          <Badge size="lg" variant="light" color="indigo" radius="md" mb="md" leftSection={<IconSparkles size={16} />} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            About Me
          </Badge>
          <Title order={2} className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
            {about.title}
          </Title>
          <Text c="dimmed" ta="center" maw={700} mx="auto" size="lg" lh={1.7}>
            {about.summary}
          </Text>
        </div>

        {/* Stats Cards */}
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mb={60} mt={40}>
          <Card className="stat-card" padding="xl" radius="lg">
            <Stack align="center" gap="xs">
              <div className="stat-icon-wrapper">
                <IconBriefcase size={32} stroke={1.5} />
              </div>
              <Text size="2.5rem" fw={800} lh={1} className="stat-number">2+</Text>
              <Text size="sm" c="dimmed" fw={500}>Years Experience</Text>
            </Stack>
          </Card>

          <Card className="stat-card" padding="xl" radius="lg">
            <Stack align="center" gap="xs">
              <div className="stat-icon-wrapper">
                <IconRocket size={32} stroke={1.5} />
              </div>
              <Text size="2.5rem" fw={800} lh={1} className="stat-number">10+</Text>
              <Text size="sm" c="dimmed" fw={500}>Projects Delivered</Text>
            </Stack>
          </Card>

          <Card className="stat-card" padding="xl" radius="lg">
            <Stack align="center" gap="xs">
              <div className="stat-icon-wrapper">
                <IconUsers size={32} stroke={1.5} />
              </div>
              <Text size="2.5rem" fw={800} lh={1} className="stat-number">60+</Text>
              <Text size="sm" c="dimmed" fw={500}>Happy Clients</Text>
            </Stack>
          </Card>
        </SimpleGrid>

        {/* DEVS100 Membership Card */}
        <Box mb={60} style={{ display: 'flex', justifyContent: 'center' }}>
          <Card className="devs100-card" padding="lg" radius="lg" style={{ maxWidth: '280px', width: '100%' }}>
            <Stack align="center" gap="md">
              <Badge size="md" variant="gradient" gradient={{ from: 'indigo', to: 'violet' }} radius="sm">
                DEVS100 Member
              </Badge>
              <iframe 
                src="https://www.devs100.com/access-card/embed?name=Carl%20Kelvin%20Manahan" 
                width="100%" 
                height="420" 
                style={{ border: 0, borderRadius: '12px', overflow: 'hidden' }} 
                title="DEVS100 Access Card"
              />
            </Stack>
          </Card>
        </Box>

        {/* Key Strengths */}
        <div>
          <Title order={3} size="h3" mb="xl" ta="center" className="strengths-title">
            Core Competencies
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" verticalSpacing="lg">
            {about.highlights.map((highlight, idx) => {
              const Icon = iconMap[highlight.icon] || IconCheck
              return (
                <Card
                  key={idx}
                  className="highlight-card"
                  padding="xl"
                  radius="lg"
                >
                  <Stack gap="md" align="center">
                    <div className="highlight-icon-wrapper">
                      <ThemeIcon
                        size={64}
                        radius="xl"
                        variant="light"
                        className="highlight-icon"
                        gradient={{ from: 'blue', to: 'cyan', deg: 135 }}
                      >
                        <Icon size={32} stroke={1.5} />
                      </ThemeIcon>
                    </div>
                    <Text size="md" fw={700} ta="center" className="highlight-title">
                      {highlight.text}
                    </Text>
                    <div className="highlight-progress">
                      <div className="progress-bar" style={{ width: `${85 + (idx * 2)}%` }}></div>
                    </div>
                  </Stack>
                </Card>
              )
            })}
          </SimpleGrid>
        </div>
      </Container>
    </section>
  )
}

export default About

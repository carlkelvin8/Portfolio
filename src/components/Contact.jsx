import { useEffect } from 'react'
import { Container, Title, Grid, Stack, Group, Text, ActionIcon, Tooltip, Badge, Card } from '@mantine/core'
import { IconMail, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconCalendar, IconClock, IconVideo } from '@tabler/icons-react'
import { portfolioData } from '../data/portfolio'
import './Contact.css'

/**
 * Contact Component
 * Calendly booking widget with contact information
 */
function Contact() {
  const { personal } = portfolioData

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="contact" id="contact">
      <Container size="lg" py={{ base: 80, md: 100 }} px="md">
        {/* Section Header */}
        <div className="section-header">
          <Badge size="lg" variant="light" color="cyan" radius="md" mb="md" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Let's Connect
          </Badge>
          <Title order={2} className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
            Schedule a Meeting
          </Title>
          <Text c="dimmed" ta="center" maw={700} mx="auto" size="lg" lh={1.7}>
            Ready to discuss your project? Book a free 30-minute consultation to explore how we can work together.
          </Text>
        </div>

        <Grid gutter={40} mt={60} align="flex-start">
          {/* Contact Info */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              {/* Email Card */}
              <Card className="contact-info-card" padding="lg" radius="lg">
                <Group gap="md" wrap="nowrap">
                  <div className="contact-icon">
                    <IconMail size={24} stroke={1.5} />
                  </div>
                  <Stack gap={4}>
                    <Text fw={600} size="xs" c="dimmed" tt="uppercase" ls={0.5}>Email</Text>
                    <Text
                      component="a"
                      href={`mailto:${personal.email}`}
                      size="sm"
                      fw={500}
                      className="contact-link"
                    >
                      {personal.email}
                    </Text>
                  </Stack>
                </Group>
              </Card>

              {/* Location Card */}
              <Card className="contact-info-card" padding="lg" radius="lg">
                <Group gap="md" wrap="nowrap">
                  <div className="contact-icon">
                    <IconMapPin size={24} stroke={1.5} />
                  </div>
                  <Stack gap={4}>
                    <Text fw={600} size="xs" c="dimmed" tt="uppercase" ls={0.5}>Location</Text>
                    <Text size="sm" fw={500}>{personal.location}</Text>
                  </Stack>
                </Group>
              </Card>

              {/* Meeting Info Card */}
              <Card className="contact-info-card meeting-info" padding="lg" radius="lg">
                <Stack gap="md">
                  <Group gap="md" wrap="nowrap">
                    <div className="contact-icon">
                      <IconCalendar size={24} stroke={1.5} />
                    </div>
                    <Stack gap={4}>
                      <Text fw={600} size="xs" c="dimmed" tt="uppercase" ls={0.5}>Meeting Details</Text>
                      <Text size="sm" fw={500}>30-Minute Consultation</Text>
                    </Stack>
                  </Group>
                  
                  <Stack gap="xs" pl="md">
                    <Group gap="xs">
                      <IconClock size={16} stroke={1.5} style={{ color: 'var(--mantine-color-blue-4)' }} />
                      <Text size="xs" c="dimmed">30 minutes</Text>
                    </Group>
                    <Group gap="xs">
                      <IconVideo size={16} stroke={1.5} style={{ color: 'var(--mantine-color-blue-4)' }} />
                      <Text size="xs" c="dimmed">Google Meet</Text>
                    </Group>
                  </Stack>
                </Stack>
              </Card>

              {/* Social Links */}
              <Card className="contact-info-card" padding="lg" radius="lg">
                <Stack gap="sm">
                  <Text fw={600} size="xs" c="dimmed" tt="uppercase" ls={0.5}>Connect With Me</Text>
                  <Group gap="sm">
                    <Tooltip label="GitHub" withArrow>
                      <ActionIcon
                        component="a"
                        href={personal.github}
                        target="_blank"
                        size="xl"
                        variant="light"
                        radius="md"
                        className="social-icon"
                      >
                        <IconBrandGithub size={22} stroke={1.5} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="LinkedIn" withArrow>
                      <ActionIcon
                        component="a"
                        href={personal.linkedin}
                        target="_blank"
                        size="xl"
                        variant="light"
                        radius="md"
                        className="social-icon"
                      >
                        <IconBrandLinkedin size={22} stroke={1.5} />
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>

          {/* Calendly Widget */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <div className="calendly-container">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/carlmanahan134/30min" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}

export default Contact

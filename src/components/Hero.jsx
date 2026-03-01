import { Container, Box, Title, Text, Group, Button, Stack, Image, ThemeIcon, ActionIcon, Badge, useMantineColorScheme } from '@mantine/core'
import { IconDownload, IconBrandLinkedin, IconBrandGithub, IconSparkles, IconCode, IconRocket } from '@tabler/icons-react'
import { Link as ScrollLink } from 'react-scroll'
import { portfolioData } from '../data/portfolio'
import './Hero.css'

/**
 * Hero Component
 * Landing section with introduction and CTA buttons
 */
function Hero() {
  const { personal } = portfolioData
  const { colorScheme } = useMantineColorScheme()

  // Choose image based on theme
  const profileImage = colorScheme === 'dark' ? '/carl.png' : '/carl2.png'

  return (
    <Box className="hero" id="hero">
      <Container size="lg" pt={{ base: 10, md: 0 }} pb={{ base: 40, md: 50 }} px="md">
        <div className="hero-content-wrapper">
          {/* Text Content */}
          <Stack gap="xl" align="flex-start" className="hero-text-content">
            {/* Greeting Badge */}
            <Badge 
              size="lg" 
              variant="light" 
              color="blue" 
              radius="xl" 
              leftSection={<IconSparkles size={16} />}
              className="greeting-badge"
            >
              Welcome to my portfolio
            </Badge>

            <div>
              <Text 
                className="hero-greeting"
                size="xl"
                fw={500}
                mb="xs"
              >
                Hi, I'm
              </Text>
              
              <Title
                order={1}
                className="hero-name-primary"
                mb="md"
              >
                {personal.name}
              </Title>

              <Title order={2} className="hero-headline-impact" mb="lg">
                {personal.tagline}
              </Title>

              <Text 
                className="hero-role-subtitle"
                size="lg"
                fw={600} 
                mb="xl"
              >
                {personal.role}
              </Text>
            </div>

            {/* Quick Stats */}
            <Group gap="xl" className="hero-stats">
              <div className="stat-item">
                <Group gap="xs">
                  <ThemeIcon size={40} radius="md" variant="light" color="blue">
                    <IconCode size={20} />
                  </ThemeIcon>
                  <div>
                    <Text size="xl" fw={800} lh={1}>6+</Text>
                    <Text size="xs" c="dimmed">Projects</Text>
                  </div>
                </Group>
              </div>
              
              <div className="stat-item">
                <Group gap="xs">
                  <ThemeIcon size={40} radius="md" variant="light" color="teal">
                    <IconRocket size={20} />
                  </ThemeIcon>
                  <div>
                    <Text size="xl" fw={800} lh={1}>2+</Text>
                    <Text size="xs" c="dimmed">Years Exp</Text>
                  </div>
                </Group>
              </div>
            </Group>

            <Stack gap="lg" mt="md" w="100%">
              <Group gap="md">
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <Button
                    size="xl"
                    radius="xl"
                    className="btn-primary btn-cta"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan' }}
                    rightSection={<IconRocket size={20} />}
                  >
                    Let's Work Together
                  </Button>
                </ScrollLink>

                <Button
                  component="a"
                  href={personal.resume}
                  size="xl"
                  radius="xl"
                  variant="outline"
                  color="gray"
                  className="btn-secondary btn-cta"
                  leftSection={<IconDownload size={20} />}
                >
                  Resume
                </Button>
              </Group>

              <Group gap="lg" mt="xs" align="center" className="hero-footer">
                {/* Social Icons */}
                <Group gap="sm">
                  <ActionIcon 
                    component="a" 
                    href={personal.linkedin} 
                    target="_blank" 
                    size="xl" 
                    radius="xl" 
                    variant="light"
                    color="blue"
                    aria-label="LinkedIn"
                    className="social-icon-hero"
                  >
                    <IconBrandLinkedin size={24} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon 
                    component="a" 
                    href={personal.github} 
                    target="_blank" 
                    size="xl" 
                    radius="xl" 
                    variant="light"
                    color="gray"
                    aria-label="GitHub"
                    className="social-icon-hero"
                  >
                    <IconBrandGithub size={24} stroke={1.5} />
                  </ActionIcon>
                </Group>

                {/* Availability Signal */}
                <Group gap="xs" className="availability-signal">
                  <div className="status-dot" />
                  <Text size="sm" c="dimmed" fw={500}>
                    Available for freelance work
                  </Text>
                </Group>
              </Group>
            </Stack>
          </Stack>

          {/* Visual Content (Headshot) - Theme-based image */}
          <div className="hero-visuals">
             <div className="profile-image-wrapper">
                <Image 
                  src={profileImage} 
                  alt={personal.name}
                  className="hero-profile-image"
                  radius="md"
                />
             </div>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Hero

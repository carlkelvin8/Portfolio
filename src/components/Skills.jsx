import { Container, Title, Grid, Card, Stack, Group, Text, Badge, ThemeIcon, SimpleGrid, Progress, Tooltip } from '@mantine/core'
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandLaravel,
  IconBrandNodejs,
  IconBrandDocker,
  IconBrandGit,
  IconBrandStripe,
  IconBrandOpenai,
  IconDatabase,
  IconServer,
  IconCloud,
  IconCode,
  IconPalette,
  IconApi,
  IconCreditCard,
  IconRobot,
  IconTerminal,
  IconUsers,
  IconBriefcase,
  IconShieldLock,
  IconChartDots
} from '@tabler/icons-react'
import { portfolioData } from '../data/portfolio'
import './Skills.css'

/**
 * Skills Component
 * Categorized expertise for executive-level display
 */
function Skills() {
  const { skills } = portfolioData

  // Map skill identifiers to Tabler icons
  const getIcon = (iconName) => {
    const map = {
      react: IconBrandReact,
      js: IconBrandJavascript,
      ts: IconBrandTypescript,
      mantine: IconPalette,
      tailwind: IconBrandTailwind,
      html: IconBrandHtml5,
      laravel: IconBrandLaravel,
      node: IconBrandNodejs,
      express: IconServer,
      api: IconApi,
      rest: IconCloud,
      mysql: IconDatabase,
      postgres: IconDatabase,
      mongo: IconDatabase,
      stripe: IconBrandStripe,
      openai: IconBrandOpenai,
      gemini: IconRobot,
      copilot: IconRobot,
      vercel: IconCloud,
      docker: IconBrandDocker,
      cicd: IconTerminal,
      linux: IconTerminal,
      git: IconBrandGit,
      team: IconUsers,
      client: IconUsers,
      pm: IconBriefcase,
      sales: IconChartDots,
      architecture: IconServer,
      cloud: IconCloud,
      security: IconShieldLock,
      agile: IconUsers,
      mentor: IconUsers,
      analysis: IconChartDots,
      direction: IconBriefcase,
      aws: IconCloud,
      sql: IconDatabase,
      dotnet: IconCode
    }
    return map[iconName] || IconCode
  }

  return (
    <section className="skills" id="skills">
      <Container size="lg" py={{ base: 80, md: 100 }} px="md">
        {/* Section Header */}
        <div className="section-header">
          <Badge size="lg" variant="light" color="blue" radius="md" mb="md" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            What I Work With
          </Badge>
          <Title order={2} className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
            Technical Expertise
          </Title>
          <Text c="dimmed" ta="center" maw={700} mx="auto" size="lg" lh={1.7}>
            A comprehensive toolkit of modern technologies and frameworks that power scalable, high-performance applications.
          </Text>
        </div>

        {/* Skills Grid */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" verticalSpacing="xl">
          {skills.categories.map((category, idx) => (
            <Card key={idx} className="expertise-card" padding="xl" radius="lg" data-aos="fade-up" data-aos-delay={idx * 100}>
              <Stack gap="lg">
                <div className="expertise-header">
                  <Group gap="xs" mb="xs">
                    <div className="category-icon-wrapper">
                      <ThemeIcon size="lg" radius="md" variant="light" className="category-icon">
                        {idx === 0 && <IconCode size={20} />}
                        {idx === 1 && <IconCloud size={20} />}
                        {idx === 2 && <IconServer size={20} />}
                        {idx === 3 && <IconBriefcase size={20} />}
                      </ThemeIcon>
                    </div>
                    <Title order={3} size="h4" className="expertise-title">
                      {category.name}
                    </Title>
                  </Group>
                  <Text size="sm" c="dimmed" lh={1.6}>
                    {category.description}
                  </Text>
                </div>
                
                <div className="skills-wrapper">
                  {category.items.map((skill, skillIdx) => {
                    const Icon = getIcon(skill.icon)
                    return (
                      <Tooltip 
                        key={skillIdx}
                        label={`${skill.name} - ${category.name}`}
                        position="top"
                        withArrow
                        transitionProps={{ transition: 'pop', duration: 200 }}
                      >
                        <Badge 
                          size="lg" 
                          variant="light" 
                          radius="md" 
                          leftSection={<Icon size={14} />}
                          className="skill-badge"
                          color="gray"
                        >
                          {skill.name}
                        </Badge>
                      </Tooltip>
                    )
                  })}
                </div>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  )
}

export default Skills

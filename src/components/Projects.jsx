import { useState, useMemo } from 'react'
import { Container, Title, Grid, Card, Group, Badge, Text, Button, Stack, Image, Box, ActionIcon, Tooltip } from '@mantine/core'
import { IconBrandGithub, IconExternalLink, IconBulb, IconChartBar, IconAlertCircle, IconRocket, IconArrowRight } from '@tabler/icons-react'
import { portfolioData } from '../data/portfolio'
import './Projects.css'

/**
 * Projects Component
 * Showcase of featured projects with details, images, and filtering
 */
function Projects() {
  const { projects } = portfolioData
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState(null)

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category).filter(Boolean))
    return ['All', ...Array.from(cats)]
  }, [projects])

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter(p => p.category === activeFilter)
  }, [activeFilter, projects])

  return (
    <section className="projects" id="projects">
      <Container size="xl" py={{ base: 80, md: 100 }} px="md">
        {/* Section Header */}
        <div className="section-header">
          <Badge size="lg" variant="light" color="teal" radius="md" mb="md" leftSection={<IconRocket size={16} />} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Portfolio
          </Badge>
          <Title order={2} className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
            Case Studies
          </Title>
          <Text c="dimmed" ta="center" maw={700} mx="auto" size="lg" lh={1.7}>
            Real-world projects delivering measurable business impact through strategic technical execution.
          </Text>
        </div>

        {/* Filters */}
        <Group justify="center" mb={50} mt={40}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'filled' : 'light'}
              color="teal"
              radius="xl"
              size="md"
              onClick={() => setActiveFilter(category)}
              className="filter-button"
            >
              {category}
            </Button>
          ))}
        </Group>

        {/* Projects Grid */}
        <Grid gutter="xl">
          {filteredProjects.map((project, index) => (
            <Grid.Col key={project.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <Card className="project-card-compact" padding={0} radius="xl">
                {/* Image Section */}
                <div className="project-image-wrapper-compact">
                  <Image
                    src={project.image}
                    height={240}
                    alt={project.title}
                    fallbackSrc="https://placehold.co/600x400?text=Project+Preview"
                    className="project-image-compact"
                  />
                  <div className="project-overlay-compact">
                    <Group gap="sm">
                      <Tooltip label="View Code" withArrow>
                        <ActionIcon
                          component="a"
                          href={project.github}
                          target="_blank"
                          size="lg"
                          radius="xl"
                          variant="white"
                          className="overlay-action-compact"
                        >
                          <IconBrandGithub size={20} />
                        </ActionIcon>
                      </Tooltip>
                      <Tooltip label="Live Demo" withArrow>
                        <ActionIcon
                          component="a"
                          href={project.demo}
                          target="_blank"
                          size="lg"
                          radius="xl"
                          variant="white"
                          className="overlay-action-compact"
                        >
                          <IconExternalLink size={20} />
                        </ActionIcon>
                      </Tooltip>
                    </Group>
                  </div>
                  <Badge 
                    className="project-category-badge" 
                    variant="filled" 
                    color="teal" 
                    size="sm"
                    radius="md"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Content Section */}
                <Box p="xl">
                  <Stack gap="md">
                    <div>
                      <Title order={4} className="project-title-compact" mb="xs">
                        {project.title}
                      </Title>
                      <Text size="sm" c="dimmed" lh={1.6} lineClamp={2}>
                        {project.description}
                      </Text>
                    </div>

                    {/* Expandable Details */}
                    {expandedProject === project.id && (
                      <Stack gap="sm" className="expanded-details">
                        <div className="case-study-compact">
                          <Group gap="xs" wrap="nowrap" align="flex-start">
                            <div className="case-icon-mini challenge">
                              <IconAlertCircle size={14} />
                            </div>
                            <div>
                              <Text size="xs" fw={700} mb={2}>Challenge</Text>
                              <Text size="xs" c="dimmed" lh={1.5}>{project.problem}</Text>
                            </div>
                          </Group>
                        </div>

                        <div className="case-study-compact">
                          <Group gap="xs" wrap="nowrap" align="flex-start">
                            <div className="case-icon-mini solution">
                              <IconBulb size={14} />
                            </div>
                            <div>
                              <Text size="xs" fw={700} mb={2}>Solution</Text>
                              <Text size="xs" c="dimmed" lh={1.5}>{project.solution}</Text>
                            </div>
                          </Group>
                        </div>

                        <div className="case-study-compact">
                          <Group gap="xs" wrap="nowrap" align="flex-start">
                            <div className="case-icon-mini impact">
                              <IconChartBar size={14} />
                            </div>
                            <div>
                              <Text size="xs" fw={700} mb={2}>Impact</Text>
                              <Text size="xs" c="dimmed" lh={1.5}>{project.impact}</Text>
                            </div>
                          </Group>
                        </div>
                      </Stack>
                    )}

                    {/* Technologies */}
                    <Group gap={6}>
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="dot" color="gray" size="xs" radius="sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="dot" color="gray" size="xs" radius="sm">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </Group>

                    {/* View Details Button */}
                    <Button
                      variant="subtle"
                      color="teal"
                      size="sm"
                      fullWidth
                      rightSection={<IconArrowRight size={16} />}
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="details-toggle"
                    >
                      {expandedProject === project.id ? 'Show Less' : 'View Details'}
                    </Button>
                  </Stack>
                </Box>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Projects

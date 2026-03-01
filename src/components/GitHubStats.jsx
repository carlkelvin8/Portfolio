import { Container, Title, Card, Text, Group, Stack, Badge, SimpleGrid, ThemeIcon } from '@mantine/core'
import { IconBrandGithub, IconStar, IconGitFork, IconCode } from '@tabler/icons-react'
import './GitHubStats.css'

function GitHubStats() {
  const repos = [
    {
      name: 'Lesgo-API',
      description: 'Robust REST API with Hono and Prisma',
      language: 'TypeScript',
      stars: 0,
      forks: 0,
      url: 'https://github.com/carlkelvin8/Lesgo-API',
    },
    {
      name: 'Clinforce-AI',
      description: 'AI-powered healthcare management',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      url: 'https://github.com/carlkelvin8/Clinforce-AI',
    },
    {
      name: 'Ibaan-GIS',
      description: 'Geographic Information System',
      language: 'PHP',
      stars: 0,
      forks: 0,
      url: 'https://github.com/carlkelvin8/Ibaan-GIS',
    },
  ]

  const languageColors = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    PHP: '#4F5D95',
    Python: '#3572A5',
  }

  return (
    <section className="github-stats" id="github">
      <Container size="lg" py={{ base: 80, md: 100 }} px="md">
        {/* Section Header */}
        <div className="section-header">
          <Badge size="lg" variant="light" color="gray" radius="md" mb="md" leftSection={<IconBrandGithub size={16} />} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Open Source
          </Badge>
          <Title order={2} className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
            GitHub Activity
          </Title>
          <Text c="dimmed" ta="center" maw={700} mx="auto" size="lg" lh={1.7}>
            Check out my latest open-source contributions and projects.
          </Text>
        </div>

        {/* GitHub Stats Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mb={40} mt={40}>
          <Card className="stat-card-github" padding="xl" radius="lg">
            <Stack align="center" gap="xs">
              <ThemeIcon size={56} radius="xl" variant="light" color="gray">
                <IconCode size={28} />
              </ThemeIcon>
              <Text size="2rem" fw={800} lh={1}>5+</Text>
              <Text size="sm" c="dimmed" fw={500}>Public Repos</Text>
            </Stack>
          </Card>

          <Card className="stat-card-github" padding="xl" radius="lg">
            <Stack align="center" gap="xs">
              <ThemeIcon size={56} radius="xl" variant="light" color="yellow">
                <IconStar size={28} />
              </ThemeIcon>
              <Text size="2rem" fw={800} lh={1}>10+</Text>
              <Text size="sm" c="dimmed" fw={500}>Total Stars</Text>
            </Stack>
          </Card>

          <Card className="stat-card-github" padding="xl" radius="lg">
            <Stack align="center" gap="xs">
              <ThemeIcon size={56} radius="xl" variant="light" color="blue">
                <IconGitFork size={28} />
              </ThemeIcon>
              <Text size="2rem" fw={800} lh={1}>5+</Text>
              <Text size="sm" c="dimmed" fw={500}>Total Forks</Text>
            </Stack>
          </Card>
        </SimpleGrid>

        {/* Featured Repositories */}
        <Title order={3} size="h3" mb="xl" ta="center" className="repos-title">
          Featured Repositories
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {repos.map((repo, index) => (
            <Card 
              key={repo.name}
              component="a"
              href={repo.url}
              target="_blank"
              className="repo-card"
              padding="xl"
              radius="lg"
              style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none' }}
            >
              <Stack gap="md">
                <Group gap="xs">
                  <IconBrandGithub size={20} />
                  <Text fw={700} size="md" className="repo-name">
                    {repo.name}
                  </Text>
                </Group>

                <Text size="sm" c="dimmed" lh={1.6} lineClamp={2}>
                  {repo.description}
                </Text>

                <Group gap="md" mt="auto">
                  <Group gap={4}>
                    <div 
                      className="language-dot" 
                      style={{ background: languageColors[repo.language] || '#858585' }}
                    />
                    <Text size="xs" c="dimmed">{repo.language}</Text>
                  </Group>
                  <Group gap={4}>
                    <IconStar size={14} />
                    <Text size="xs" c="dimmed">{repo.stars}</Text>
                  </Group>
                  <Group gap={4}>
                    <IconGitFork size={14} />
                    <Text size="xs" c="dimmed">{repo.forks}</Text>
                  </Group>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  )
}

export default GitHubStats

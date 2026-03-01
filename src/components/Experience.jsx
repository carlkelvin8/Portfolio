import { Container, Title, Timeline, Text, Group, Badge, Stack } from '@mantine/core'
import { IconBriefcase, IconSchool, IconTrophy } from '@tabler/icons-react'
import { portfolioData } from '../data/portfolio'
import './Experience.css'

/**
 * Experience Component
 * Timeline display of work experience and education
 */
function Experience() {
  const { experience } = portfolioData

  return (
    <section className="experience" id="experience">
      <Container size="lg" py={{ base: 80, md: 100 }} px="md">
        {/* Section Header */}
        <div className="section-header">
          <Badge size="lg" variant="light" color="violet" radius="md" mb="md" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            My Journey
          </Badge>
          <Title order={2} className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
            Experience & Education
          </Title>
          <Text c="dimmed" ta="center" maw={700} mx="auto" size="lg" lh={1.7}>
            Building real-world solutions while continuously learning and growing as a developer.
          </Text>
        </div>

        <div className="experience-grid">
          {/* Timeline */}
          <div className="timeline-container">
            <Timeline active={experience.length} bulletSize={32} lineWidth={2}>
              {experience.map((item, idx) => (
                <Timeline.Item
                  key={idx}
                  bullet={
                    item.title.includes('CEO') || item.title.includes('Founder') ? (
                      <IconTrophy size={20} className="timeline-icon ceo-icon" />
                    ) : item.type === 'experience' ? (
                      <IconBriefcase size={18} className="timeline-icon" />
                    ) : (
                      <IconSchool size={18} className="timeline-icon" />
                    )
                  }
                  className={`timeline-item ${item.title.includes('CEO') || item.title.includes('Founder') ? 'ceo-item' : ''}`}
                >
                  <Group justify="space-between" mb={4}>
                    <div>
                      <Text fw={700} size="lg" c={item.title.includes('CEO') || item.title.includes('Founder') ? 'blue' : undefined}>
                        {item.title}
                      </Text>
                      <Text c="dimmed" size="sm" fw={500}>
                        {item.company}
                      </Text>
                    </div>
                    <Badge 
                      variant={item.isCurrent ? "filled" : "light"} 
                      color={item.title.includes('CEO') || item.title.includes('Founder') ? "blue" : "gray"}
                    >
                      {item.duration}
                    </Badge>
                  </Group>

                  <Text c="dimmed" size="sm" my="sm" lh={1.6}>
                    {item.description}
                  </Text>

                  <Stack gap="xs" mt="md">
                    <Text size="xs" fw={600} tt="uppercase" c="dimmed">
                      Key Achievements
                    </Text>
                    {item.achievements.map((achievement, achieveIdx) => (
                      <Group key={achieveIdx} gap="xs" wrap="nowrap" align="flex-start">
                        <span className="achievement-dot"></span>
                        <Text size="sm" lh={1.4}>{achievement}</Text>
                      </Group>
                    ))}
                  </Stack>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience
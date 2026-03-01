import { Container, Title, Card, Text, Group, Avatar, Stack, Badge, SimpleGrid } from '@mantine/core'
import { IconStar, IconQuote } from '@tabler/icons-react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Santos',
      role: 'Business Owner',
      company: 'Local Enterprise',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      rating: 5,
      text: 'Carl delivered an exceptional management system that transformed our operations. His attention to detail and technical expertise exceeded our expectations.',
    },
    {
      id: 2,
      name: 'Juan Dela Cruz',
      role: 'Municipal Administrator',
      company: 'Ibaan Municipality',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan',
      rating: 5,
      text: 'The GIS system Carl built has been invaluable for our planning and decision-making. Professional work and great communication throughout the project.',
    },
    {
      id: 3,
      name: 'Dr. Ana Reyes',
      role: 'Healthcare Director',
      company: 'Medical Clinic',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
      rating: 5,
      text: 'Clinforce AI has streamlined our clinical operations significantly. Carl\'s ability to integrate AI into healthcare workflows is impressive.',
    },
  ]

  return (
    <section className="testimonials" id="testimonials">
      <Container size="lg" py={{ base: 80, md: 100 }} px="md">
        {/* Section Header */}
        <div className="section-header">
          <Badge size="lg" variant="light" color="pink" radius="md" mb="md" leftSection={<IconQuote size={16} />} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Testimonials
          </Badge>
          <Title order={2} className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
            Client Testimonials
          </Title>
          <Text c="dimmed" ta="center" maw={700} mx="auto" size="lg" lh={1.7}>
            Feedback from clients I've had the pleasure of working with.
          </Text>
        </div>

        {/* Testimonials Grid */}
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="testimonial-card" 
              padding="xl" 
              radius="xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Stack gap="md">
                {/* Quote Icon */}
                <div className="quote-icon-wrapper">
                  <IconQuote size={32} />
                </div>

                {/* Rating */}
                <Group gap={4}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconStar key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </Group>

                {/* Testimonial Text */}
                <Text size="sm" lh={1.7} c="dimmed" style={{ fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </Text>

                {/* Client Info */}
                <Group gap="md" mt="md">
                  <Avatar src={testimonial.avatar} size={50} radius="xl" />
                  <div>
                    <Text fw={700} size="sm">{testimonial.name}</Text>
                    <Text size="xs" c="dimmed">{testimonial.role}</Text>
                    <Text size="xs" c="dimmed">{testimonial.company}</Text>
                  </div>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  )
}

export default Testimonials

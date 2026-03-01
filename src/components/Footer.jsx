import { Box, Container, Group, Text, Divider, Stack } from '@mantine/core'
import { IconHeart } from '@tabler/icons-react'
import { portfolioData } from '../data/portfolio'
import './Footer.css'

/**
 * Footer Component
 * Footer with links and copyright information
 */
function Footer() {
  const { personal, navLinks } = portfolioData
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container size="lg" py={{ base: 40, md: 60 }} px="md">
        {/* Footer Content */}
        <Group justify="space-between" mb={40} wrap="wrap">
          {/* Brand */}
          <Stack gap={0}>
            <Text fw={700} size="lg" className="footer-logo">
              {personal.name.split(' ')[0]}
            </Text>
            <Text c="dimmed" size="sm">
              Full Stack Software Engineer
            </Text>
          </Stack>

          {/* Quick Links */}
          <Group gap="xl">
            {navLinks.map((link) => (
              <Text
                key={link.to}
                component="a"
                href={`#${link.to}`}
                c="dimmed"
                size="sm"
                className="footer-link"
              >
                {link.label}
              </Text>
            ))}
          </Group>

          {/* Social Links */}
          <Group gap="md">
            <Text
              component="a"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              c="dimmed"
              size="sm"
              className="footer-link"
            >
              GitHub
            </Text>
            <Text
              component="a"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              c="dimmed"
              size="sm"
              className="footer-link"
            >
              LinkedIn
            </Text>
            <Text
              component="a"
              href={`mailto:${personal.email}`}
              c="dimmed"
              size="sm"
              className="footer-link"
            >
              Email
            </Text>
          </Group>
        </Group>

        {/* Divider */}
        <Divider my={40} />

        {/* Copyright */}
        <Group justify="space-between" wrap="wrap">
          <Group gap={4} wrap="nowrap">
            <Text c="dimmed" size="sm">
              © {currentYear} {personal.name}. Made with
            </Text>
            <IconHeart size={16} className="footer-heart" />
            <Text c="dimmed" size="sm">
              using React & Mantine.
            </Text>
          </Group>

          <Text c="dimmed" size="xs">
            Last updated: 2026
          </Text>
        </Group>
      </Container>
    </footer>
  )
}

export default Footer
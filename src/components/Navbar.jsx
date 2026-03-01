import { useState } from 'react'
import { Container, Group, Button, Menu, ActionIcon, Box, Burger, Drawer, Stack } from '@mantine/core'
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react'
import { useMantineColorScheme } from '@mantine/core'
import { Link as ScrollLink } from 'react-scroll'
import { portfolioData } from '../data/portfolio'
import './Navbar.css'

/**
 * Navbar Component
 * Navigation bar with dark mode toggle and smooth scroll navigation
 */
function Navbar({ scrolled }) {
  const [opened, setOpened] = useState(false)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <Box
      component="header"
      h={72}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      pos="sticky"
      top={0}
      style={{ zIndex: 999 }}
    >
      <Container size="lg" h="100%" px="md">
        <Group h="100%" justify="space-between">
          {/* Logo - Removed per user request */}
          <Box className="logo" style={{ display: 'none' }}>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
            >
              <span className="logo-text">{portfolioData.personal.name}</span>
            </ScrollLink>
          </Box>

          {/* Desktop Navigation */}
          <Group gap={2} className="nav-links-desktop">
            {portfolioData.navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                <Button variant="subtle" size="sm">
                  {link.label}
                </Button>
              </ScrollLink>
            ))}
          </Group>

          {/* Actions */}
          <Group gap={0}>
            <ActionIcon
              variant="subtle"
              size="lg"
              onClick={() => toggleColorScheme()}
              title="Toggle theme"
            >
              {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
            </ActionIcon>

            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
        </Group>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000}
      >
        <Stack gap="md">
          {portfolioData.navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setOpened(false)}
            >
              <Button fullWidth variant="light" size="md">
                {link.label}
              </Button>
            </ScrollLink>
          ))}
        </Stack>
      </Drawer>
    </Box>
  )
}

export default Navbar
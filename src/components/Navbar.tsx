import { useState, useEffect } from 'react'
import { Box, Group, Anchor, Stack } from '@mantine/core'
import classes from './Navbar.module.css'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#testimonials', label: 'Recommendations' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(sections[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
       <Box style={{
        position: 'fixed', top: 0, left: 0, width: `${scrollProgress}%`, height: '2px',
        background: 'linear-gradient(90deg, rgb(9,79,183), rgb(100,180,255))',
        zIndex: 1001, transition: 'width 0.1s linear',
        boxShadow: '0 0 12px rgba(9,79,183,1)',
      }} />

      <Box
        component="nav"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(5,5,9,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(28px) saturate(200%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(200%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(9,79,183,0.2)' : '1px solid transparent',
          padding: scrolled ? '0.6rem 0' : '1.2rem 0',
        }}
      >
        <Group justify="space-between" align="center" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <Anchor href="#hero" onClick={e => { e.preventDefault(); handleNav('#hero') }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1px' }}>
            <Box component="span" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#fff', letterSpacing: '-1px' }}>MN</Box>
            <Box component="span" style={{ fontSize: '2rem', fontWeight: 900, color: 'rgb(9,79,183)', lineHeight: 1, textShadow: '0 0 20px rgba(9,79,183,0.9)' }}>.</Box>
          </Anchor>

           <Group component="ul" gap="0.1rem" style={{ listStyle: 'none', margin: 0, padding: 0 }} className={classes.desktopNav}>
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <Anchor
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNav(link.href) }}
                    className={isActive ? classes.navLinkActive : classes.navLink}
                  >
                    {link.label}
                  </Anchor>
                </li>
              )
            })}
          </Group>

           <Anchor href="mailto:micheal1namma@gmail.com" className={classes.hireBtn}>
            <Box component="span" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4fffb0', boxShadow: '0 0 8px #4fffb0', flexShrink: 0 }} />
            Hire Me
          </Anchor>

           <Box
            component="button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexDirection: 'column', gap: '5px' }}
            className={classes.hamburger}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <Box
                component="span"
                key={i}
                style={{
                  display: 'block', width: '24px', height: '2px',
                  background: '#fff', borderRadius: '1px', transition: 'all 0.3s',
                  transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                             menuOpen && i === 1 ? 'scaleX(0)' :
                             menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
                }}
              />
            ))}
          </Box>
        </Group>

         {menuOpen && (
          <Stack gap={0} style={{ background: 'rgba(5,5,9,0.97)', backdropFilter: 'blur(28px)', borderTop: '1px solid rgba(9,79,183,0.2)', padding: '1rem 1.5rem 1.5rem' }}>
            {navLinks.map(link => (
              <Anchor
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href) }}
                className={classes.mobileMenuLink}
                style={{ color: active === link.href.slice(1) ? 'rgb(9,79,183)' : 'rgba(255,255,255,0.55)' }}
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>
        )}
      </Box>
    </>
  )
}

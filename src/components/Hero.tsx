import { useEffect, useRef, useState } from 'react'
import { Box, Badge, Title, Text, Group } from '@mantine/core'
import classes from './Hero.module.css'

const roles = [
  'Senior Backend Developer',
  'Laravel Architect',
  'API Engineer',
  'FinTech Developer',
  'Full Stack Engineer',
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [visible, setVisible] = useState(false)

   useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

   useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

   useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.45 + 0.08,
    }))

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(9,79,183,${p.opacity})`
        ctx.fill()
      })
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const d = Math.hypot(p1.x - p2.x, p1.y - p2.y)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(9,79,183,${0.09 * (1 - d / 130)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <Box
      component="section"
      id="hero"
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 60% 30%, rgba(9,79,183,0.10) 0%, transparent 70%), #07070b',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

       <Box style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(9,79,183,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(9,79,183,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

       <Box style={{ position: 'absolute', top: '15%', right: '8%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(9,79,183,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <Box style={{ position: 'absolute', bottom: '8%', left: '3%', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(9,79,183,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

       <Box style={{ position: 'absolute', top: '6rem', right: '6rem', opacity: 0.12, pointerEvents: 'none' }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="rgb(9,79,183)" strokeWidth="1" strokeDasharray="8 6" />
          <circle cx="100" cy="100" r="60" stroke="rgb(9,79,183)" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="30" stroke="rgb(9,79,183)" strokeWidth="0.5" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="rgb(9,79,183)" strokeWidth="0.5" opacity="0.5" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="rgb(9,79,183)" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </Box>

       <Box style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem 0', width: '100%' }}>
        <Box style={{ maxWidth: '820px' }}>

           <Box style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.1s',
            marginBottom: '2.2rem',
            display: 'inline-block',
          }}>
            <Badge
              variant="outline"
              radius="xl"
              style={{
                border: '1px solid rgba(9,79,183,0.5)',
                background: 'rgba(9,79,183,0.1)',
                backdropFilter: 'blur(8px)',
                padding: '0.38rem 1rem',
                fontSize: '0.75rem',
                color: 'rgba(180,220,255,0.9)',
                fontWeight: 600,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
              }}
              leftSection={
                <Box component="span" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4fffb0', boxShadow: '0 0 8px #4fffb0', animation: 'pulse 2s infinite', display: 'inline-block' }} />
              }
            >
              Available for new opportunities
            </Badge>
          </Box>

           <Box style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.25s',
          }}>
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', fontWeight: 900,
                lineHeight: 1.05, marginBottom: '1rem', letterSpacing: '-2px',
                color: '#fff',
              }}
            >
              Micheal{' '}
              <Box component="span" style={{ position: 'relative', display: 'inline-block' }}>
                <Box component="span" style={{
                  background: 'linear-gradient(135deg, rgb(9,79,183) 0%, rgb(100,170,255) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>Namma</Box>
                <Box component="span" style={{
                  position: 'absolute', bottom: '2px', left: 0, right: 0,
                  height: '3px', background: 'linear-gradient(90deg, rgb(9,79,183), transparent)',
                  borderRadius: '2px',
                }} />
              </Box>
            </Title>
          </Box>

           <Box style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.55rem)', fontWeight: 600,
            marginBottom: '1.75rem', minHeight: '2.2rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.4s',
          }}>
            <Text component="span" style={{ color: 'rgba(255,255,255,0.35)' }}>&gt;_</Text>
            <Text component="span" style={{ color: 'rgba(255,255,255,0.85)' }}>{displayed}</Text>
            <Box component="span" style={{ width: '2px', height: '1.3em', background: 'rgb(9,79,183)', animation: 'blink 1s step-end infinite', display: 'inline-block', verticalAlign: 'middle', borderRadius: '1px' }} />
          </Box>

           <Text style={{
            fontSize: '1.02rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85,
            marginBottom: '2.5rem', maxWidth: '580px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.55s',
          }}>
            Specializing in <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Laravel</strong> &amp;{' '}
            <strong style={{ color: 'rgba(255,255,255,0.8)' }}>PHP</strong> with experience in{' '}
            <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Python microservices</strong> and FinTech systems.
            Building scalable APIs, secure backends, and robust data layers.
          </Text>

           <Group gap="1rem" style={{
            flexWrap: 'wrap', marginBottom: '3.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.7s',
          }}>
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className={classes.primaryBtn}
            >
              View Projects →
            </a>
            <a href="mailto:micheal1namma@gmail.com" className={classes.ghostBtn}>
              Contact Me
            </a>
            <a
              href="/files/Micheal Namma.pdf"
              download="Micheal Namma CV.pdf"
              className={classes.ghostBtn}
            >
              Download CV ↓
            </a>
          </Group>

           <Box style={{
            display: 'flex', gap: '0', flexWrap: 'wrap',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.85s',
          }}>
            {[
              { num: '4+', label: 'Years Experience' },
              { num: '5', label: 'Companies' },
              { num: '10+', label: 'Projects' },
              { num: '3', label: 'Tech Stacks' },
            ].map((stat, i) => (
              <Box key={stat.label} style={{
                padding: '1rem 1.75rem',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <Box style={{
                  fontSize: '2rem', fontWeight: 900, lineHeight: 1,
                  background: 'linear-gradient(135deg, #fff 0%, rgba(9,79,183,0.9) 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  marginBottom: '0.3rem',
                }}>{stat.num}</Box>
                <Box style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '1.2px' }}>{stat.label}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

       <Box style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)', display: 'flex',
        flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.4,
      }}>
        <Text style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#555' }}>Scroll</Text>
        <Box style={{
          width: '22px', height: '38px', border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '11px', display: 'flex', justifyContent: 'center', paddingTop: '5px',
        }}>
          <Box style={{ width: '3px', height: '8px', background: 'rgb(9,79,183)', borderRadius: '2px', animation: 'scrollBounce 2s infinite' }} />
        </Box>
      </Box>
    </Box>
  )
}

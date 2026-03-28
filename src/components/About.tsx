import { Box, Text, Title, SimpleGrid, Group, Stack, Anchor } from '@mantine/core'
import { useReveal } from '../hooks/useReveal'
import classes from './About.module.css'

const highlights = [
  { icon: '⚡', title: 'Laravel Expert', desc: 'Deep PHP & Laravel expertise with production-grade applications' },
  { icon: '🔗', title: 'API Architect', desc: 'RESTful design, microservices and third-party integrations' },
  { icon: '🗄️', title: 'Database Design', desc: 'MySQL schema optimization, migrations & query performance' },
  { icon: '🔒', title: 'Security First', desc: 'Auth, JWT & best-practice security for financial apps' },
  { icon: '🚀', title: 'DevOps Aware', desc: 'CI/CD pipelines with Git, GitLab and Agile Scrum' },
  { icon: '🤝', title: 'Team Player', desc: 'Seamless collaboration across full-stack cross-functional teams' },
]

export default function About() {
  const { ref, visible } = useReveal(0.15)

  return (
    <Box component="section" id="about" style={{ background: '#09090f', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
       <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgb(9,79,183) 50%, transparent 100%)' }} />
       <Box style={{ position: 'absolute', top: '50%', right: '-200px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(9,79,183,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
         <Box style={{ marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <Text size="xs" c="brand.6" style={{ textTransform: 'uppercase', letterSpacing: '3.5px', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>Get to know me</Text>
          <Title order={2} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.05 }}>About Me</Title>
          <Group gap="0.75rem" mt="1rem">
            <Box style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, rgb(9,79,183), rgb(100,170,255))', borderRadius: '2px' }} />
            <Box style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(9,79,183)', boxShadow: '0 0 10px rgba(9,79,183,0.8)' }} />
          </Group>
        </Box>

         <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem" mb="4rem">
           <Box style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.8s ease 0.2s' }}>
             <Box style={{ position: 'relative', width: '130px', height: '130px', marginBottom: '2rem' }}>
              <Box style={{
                width: '130px', height: '130px', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgb(9,79,183) 0%, rgb(41,106,205) 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.8rem', fontWeight: 900, color: '#fff',
                boxShadow: '0 0 50px rgba(9,79,183,0.45)',
                border: '2px solid rgba(9,79,183,0.5)',
                position: 'relative', zIndex: 1,
              }}>MN</Box>
              <Box style={{
                position: 'absolute', inset: '-12px', borderRadius: '50%',
                border: '1px dashed rgba(9,79,183,0.35)',
                animation: 'spin 12s linear infinite',
              }} />
              <Box style={{
                position: 'absolute', inset: '-24px', borderRadius: '50%',
                border: '1px dashed rgba(9,79,183,0.15)',
                animation: 'spinR 18s linear infinite',
              }} />
            </Box>  

            <Title order={3} style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem', letterSpacing: '-0.5px' }}>Micheal Namma</Title>
            <Text style={{ color: 'rgb(9,79,183)', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Senior Backend Developer</Text>

            <Text style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, marginBottom: '1.1rem', fontSize: '0.95rem' }}>
              As a back-end developer with a focus on <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Laravel</strong>, I have a deep understanding of web development principles and best practices. I have worked with front-end developers and designers to ensure seamless integration of front-end and back-end systems.
            </Text>
            <Text style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '2rem' }}>
              With experience spanning FinTech microservices, e-commerce platforms, educational systems and enterprise dashboards, I thrive on building solutions that are scalable, secure, and maintainable.
            </Text>

             <SimpleGrid cols={2} spacing="0.75rem">
              {[
                { label: 'Location', value: 'Syria' },
                { label: 'DOB', value: 'Dec 28, 1996' },
                { label: 'Email', value: 'micheal1namma\n@gmail.com', small: true },
                { label: 'Phone', value: '+963 945 922 364' },
                { label: 'Languages', value: 'Arabic, English (C1)' },
                { label: 'Degree', value: 'B.Sc. Computer Eng.' },
              ].map(item => (
                <Box key={item.label} className={classes.infoCard}>
                  <Text style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '0.2rem' }}>{item.label}</Text>
                  <Text style={{ fontSize: item.small ? '0.72rem' : '0.82rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>{item.value}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

           <Box style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.8s ease 0.35s' }}>
             <Box style={{
              padding: '1.75rem', marginBottom: '1.5rem',
              background: 'rgba(9,79,183,0.07)',
              border: '1px solid rgba(9,79,183,0.25)',
              borderRadius: '14px',
              position: 'relative', overflow: 'hidden',
            }}>
              <Box style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(180deg, rgb(9,79,183), rgb(100,170,255))' }} />
              <Group gap="1rem" align="flex-start" style={{ paddingLeft: '0.5rem' }}>
                <Box style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(9,79,183,0.2)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0,
                  border: '1px solid rgba(9,79,183,0.3)',
                }}>🎓</Box>
                <Box>
                  <Title order={4} style={{ color: '#fff', fontWeight: 700, marginBottom: '0.35rem', fontSize: '1rem' }}>B.Sc. Electrical Engineering — Computer Engineering</Title>
                  <Text style={{ color: 'rgb(9,79,183)', fontSize: '0.83rem', fontWeight: 600, marginBottom: '0.25rem' }}>Damascus University · 2014 – 2020</Text>
                  <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>Faculty of Mechanical &amp; Electrical Engineering · GPA 74.69%</Text>
                </Box>
              </Group>
            </Box>

             <Group gap="0.75rem" mb="2rem">
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/micheal-namma-8111231b9', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { name: 'Email', href: 'mailto:micheal1namma@gmail.com', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
                { name: 'Phone', href: 'tel:+963945922364', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.77 11a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.68 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 5.29 5.29l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14v2.92z"/></svg> },
              ].map(s => (
                <Anchor
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={classes.socialLink}
                >
                  {s.icon}{s.name}
                </Anchor>
              ))}
            </Group>

             <Stack gap="0.6rem">
              {[
                { icon: '🌍', text: 'Based in Syria — open to remote & relocation opportunities' },
                { icon: '💼', text: 'Currently Senior Backend Developer at Ultra Wares' },
                { icon: '🎯', text: 'Passionate about clean architecture, API design & Agile delivery' },
                { icon: '📐', text: 'Experienced Scrum Master with JIRA project management' },
              ].map(f => (
                <Group key={f.icon} align="flex-start" gap="0.75rem" style={{ padding: '0.7rem 0.9rem', background: 'rgba(255,255,255,0.015)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <Box component="span" style={{ fontSize: '1rem', flexShrink: 0 }}>{f.icon}</Box>
                  <Text style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.83rem', lineHeight: 1.6 }}>{f.text}</Text>
                </Group>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>

         <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="1rem"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease 0.5s' }}
        >
          {highlights.map(h => (
            <Box key={h.title} className={classes.highlightCard}>
              <Text style={{ fontSize: '1.6rem', marginBottom: '0.7rem' }}>{h.icon}</Text>
              <Title order={4} style={{ color: '#fff', fontWeight: 700, marginBottom: '0.45rem', fontSize: '0.95rem' }}>{h.title}</Title>
              <Text style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', lineHeight: 1.7 }}>{h.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

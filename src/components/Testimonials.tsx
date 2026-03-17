import { Box, Text, Title, Group, Anchor } from '@mantine/core'
import { useReveal } from '../hooks/useReveal'
import classes from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Nazem Almsouti',
    title: 'Frontend Developer',
    company: 'Pharaon Group',
    tags: ['React', 'TypeScript', 'Flutter'],
    linkedin: 'https://www.linkedin.com/in/nazem-almsouti/',
    relationship: 'Colleague at Pharaon Group — Pyramind Project',
    text: `I had the opportunity to work alongside Michael Namma at Pharaon Group on the Pyramind project, where he served as Backend Developer and I contributed as a frontend developer.

Michael is a skilled and experienced backend developer. What stood out most was the quality of his technical thinking — he brought strong ideas to the table and approached problems with a level of expertise that made collaboration smooth and productive.

He was reliable when it came to delivering his tasks. What was assigned to him was done properly, on time, and with a consistent level of professionalism throughout. There was no need to follow up unnecessarily — he took ownership of his work and executed it to a high standard.

I'd recommend Michael to any team looking for a backend developer who is technically strong, dependable, and professional.`,
  },
]

export default function Testimonials() {
  const { ref, visible } = useReveal(0.1)

  return (
    <Box component="section" id="testimonials" style={{ background: '#07070b', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgb(9,79,183), transparent)' }} />
      <Box style={{ position: 'absolute', top: '50%', left: '-200px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(9,79,183,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <Box style={{ marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <Text size="xs" c="brand.6" style={{ textTransform: 'uppercase', letterSpacing: '3.5px', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>What colleagues say</Text>
          <Title order={2} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.05 }}>Recommendations</Title>
          <Group gap="0.75rem" mt="1rem">
            <Box style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, rgb(9,79,183), rgb(100,170,255))', borderRadius: '2px' }} />
            <Box style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(9,79,183)', boxShadow: '0 0 10px rgba(9,79,183,0.8)' }} />
          </Group>
        </Box>

        <Box style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <Box
              key={i}
              className={classes.card}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s ease ${i * 0.15}s`,
              }}
            >
              {/* Left accent bar */}
              <Box style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', background: 'linear-gradient(180deg, rgb(9,79,183), rgb(100,170,255))', borderRadius: '3px 0 0 3px' }} />

              {/* Quote mark */}
              <Box style={{ position: 'absolute', top: '1.5rem', right: '1.75rem', fontSize: '5rem', lineHeight: 1, color: 'rgba(9,79,183,0.1)', fontFamily: 'Georgia, serif', userSelect: 'none', pointerEvents: 'none' }}>"</Box>

              <Box style={{ padding: '2rem 2rem 2rem 2.5rem' }}>
                {/* Header */}
                <Group justify="space-between" align="flex-start" mb="1.5rem" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                  <Group gap="1rem" align="center">
                    {/* Avatar */}
                    <Box style={{
                      width: '52px', height: '52px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgb(9,79,183) 0%, rgb(60,130,220) 100%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', fontWeight: 800, color: '#fff', flexShrink: 0,
                      border: '2px solid rgba(9,79,183,0.4)',
                      boxShadow: '0 0 20px rgba(9,79,183,0.3)',
                    }}>
                      {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </Box>
                    <Box>
                      <Group gap="0.5rem" align="center">
                        <Text style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{t.name}</Text>
                        <Anchor
                          href={t.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: 'flex', alignItems: 'center', color: 'rgb(9,79,183)', opacity: 0.8, transition: 'opacity 0.2s' }}
                          title="LinkedIn Profile"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </Anchor>
                      </Group>
                      <Text style={{ color: 'rgb(9,79,183)', fontSize: '0.8rem', fontWeight: 600 }}>{t.title}</Text>
                      <Text style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.72rem' }}>{t.relationship}</Text>
                    </Box>
                  </Group>

                  {/* Tags */}
                  <Group gap="0.4rem" style={{ flexWrap: 'wrap' }}>
                    {t.tags.map(tag => (
                      <Box key={tag} style={{ fontSize: '0.65rem', color: 'rgba(9,79,183,0.9)', background: 'rgba(9,79,183,0.1)', border: '1px solid rgba(9,79,183,0.2)', borderRadius: '6px', padding: '0.2rem 0.6rem', fontWeight: 600 }}>
                        {tag}
                      </Box>
                    ))}
                  </Group>
                </Group>

                {/* Testimonial text */}
                {t.text.split('\n\n').map((para, j) => (
                  <Text key={j} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: j < t.text.split('\n\n').length - 1 ? '1rem' : 0 }}>
                    {para}
                  </Text>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

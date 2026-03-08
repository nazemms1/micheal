import { useState } from 'react'
import { Box, Text, Title, Group, Badge, Collapse, Stack } from '@mantine/core'
import { useReveal } from '../hooks/useReveal'
import classes from './Experience.module.css'

const experiences = [
  {
    role: 'Senior Backend Developer',
    company: 'Ultra Wares',
    type: 'Full Time',
    period: 'July 2025 – Present',
    current: true,
    responsibilities: [
      'Develop and maintain RESTful APIs and backend services using Laravel',
      'Design database schemas, relationships, and optimize queries for performance',
      'Implement authentication, authorization, and data validation for secure applications',
      'Collaborate with frontend developers and QA to ensure seamless integration and high-quality code',
      'Managed version control and CI/CD pipelines using Git and GitLab CI/CD',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Git', 'CI/CD'],
  },
  {
    role: 'Senior Backend Developer',
    company: 'Madfox Solutions',
    type: 'Full Time',
    period: 'February 2024 – July 2025',
    current: false,
    responsibilities: [
      'Developed and maintained microservices architecture using Python and Flask for scalable financial applications',
      'Designed and implemented RESTful APIs for seamless integration with core banking systems',
      'Worked on FinTech Studio — a composable middleware centralizing banking data and managing APIs',
      'Implemented authentication, authorization, and security best practices for sensitive financial data',
      'Integrated with third-party banking services and APIs to enhance system capabilities',
      'Managed version control and CI/CD pipelines using Git and GitLab CI/CD',
    ],
    tags: ['Python', 'Flask', 'FinTech', 'Microservices', 'REST API', 'GitLab CI/CD'],
  },
  {
    role: 'Full Stack Developer',
    company: 'IXCoders',
    type: 'Full Time',
    period: 'August 2023 – February 2024',
    current: false,
    responsibilities: [
      'Engaged in end-to-end web application development spanning front-end and back-end components',
      'Developed robust server-side applications using PHP and the Laravel framework',
      'Implemented RESTful APIs, database migrations, and authentication mechanisms',
      'Designed and optimized database schemas using SQL for efficient data storage',
      'Created interactive and dynamic user interfaces using JavaScript and jQuery',
    ],
    tags: ['Laravel', 'PHP', 'JavaScript', 'jQuery', 'SQL', 'Git'],
  },
  {
    role: 'Back-End Developer',
    company: '3Miles',
    type: 'Full Time',
    period: 'November 2022 – August 2023',
    current: false,
    responsibilities: [
      'Developed and maintained high-performance web applications',
      'Designed and implemented RESTful APIs for front-end consumption',
      'Implemented authentication, authorization, and middleware for enhanced security',
      'Developed and implemented custom Bootstrap themes and plugins',
      'Participated in Agile Scrum events including sprint planning and reviews',
    ],
    tags: ['PHP', 'Laravel', 'Bootstrap', 'REST API', 'Agile', 'Scrum'],
  },
  {
    role: 'Back-End Developer & Master Scrum',
    company: 'Harbuk',
    type: 'Full Time',
    period: 'October 2021 – November 2022',
    current: false,
    responsibilities: [
      'Developed robust and scalable server-side applications using PHP and Laravel',
      'Worked extensively with Magento 2, customizing core functionalities for e-commerce',
      'Implemented RESTful APIs and web services for front-end and back-end communication',
      'Designed and optimized database schemas using MySQL for efficient data management',
      'Led sprint planning, daily stand-ups, reviews, and retrospectives as Scrum Master',
    ],
    tags: ['Magento 2', 'Laravel', 'PHP', 'MySQL', 'Scrum Master', 'REST API'],
  },
]

function ExperienceCard({ exp, index, visible }: { exp: typeof experiences[0]; index: number; visible: boolean }) {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <Box style={{
      display: 'flex', gap: '1.75rem',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(-30px)',
      transition: `all 0.6s ease ${index * 0.1}s`,
    }}>
       <Box style={{ position: 'relative', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box style={{
          width: '18px', height: '18px', borderRadius: '50%', marginTop: '6px',
          background: exp.current ? 'rgb(9,79,183)' : 'rgba(9,79,183,0.15)',
          border: `2px solid ${exp.current ? 'rgb(9,79,183)' : 'rgba(9,79,183,0.35)'}`,
          boxShadow: exp.current ? '0 0 20px rgba(9,79,183,0.7)' : 'none',
          position: 'relative', zIndex: 1, flexShrink: 0,
        }}>
          {exp.current && (
            <Box style={{ position: 'absolute', inset: '-5px', borderRadius: '50%', border: '1px solid rgba(9,79,183,0.4)', animation: 'ringPulse 2s infinite' }} />
          )}
        </Box>
      </Box>

       <Box style={{ flex: 1, marginBottom: '1.5rem' }}>
        <Box
          className={classes.expCard}
          data-current={exp.current ? 'true' : undefined}
          onClick={() => setExpanded(!expanded)}
          style={{
            background: exp.current
              ? 'linear-gradient(135deg, rgba(9,79,183,0.1) 0%, rgba(9,79,183,0.04) 100%)'
              : 'rgba(255,255,255,0.025)',
            border: `1px solid ${exp.current ? 'rgba(9,79,183,0.35)' : 'rgba(255,255,255,0.06)'}`,
          }}
        >
           <Box style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px',
            background: exp.current ? 'linear-gradient(180deg, rgb(9,79,183), rgb(100,170,255))' : 'rgba(9,79,183,0.2)',
          }} />

          <Group justify="space-between" align="flex-start" style={{ flexWrap: 'wrap', gap: '0.75rem', paddingLeft: '0.5rem' }}>
            <Box>
              <Group gap="0.75rem" mb="0.3rem" style={{ flexWrap: 'wrap' }}>
                <Title order={3} style={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.3px' }}>{exp.role}</Title>
                {exp.current && (
                  <Badge
                    variant="light"
                    color="brand"
                    radius="xl"
                    style={{ fontSize: '0.62rem', padding: '0.2rem 0.65rem', fontWeight: 700, letterSpacing: '1.2px', border: '1px solid rgba(9,79,183,0.4)' }}
                  >
                    ● Current
                  </Badge>
                )}
              </Group>
              <Text style={{ color: 'rgb(9,79,183)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.3px' }}>
                {exp.company} · {exp.type}
              </Text>
            </Box>
            <Group gap="0.75rem">
              <Box style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px' }}>
                {exp.period}
              </Box>
              <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', transition: 'transform 0.3s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block' }}>▾</Text>
            </Group>
          </Group>

           <Group gap="0.4rem" mt="1rem" style={{ paddingLeft: '0.5rem', flexWrap: 'wrap' }}>
            {exp.tags.map(tag => (
              <Badge
                key={tag}
                variant="light"
                color="brand"
                style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem', border: '1px solid rgba(9,79,183,0.22)' }}
              >
                {tag}
              </Badge>
            ))}
          </Group>
        </Box>

         <Collapse in={expanded} transitionDuration={400} transitionTimingFunction="ease">
          <Box component="ul" style={{ listStyle: 'none', padding: '1.25rem 1.25rem 0.25rem 1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {exp.responsibilities.map((r, j) => (
              <Box component="li" key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                <Box component="span" style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgb(9,79,183)', flexShrink: 0, marginTop: '0.5rem' }} />
                {r}
              </Box>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}

export default function Experience() {
  const { ref, visible } = useReveal(0.1)

  return (
    <Box component="section" id="experience" style={{ background: '#07070b', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgb(9,79,183), transparent)' }} />

      <Box ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <Box style={{ marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <Text size="xs" c="brand.6" style={{ textTransform: 'uppercase', letterSpacing: '3.5px', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>My journey</Text>
          <Title order={2} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.05 }}>Work Experience</Title>
          <Group gap="0.75rem" mt="1rem">
            <Box style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, rgb(9,79,183), rgb(100,170,255))', borderRadius: '2px' }} />
            <Box style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(9,79,183)', boxShadow: '0 0 10px rgba(9,79,183,0.8)' }} />
          </Group>
        </Box>

        <Box style={{ position: 'relative' }}>
           <Box style={{
            position: 'absolute', left: '8px', top: '8px', bottom: '8px', width: '2px',
            background: 'linear-gradient(180deg, rgb(9,79,183) 0%, rgba(9,79,183,0.08) 100%)',
          }} />

          <Stack gap={0}>
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} visible={visible} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

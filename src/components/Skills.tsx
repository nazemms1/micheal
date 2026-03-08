import { Box, Text, Title, SimpleGrid, Group } from '@mantine/core'
import { useReveal } from '../hooks/useReveal'
import classes from './Skills.module.css'

const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'rgba(9,79,183,0.15)',
    borderColor: 'rgba(9,79,183,0.3)',
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 95 },
      { name: 'Python', level: 75 },
      { name: 'Flask', level: 70 },
      { name: 'REST APIs', level: 95 },
      { name: 'Magento 2', level: 75 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'rgba(9,140,183,0.1)',
    borderColor: 'rgba(9,140,183,0.25)',
    skills: [
      { name: 'MySQL', level: 92 },
      { name: 'SQL', level: 90 },
      { name: 'Schema Design', level: 88 },
      { name: 'Query Optimization', level: 84 },
      { name: 'Migrations', level: 92 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'rgba(79,183,9,0.08)',
    borderColor: 'rgba(79,183,9,0.2)',
    skills: [
      { name: 'JavaScript', level: 78 },
      { name: 'jQuery', level: 80 },
      { name: 'Vue.js', level: 62 },
      { name: 'HTML & CSS', level: 82 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    color: 'rgba(183,9,140,0.08)',
    borderColor: 'rgba(183,9,140,0.2)',
    skills: [
      { name: 'Git', level: 93 },
      { name: 'GitLab CI/CD', level: 82 },
      { name: 'JIRA', level: 87 },
      { name: 'Agile / Scrum', level: 92 },
      { name: 'Linux', level: 72 },
    ],
  },
]

const techBadges = [
  { name: 'PHP', hot: true }, { name: 'Laravel', hot: true }, { name: 'Python', hot: false },
  { name: 'Flask', hot: false }, { name: 'MySQL', hot: true }, { name: 'REST API', hot: true },
  { name: 'Magento 2', hot: false }, { name: 'Git', hot: false }, { name: 'GitLab CI/CD', hot: false },
  { name: 'JavaScript', hot: false }, { name: 'jQuery', hot: false }, { name: 'Vue.js', hot: false },
  { name: 'React.js', hot: false }, { name: 'Next.js', hot: false }, { name: 'Bootstrap', hot: false },
  { name: 'Blade', hot: false }, { name: 'Flutter', hot: false }, { name: 'AJAX', hot: false },
  { name: 'OOP', hot: false }, { name: 'Microservices', hot: true }, { name: 'JWT Auth', hot: false },
  { name: 'Design Patterns', hot: false }, { name: 'Agile', hot: false }, { name: 'Scrum Master', hot: false },
  { name: 'JIRA', hot: false }, { name: 'Linux', hot: false }, { name: 'HTML/CSS', hot: false },
]

function SkillBar({ name, level, visible, delay }: { name: string; level: number; visible: boolean; delay: number }) {
  return (
    <Box>
      <Group justify="space-between" mb="0.4rem">
        <Text style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem', fontWeight: 500 }}>{name}</Text>
        <Text style={{ color: 'rgb(9,79,183)', fontSize: '0.72rem', fontWeight: 700 }}>{level}%</Text>
      </Group>
      <Box style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
        <Box style={{
          height: '100%',
          width: visible ? `${level}%` : '0%',
          background: level >= 90 ? 'linear-gradient(90deg, rgb(9,79,183), rgb(100,180,255))' : 'linear-gradient(90deg, rgba(9,79,183,0.7), rgba(100,180,255,0.7))',
          borderRadius: '2px',
          transition: `width 1.2s ease ${delay}s`,
          boxShadow: level >= 90 ? '0 0 8px rgba(9,79,183,0.6)' : 'none',
        }} />
      </Box>
    </Box>
  )
}

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <Box component="section" id="skills" style={{ background: '#07070b', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgb(9,79,183), transparent)' }} />
      <Box style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(9,79,183,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <Box ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
         <Box style={{ marginBottom: '4rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <Text size="xs" c="brand.6" style={{ textTransform: 'uppercase', letterSpacing: '3.5px', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>My expertise</Text>
          <Title order={2} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.05 }}>Skills & Technologies</Title>
          <Group gap="0.75rem" mt="1rem">
            <Box style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, rgb(9,79,183), rgb(100,170,255))', borderRadius: '2px' }} />
            <Box style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(9,79,183)', boxShadow: '0 0 10px rgba(9,79,183,0.8)' }} />
          </Group>
        </Box>

         <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="1.25rem" mb="3.5rem">
          {skillGroups.map((group, gi) => (
            <Box
              key={group.category}
              style={{
                padding: '1.6rem',
                background: group.color,
                border: `1px solid ${group.borderColor}`,
                borderRadius: '16px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${gi * 0.1}s`,
              }}
            >
              <Group gap="0.75rem" mb="1.5rem">
                <Box style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', border: '1px solid rgba(255,255,255,0.06)' }}>{group.icon}</Box>
                <Title order={3} style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.3px' }}>{group.category}</Title>
              </Group>
              <Box style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} delay={gi * 0.1 + si * 0.08} />
                ))}
              </Box>
            </Box>
          ))}
        </SimpleGrid>

         <Box style={{
          padding: '2.5rem', background: 'rgba(9,79,183,0.04)',
          border: '1px solid rgba(9,79,183,0.15)', borderRadius: '18px',
          opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.4s',
          position: 'relative', overflow: 'hidden',
        }}>
          <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(9,79,183,0.6), transparent)' }} />
          <Title order={3} style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '1.75rem', textAlign: 'center', letterSpacing: '0.3px' }}>
            Full Tech Stack
          </Title>
          <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
            {techBadges.map(tech => (
              <Box
                component="span"
                key={tech.name}
                className={classes.techBadge}
                style={{
                  background: tech.hot ? 'rgba(9,79,183,0.18)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${tech.hot ? 'rgba(9,79,183,0.4)' : 'rgba(255,255,255,0.07)'}`,
                  color: tech.hot ? 'rgb(100,170,255)' : 'rgba(255,255,255,0.38)',
                  fontWeight: tech.hot ? 700 : 500,
                  boxShadow: tech.hot ? '0 0 12px rgba(9,79,183,0.15)' : 'none',
                }}
              >
                {tech.name}
              </Box>
            ))}
          </Box>
        </Box>

         <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="0.9rem" mt="1.25rem" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.55s' }}>
          {[
            { icon: '🎯', label: 'Scrum Master', desc: 'Agile sprint leadership' },
            { icon: '📋', label: 'JIRA', desc: 'Task tracking & planning' },
            { icon: '🔒', label: 'Security', desc: 'Auth & best practices' },
            { icon: '📐', label: 'Design Patterns', desc: 'Clean architecture' },
            { icon: '🔄', label: 'CI/CD', desc: 'GitLab pipeline automation' },
            { icon: '🤝', label: 'Collaboration', desc: 'Cross-functional teams' },
          ].map(item => (
            <Box key={item.label} className={classes.softSkillCard}>
              <Box component="span" style={{ fontSize: '1.2rem', flexShrink: 0 }}>{item.icon}</Box>
              <Box>
                <Text style={{ color: '#fff', fontWeight: 600, fontSize: '0.82rem' }}>{item.label}</Text>
                <Text style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.72rem' }}>{item.desc}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

import { useEffect, useState } from 'react'
import { Box, Text, Title, Group, Badge, Modal, SimpleGrid, Anchor } from '@mantine/core'
import { useReveal } from '../hooks/useReveal'
import classes from './Projects.module.css'

interface Project {
  name: string
  description: string
  longDescription?: string
  highlights: string[]
  tags: string[]
  category: string
  icon: string
  featured: boolean
  links: { label: string; href: string; type: 'web' | 'playstore' }[]
}

const projects: Project[] = [
  {
    name: 'Harbuk',
    description: 'A comprehensive Syrian e-commerce marketplace serving electronics, home appliances, cosmetics, automotive accessories, and fashion.',
    longDescription: 'Developed and deployed a comprehensive Syrian e-commerce marketplace serving diverse product categories including electronics, home appliances, cosmetics, automotive accessories, and fashion. Built a scalable, user-centric platform optimized for the local market with multi-currency support (Syrian Lira) and Arabic RTL interface. Implemented end-to-end functionality from product discovery to secure checkout, ensuring seamless shopping experiences across mobile and desktop devices.',
    highlights: ['Advanced Product Discovery & Catalog Management', 'Intelligent Shopping Cart & Order Management', 'Secure Payment Processing & Multi-Payment Support'],
    tags: ['Magento 2', 'Laravel', 'PHP', 'MySQL', 'Redis', 'Payment APIs', 'Reports'],
    category: 'E-Commerce',
    icon: '🛒',
    featured: true,
    links: [
      { label: 'Website', href: 'https://www.harbuk.com/', type: 'web' },
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.c_od_e.harbukcom&hl=en&gl=US&pli=1', type: 'playstore' },
    ],
  },
  {
    name: 'Monaco Taxi',
    description: 'Full-stack ride-hailing platform connecting passengers with drivers in real-time with intelligent matching and live GPS tracking.',
    longDescription: 'Developed a full-stack ride-hailing platform connecting passengers with drivers in real-time, featuring intelligent driver matching algorithms and live GPS tracking. Architected scalable backend systems handling concurrent ride requests, real-time location streaming, and automated dispatch logic. Built robust APIs supporting mobile applications with seamless payment integration and comprehensive user role management for passengers, drivers, and administrators.',
    highlights: ['Intelligent Driver Matching & Route Optimization', 'Real-Time GPS Tracking & Live Updates', 'Automated Fare Calculation & Payment Processing', 'Multi-Role User Management & Access Control'],
    tags: ['Laravel', 'Vue.js', 'Blade', 'Node.js', 'Socket.io', 'MySQL', 'PostgreSQL', 'Redis'],
    category: 'Transport',
    icon: '🚖',
    featured: true,
    links: [
      { label: 'Website', href: 'https://taximonaco.com/', type: 'web' },
    ],
  },
  {
    name: 'Pyramind',
    description: 'A group-oriented TMS for managing projects across multiple companies and departments with cross-organizational collaboration.',
    longDescription: 'A group-oriented Task Management System designed to manage projects across multiple companies and departments within the same group. Unlike standard tools, it allows projects to be shared seamlessly between departments and companies, enabling cross-organizational collaboration and centralized task tracking. Built to solve real enterprise challenges in multi-entity organizations.',
    highlights: ['Cross-Company Project Sharing', 'Cross-Organizational Collaboration', 'Centralized Task Tracking & Management'],
    tags: ['Laravel', 'Next.js', 'PHP', 'MySQL'],
    category: 'Enterprise',
    icon: '🏢',
    featured: true,
    links: [
      { label: 'Website', href: 'https://pyramind.pharaon-group.com/on-Board', type: 'web' },
    ],
  },
  {
    name: 'RP',
    description: 'Advanced service management platform connecting service providers with users, covering the full lifecycle from request to payment.',
    longDescription: 'Led the development of an advanced service management platform designed to connect service providers with users seeking various services. The application streamlines the entire service lifecycle, from submitting requests to completing payments, while ensuring smooth communication and efficient workflow management.',
    highlights: ['Service Request Management', 'Real-Time Chat System', 'Order Tracking & Status Updates', 'Invoice & Payment Integration'],
    tags: ['Laravel', 'PHP', 'MySQL', 'Payment Gateway APIs'],
    category: 'Mobile & Web',
    icon: '🔧',
    featured: false,
    links: [
      { label: 'Website', href: 'https://rpapp.site/', type: 'web' },
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.rpapp.onmrhost', type: 'playstore' },
    ],
  },
  {
    name: 'Schooly',
    description: 'Comprehensive data automation system for schools and institutes, streamlining student management, grades, and attendance.',
    longDescription: 'Developed a comprehensive data automation system for schools and educational institutes to streamline the management of academic and administrative operations. The platform centralizes key processes such as student management, course organization, and communication.',
    highlights: ['Student & Staff Management', 'Course & Class Organization', 'Automated Notifications & Reminders', 'Role-Based Access Control'],
    tags: ['Laravel', 'PHP', 'MySQL', 'Payment APIs', 'Email & Notifications', 'Reporting'],
    category: 'EdTech',
    icon: '🏫',
    featured: false,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.schooly.application.schooly', type: 'playstore' },
    ],
  },
  {
    name: 'Khutwa',
    description: 'Distinctive educational platform for baccalaureate students with high-quality video lessons by experienced professors.',
    longDescription: 'Get a distinctive educational experience with the Khotwa application — the ideal application for baccalaureate students who seek to achieve success in their studies and pass exams with confidence.',
    highlights: ['Distinguished Professor Video Lessons', 'High-Quality Video Streaming', 'Flexible Anywhere Access', 'Continuous Student Support'],
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Video Streaming', 'Email & Notifications'],
    category: 'EdTech',
    icon: '📚',
    featured: false,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.ixcoders.khotua&hl=en_GB', type: 'playstore' },
    ],
  },
  {
    name: 'Twjeih',
    description: 'Comprehensive E-Learning platform offering diverse courses and packages with video streaming and dynamic coupon system.',
    longDescription: 'Developed a comprehensive E-Learning platform offering a diverse range of courses and learning packages. The system streamlines course discovery and purchase, delivers high-quality video content, and provides interactive learning materials.',
    highlights: ['Course & Package Management', 'Seamless Video Delivery', 'Dynamic Coupon & Promotion System', 'Secure Payment Processing'],
    tags: ['Laravel', 'PHP', 'MySQL', 'Video Streaming', 'Email & Notifications', 'Payment APIs'],
    category: 'EdTech',
    icon: '🎯',
    featured: false,
    links: [
      { label: 'Website', href: 'https://twjeih.com/', type: 'web' },
    ],
  },
  {
    name: 'Theriac Pharma',
    description: 'Advanced dashboard system for a leading pharmaceutical company optimizing representative management and doctor visit data.',
    longDescription: 'Led the development of an advanced dashboard system for a leading medical and pharmaceutical company. The platform streamlines the management of pharmaceutical representatives by optimizing sample assignment and automating data entry from doctor visits.',
    highlights: ['Representative Management & Performance Metrics', 'Sample Assignment Automation', 'Doctor Visit Data Entry Streamlining', 'Centralized Analytics & Reporting'],
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Email & Notifications', 'Reporting'],
    category: 'HealthTech',
    icon: '💊',
    featured: false,
    links: [
      { label: 'Website', href: 'https://theriac-pharma.com/', type: 'web' },
    ],
  },
  {
    name: 'Student Gate',
    description: 'Comprehensive student portal for students, teachers, and parents covering schools, clubs, and academic enrollment.',
    longDescription: 'Developed a comprehensive student portal platform designed to serve students, teachers, and parents. The system provides a centralized hub for educational services, including international schools, study clubs, and extracurricular activities.',
    highlights: ['Academic Enrollment Management', 'Resource & Study Club Access', 'Parent Portal & Progress Tracking', 'Events, Summer Programs & Extracurriculars'],
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Video Streaming', 'Email & Notifications'],
    category: 'EdTech',
    icon: '🎓',
    featured: false,
    links: [
      { label: 'Website', href: 'https://stgate.net/', type: 'web' },
    ],
  },
]

const categories = ['All', 'EdTech', 'E-Commerce', 'Enterprise', 'Transport', 'Mobile & Web', 'HealthTech']

const categoryColors: Record<string, string> = {
  'EdTech': 'rgba(79,183,9,0.08)',
  'E-Commerce': 'rgba(183,79,9,0.08)',
  'Enterprise': 'rgba(9,79,183,0.08)',
  'Transport': 'rgba(183,9,140,0.08)',
  'Mobile & Web': 'rgba(9,140,183,0.08)',
  'HealthTech': 'rgba(140,183,9,0.08)',
}

function WebIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.856C2.45 24.27 1.83 23.97 1.83 23.13V0.87C1.83 0.03 2.45-.27 3.18.144L22.81 11.27c.73.414.73 1.056 0 1.47L3.18 23.856z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function LinkButtons({ links, size = 'sm' }: { links: Project['links']; size?: 'sm' | 'md' }) {
  return (
    <Box style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {links.map(link => (
        <Anchor
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes.linkBtn} ${link.type === 'playstore' ? classes.linkBtnPlay : classes.linkBtnWeb}`}
          style={{ padding: size === 'md' ? '0.5rem 1.1rem' : '0.32rem 0.75rem', fontSize: size === 'md' ? '0.8rem' : '0.68rem' }}
        >
          {link.type === 'playstore' ? <PlayIcon /> : <WebIcon />}
          {link.label}
          {size === 'md' && <ExternalIcon />}
        </Anchor>
      ))}
    </Box>
  )
}

function ProjectCard({ project, featured, index, visible, onOpen }: {
  project: Project; featured?: boolean; index: number; visible: boolean; onOpen: (p: Project) => void
}) {
  return (
    <Box
      onClick={() => onOpen(project)}
      className={`${classes.projectCard} ${featured ? classes.projectCardFeatured : classes.projectCardRegular}`}
      style={{
        padding: featured ? '1.75rem' : '1.5rem',
        borderRadius: featured ? '16px' : '14px',
        background: featured
          ? 'linear-gradient(135deg, rgba(9,79,183,0.11) 0%, rgba(9,79,183,0.04) 100%)'
          : 'rgba(255,255,255,0.022)',
        border: `1px solid ${featured ? 'rgba(9,79,183,0.28)' : 'rgba(255,255,255,0.055)'}`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.3s ease ${index * 0.05 + 0.1}s`,
        '--card-category-color': categoryColors[project.category] || 'rgba(9,79,183,0.05)',
      } as React.CSSProperties}
    >
      {featured && <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(9,79,183,0.7), transparent)' }} />}

       <Group justify="space-between" align="flex-start" mb="0.9rem">
        <Box style={{ width: featured ? '54px' : '48px', height: featured ? '54px' : '48px', borderRadius: featured ? '14px' : '12px', background: 'rgba(9,79,183,0.15)', border: '1px solid rgba(9,79,183,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: featured ? '1.6rem' : '1.4rem' }}>
          {project.icon}
        </Box>
        <Group gap="0.4rem" align="center">
          {featured && <Badge variant="light" color="brand" style={{ fontSize: '0.58rem', padding: '0.18rem 0.55rem', border: '1px solid rgba(9,79,183,0.3)' }}>⭐ Featured</Badge>}
          <Badge variant="default" style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.04)', padding: '0.18rem 0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>{project.category}</Badge>
        </Group>
      </Group>

      <Title order={3} style={{ color: '#fff', fontWeight: featured ? 800 : 700, fontSize: featured ? '1.2rem' : '1.05rem', marginBottom: '0.6rem', letterSpacing: '-0.3px' }}>{project.name}</Title>
      <Text style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.82rem', lineHeight: 1.78, flex: 1, marginBottom: '0.9rem' }}>{project.description}</Text>

       <Box component="ul" style={{ listStyle: 'none', padding: 0, margin: `0 0 ${featured ? '1.1rem' : '0.85rem'}`, display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
        {project.highlights.slice(0, featured ? 3 : 2).map(h => (
          <Box component="li" key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            <Box component="span" style={{ color: 'rgb(9,79,183)', flexShrink: 0 }}>▸</Box>{h}
          </Box>
        ))}
      </Box>

       <Group gap="0.35rem" mb="0.9rem" style={{ flexWrap: 'wrap' }}>
        {project.tags.slice(0, 4).map(tag => (
          <Badge key={tag} variant="light" color="brand" style={{ fontSize: '0.65rem', padding: '0.18rem 0.52rem', border: '1px solid rgba(9,79,183,0.2)' }}>{tag}</Badge>
        ))}
        {project.tags.length > 4 && (
          <Badge variant="default" style={{ fontSize: '0.65rem', padding: '0.18rem 0.52rem', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.06)' }}>+{project.tags.length - 4}</Badge>
        )}
      </Group>

       <Group justify="space-between" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
        <Box onClick={e => e.stopPropagation()}>
          <LinkButtons links={project.links} size="sm" />
        </Box>
        <Text size="xs" style={{ color: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          View details
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Text>
      </Group>
    </Box>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { ref, visible } = useReveal(0.08)

  const featuredProjects = projects.filter(p => p.featured)
  const listProjects = activeCategory === 'All'
    ? projects.filter(p => !p.featured)
    : projects.filter(p => p.category === activeCategory)

   useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  return (
    <Box component="section" id="projects" style={{ background: '#09090f', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgb(9,79,183), transparent)' }} />

      <Box ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
         <Box style={{ marginBottom: '3.5rem', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <Text size="xs" c="brand.6" style={{ textTransform: 'uppercase', letterSpacing: '3.5px', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>What I've built</Text>
          <Title order={2} style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.05 }}>Projects</Title>
          <Group gap="0.75rem" mt="1rem">
            <Box style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, rgb(9,79,183), rgb(100,170,255))', borderRadius: '2px' }} />
            <Box style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgb(9,79,183)', boxShadow: '0 0 10px rgba(9,79,183,0.8)' }} />
          </Group>
        </Box>

         {activeCategory === 'All' && (
          <Box style={{ marginBottom: '3rem', opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.1s' }}>
            <Box style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '2.5px', fontWeight: 600, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Box component="span" style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
              Featured Projects
              <Box component="span" style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
            </Box>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="1.25rem">
              {featuredProjects.map((p, i) => (
                <ProjectCard key={p.name} project={p} featured index={i} visible={visible} onOpen={setSelectedProject} />
              ))}
            </SimpleGrid>
          </Box>
        )}

         <Group gap="0.6rem" mb="2rem" style={{ flexWrap: 'wrap', opacity: visible ? 1 : 0, transition: 'opacity 0.7s ease 0.2s' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? classes.filterBtnActive : classes.filterBtn}
            >
              {cat}
            </button>
          ))}
        </Group>

         <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="1.1rem">
          {listProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} visible={visible} onOpen={setSelectedProject} />
          ))}
        </SimpleGrid>
      </Box>

       <Modal
        opened={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        size="lg"
        centered
        styles={{
          content: {
            background: 'linear-gradient(145deg, #0e0e18 0%, #090910 100%)',
            border: '1px solid rgba(9,79,183,0.3)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(9,79,183,0.12)',
          },
          overlay: {
            backdropFilter: 'blur(10px)',
            background: 'rgba(0,0,0,0.82)',
          },
          header: {
            background: 'transparent',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            paddingBottom: '1.25rem',
          },
          body: {
            padding: '1.75rem',
          },
          title: {
            color: '#fff',
            fontWeight: 900,
            fontSize: '1.4rem',
            letterSpacing: '-0.5px',
          },
          close: {
            color: 'rgba(255,255,255,0.5)',
          },
        }}
        title={selectedProject ? (
          <Group gap="1.1rem" align="center">
            <Box style={{ width: '58px', height: '58px', borderRadius: '14px', background: 'rgba(9,79,183,0.2)', border: '1px solid rgba(9,79,183,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
              {selectedProject.icon}
            </Box>
            <Box>
              <Text style={{ color: '#fff', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-0.5px', marginBottom: '0.25rem' }}>{selectedProject.name}</Text>
              <Badge variant="default" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', border: '1px solid rgba(255,255,255,0.06)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {selectedProject.category}
              </Badge>
            </Box>
          </Group>
        ) : null}
      >
        {selectedProject && (
          <Box>
            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', lineHeight: 1.85, marginBottom: '1.75rem' }}>
              {selectedProject.longDescription || selectedProject.description}
            </Text>

             <Box mb="1.75rem">
              <Text style={{ color: 'rgb(9,79,183)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.9rem' }}>Key Features</Text>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="0.6rem">
                {selectedProject.highlights.map(h => (
                  <Group key={h} align="flex-start" gap="0.6rem" style={{ padding: '0.7rem 0.85rem', background: 'rgba(9,79,183,0.07)', border: '1px solid rgba(9,79,183,0.15)', borderRadius: '8px' }}>
                    <Text component="span" style={{ color: 'rgb(9,79,183)', flexShrink: 0, marginTop: '1px', fontSize: '0.8rem' }}>▸</Text>
                    <Text style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.5 }}>{h}</Text>
                  </Group>
                ))}
              </SimpleGrid>
            </Box>

             <Box mb="1.75rem">
              <Text style={{ color: 'rgb(9,79,183)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.9rem' }}>Tech Stack</Text>
              <Group gap="0.5rem" style={{ flexWrap: 'wrap' }}>
                {selectedProject.tags.map(tag => (
                  <Badge key={tag} variant="light" color="brand" style={{ fontSize: '0.78rem', padding: '0.3rem 0.75rem', border: '1px solid rgba(9,79,183,0.25)' }}>{tag}</Badge>
                ))}
              </Group>
            </Box>

             {selectedProject.links.length > 0 && (
              <Box>
                <Text style={{ color: 'rgb(9,79,183)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.9rem' }}>Live Links</Text>
                <LinkButtons links={selectedProject.links} size="md" />
              </Box>
            )}
          </Box>
        )}
      </Modal>
    </Box>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  primaryColor: 'brand',
  primaryShade: 6,

  colors: {
    brand: [
      '#e8f0fc',
      '#c5d8f7',
      '#9bbdf2',
      '#64aaf0',
      '#3d8de8',
      '#1e64d7',
      '#094fb7',
      '#0842a0',
      '#073588',
      '#052870',
    ],
  },

  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
  headings: {
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    fontWeight: '900',
  },

  other: {
    bgPrimary: '#07070b',
    bgSecondary: '#09090f',
    bgFooter: '#050508',
    blue: 'rgb(9,79,183)',
    blueAccent: 'rgb(100,170,255)',
  },

  components: {
    TextInput: {
      styles: {
        input: {
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#fff',
          borderRadius: '8px',
          fontSize: '0.88rem',
        },
        label: {
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.35)',
          textTransform: 'uppercase' as const,
          letterSpacing: '1.2px',
          fontWeight: '600',
          marginBottom: '0.45rem',
        },
      },
    },
    Textarea: {
      styles: {
        input: {
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#fff',
          borderRadius: '8px',
          fontSize: '0.88rem',
          resize: 'vertical' as const,
        },
        label: {
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.35)',
          textTransform: 'uppercase' as const,
          letterSpacing: '1.2px',
          fontWeight: '600',
          marginBottom: '0.45rem',
        },
      },
    },
    Badge: {
      styles: {
        root: {
          fontSize: '0.68rem',
          padding: '0.2rem 0.6rem',
          fontWeight: '600',
          textTransform: 'uppercase' as const,
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
)

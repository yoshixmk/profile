'use client'

import { ParticlesProvider } from '@tsparticles/react'
import type { ReactNode } from 'react'
import { loadFull } from 'tsparticles'

const engineInit = async (engine: Parameters<typeof loadFull>[0]) => {
    await loadFull(engine)
}

interface ParticlesSetupProps {
    children: ReactNode
}

export function ParticlesSetup({ children }: ParticlesSetupProps) {
    return (
        <ParticlesProvider init={engineInit}>
            {children}
        </ParticlesProvider>
    )
}

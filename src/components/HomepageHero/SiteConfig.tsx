'use client'

import { useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import { useTheme } from 'nextra-theme-docs'
import { useLocale } from '../../hooks'
import { cn } from '../../lib/utils'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { Section } from './Section'

export const StackItem = ({
  className,
}: {
  className: string
},
) => {
  return (
    <div className={cn(
      'mx-6 size-[50px]',
      'text-neutral-800 dark:text-neutral-100',
      'transition-all duration-300 transform opacity-75',
      'hover:scale-125 hover:opacity-100',
      className,
    )}
    >
    </div>
  )
}

export function SiteConfig() {
  const { t } = useLocale()
  const { resolvedTheme } = useTheme()
  const featureList = t('featureList')

  const processedFeatureList = useMemo(() => {
    const icons = [
      'icon-[material-symbols--rocket-launch-outline]',
      'icon-[icon-park-outline--international]',
      'icon-[nonicons--typescript-16]',
      'icon-[carbon--face-satisfied] hover:icon-[carbon--face-wink]',
      'icon-[teenyicons--tailwind-outline]',
      'icon-[tabler--calendar-code]',
      'icon-[carbon--color-palette]',
      'icon-[carbon--ibm-cloud-transit-gateway]',
      'icon-[carbon--flash]',
    ]
    return featureList.map((item: any, index: number) => {
      return {
        ...item,
        icon: <span className={icons[index] || icons[0]}></span>,
      }
    })
  }, [featureList])

  return (
    <div className="flex flex-col gap-12 w-full pt-8">
      <Section
        title="Tech Stack"
        titleProps={{
          disabledAnimation: false,
        }}
      >
        <div className="flex justify-center w-full max-w-7xl h-[80px] my-[30px]">
          <Marquee
            pauseOnHover
            autoFill
            gradient
            direction="right"
            gradientColor={resolvedTheme === 'dark' ? '#09090b' : '#ffffff'}
            speed={60}
          >
            <StackItem className="icon-[akar-icons--nextjs-fill]" />
            <StackItem className="icon-[simple-icons--react]" />
            <StackItem className="icon-[simple-icons--tailwindcss]" />
            <StackItem className="icon-[teenyicons--framer-outline]" />
            <StackItem className="icon-[simple-icons--shadcnui]" />
            <StackItem className="icon-[simple-icons--typescript]" />
            <StackItem className="icon-[fa6-brands--sass]" />
            <StackItem className="icon-[teenyicons--eslint-outline]" />
            <StackItem className="icon-[simple-icons--postcss]" />
            <StackItem className="icon-[simple-icons--nextra]" />
            <StackItem className="icon-[line-md--iconify1]" />
          </Marquee>
        </div>
      </Section>
      <Section
        title="Core Capabilities"
        description={t('featuresDesc')}
      >
        <BentoGrid className="max-w-4xl mx-auto">
          {processedFeatureList.map((item: any, i: number) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-linear-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center text-4xl">{item.icon}</div>}
              icon={<span className="text-neutral-500" />}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </Section>
    </div>
  )
}

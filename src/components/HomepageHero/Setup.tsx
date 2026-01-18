'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '../../hooks'
import { cn } from '../../lib/utils'
import { MotionWrapperFlash } from '../MotionWrapper/Flash'
import { Button } from '../ui/button'
import { FlipWords } from '../ui/flip-words'
import { SparklesCore } from '../ui/sparkles'
import { TypewriterEffect } from '../ui/typewriter-effect'
import styles from './SetupHero.module.css'

interface Props {
}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale()

  return (
    <div className={cn(styles.container, 'min-h-[70vh] flex flex-col items-center justify-center overflow-hidden rounded-md')}>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className={cn(styles.content, 'relative z-20')}>
        <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href="https://github.com/yoshixmk/profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('badgeTitle')}
          </a>
        </div>
        <div className={styles.imageContainer}>
          <MotionWrapperFlash
            disabledAnimation={false}
            className="flex items-center gap-6"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-conic-to-r from-cyan-400 via-light-blue-500 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="./img/blog/yoshixmk.jpg"
                alt="Yoshihiro Ueki"
                width={120}
                height={120}
                className="relative rounded-full border-2 border-white/20 hover:scale-105 transition-all duration-500 shadow-2xl z-10"
              />
              <div className="absolute -bottom-2 -right-4 w-18 h-18 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl z-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src="./img/blog/usagi.jpg"
                  alt="Usagi"
                  width={72}
                  height={72}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </MotionWrapperFlash>
        </div>

        <h1 className={cn(styles.headline, 'mt-8')}>
          <TypewriterEffect
            words={[
              { text: t('firstName') },
              { text: t('lastName'), className: 'text-blue-500 dark:text-blue-400' },
            ]}
          />
        </h1>

        <Link
          href={`/${currentLocale}/site-structure`}
          className={clsx([
            'bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg',
            'dark:bg-linear-to-r dark:from-green-400 dark:via-teal-500 dark:to-cyan-500 dark:text-white',
            'text-sm mt-4 inline-block px-4 py-1.5 rounded-full font-medium',
            'hover:scale-105 transition-transform duration-1500',
            'animate-pulse',
            '[animation-duration:3s]',
          ])}
          dangerouslySetInnerHTML={{
            __html: t('company', {
              companyName: `<span>${t('companyName')}</span>`,
            }),
          }}
        />

        <div className={clsx([
          styles.subtitle,
          'text-neutral-600 dark:text-neutral-400 mt-6 max-w-2xl mx-auto',
        ])}
        >
          {t('professionalLang')}
          <FlipWords
            words={[
              'JavaScript',
              'TypeScript',
              'Ruby',
              'Kotlin',
              'Scala',
              'Java',
            ]}
          />
          <p className="mt-4 text-sm opacity-80">
            {t('heroSubtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
          <Button
            asChild
            size="lg"
            className="font-bold group px-8 rounded-full shadow-lg"
          >
            <Link
              href={`/${currentLocale}/introduction`}
            >
              {t('getStarted')}
              <span className="w-[18px] ml-2 transition-transform group-hover:translate-x-1 icon-[mingcute--arrow-right-fill]"></span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="font-bold group px-8 rounded-full border border-neutral-200 dark:border-neutral-800"
          >
            <Link
              href="https://github.com/yoshixmk"
              target="_blank"
            >
              GitHub Profile
              <span className="ml-2 icon-[mingcute--github-line]"></span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

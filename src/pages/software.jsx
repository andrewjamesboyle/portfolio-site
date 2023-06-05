import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCollabo from '@/images/photos/collabo.jpg'
import image16 from '@/images/photos/image-16.jpg'
import imageMDS from '@/images/photos/mds.jpg'
import portrait from '@/images/portrait.jpg'

const projects = [
  {
    name: 'Collabo',
    description: 'GitHub for musicians. Built with HTML, CSS, and vanilla JS.',
    link: { href: 'http://collabomusic.co', label: 'collabomusic.co' },
    logo: logoCollabo,
  },
  {
    name: 'BikeBuddy',
    description:
      'A ChatGPT powered digital marketing assistant trained specifically on the mountain biking industry. Built for Mountain View Cycles as a marketing automation tool. Built with React, Node, GraphQL, and RedwoodJS.',
    link: {
      href: 'https://github.com/contentgpt/marketing-app-backend',
      label: 'github.com',
    },
    logo: image16,
  },
  {
    name: 'Gimbal Simulator',
    description:
      'A testing program built for Hood Tech Vision. The goal was to use Flight Simulator telemetry data to update the gimbal position at a rate of 33Hz. Built using C#, .NET, and WPF.',
    link: { href: 'https://hoodtechvision.com/', label: 'hoodtechvision.com' },
    logo: imageMDS,
  },
  {
    name: 'Tic Tac Toe AI',
    description:
      'An exploration into adversarial search algorithm, minimax, which simulates intelligent play against the computer. Built with Python.',
    link: {
      href: 'https://github.com/andrewjamesboyle/tictactoe-ai',
      label: 'github.com',
    },
    logo: portrait,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Software() {
  return (
    <>
      <Head>
        <title>Software - Andrew Boyle</title>
        <meta name="description" content="Things I’ve built." />
      </Head>
      <SimpleLayout
        title="Things I’ve built."
        intro="My tech stack includes React, Node, Typescript, C#, .NET, GraphQL, NextJS, RedwoodJS, and SQL."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  class="rounded-full"
                  className="h-8 w-8 rounded-full"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

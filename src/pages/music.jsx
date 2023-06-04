import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Music - Andrew Boyle</title>
        <meta
          name="description"
          content="I’ve performed all around the world and recorded with grammy winning artists."
        />
      </Head>
      <SimpleLayout
        title="Things I've played drums on."
        intro="I’ve performed in 40 countries around the world and recorded with Grammy winning artists."
      >
        <div className="space-y-20">
          <SpeakingSection title="Discography">
            <Appearance
              href="https://open.spotify.com/album/1euK7GgNJmBprlctpGtDC5?si=RZ3DR35zQiWY97ATauncxg"
              title="M83"
              description="DSVII"
              event="Ambient, Electronic"
              cta="Listen Now"
            />
            <Appearance
              href="https://open.spotify.com/album/2z7AL98OyCVQzcchbAjxFu?si=ZwmuZNk2RQ6uibu2_ReYbg"
              title="M83"
              description="Knife + Heart"
              event="Original Motion Picture Soundtrack"
              cta="Listen Now"
            />
            <Appearance
              href="https://open.spotify.com/album/5esKuNHrW1dCjuQXplQITe?si=nf5C3xgxTRipDJqWPAnwgg"
              title="JMSN"
              description="It is."
              event="R&B"
              cta="Listen Now"
            />
            <Appearance
              href="https://open.spotify.com/album/6XeECOSp47GN1kMUya6LUJ?si=8tN38XYQSnKqRiUb6jgOHA"
              title="JMSN"
              description="Whatever Makes U Happy"
              event="R&B"
              cta="Listen Now"
            />
            <Appearance
              href="https://open.spotify.com/album/2dQToDZlmZ6uTKQzMoXndM?si=tcl93TM-Tuy-B8Rgwj9Otw"
              title="JMSN"
              description="Live North Hollywood"
              event="R&B"
              cta="Listen Now"
            />

            <Appearance
              href="https://open.spotify.com/album/4CrQWvsePu1IpWxmew3UsG?si=Myt571JmRLGW3SewvY4T2g"
              title="Evan Zee"
              description="Story"
              event="Singer Songwriter"
              cta="Listen Now"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}

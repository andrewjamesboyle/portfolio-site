import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import clsx from 'clsx'

import image1 from '@/images/photos/image-1.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image6 from '@/images/photos/image-6.jpg'
import image7 from '@/images/photos/image-7.jpg'
import image8 from '@/images/photos/image-8.jpg'
import image9 from '@/images/photos/image-9.jpg'
import image10 from '@/images/photos/image-10.jpg'
import image11 from '@/images/photos/image-11.jpg'
import image12 from '@/images/photos/image-12.jpg'
import image13 from '@/images/photos/image-13.jpg'
import image14 from '@/images/photos/image-14.jpg'
import image15 from '@/images/photos/image-15.jpg'

function Photos() {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image11, image13, image12].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image15, image6, image7, image8].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image9, image10, image4, image14].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Photography - Andrew Boyle</title>
        <meta name="description" content="Photos I've shot." />
      </Head>
      <SimpleLayout
        title="Things I've shot."
        intro="I mostly shoot landscapes, my daughter, mountain bikes, and my daughter."
      ></SimpleLayout>
      <Photos />
    </>
  )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vladislav Yakovlev</title>
      </Head>

      <div className="flex flex-col items-center justify-between min-h-screen bg-zinc-300">
        <div className="h-10" />
        <div className="flex items-center flex-col sm:flex-row gap-8 px-8 py-14 border-b-8 border-b-green-700 bg-white shadow-xl">
          <div className="flex-none">
            <Image
              className="block rounded-full"
              src="/photo.jpg"
              alt="Vladislav's photo"
              width="100"
              height="100"
            />
          </div>
          <div className="text-center sm:text-right space-y-1">
            <div>Vladislav Yakovlev</div>
            <div>Senior Frontend Developer</div>
            <div className="inline-flex space-x-2 justify-end">
              <a className="underline" href="https://github.com/vlad-yakovlev">
                GitHub
              </a>
              <span>{'\u2022'}</span>
              <a
                className="underline"
                href="https://www.linkedin.com/in/vlad-yakovlev/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="h-10">
          <a className="underline text-zinc-700" href="/double">
            Play Double
          </a>
        </div>
      </div>
    </>
  )
}

export default Home

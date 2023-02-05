import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Photo from '../assets/photo.jpg'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vladislav Yakovlev</title>
      </Head>

      <div className="flex flex-col items-center justify-between min-h-full">
        <div className="h-16" />
        <div className="flex items-center flex-col sm:flex-row gap-x-10 gap-y-12 px-10 py-16 border-b-8 border-b-green-700 bg-white shadow-xl">
          <div className="flex-none flex">
            <Image
              className="rounded-full"
              src={Photo}
              alt="Vladislav's photo"
              width="120"
              height="120"
            />
          </div>
          <div className="text-center sm:text-right space-y-2">
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
        <div className="flex max-sm:flex-col items-center justify-center gap-5 py-5">
          <a
            className="underline text-zinc-700"
            href="https://expense.vlad-yakovlev.dev/"
          >
            Count Expenses
          </a>
          <a
            className="underline text-zinc-700"
            href="https://double.vlad-yakovlev.dev/"
          >
            Play Double
          </a>
          <a
            className="underline text-zinc-700"
            href="https://wave-simulation.vlad-yakovlev.dev/"
          >
            Simulate Waves
          </a>
        </div>
      </div>
    </>
  )
}

export default Home

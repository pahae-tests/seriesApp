import React from 'react'
import Link from 'next/link';
import { series } from '@/constants/series';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()

    return (
        <main className='bg-black min-h-screen p-10'>

            <h1 className='text-white text-4xl font-bold text-center mb-10'>
                TV Série
            </h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {
                    series.map((serie, index) => (
                        <div
                            key={index}
                            className='bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 hover:scale-105 duration-300 group'
                        >

                            <div className='overflow-hidden'>
                                <img
                                    src={serie.image}
                                    alt={serie.title}
                                    className='w-full h-72 object-cover group-hover:scale-110 duration-300'
                                />
                            </div>

                            <div className='p-5 flex flex-col gap-4'>

                                <h2 className='text-white text-2xl font-bold'>
                                    {serie.title}
                                </h2>

                                <button onClick={() => router.push(`/serie?id=${serie.id}`)} className='bg-purple-600 hover:bg-purple-800 duration-300 text-white font-bold py-3 rounded-xl cursor-pointer'>
                                    Watch
                                </button>

                            </div>

                        </div>
                    ))
                }

            </div>

        </main>
    )
}

export default Index
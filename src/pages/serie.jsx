import React from "react";
import { useRouter } from "next/router";
import { series } from '@/constants/series';

const SeriePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const serie = series.find((s) => s.id == id);

    if (!serie) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Serie not found
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white p-10">
            <div className="max-w-4xl mx-auto flex flex-row gap-8">

                <div className="flex flex-col gap-6 w-1/2">
                    <h1 className="text-4xl font-bold">{serie.title}</h1>

                    <img
                        src={serie.image}
                        alt={serie.title}
                        className="w-full h-[500px] object-cover rounded-2xl border border-zinc-700"
                    />
                </div>

                <div className="flex flex-col gap-6 justify-center w-1/2">
                    <p className="text-zinc-300 text-lg leading-relaxed">
                        {serie.description || "No description available for this series."}
                    </p>

                    <button
                        onClick={() => router.back()}
                        className="bg-purple-600 hover:bg-purple-800 transition px-6 py-3 rounded-xl font-bold w-fit"
                    >
                        Go Back
                    </button>
                </div>

            </div>
        </main>
    );
};

export default SeriePage;
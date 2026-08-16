function CounterCard({ number, title }) {
    return (
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center hover:-translate-y-3 transition duration-500">

            <h2 className="text-5xl font-black text-cyan-400">
                {number}
            </h2>

            <p className="mt-3 text-gray-400">
                {title}
            </p>

        </div>
    );
}

export default CounterCard;
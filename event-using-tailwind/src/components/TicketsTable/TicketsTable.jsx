const TicketsTable = () => {
    return (
        <div>
            <h2 className="mt-20">Tickets</h2>
            <table className="mt-5 table w-full border border-zinc-500 border-collapse">
                <thead className="text-lg font-bold">
                    <td className="border border-zinc-500 p-3">Tickets</td>
                    <td className="border border-zinc-500 p-3">Price</td>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-zinc-500 py-2 px-3">
                            Single day ticket
                        </td>
                        <td className="border border-zinc-500 py-2 px-3">
                            30€
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-zinc-500 py-2 px-3">
                            7 day ticket
                        </td>
                        <td className="border border-zinc-500 py-2 px-3">
                            100€
                        </td>
                    </tr>
                </tbody>
                <caption className="caption-bottom">
                    <p className="text-sm">Once they're gone, they're gone!</p>
                </caption>
            </table>
        </div>
    )
}

export default TicketsTable;
const Table = (props) => {
    const { heads } = props
    return(
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        { heads.map( (head) => {
                            return(
                                <th key = {head} scope="col" className="py-3" >
                                    { head }
                                </th>
                            )}
                        )}
                    </tr>
                </thead>
                <tbody>
                    {props.children} 
                </tbody>
        </table>
        </div>
    )
}

const TableRow = (props) => {
    return(
        <tr className="bg-white border-b">
           {props.children}   
        </tr>
    )
}


export { Table, TableRow }

import Link from 'next/link';

const AllForms = () => {
    const formList = [
        {name: 'Your Details', description: '-', completed: true, path: '/yourdetails'},
        {name: 'University/Institute', description: '-', completed: true, path: '/uni'},
        {name: 'Head of Institution', description: '-', completed: true, path: '/hoi'},
        {name: 'Affiliation', description: '-', completed: true, path: '/affiliation'},
        {name: 'RTI & Appellant', description: '-', completed: true, path: '/rti'},
        {name: 'Non-teaching staff', description: '-', completed: true, path: '/ntstaff'},
        {name: 'Library', description: '-', completed: false, path: '/library'},
        {name: 'Facilities', description: '-', completed: false, path: '/facilities'},
        {name: 'Certificate', description: '-', completed: false, path: '/certificates'},
    ];
    return (
        <table className="w-full">
            <tr>
                <th className="w-20">Name</th> 
                <th className="w-96">Description</th>
                <th>Status</th>
            </tr>
            {formList.map((formItem) => (
                <tr className="font-bold">
                    <td><Link href={formItem.path}>{formItem.name}</Link></td>
                    <td className="text-center">{formItem.description}</td>
                    <td className="flex justify-center text-white">
                    {formItem.completed ? 
                        <span className="bg-green-500 rounded py-1 px-3">Completed</span>
                        : <span className="bg-red-500 rounded py-1 px-3">Incomplete</span>}
                    </td>
                </tr>
            ))}
        </table>
    )
}

export default AllForms;
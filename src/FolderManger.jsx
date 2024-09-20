
import { useState } from "react";
import { HiFolderOpen } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi2";
import { HiMiniChevronRight } from "react-icons/hi2";


const FolderManger = () => {
    const folders = [
        {
            name: 'Home', folders: [
                {
                    name: 'Movies',
                    folders: [
                        {
                            name: 'Action', folders: [
                                {
                                    name: '2000s',
                                    folders: [{ name: 'Speed.mp4', }, { name: 'map.shp' }, { name: 'School' }]
                                },
                                { name: '2010s' }]
                        },
                        { name: 'Comedy', folders: [{ name: '2000s' },] }
                    ]
                },
                { name: 'Music', folders: [{ name: 'Rock' }, { name: 'Adele' }] },
                { name: 'Pictures' },
                { name: 'Documents' },
                { name: 'Passwords.txt' }
            ]
        }

    ]
    return (
        <div className='bg-gray-100  w-screen h-screen pt-11'>
            <ul className="my-1.5 mx-auto">
                <li className="">
                    <ul className="">
                        {folders.map((folder) => (
                            <Folder folder={folder} key={folder.name} />
                        ))}

                    </ul>
                </li>
            </ul>

        </div>
    )
}

function Folder({ folder }) {
    const folderRegex = /^[^\\/?%*:|"<>\.]+$/;
    const [isOpen, setIsOpen] = useState(false)
    return (
        <li className="my-1.5" >
            <span className="flex items-center gap-1.5" >
                {folderRegex.test(folder.name) ?
                    (
                        <>
                            {folder?.folders && <button onClick={() => setIsOpen((pre) => !pre)}>
                                <HiMiniChevronRight className={`size-4 ${isOpen == false ? '' : 'rotate-90'}`} />
                            </button>}
                            <HiFolderOpen className={`text-blue-500 size-6 ${folder?.folders ? '' : 'ml-[22px]'}`} />
                        </>
                    )
                    :
                    (<HiDocumentText className='text-gray-500 size-6 ml-[22px]' />)
                }
                {folder.name}
            </span>
            {isOpen &&
                <ul className="pl-6">
                    {folder.folders?.map((folder) => (
                        <Folder folder={folder} key={folder.name} />
                    ))}
                </ul>
            }

        </li >
    )
}

export default FolderManger
